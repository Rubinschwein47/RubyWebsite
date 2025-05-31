import React from 'react';
import './baseContainer.css';


export default function BaseContainer({children}: {children: React.ReactNode}) {
    return(
        <div className="baseContainer">
            <div style={{width:'100%',height:0, position: 'absolute'}}>
                <img src={'/recources/over_wall.png'} className="wall-icon"/>
            </div>
            {children}
        </div>
    )
}