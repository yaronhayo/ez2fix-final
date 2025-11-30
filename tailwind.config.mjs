/** @type {import('tailwindcss').Config} */
// Force rebuild
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        screens: {
            'xs': '375px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                // Primary Brand Colors (Gold)
                gold: {
                    50: '#FDFBF7',
                    100: '#F5EDD6',
                    200: '#E8D9A8',
                    300: '#DBC57A',
                    400: '#D4AF37', // PRIMARY BRAND
                    500: '#C19F2F',
                    600: '#8B6200', // Darkened for better contrast (WCAG AAA compliant)
                    700: '#8B6200', // TEXT GOLD (Updated from #8B7324)
                    800: '#6E5C1D',
                    900: '#4A3D13',
                },
                // Secondary Brand Colors (Dark Brown)
                dark: {
                    50: '#F7F6F5',
                    100: '#E8E6E3',
                    200: '#C9C5BF',
                    300: '#A9A39B',
                    400: '#6B6459',
                    500: '#3D3529', // SECONDARY BRAND
                    600: '#2D271E',
                    700: '#1D1912', // PRIMARY TEXT
                    800: '#151209',
                    900: '#0D0A06',
                },
                // Neutral Colors (Cream/Beige)
                cream: {
                    50: '#FEFCF5',
                    100: '#FFF8E1', // LIGHT BEIGE (from old site)
                    200: '#F5F5DC', // CLASSIC BEIGE (from old site)
                    300: '#EBEBD0',
                    400: '#DCDCC8',
                    500: '#C8C8B0',
                },
            },
            fontFamily: {
                sans: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
            },
            fontSize: {
                'xs': ['clamp(0.75rem, 0.5vw + 0.7rem, 0.875rem)', { lineHeight: '1.5' }],
                'sm': ['clamp(0.875rem, 0.75vw + 0.8rem, 1rem)', { lineHeight: '1.5' }],
                'base': ['clamp(1rem, 1vw + 0.9rem, 1.125rem)', { lineHeight: '1.625' }],
                'lg': ['clamp(1.125rem, 1.25vw + 1rem, 1.25rem)', { lineHeight: '1.5' }],
                'xl': ['clamp(1.25rem, 1.5vw + 1.1rem, 1.5rem)', { lineHeight: '1.375' }],
                '2xl': ['clamp(1.5rem, 2vw + 1.2rem, 2rem)', { lineHeight: '1.375' }],
                '3xl': ['clamp(1.875rem, 2.5vw + 1.5rem, 2.5rem)', { lineHeight: '1.25' }],
                '4xl': ['clamp(2.25rem, 3vw + 1.75rem, 3rem)', { lineHeight: '1.25' }],
                '5xl': ['clamp(3rem, 4vw + 2rem, 4rem)', { lineHeight: '1.25' }],
            },
            borderRadius: {
                'sm': '0.25rem',
                'base': '0.5rem',
                'lg': '0.75rem',
                'xl': '1rem',
                '2xl': '1.5rem',
            },
            boxShadow: {
                'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'base': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                'gold': '0 0 0 3px rgba(212, 175, 55, 0.3)',
            },
            animation: {
                'fade-in': 'fadeIn 0.3s ease-in',
                'slide-up': 'slideUp 0.4s ease-out',
                'slide-down': 'slideDown 0.4s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
