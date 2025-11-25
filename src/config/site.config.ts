export const siteConfig = {
    company: {
        name: 'Ez2Fix',
        legalName: 'Ez2Fix LLC',
        tagline: 'Professional Garage Door Repair & Installation in Northern New Jersey',
        domain: 'ez2fixllc.com',
    },
    contact: {
        phone: '(201) 554-6769',
        phoneRaw: '2015546769',
        email: 'ez2fixllc@gmail.com',
        license: '#13VH13553300',
    },
    coverage: {
        primaryHub: 'Northern New Jersey',
        counties: ['Essex County', 'Bergen County', 'Hudson County', 'Passaic County', 'Morris County'],
        stateAbbr: 'NJ',
        stateFull: 'New Jersey',
    },
    social: {
        facebook: '', // TODO: Add Facebook URL
        googleBusiness: '', // TODO: Add Google Business Profile URL
    },
    businessHours: {
        weekdays: 'Mon-Fri: 8am-8pm',
        weekends: 'Sat-Sun: 9am-6pm',
        emergency: 'Emergency: 24/7 Available',
    },
    trustSignals: {
        yearsInBusiness: 11,
        customersServed: '12,000+',
        rating: '5.0',
        reviewCount: '145+',
        warranty: '10-Year Warranty',
        licensed: true,
    },

    googleBusinessProfile: {
        placeId: '', // TODO: Add Ez2Fix Google Place ID
        name: 'Ez2Fix Garage Door Service',
    },
    sabMode: true, // Service Area Business mode (no street address display)
    attribution: {
        agency: 'Gett Marketing',
        url: 'https://gettmarketing.com',
    },
} as const;

export type SiteConfig = typeof siteConfig;
