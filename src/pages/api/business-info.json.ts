import type { APIRoute } from 'astro';
import { siteConfig } from '@config/site.config';

// Force this to render on-demand
export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
    // Only allow GET requests
    if (request.method !== 'GET') {
        return new Response(
            JSON.stringify({ error: 'Method not allowed' }),
            {
                status: 405,
                headers: {
                    'Content-Type': 'application/json',
                    'Allow': 'GET'
                }
            }
        );
    }

    // Return business info from config
    const businessInfo = {
        name: siteConfig.company.name,
        legalName: siteConfig.company.legalName,
        phone: siteConfig.contact.phone,
        phoneRaw: siteConfig.contact.phoneRaw,
        email: siteConfig.contact.email,
        license: siteConfig.contact.license,
        serviceAreas: {
            primaryHub: siteConfig.coverage.primaryHub,
            counties: siteConfig.coverage.counties
        },
        hours: {
            weekdays: siteConfig.businessHours.weekdays,
            weekends: siteConfig.businessHours.weekends,
            emergency: siteConfig.businessHours.emergency
        },
        social: siteConfig.social,
        schema: {
            url: siteConfig.company.domain,
            description: siteConfig.company.tagline
        }
    };

    return new Response(
        JSON.stringify(businessInfo, null, 2),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                // Cache for 1 hour on client, 24 hours on CDN
                'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=43200',
                // CORS - allow requests from our domain only
                'Access-Control-Allow-Origin': `https://${siteConfig.company.domain}`,
                'Access-Control-Allow-Methods': 'GET',
                // Security headers
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY'
            }
        }
    );
};
