import React from 'react';
import './baseContainer.css';
import {useInfoStore} from "../../store";


export default function BaseContainer({children}: {children: React.ReactNode}) {
    const isMobile = useInfoStore((state) => state.isMobileRatio);
    return(
        <div className={"container base-container " + (isMobile ? " base-container-mobile " : "")}>
            <div style={{width:'100%',height:0, position: 'absolute'}}>
                <img src={'/recources/over_wall.png'} className={"wall-icon"}/>
            </div>
            <div className={"content-space"+ (isMobile ? " content-space-mobile " : "")}>
                {children}
            </div>
        </div>
    );
}