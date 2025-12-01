import { useEffect, useRef, useState } from 'react';

interface AddressComponents {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

interface UseGooglePlacesProps {
    onPlaceSelect: (address: AddressComponents) => void;
}

declare global {
    interface Window {
        google: any;
    }
}

export function useGooglePlaces({ onPlaceSelect }: UseGooglePlacesProps) {
    const inputRef = useRef<HTMLInputElement>(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const loadScript = () => {
        if (window.google?.maps?.places) {
            setScriptLoaded(true);
            return;
        }

        // Check if script is already being loaded
        const existingScript = document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]');
        if (existingScript) {
            // Script exists, wait for it to load
            const checkLoaded = setInterval(() => {
                if (window.google?.maps?.places) {
                    setScriptLoaded(true);
                    clearInterval(checkLoaded);
                }
            }, 100);

            // Timeout after 10 seconds
            setTimeout(() => {
                clearInterval(checkLoaded);
                if (!window.google?.maps?.places) {
                    console.error('Google Maps API failed to load');
                }
            }, 10000);
            return;
        }

        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`;
        script.async = true;
        script.defer = true;

        // Use a polling mechanism instead of relying solely on onload
        script.onload = () => {
            // Double-check that the API is actually ready
            const checkReady = setInterval(() => {
                if (window.google?.maps?.places) {
                    setScriptLoaded(true);
                    clearInterval(checkReady);
                }
            }, 50);

            // Timeout after 5 seconds
            setTimeout(() => {
                clearInterval(checkReady);
                if (!window.google?.maps?.places) {
                    console.error('Google Maps Places API not available after script load');
                }
            }, 5000);
        };

        script.onerror = () => {
            console.error('Failed to load Google Maps script');
        };

        document.head.appendChild(script);
    };

    useEffect(() => {
        if (!scriptLoaded || !inputRef.current) return;

        // Additional safety check to ensure google.maps.places is actually available
        if (!window.google?.maps?.places?.Autocomplete) {
            console.warn('Google Maps Places API not yet available, waiting...');
            return;
        }

        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
            componentRestrictions: { country: 'us' },
            fields: ['address_components', 'formatted_address'],
            types: ['address'],
        });

        autocomplete.addListener('place_changed', () => {
            const place = autocomplete.getPlace();
            if (!place.address_components) return;

            let streetNumber = '';
            let route = '';
            let city = '';
            let state = '';
            let zipCode = '';

            for (const component of place.address_components) {
                const type = component.types[0];
                switch (type) {
                    case 'street_number':
                        streetNumber = component.long_name;
                        break;
                    case 'route':
                        route = component.short_name;
                        break;
                    case 'locality':
                        city = component.long_name;
                        break;
                    case 'administrative_area_level_1':
                        state = component.short_name;
                        break;
                    case 'postal_code':
                        zipCode = component.long_name;
                        break;
                }
            }

            onPlaceSelect({
                street: `${streetNumber} ${route}`.trim(),
                city,
                state,
                zipCode,
            });
        });
    }, [scriptLoaded, onPlaceSelect]);

    return { inputRef, scriptLoaded, loadScript };
}
