import React from 'react';
import { useInfoStore } from '../store';
import Markdown from "react-markdown";
import {Skeleton} from "antd";

type TransProps = {
    path: string;
    asMarkDown?: boolean;
}
export default function  Trans({path, asMarkDown = false}: TransProps) {
    const loaded = useInfoStore((state) => state.languageLoaded);
    const translate = useInfoStore((state) => state.getTranslation);

    if(!loaded) {
        if(asMarkDown) {
            return <Skeleton></Skeleton>;
        }
        return <Skeleton.Input size={"small"}/>;
    }
    
    const translatedText = translate( path);
    
    return asMarkDown?<div className={"markdown"}><Markdown>{translatedText}</Markdown></div>:<>{translatedText}</>
}