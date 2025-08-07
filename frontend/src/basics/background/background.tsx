import React from "react";
import "./background.css";
import {useInfoStore} from "../../store";

export default function Background() {
    const theme: string = useInfoStore((state) => state.theme);

    function getPicturePath() {
        switch (theme) {
            case "light":
                return '/recources/walls_bright.png';
            case "dark":
                return '/recources/walls_dark.png';
        }
        return '/recources/walls_bright.png';
    }
    const path = getPicturePath();
    return (<div style={{position: 'absolute', width: '100%', height: "100%"}}>
        <div className={"background-side"} style={{left: 0, backgroundImage: "url(" + path + ")"}}></div>
        <div className={"background-side"} style={{right: 0, backgroundImage: "url(" + path + ")",transform: "scaleX(-1)"}}></div>
    </div>);
}