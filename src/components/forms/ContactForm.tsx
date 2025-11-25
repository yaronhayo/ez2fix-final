import { useState, useId } from 'react';
import {
    CheckCircleIcon,
    PaperAirplaneIcon,
    ArrowPathIcon
} from '@heroicons/react/24/solid';

interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    consent: boolean;
    recaptchaToken?: string;
    fax?: string; // Honeypot
}

export default function ContactForm() {
    const formId = useId();
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
        consent: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const updateField = (field: keyof ContactFormData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
        });
    };

    const validate = (): boolean => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Valid email is required';
        }
        if (!formData.phone.trim() || !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
            newErrors.phone = 'Valid 10-digit phone number is required';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';
        if (!formData.consent) newErrors.consent = 'You must agree to the privacy policy';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Get reCAPTCHA token
            let token = '';
            try {
                if (typeof window !== 'undefined' && (window as any).grecaptcha) {
                    token = await (window as any).grecaptcha.execute(
                        import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
                        { action: 'contact' }
                    );
                }
            } catch (error) {
                console.warn('reCAPTCHA failed:', error);
            }

            const response = await fetch('/api/contact.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, recaptchaToken: token }),
            });

            const data = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                if (data.token) {
                    window.location.href = `/thank-you?token=${data.token}`;
                } else {
                    // Fallback if no token (shouldn't happen with updated API)
                    setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        message: '',
                        consent: false,
                    });
                }
            } else {
                setSubmitStatus('error');
                setErrors({ submit: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus('error');
            setErrors({ submit: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Removed inline success message block as we redirect now

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor={`${formId}-name`} className="block text-sm font-medium text-dark-700 mb-1">
                    Full Name
                </label>
                <input
                    type="text"
                    id={`${formId}-name`}
                    value={formData.name}
                    onChange={(e) => updateField('name', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-400 outline-none transition-all ${errors.name ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            <div>
                <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-dark-700 mb-1">
                    Email Address
                </label>
                <input
                    type="email"
                    id={`${formId}-email`}
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-400 outline-none transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
                <label htmlFor={`${formId}-phone`} className="block text-sm font-medium text-dark-700 mb-1">
                    Phone Number
                </label>
                <input
                    type="tel"
                    id={`${formId}-phone`}
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-400 outline-none transition-all ${errors.phone ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="(555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div>
                <label htmlFor={`${formId}-message`} className="block text-sm font-medium text-dark-700 mb-1">
                    Message
                </label>
                <textarea
                    id={`${formId}-message`}
                    rows={4}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-gold-400 outline-none transition-all ${errors.message ? 'border-red-500' : 'border-gray-300'
                        }`}
                    placeholder="How can we help you?"
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
            </div>

            <div className="flex items-start">
                <input
                    type="checkbox"
                    id={`${formId}-consent`}
                    checked={formData.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 text-gold-500 border-gray-300 rounded focus:ring-gold-400"
                />
                <label htmlFor={`${formId}-consent`} className="ml-2 text-sm text-gray-600">
                    I agree to the <a href="/privacy-policy" className="text-gold-600 hover:underline">Privacy Policy</a> and consent to being contacted.
                </label>
            </div>
            {errors.consent && <p className="text-red-500 text-xs ml-6">{errors.consent}</p>}

            {/* Honeypot */}
            <div className="opacity-0 absolute top-0 left-0 h-0 w-0 overflow-hidden z-[-1]">
                <input
                    type="text"
                    name="fax"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.fax || ''}
                    onChange={(e) => updateField('fax', e.target.value)}
                />
            </div>

            {errors.submit && (
                <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                    {errors.submit}
                </div>
            )}

            <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-dark-900 bg-gold-500 hover:bg-gold-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold-500 transition-all ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
            >
                {isSubmitting ? (
                    <>
                        <ArrowPathIcon className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                    </>
                ) : (
                    <>
                        <PaperAirplaneIcon className="w-5 h-5 mr-2" />
                        Send Message
                    </>
                )}
            </button>
        </form>
    );
}
