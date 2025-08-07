import React, {useState} from 'react';
import {Image, Skeleton} from "antd";

type ImageProp = {
    src: string,
    alt: string,
    size: string,
    forceSquare?: boolean
}
export default function ImageWaiter({src, alt, size, forceSquare = false}: ImageProp) {
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return (<>
            {!imageLoaded ? (
                <Skeleton.Image active={true} style={{width: size, height: size}}></Skeleton.Image>
            ) : <></>}
            <Image
                style={{display: imageLoaded ? 'flex' : 'none'}}
                height={forceSquare?size:undefined}
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                width={size}
            />
        </>
    );
};