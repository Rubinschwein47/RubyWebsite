import {ConfigProvider, theme, ThemeConfig} from 'antd';
import React, {ReactNode, useState} from 'react';
import './theming.css';
import { useInfoStore } from '../store';

const white = '#fff';
const black = '#000';
const headerHeight = 64;
const borderRadius = 6;
const primary = '#D364EC';

const headerDark = '#9e59cb';
const headerLight = '#eea9f3';

const containerColorDark = '#022b50';
const containerColorLight = '#fff';


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

    },
    components: {
        Layout: {
            headerHeight: headerHeight
        },
    },
};
export default function Theming({children}: { children: ReactNode }) {
    const isLightTheme = useInfoStore((state) => state.isLightMode);
    document.documentElement.style.setProperty('--icon-color', isLightTheme? 'black': 'white');
    document.documentElement.style.setProperty('--header-color', isLightTheme? headerLight:headerDark);
    document.documentElement.style.setProperty('--container-color', isLightTheme? containerColorLight:containerColorDark);
    document.documentElement.style.setProperty('--border-radius', borderRadius + 'px');

    return (
        <ConfigProvider
            // theme={whiteTheme}
            theme={isLightTheme? whiteTheme: blackTheme}
        > 
            {children}
        </ConfigProvider>
    );
}
// const store={
//     theme: string,
// }