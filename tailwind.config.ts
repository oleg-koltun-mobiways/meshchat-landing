import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    theme: {
        extend: {
            boxShadow: {
                base: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                1: '0px 2px 4px 0px rgba(0, 0, 0, 0.12)',
                2: '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.30)',
                3: '0px 0px 2px 0px rgba(142, 61, 140, 0.16)',
                4: '0px 0px 2px 0px #A6A6A6 inset',
                5: '0px 1px 4px 1px rgba(0, 0, 0, 0.08)',
                6: '0 4px 20px rgba(0,0,0,0.2)',
            },
            colors: {
                'dark-text': '#1A253E',
                'light-primary': '#000000',
                'grad-btn': {
                    stop: {
                        1: '#27005D',
                        2: '#A6A9DF',
                        3: '#903E8E'
                    }
                },
                'grad-chat': {
                    stop: {
                        1: '#4C97C3',
                        2: '#6AC1EF',
                        3: '#BEF3FF',
                        4: '#67D7E4',
                        5: '#6AC1EF'
                    }
                },
                custom: {
                    white: {
                        1: '#F4FBFF',
                        2: '#FBFBFB',
                        3: '#FFF8FF'
                    },
                    gray: {
                        1: '#B3B3B3',
                        2: '#313132',
                        3: '#F2F2F2',
                        4: '#BDBDBD',
                        5: '#F5F5F5',
                        6: '#90A4AE',
                        7: '#EDECEF',
                        8: '#616161'
                    },
                    red: {
                        1: '#EF5350',
                        600: '#DC2626'
                    },
                    blue: {
                        1: '#509CC8'
                    },
                    black: {
                        1: '#1E1E1E',
                        2: '#0D0C0C'
                    },
                    mantis: {
                        100: '#E7F7E1'
                    },
                    pink: {
                        1: '#FFF6FF'
                    },
                    violet: {
                        1: '#8E3D8C',
                        2: '#903E8E',
                        3: '#BE5CBC',
                        50: '#FCF6FD',
                        300: '#E8BDEA',
                        500: '#C86CC9',
                        600: '#AC4DAB'
                    },
                    slate: {
                        700: '#334155',
                        800: '#1E293B'
                    }
                }
            },
            fontSize: {
                xxxs: ['6px', '8px'],
                xxs: ['10px', '12px'],
                xs: ['12px', '14px'],
                sm: ['14px', '20px'],
                base: ['14px', '22px'],
                xxl: [
                    '32px',
                    {
                        letterSpacing: '0.15px',
                        fontWeight: '800'
                    }
                ]
            },
            fontFamily: {
                sans: ['Inter', ...fontFamily.sans],
                code: ['"Cutive Mono"'],
                nunito: ['"Nunito"', 'sans-serif'],
            },
            borderRadius: {
                '4xl': '30px',
                '5xl': '34px'
            },
            backgroundImage: {
                'radial-gradient-1':
                    'radial-gradient(99.58% 85.45% at 80.7% 100%, #FFF8FF 0%, #FBFBFB 100%)',
                'radial-gradient-2':
                    'radial-gradient(76.85% 76.85% at 80.7% 100%, #FFF8FF 0%, #FBFBFB 100%)',
                'hero-pattern': 'linear-gradient(to right bottom, #8E3D8C, #EF5350)',
                'linear-btn-gradient':
                    'linear-gradient(to right, #27005D, #A6A9DF, #903E8E)',
                'linear-chat-gradient':
                    'linear-gradient(206deg, #4C97C3 0.12%, #6AC1EF 26.33%, #BEF3FF 40%, #67D7E4 46.95%, #6AC1EF 59.44%)'
            }
        }
    },
    plugins: []
};

export default config;
