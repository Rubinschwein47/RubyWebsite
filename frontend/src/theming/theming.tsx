import {ConfigProvider, theme, ThemeConfig} from 'antd';
import React, {ReactNode, useEffect, useState} from 'react';
import './theming.css';
import { useInfoStore } from '../store';

const white = '#fff';
const black = '#000';
const headerHeight = 64;
const borderRadius = 6;
const primary = '#D364EC';

const cssVariables:{variable: string, themes: { [key: string]: string }}[] = [
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
            dark: borderRadius+'px',
            light: borderRadius+'px',
        }
    },
    {
        variable: "--highlight-orange",
        themes:{
            dark: "#98320c",
            light: "#f39f6a",
        }
    },
    {
        variable: "--highlight-blue",
        themes:{
            dark: "#123a9e",
            light: "#65a1e8",
        }
    },{
        variable: "--highlight-light-blue",
        themes:{
            dark: "#2366aa",
            light: "#80bfdc",
        }
    },
    {
        variable: "--highlight-purple",
        themes:{
            dark: "#621287",
            light: "#d16de8",
        }
    },
    {
        variable: "--highlight-grey",
        themes:{
            dark: "#494949",
            light: "#d5d5d5",
        }
    },
    {
        variable: "--highlight-green",
        themes:{
            dark: "#086e20",
            light: "#7ced73",
        }
    },
    {
        variable: "--highlight-yellow",
        themes:{
            dark: "#b6a010",
            light: "#ffde73",
        }
    }
]

const blackTheme: ThemeConfig = {
    algorithm: theme.darkAlgorithm,
    token: {
        // Seed Token
        colorPrimary: primary,
        borderRadius: borderRadius,
        colorBgBase: '#001529',
        colorTextHeading: white,
        // colorBgHeader: '#2a2744',
        // Alias Token
        colorBgContainer: '#65459D',
        colorIcon: white,
        colorIconHover: white,
        colorTextBase: white,
        colorText: white,
        colorSplit: primary

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
        colorPrimary: primary,
        colorPrimaryText: black,
        borderRadius: borderRadius,
        colorBgBase: white,
        colorTextHeading: black,
        // Alias Token
        colorBgContainer: '#985fcc',
        colorIcon: black,
        colorIconHover: black,
        colorTextBase: black,
        colorText: black,
        colorSplit: primary

    },
    components: {
        Layout: {
            headerHeight: headerHeight
        },
    },
};

const antThemes:{ [key: string]: ThemeConfig } = {
    dark: blackTheme,
    light: whiteTheme
}

export default function Theming({children}: { children: ReactNode }) {
    const theme = useInfoStore((state) => state.theme);
    const storeInitialized = useInfoStore((state) => state.initialized);
    const initializeStore = useInfoStore((state) => state.initialize);
    
    cssVariables.forEach((it)=>{
        document.documentElement.style.setProperty(it.variable, it.themes[theme]);
    });

    const setLanguage = useInfoStore((state) => state.setLanguage);
    useEffect(() => {
        console.log(navigator.languages);
        if(!storeInitialized){
            initializeStore();
        }
    })

    return (
        <ConfigProvider
            // theme={whiteTheme}
            theme={antThemes[theme]}
        > 
            {children}
        </ConfigProvider>
    );
}