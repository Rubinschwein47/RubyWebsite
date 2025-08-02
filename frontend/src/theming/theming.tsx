import {ConfigProvider, theme, ThemeConfig} from 'antd';
import React, {ReactNode, useEffect, useLayoutEffect} from 'react';
import './theming.css';
import {useInfoStore} from '../store';

const white = '#fff';
const black = '#000';
const headerHeight = 64;
const borderRadius = 6;
const whiteBackground = '#f5f5f5';
const blackBackground = '#001529';

const cssVariables: { variable: string, themes: { [key: string]: string } }[] = [
    {
        variable: '--icon-color',
        themes: {
            dark: '#fff',
            light: '#000',
        }
    },
    {
        variable: '--bg-icon-color',
        themes: {
            dark: '255,255,255,0.45',
            light: '0,0,0,0.2',
        }
    },
    {
        variable: '--header-color',
        themes: {
            dark: '#9e59cb',
            light: '#eea9f3',
        }
    },
    {
        variable: '--container-color',
        themes: {
            dark: '#022b50',
            light: '#fff',
        }
    },
    {
        variable: '--border-radius',
        themes: {
            dark: borderRadius + 'px',
            light: borderRadius + 'px',
        }
    },
    {
        variable: "--highlight-orange",
        themes: {
            dark: "#98320c",
            light: "#f39f6a",
        }
    },
    {
        variable: "--highlight-blue",
        themes: {
            dark: "#123a9e",
            light: "#65a1e8",
        }
    }, {
        variable: "--highlight-light-blue",
        themes: {
            dark: "#2366aa",
            light: "#80bfdc",
        }
    },
    {
        variable: "--highlight-purple",
        themes: {
            dark: "#621287",
            light: "#d16de8",
        }
    },
    {
        variable: "--highlight-grey",
        themes: {
            dark: "#494949",
            light: "#d5d5d5",
        }
    },
    {
        variable: "--highlight-green",
        themes: {
            dark: "#086e20",
            light: "#7ced73",
        }
    },
    {
        variable: "--highlight-yellow",
        themes: {
            dark: "#b6a010",
            light: "#ffde73",
        }
    },
    {
        variable: "--highlight-red",
        themes: {
            dark: "#a5022d",
            light: "#f33854",
        }
    },
    {
        variable: "--background-color",
        themes: {
            dark: blackBackground,
            light: whiteBackground
        }
    }
]

const blackTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // Seed Token
        colorPrimary: '#c422ec',
        borderRadius: borderRadius,
        colorBgBase: blackBackground,
        colorTextHeading: white,
        // colorBgHeader: '#2a2744',
        // Alias Token
        colorBgContainer: '#163C5EFF',
        colorIcon: white,
        colorIconHover: white,
        colorTextBase: white,
        colorText: white,
        // colorSplit: primary

    },
    components: {
        Layout: {
            headerHeight: headerHeight,
            headerColor: '#2a2744',
        },
    },
};
const whiteTheme: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        // Seed Token
        colorPrimary: "#f873be",
        colorPrimaryText: black,
        borderRadius: borderRadius,
        colorBgBase: whiteBackground,
        colorTextHeading: black,
        // Alias Token
        colorBgContainer: '#f3f3f3',
        colorIcon: black,
        colorIconHover: black,
        colorTextBase: black,
        colorText: black,
        colorSplit: "#f873be"
    },
    components: {
        Layout: {
            headerHeight: headerHeight
        },
    },
};

const antThemes: { [key: string]: ThemeConfig } = {
    dark: blackTheme,
    light: whiteTheme
}

export default function Theming({children}: { children: ReactNode }) {
    const theme = useInfoStore((state) => state.theme);
    const storeInitialized = useInfoStore((state) => state.initialized);
    const initializeStore = useInfoStore((state) => state.initialize);

    cssVariables.forEach((it) => {
        document.documentElement.style.setProperty(it.variable, it.themes[theme]);
    });

    const setLanguage = useInfoStore((state) => state.setLanguage);
    const setRatio = useInfoStore((state) => state.refreshIsMobile);
    useEffect(() => {
        console.log(navigator.languages);
        if (!storeInitialized) {
            initializeStore();
        }
    })
    useLayoutEffect(() => {
        function updateSize() {
            setRatio();
        }

        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });

    return (
        <ConfigProvider
            theme={antThemes[theme]}
        >
            {children}
        </ConfigProvider>
    );
}