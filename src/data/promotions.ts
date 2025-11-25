export interface Promotion {
    id: string;
    title: string;
    description?: string;
    badgeText: string;
    variant: 'gold' | 'white' | 'green';
    active: boolean;
    locations: string[]; // 'hero', 'service-page', 'location-page', 'footer', 'booking'
    services?: string[]; // specific service slugs this applies to
    priority: number; // higher number = higher priority
}

export const PROMOTIONS: Promotion[] = [
    {
        id: 'free-estimates',
        title: 'Free On-Site Estimates',
        description: 'We come to you to diagnose the issue and provide a transparent quote before any work begins.',
        badgeText: 'Free Estimates',
        variant: 'gold',
        active: true,
        locations: ['hero', 'service-page', 'location-page', 'footer', 'booking'],
        priority: 100,
    },
    {
        id: 'senior-discount',
        title: '10% Senior Citizen Discount',
        description: 'Valid for customers 65+ with ID. Cannot be combined with other offers.',
        badgeText: '10% Senior Discount',
        variant: 'white',
        active: true,
        locations: ['hero', 'service-page', 'location-page', 'footer', 'booking'],
        priority: 90,
    },
    {
        id: 'door-installation-off',
        title: '$200 Off New Garage Door Installation',
        description: 'Valid on new garage door installations over $1,000. Cannot be combined with other offers.',
        badgeText: '$200 Off Installation',
        variant: 'gold',
        active: true,
        locations: ['hero', 'service-page', 'location-page', 'booking'],
        services: ['door-installation'],
        priority: 95,
    },
    {
        id: 'same-day-service',
        title: 'Same Day Service Available',
        description: 'Subject to availability. Call early to secure same-day appointment.',
        badgeText: 'Same Day Service',
        variant: 'white',
        active: true,
        locations: ['hero', 'service-page', 'location-page', 'booking'],
        priority: 80,
    },
];

export function getPromotionsForLocation(location: string, serviceSlug?: string): Promotion[] {
    return PROMOTIONS.filter((promo) => {
        if (!promo.active) return false;

        // Check if promo is enabled for this location
        if (!promo.locations.includes(location)) return false;

        // If serviceSlug is provided, check if promo is restricted to specific services
        if (serviceSlug && promo.services && !promo.services.includes(serviceSlug)) {
            return false;
        }

        // If promo is restricted to specific services but no serviceSlug provided (e.g. homepage),
        // we might still want to show it if it's high priority, or maybe not.
        // For now, if it has service restrictions, only show if service matches or if we're on a generic page like 'hero'
        if (promo.services && !serviceSlug && location !== 'hero' && location !== 'footer') {
            return false;
        }

        return true;
    }).sort((a, b) => b.priority - a.priority);
}

export function getPromotionById(id: string): Promotion | undefined {
    return PROMOTIONS.find(p => p.id === id);
}
