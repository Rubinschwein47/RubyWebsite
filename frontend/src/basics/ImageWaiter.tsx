import React, { useState } from 'react';
import {Image, Skeleton} from "antd";

type ImageProp ={
    src: string,
    alt: string,
    size: string,
}
export default function ImageWaiter({src,alt,size}:ImageProp) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (<>
            {!imageLoaded && (
                <Skeleton.Image active={true} style={{width:size,height:size}}></Skeleton.Image>
            )}
            <Image
                height={size}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                width={size}
            />
        </>
    );
};