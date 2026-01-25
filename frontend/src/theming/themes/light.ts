import {theme, ThemeConfig} from "antd";
import {black, borderRadius, fontSize, headerHeight, whiteBackground} from "../themeConstants";
import {darkThemeHighContrast} from "./dark";

export const lightTheme = {
    "--icon-color": "#000",
    "--bg-icon-color": "0,0,0,0.2",
    "--header-color": "#eea9f3",
    "--container-color": "#fff",
    "--border-radius": borderRadius + "px",
    "--highlight-orange": "#f39f6a",
    "--highlight-blue": "#65a1e8",
    "--highlight-light-blue": "#80bfdc",
    "--highlight-purple": "#d16de8",
    "--highlight-grey": "#d5d5d5",
    "--highlight-green": "#7ced73",
    "--highlight-yellow": "#ffde73",
    "--highlight-red": "#f33854",
    "--background-color": whiteBackground,
};

export const lightThemeHighContrast = {
    "--icon-color": "#000",
    "--bg-icon-color": "0,0,0,0",
    "--header-color": "#fcedff",
    "--container-color": "#fff",
    "--border-radius": borderRadius + "px",
    "--highlight-orange": "#fab990",
    "--highlight-blue": "#8ec2ff",
    "--highlight-light-blue": "#a4e2ff",
    "--highlight-purple": "#e89bfa",
    "--highlight-grey": "#efefef",
    "--highlight-green": "#aaffa4",
    "--highlight-yellow": "#ffe69b",
    "--highlight-red": "#ff5b74",
    "--background-color": whiteBackground,
};

export const lightThemeAntDesign: ThemeConfig = {
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
        colorSplit: "#f873be",
        fontSize: fontSize
    },
    components: {
        Layout: {
            headerHeight: headerHeight
        },
    },
};