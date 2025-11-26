import { useState, useEffect, useId } from 'react';
import { useGooglePlaces } from '../hooks/useGooglePlaces';
import { useUTMTracking } from '../hooks/useUTMTracking';
import { useDeviceDetection } from '../hooks/useDeviceDetection';

const SERVICES = [
    { id: 'emergency-repair', name: 'Emergency Repair' },
    { id: 'spring-repair', name: 'Spring Repair' },
    { id: 'opener-installation', name: 'Opener Installation' },
    { id: 'door-installation', name: 'Door Installation' },
    { id: 'opener-repair', name: 'Opener Repair' },
    { id: 'cable-repair', name: 'Cable Repair' },
    { id: 'panel-replacement', name: 'Panel Replacement' },
    { id: 'track-repair', name: 'Track Repair' },
    { id: 'commercial', name: 'Commercial Garage Door' },
    { id: 'other', name: 'Other' },
];

interface BookingData {
    service: string;
    serviceOther?: string;
    comments?: string;

    addressFull: string;
    street: string;
    city: string;
    state: string;
    zipCode: string;
    aptNumber?: string;
    gateCode?: string;

    name: string;
    phone: string;
    email?: string;

    consentToContact: boolean;
    agreedToTerms: boolean;

    recaptchaToken?: string;
    fax?: string; // Honeypot

    // Tracking data
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmTerm?: string;
    referrer?: string;
    landingPage?: string;
    deviceType?: string;
    browser?: string;
    os?: string;
    userAgent?: string;
    sessionStart?: string;
    formStartTime?: string;
}

export default function BookingForm() {
    // Generate unique ID for this form instance (stable across server/client)
    const formId = useId();

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState<Partial<BookingData>>({
        consentToContact: false,
        agreedToTerms: false,
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);


    // Tracking hooks
    const trackingData = useUTMTracking();
    const deviceInfo = useDeviceDetection();

    // Capture tracking data on mount
    useEffect(() => {
        const formStartTime = new Date().toISOString();

        setFormData((prev) => ({
            ...prev,
            utmSource: trackingData.utmParams.utm_source,
            utmMedium: trackingData.utmParams.utm_medium,
            utmCampaign: trackingData.utmParams.utm_campaign,
            utmContent: trackingData.utmParams.utm_content,
            utmTerm: trackingData.utmParams.utm_term,
            referrer: trackingData.referrer,
            landingPage: trackingData.landingPage,
            deviceType: deviceInfo.deviceType,
            browser: `${deviceInfo.browser} ${deviceInfo.browserVersion}`,
            os: `${deviceInfo.os} ${deviceInfo.osVersion}`,
            userAgent: deviceInfo.userAgent,
            sessionStart: trackingData.sessionStart,
            formStartTime,
        }));
    }, [trackingData, deviceInfo]);

    const updateField = (field: keyof BookingData, value: any) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        setErrors((prev) => {
            const newErrors = { ...prev };
            delete newErrors[field];
            return newErrors;
        });
    };

    const { inputRef } = useGooglePlaces({
        onPlaceSelect: (address) => {
            setFormData((prev) => ({
                ...prev,
                addressFull: `${address.street}, ${address.city}, ${address.state} ${address.zipCode}`,
                street: address.street,
                city: address.city,
                state: address.state || 'NJ',
                zipCode: address.zipCode,
            }));
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors.address;
                return newErrors;
            });
        },
    });

    const validateStep = (step: number): boolean => {
        const newErrors: Record<string, string> = {};

        switch (step) {
            case 0: // Service Selection
                if (!formData.service) {
                    newErrors.service = 'Please select a service';
                }
                if (formData.service === 'other' && !formData.serviceOther?.trim()) {
                    newErrors.serviceOther = 'Please describe the service you need';
                }
                break;

            case 1: // Address
                if (!formData.street?.trim()) {
                    newErrors.address = 'Please select an address from the dropdown';
                }
                if (!formData.city?.trim()) {
                    newErrors.city = 'City is required';
                }
                if (!formData.zipCode || !/^\d{5}$/.test(formData.zipCode)) {
                    newErrors.zipCode = 'Valid 5-digit ZIP code is required';
                }
                break;

            case 2: // Contact
                if (!formData.name?.trim()) {
                    newErrors.name = 'Name is required';
                }
                if (!formData.phone || !/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ''))) {
                    newErrors.phone = 'Valid 10-digit phone number is required';
                }
                if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    newErrors.email = 'Valid email address required';
                }
                if (!formData.consentToContact) {
                    newErrors.consentToContact = 'Please agree to be contacted';
                }
                if (!formData.agreedToTerms) {
                    newErrors.agreedToTerms = 'Please agree to Privacy Policy and Terms';
                }
                break;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const nextStep = () => {
        if (validateStep(currentStep)) {
            setCurrentStep((prev) => prev + 1);
        }
    };

    const prevStep = () => {
        setCurrentStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async () => {
        // console.log('Form submission started', formData);

        if (!validateStep(currentStep)) {
            // console.log('Validation failed for step', currentStep);
            return;
        }

        setIsSubmitting(true);
        try {
            // Get reCAPTCHA token
            let token = '';
            try {
                if (typeof window !== 'undefined' && (window as any).grecaptcha) {
                    token = await (window as any).grecaptcha.execute(
                        import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY,
                        { action: 'booking' }
                    );
                    // console.log('reCAPTCHA token obtained');
                } else {
                    console.warn('reCAPTCHA not loaded, proceeding without token');
                }
            } catch (recaptchaError) {
                console.error('reCAPTCHA error:', recaptchaError);
                // Continue without reCAPTCHA if it fails
            }



            // console.log('Sending request to /api/booking');
            const response = await fetch('/api/booking.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...formData, recaptchaToken: token }),
            });


            if (response.ok) {
                const data = await response.json();
                // console.log('Booking submitted successfully, token:', data.token);

                // Ensure we have a token before redirecting
                if (data.token) {
                    // console.log('Redirecting to thank-you page with token');
                    window.location.href = `/thank-you?token=${data.token}`;
                } else {
                    console.error('No token received from server');
                    setErrors({ submit: 'Submission successful but redirect failed. Please contact us directly.' });
                }
            } else {
                const data = await response.json();
                console.error('Server error:', data);
                setErrors({ submit: data.message || 'Submission failed. Please try again.' });
            }
        } catch (error) {
            console.error('Network error:', error);
            setErrors({ submit: 'Network error. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    const serviceName = formData.service
        ? SERVICES.find((s) => s.id === formData.service)?.name || ''
        : '';

    // Check if current step is valid for proceeding
    const canProceedFromStep = (step: number): boolean => {
        switch (step) {
            case 0: // Service
                if (!formData.service) return false;
                if (formData.service === 'other' && !formData.serviceOther?.trim()) return false;
                return true;

            case 1: // Address
                if (!formData.street?.trim()) return false;
                if (!formData.city?.trim()) return false;
                if (!formData.zipCode || !/^\d{5}$/.test(formData.zipCode)) return false;
                return true;

            case 2: // Contact
                if (!formData.name?.trim()) return false;
                if (!formData.phone || !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) return false;
                if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return false;
                if (!formData.consentToContact) return false;
                if (!formData.agreedToTerms) return false;
                return true;

            default:
                return false;
        }
    };

    return (
        <div className="w-full">
            {/* Progress Bar */}
            <div className="mb-6">
                <div className="flex justify-between mb-2">
                    {['Service', 'Address', 'Contact'].map((step, index) => (
                        <div
                            key={step}
                            className={`flex-1 text-center text-xs font-medium ${index <= currentStep ? 'text-gold-400' : 'text-cream-400/50'
                                }`}
                        >
                            {step}
                        </div>
                    ))}
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gold-400 transition-all duration-300"
                        style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
                    />
                </div>
            </div>

            {/* Step Content */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-cream-300">
                {currentStep === 0 && (
                    <div>
                        <h2 className="text-lg font-bold text-dark-900 mb-4">Select Your Service</h2>

                        <div className="mb-6">
                            <label htmlFor={`${formId}-service`} className="block text-sm font-semibold text-dark-900 mb-2">
                                What service do you need? *
                            </label>
                            <select
                                id={`${formId}-service`}
                                name="service"
                                value={formData.service || ''}
                                onChange={(e) => updateField('service', e.target.value)}
                                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 ${errors.service ? 'border-red-500' : 'border-cream-300'
                                    }`}
                            >
                                <option value="">Choose a service...</option>
                                {SERVICES.map((service) => (
                                    <option key={service.id} value={service.id}>
                                        {service.name}
                                    </option>
                                ))}
                            </select>
                            {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service}</p>}
                        </div>

                        {formData.service === 'other' && (
                            <div className="mb-6">
                                <label htmlFor={`${formId}-serviceOther`} className="block text-sm font-semibold text-dark-900 mb-2">
                                    Please describe the service you need *
                                </label>
                                <input
                                    type="text"
                                    id={`${formId}-serviceOther`}
                                    name="serviceOther"
                                    value={formData.serviceOther || ''}
                                    onChange={(e) => updateField('serviceOther', e.target.value)}
                                    placeholder="e.g., Custom garage door design"
                                    className={`w-full px-4 py-3 border-2 rounded-lg ${errors.serviceOther ? 'border-red-500' : 'border-cream-300'
                                        }`}
                                />
                                {errors.serviceOther && <p className="text-red-600 text-sm mt-1">{errors.serviceOther}</p>}
                            </div>
                        )}

                        {formData.service && (
                            <div className="mb-6 animate-fadeIn">
                                <label htmlFor={`${formId}-comments`} className="block text-sm font-semibold text-dark-900 mb-2">
                                    Additional details (optional)
                                </label>
                                <textarea
                                    id={`${formId}-comments`}
                                    name="comments"
                                    rows={4}
                                    value={formData.comments || ''}
                                    onChange={(e) => updateField('comments', e.target.value)}
                                    placeholder="Any additional information that might help us serve you better..."
                                    className="w-full px-4 py-3 border-2 border-cream-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400"
                                />
                            </div>
                        )}
                    </div>
                )}

                {currentStep === 1 && (
                    <div>
                        <h2 className="text-lg font-bold text-dark-900 mb-4">Service Address</h2>

                        {/* Address */}
                        <div className="mb-4">
                            <label htmlFor={`${formId}-address`} className="block text-sm font-semibold text-dark-900 mb-2">
                                Service Address *
                            </label>
                            <input
                                type="text"
                                id={`${formId}-address`}
                                name="address"
                                ref={inputRef}
                                placeholder="Start typing your address..."
                                autoComplete="street-address"
                                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-400 ${errors.address ? 'border-red-500' : 'border-cream-300'
                                    }`}
                            />
                            {errors.address && <p className="text-red-600 text-sm mt-1">{errors.address}</p>}
                            <p className="text-sm text-dark-500 mt-1">
                                Start typing and select from the dropdown
                            </p>
                        </div>

                        {/* Address fields (read-only after selection) */}
                        {formData.street && (
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div>
                                    <label htmlFor={`${formId}-street`} className="block text-xs font-medium text-dark-700 mb-1">Street</label>
                                    <input
                                        type="text"
                                        id={`${formId}-street`}
                                        name="street"
                                        value={formData.street}
                                        readOnly
                                        className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-city`} className="block text-xs font-medium text-dark-700 mb-1">City</label>
                                    <input
                                        type="text"
                                        id={`${formId}-city`}
                                        name="city"
                                        value={formData.city}
                                        readOnly
                                        className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-state`} className="block text-xs font-medium text-dark-700 mb-1">State</label>
                                    <input
                                        type="text"
                                        id={`${formId}-state`}
                                        name="state"
                                        value={formData.state || 'NJ'}
                                        readOnly
                                        className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor={`${formId}-zipCode`} className="block text-xs font-medium text-dark-700 mb-1">ZIP Code</label>
                                    <input
                                        type="text"
                                        id={`${formId}-zipCode`}
                                        name="zipCode"
                                        value={formData.zipCode}
                                        readOnly
                                        className="w-full px-3 py-2 bg-cream-100 border border-cream-300 rounded-lg text-dark-600 text-sm"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Optional fields */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor={`${formId}-aptNumber`} className="block text-sm font-medium text-dark-700 mb-1">
                                    Apt # (optional)
                                </label>
                                <input
                                    type="text"
                                    id={`${formId}-aptNumber`}
                                    name="aptNumber"
                                    value={formData.aptNumber || ''}
                                    onChange={(e) => updateField('aptNumber', e.target.value)}
                                    placeholder="Apt, Unit"
                                    autoComplete="address-line2"
                                    className="w-full px-3 py-2 border-2 border-cream-300 rounded-lg text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor={`${formId}-gateCode`} className="block text-sm font-medium text-dark-700 mb-1">
                                    Gate Code (optional)
                                </label>
                                <input
                                    type="text"
                                    id={`${formId}-gateCode`}
                                    name="gateCode"
                                    value={formData.gateCode || ''}
                                    onChange={(e) => updateField('gateCode', e.target.value)}
                                    placeholder="Gate code"
                                    className="w-full px-3 py-2 border-2 border-cream-300 rounded-lg text-sm"
                                />
                            </div>
                        </div>
                    </div>
                )}

                {currentStep === 2 && (
                    <div>
                        <h2 className="text-lg font-bold text-dark-900 mb-4">Contact Information</h2>

                        <div className="mb-4">
                            <label htmlFor={`${formId}-name`} className="block text-sm font-semibold text-dark-900 mb-2">
                                Your Name *
                            </label>
                            <input
                                type="text"
                                id={`${formId}-name`}
                                name="name"
                                value={formData.name || ''}
                                onChange={(e) => updateField('name', e.target.value)}
                                placeholder="John Smith"
                                autoComplete="name"
                                className={`w-full px-4 py-3 border-2 rounded-lg ${errors.name ? 'border-red-500' : 'border-cream-300'
                                    }`}
                            />
                            {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-4">
                            <label htmlFor={`${formId}-phone`} className="block text-sm font-semibold text-dark-900 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id={`${formId}-phone`}
                                name="phone"
                                value={formData.phone || ''}
                                onChange={(e) => updateField('phone', e.target.value)}
                                placeholder="(201) 555-1234"
                                autoComplete="tel"
                                className={`w-full px-4 py-3 border-2 rounded-lg ${errors.phone ? 'border-red-500' : 'border-cream-300'
                                    }`}
                            />
                            {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        <div className="mb-6">
                            <label htmlFor={`${formId}-email`} className="block text-sm font-medium text-dark-700 mb-2">
                                Email (optional)
                            </label>
                            <input
                                type="email"
                                id={`${formId}-email`}
                                name="email"
                                value={formData.email || ''}
                                onChange={(e) => updateField('email', e.target.value)}
                                placeholder="your@email.com"
                                autoComplete="email"
                                className={`w-full px-4 py-3 border-2 rounded-lg ${errors.email ? 'border-red-500' : 'border-cream-300'
                                    }`}
                            />
                            {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Consent */}
                        <div className="space-y-3 mb-4">
                            <label htmlFor={`${formId}-consentToContact`} className="flex items-start">
                                <input
                                    type="checkbox"
                                    id={`${formId}-consentToContact`}
                                    name="consentToContact"
                                    checked={formData.consentToContact || false}
                                    onChange={(e) => updateField('consentToContact', e.target.checked)}
                                    className="w-5 h-5 text-gold-500 mt-0.5 rounded focus:ring-gold-400"
                                />
                                <span className="ml-3 text-sm text-dark-700">
                                    I agree to be contacted via phone, email, or SMS regarding my service request *
                                </span>
                            </label>
                            {errors.consentToContact && (
                                <p className="text-red-600 text-sm ml-8">{errors.consentToContact}</p>
                            )}

                            <label htmlFor={`${formId}-agreedToTerms`} className="flex items-start">
                                <input
                                    type="checkbox"
                                    id={`${formId}-agreedToTerms`}
                                    name="agreedToTerms"
                                    checked={formData.agreedToTerms || false}
                                    onChange={(e) => updateField('agreedToTerms', e.target.checked)}
                                    className="w-5 h-5 text-gold-500 mt-0.5 rounded focus:ring-gold-400"
                                />
                                <span className="ml-3 text-sm text-dark-700">
                                    I agree to the{' '}
                                    <a
                                        href="/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold-600 hover:text-gold-700 underline"
                                    >
                                        Privacy Policy
                                    </a>{' '}
                                    and{' '}
                                    <a
                                        href="/terms-of-service"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gold-600 hover:text-gold-700 underline"
                                    >
                                        Terms & Conditions
                                    </a>{' '}
                                    *
                                </span>
                            </label>
                            {errors.agreedToTerms && (
                                <p className="text-red-600 text-sm ml-8">{errors.agreedToTerms}</p>
                            )}
                        </div>

                        <div className="bg-cream-100 border border-gold-200 rounded-lg p-4 text-sm text-dark-600 mb-4">
                            🔒 We respect your privacy. Your information will not be sold or shared with third parties.
                        </div>

                        {errors.submit && (
                            <div className="bg-red-50 border-2 border-red-500 text-red-700 px-4 py-3 rounded-lg mb-4 font-semibold">
                                ⚠️ {errors.submit}
                            </div>
                        )}
                    </div>
                )}

                {/* Honeypot Field */}
                <div className="opacity-0 absolute top-0 left-0 h-0 w-0 overflow-hidden z-[-1]">
                    <label htmlFor={`${formId}-fax`}>Fax Number</label>
                    <input
                        type="text"
                        id={`${formId}-fax`}
                        name="fax"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.fax || ''}
                        onChange={(e) => updateField('fax', e.target.value)}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t border-cream-300">
                    <button
                        type="button"
                        id={`${formId}-prev-btn`}
                        name="prev-btn"
                        onClick={prevStep}
                        disabled={currentStep === 0}
                        className={`px-6 py-3 rounded-lg font-semibold transition-colors ${currentStep === 0
                            ? 'bg-cream-200 text-dark-400 cursor-not-allowed'
                            : 'bg-cream-300 text-dark-900 hover:bg-cream-400'
                            }`}
                    >
                        Previous
                    </button>

                    {currentStep < 2 ? (
                        <button
                            type="button"
                            id={`${formId}-next-btn`}
                            name="next-btn"
                            onClick={nextStep}
                            className="px-6 py-3 rounded-lg font-semibold transition-colors bg-gold-500 text-dark-900 hover:bg-gold-600"
                        >
                            Continue
                        </button>
                    ) : (
                        <button
                            type="button"
                            id={`${formId}-submit-btn`}
                            name="submit-btn"
                            onClick={handleSubmit}
                            disabled={isSubmitting}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${isSubmitting || !canProceedFromStep(2)
                                ? 'bg-dark-300 text-dark-500 cursor-not-allowed'
                                : 'bg-gold-500 text-dark-900 hover:bg-gold-600'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-dark-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                'Submit Request'
                            )}
                        </button>
                    )}
                </div>
            </div>


        </div>
    );
}
