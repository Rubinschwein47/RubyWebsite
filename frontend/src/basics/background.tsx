import React, {ReactElement} from "react";
import { useInfoStore } from "../store";


export default function Background({height:number}: {height:number}) {
    const cssHeight = {height:number}.height;
    
    const isLightTheme = useInfoStore((state) => state.isLightMode);
    function getBackground() {
        const texture = isLightTheme? '/recources/walls_bright.png':'/recources/walls_dark.png';
        const tiles: ReactElement<any, any>[] = [];
        for (let i = 0; i < 20; i++) {
            tiles.push(<div style={{width:'100%',height:'8rem'}} key={i}>
                <img src={texture} style={{}}/>
                <img src={texture} style={{transform: `rotateY(180deg)`,float:"right"}} />
            </div>)
        }
        return tiles;
    }

    return (<div style={{position: 'absolute',width:'100%',top:0,left:0,overflow:"clip", height: cssHeight}}>
        {getBackground()}
    </div>)
}