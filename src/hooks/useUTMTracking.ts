import { useEffect, useState } from 'react';

interface UTMParams {
    utm_source?: string;
    utm_medium?: string;
    utm_campaign?: string;
    utm_content?: string;
    utm_term?: string;
}

interface TrackingData {
    utmParams: UTMParams;
    referrer: string;
    landingPage: string;
    sessionStart: string;
}

export const useUTMTracking = (): TrackingData => {
    const [trackingData, setTrackingData] = useState<TrackingData>({
        utmParams: {},
        referrer: '',
        landingPage: '',
        sessionStart: new Date().toISOString(),
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Get UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const utmParams: UTMParams = {
            utm_source: urlParams.get('utm_source') || undefined,
            utm_medium: urlParams.get('utm_medium') || undefined,
            utm_campaign: urlParams.get('utm_campaign') || undefined,
            utm_content: urlParams.get('utm_content') || undefined,
            utm_term: urlParams.get('utm_term') || undefined,
        };

        // Check sessionStorage for existing UTM data
        const storedUTM = sessionStorage.getItem('ez2fix_utm');
        const storedReferrer = sessionStorage.getItem('ez2fix_referrer');
        const storedLanding = sessionStorage.getItem('ez2fix_landing');
        const storedSessionStart = sessionStorage.getItem('ez2fix_session_start');

        // Only set new UTM if not already in session (first landing)
        const finalUTM = storedUTM ? JSON.parse(storedUTM) : utmParams;
        const finalReferrer = storedReferrer || document.referrer;
        const finalLanding = storedLanding || window.location.href;
        const finalSessionStart = storedSessionStart || new Date().toISOString();

        // Store in sessionStorage
        if (!storedUTM) sessionStorage.setItem('ez2fix_utm', JSON.stringify(finalUTM));
        if (!storedReferrer) sessionStorage.setItem('ez2fix_referrer', finalReferrer);
        if (!storedLanding) sessionStorage.setItem('ez2fix_landing', finalLanding);
        if (!storedSessionStart) sessionStorage.setItem('ez2fix_session_start', finalSessionStart);

        setTrackingData({
            utmParams: finalUTM,
            referrer: finalReferrer,
            landingPage: finalLanding,
            sessionStart: finalSessionStart,
        });
    }, []);

    return trackingData;
};

// Helper to determine traffic source
export const getTrafficSource = (utmParams: UTMParams, referrer: string): string => {
    if (utmParams.utm_source) {
        if (utmParams.utm_medium === 'cpc' || utmParams.utm_medium === 'ppc') {
            return '💰 Paid';
        }
        return `🔗 ${utmParams.utm_source}`;
    }

    if (!referrer || referrer === '') {
        return '🔗 Direct';
    }

    const domain = new URL(referrer).hostname;
    if (domain.includes('google')) return '🔍 Google Organic';
    if (domain.includes('bing')) return '🔍 Bing Organic';
    if (domain.includes('facebook')) return '📘 Facebook';
    if (domain.includes('instagram')) return '📸 Instagram';

    return `🔗 Referral (${domain})`;
};
