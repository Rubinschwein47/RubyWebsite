import React, { useState } from 'react';
import {Image, Skeleton} from "antd";

type ImageProp ={
    src: string,
    alt: string,
    width: string,
}
export default ({src,alt,width}:ImageProp) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (<>
            {!imageLoaded && (
                <Skeleton.Image active={true} style={{width:width,height:width}}></Skeleton.Image>
            )}
            <Image
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                width={width}
            />
        </>
    );
};