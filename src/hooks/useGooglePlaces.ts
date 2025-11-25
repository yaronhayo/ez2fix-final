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

    useEffect(() => {
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
                return;
            }

            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places&loading=async`;
            script.async = true;
            script.defer = true;
            script.onload = () => setScriptLoaded(true);
            document.head.appendChild(script);
        };

        loadScript();
    }, []);

    useEffect(() => {
        if (!scriptLoaded || !inputRef.current) return;

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

    return { inputRef, scriptLoaded };
}
