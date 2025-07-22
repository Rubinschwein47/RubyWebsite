import React from 'react';
import './baseContainer.css';
import {useInfoStore} from "../../store";


export default function BaseContainer({children}: {children: React.ReactNode}) {
    const ratio = useInfoStore((state) => state.windowRatio);
    return(
        <div className={"container base-container base-container-"+ratio}>
            <div style={{width:'100%',height:0, position: 'absolute'}}>
                <img src={'/recources/over_wall.png'} className={"wall-icon"}/>
            </div>
            <div className={"content-space content-space-" + ratio}>
                {children}
            </div>
        </div>
    );
}