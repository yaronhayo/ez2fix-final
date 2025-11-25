import { z } from 'zod';

// Booking Form Validation Schema
export const bookingSchema = z.object({
    // Step 1: Service Selection
    service: z.string().min(1, 'Please select a service'),

    // Step 2: Location
    address: z.string().min(5, 'Please enter a valid address'),
    city: z.string().min(1, 'City is required'),
    zipCode: z.string().regex(/^\d{5}$/, 'Please enter a valid ZIP code'),

    // Step 3: Contact Info
    name: z.string().min(2, 'Please enter your full name'),
    phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number'),
    email: z.string().email('Please enter a valid email address'),

    // Step 4: Scheduling (Optional)
    preferredDate: z.string().optional(),
    preferredTime: z.enum(['morning', 'afternoon', 'evening', 'flexible']).optional(),

    // Step 5: Additional Details (Optional)
    message: z.string().max(1000, 'Message must be less than 1000 characters').optional(),

    // Hidden fields
    honeypot: z.string().max(0, 'Invalid submission').optional(),
    recaptchaToken: z.string().optional(),
    source: z.string().optional(),
});

export type BookingFormData = z.infer<typeof bookingSchema>;

// Contact Form Validation Schema
export const contactSchema = z.object({
    name: z.string().min(2, 'Please enter your full name'),
    email: z.string().email('Please enter a valid email address'),
    phone: z.string().regex(/^\(\d{3}\) \d{3}-\d{4}$/, 'Please enter a valid phone number'),
    subject: z.string().min(3, 'Please enter a subject'),
    message: z.string().min(10, 'Please enter a message'),
    honeypot: z.string().max(0, 'Invalid submission').optional(),
    recaptchaToken: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;

// Email Validation
export const emailSchema = z.object({
    to: z.string().email(),
    from: z.string().email(),
    subject: z.string().min(1),
    html: z.string().min(1),
});

// Helper: Format phone number
export function formatPhoneNumber(phone: string): string {
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
        return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
}

// Helper: Validate ZIP code is in service area
export const NJ_SERVICE_ZIPS = [
    // Newark
    '07101', '07102', '07103', '07104', '07105', '07106', '07107', '07108', '07112', '07114',
    // Jersey City
    '07302', '07304', '07305', '07306', '07307', '07310',
    // Paterson
    '07501', '07502', '07503', '07504', '07505', '07514', '07522', '07524',
    // Elizabeth
    '07201', '07202', '07206', '07208',
    // Clifton
    '07011', '07012', '07013', '07014',
    // Hackensack
    '07601', '07602',
    // Passaic
    '07055',
    // Bayonne
    '07002',
    // Union City
    '07087',
    // East Orange
    '07017', '07018', '07019',
    // Montclair
    '07042', '07043',
    // Fair Lawn
    '07410',
    // Cedar Grove
    '07009',
    // Little Falls
    '07424',
    // West Caldwell
    '07006',
    // North Caldwell
    '07006',
];

export function isServiceableZip(zip: string): boolean {
    return NJ_SERVICE_ZIPS.includes(zip);
}
