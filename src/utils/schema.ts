import { siteConfig } from '@config/site.config';

interface SchemaOrganization {
    '@context': string;
    '@type': string;
    name: string;
    legalName: string;
    url: string;
    logo: string;
    description: string;
    telephone: string;
    email: string;
    address?: {
        '@type': string;
        addressLocality: string;
        addressRegion: string;
        addressCountry: string;
    };
    areaServed: Array<{
        '@type': string;
        name: string;
    }>;
    priceRange?: string;
    openingHoursSpecification: Array<{
        '@type': string;
        dayOfWeek: string[];
        opens: string;
        closes: string;
    }>;
    sameAs?: string[];
    aggregateRating?: {
        '@type': string;
        ratingValue: string;
        reviewCount: number;
    };
    knowsAbout?: string[];
    hasOfferCatalog?: {
        '@type': 'OfferCatalog';
        name: string;
        itemListElement: Array<{
            '@type': 'Offer';
            itemOffered: {
                '@type': 'Service';
                name: string;
            };
        }>;
    };
}

export function generateLocalBusinessSchema(cities?: string[]): SchemaOrganization {
    const schema: SchemaOrganization = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: siteConfig.company.name,
        legalName: siteConfig.company.legalName,
        url: `https://${siteConfig.company.domain}`,
        logo: `https://${siteConfig.company.domain}/images/logos/ez2fix-logo.png`,
        description: siteConfig.company.tagline,
        telephone: siteConfig.contact.phone,
        email: siteConfig.contact.email,
        areaServed: (cities || [
            'Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Clifton', 'Hackensack',
            'Passaic', 'Bayonne', 'Union City', 'East Orange', 'Montclair', 'Fair Lawn',
            'Cedar Grove', 'Little Falls', 'West Caldwell', 'North Caldwell'
        ]).map(city => ({
            '@type': 'City',
            name: `${city}, ${siteConfig.coverage.stateAbbr}`,
        })),
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '20:00',
            },
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Saturday', 'Sunday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
        priceRange: '$$',
        knowsAbout: [
            'Garage Door Repair',
            'Garage Door Installation',
            'Garage Door Opener Repair',
            'Spring Replacement',
            'Commercial Garage Doors',
        ],
        hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Garage Door Services',
            itemListElement: [
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Garage Door Repair',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Spring Replacement',
                    },
                },
                {
                    '@type': 'Offer',
                    itemOffered: {
                        '@type': 'Service',
                        name: 'Opener Installation',
                    },
                },
            ],
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: siteConfig.trustSignals.rating,
            reviewCount: 500,
        },
    };

    // Don't include street address for SAB compliance
    if (!siteConfig.sabMode) {
        schema.address = {
            '@type': 'PostalAddress',
            addressLocality: siteConfig.coverage.primaryHub,
            addressRegion: siteConfig.coverage.stateAbbr,
            addressCountry: 'US',
        };
    }

    if (siteConfig.social.facebook || siteConfig.social.googleBusiness) {
        schema.sameAs = [
            siteConfig.social.facebook,
            siteConfig.social.googleBusiness,
        ].filter(Boolean) as string[];
    }

    return schema;
}

export function generateServiceSchema(service: {
    name: string;
    description: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: service.name,
        description: service.description,
        provider: {
            '@type': 'LocalBusiness',
            name: siteConfig.company.legalName,
            telephone: siteConfig.contact.phone,
        },
        areaServed: {
            '@type': 'State',
            name: siteConfig.coverage.stateFull,
        },
        url: service.url,
    };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

export function generateReviewSchema(review: {
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating: number;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Review',
        author: {
            '@type': 'Person',
            name: review.author,
        },
        datePublished: review.datePublished,
        reviewBody: review.reviewBody,
        reviewRating: {
            '@type': 'Rating',
            ratingValue: review.reviewRating,
            bestRating: '5',
            worstRating: '1',
        },
        itemReviewed: {
            '@type': 'LocalBusiness',
            name: siteConfig.company.legalName,
            image: `https://${siteConfig.company.domain}/images/logos/ez2fix-logo.png`,
            telephone: siteConfig.contact.phone,
            address: {
                '@type': 'PostalAddress',
                addressLocality: siteConfig.coverage.primaryHub,
                addressRegion: siteConfig.coverage.stateAbbr,
                addressCountry: 'US',
            },
        },
    };
}

export function generateArticleSchema(article: {
    title: string;
    description: string;
    publishDate: string;
    modifiedDate?: string;
    image: string;
    url: string;
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: article.image,
        datePublished: article.publishDate,
        dateModified: article.modifiedDate || article.publishDate,
        author: {
            '@type': 'Organization',
            name: siteConfig.company.legalName,
        },
        publisher: {
            '@type': 'Organization',
            name: siteConfig.company.legalName,
            logo: {
                '@type': 'ImageObject',
                url: `https://${siteConfig.company.domain}/images/logos/ez2fix-logo.png`,
            },
        },
        url: article.url,
    };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
    };
}
