import React, {useState} from 'react';
import {Image, Skeleton} from "antd";

type ImageProp = {
    src: string,
    alt: string,
    size: string,
    forceSquare?: boolean,
    preview?: boolean,
}
export default function ImageWaiter({src, alt, size, forceSquare = false, preview = true}: ImageProp) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (<>
            {!imageLoaded ? (
                <Skeleton.Image active={true} style={{width: size, height: size}}></Skeleton.Image>
            ) : <></>}
            {preview?
                <Image
                    style={{display: imageLoaded ? 'flex' : 'none'}}
                    height={forceSquare?size:undefined}
                    src={src}
                    alt={alt}
                    onLoad={handleImageLoad}
                    width={size}
                />:
                <img
                    style={{display: imageLoaded ? 'flex' : 'none',width:size, height: forceSquare?size:undefined,imageRendering:"crisp-edges"}}
                    src={src}
                    alt={alt}
                    onLoad={handleImageLoad}
                />
            }
        </>
    );
};