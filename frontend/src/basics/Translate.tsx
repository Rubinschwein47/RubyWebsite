import React from 'react';
import { useInfoStore } from '../store';
import Markdown from "react-markdown";

type TransProps = {
    path: string;
    asMarkDown?: boolean;
}
export default function  Trans({path, asMarkDown = false}: TransProps) {
    const translate = useInfoStore((state) => state.getTranslation);
    const translatedText = translate( path);
    
    return asMarkDown?<Markdown>{translatedText}</Markdown>:<>{translatedText}</>
}