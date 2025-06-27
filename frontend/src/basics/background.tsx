import React, {ReactElement} from "react";
import {useInfoStore} from "../store";


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

    function getBackground() {
        const texture = getPicturePath();
        const tiles: ReactElement<any, any>[] = [];
        for (let i = 0; i < 20; i++) {
            tiles.push(<div style={{width: '100%', height: '8rem'}} key={i}>
                <img src={texture} alt={"background wall left"}/>
                <img src={texture} style={{transform: `rotateY(180deg)`, float: "right"}} alt={"background wall right"}/>
            </div>);
        }
        return tiles;
    }

    return (<div style={{position: 'absolute', width: '100%', height: "100%"}}>
        {getBackground()}
    </div>);
}