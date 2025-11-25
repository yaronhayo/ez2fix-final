import { useEffect, useState } from 'react';
import { UAParser } from 'ua-parser-js';

interface DeviceInfo {
    deviceType: string; // Mobile, Tablet, Desktop
    browser: string;
    browserVersion: string;
    os: string;
    osVersion: string;
    userAgent: string;
}

export const useDeviceDetection = (): DeviceInfo => {
    const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
        deviceType: 'Desktop',
        browser: 'Unknown',
        browserVersion: '',
        os: 'Unknown',
        osVersion: '',
        userAgent: '',
    });

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const parser = new UAParser();
        const result = parser.getResult();

        const deviceType = result.device.type
            ? result.device.type.charAt(0).toUpperCase() + result.device.type.slice(1)
            : 'Desktop';

        setDeviceInfo({
            deviceType,
            browser: result.browser.name || 'Unknown',
            browserVersion: result.browser.version || '',
            os: result.os.name || 'Unknown',
            osVersion: result.os.version || '',
            userAgent: navigator.userAgent,
        });
    }, []);

    return deviceInfo;
};

// Helper to get device emoji
export const getDeviceEmoji = (deviceType: string): string => {
    if (deviceType === 'Mobile') return '📱';
    if (deviceType === 'Tablet') return '📊';
    return '💻';
};
