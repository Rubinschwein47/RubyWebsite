import Icon, {CustomIconComponentProps} from "@ant-design/icons/lib/components/Icon";
import React from "react";


const HeartSvg = () => (
    <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
        <title>heart icon</title>
        <path
            d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z"/>
    </svg>
);

export function HeartIcon(props: Partial<CustomIconComponentProps>) {
    return (
        <Icon component={HeartSvg} {...props} />
    );
}

const ArtSvg = () => (
    <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
              d="M16 0H4V12H16V0ZM9 6L11 8L14 5V10H6V9L9 6ZM9 3C9 3.55228 8.55228 4 8 4C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2C8.55228 2 9 2.44772 9 3Z"
              fill="#000000"/>
        <path d="M0 4V16H12V14H2V4H0Z" fill="#000000"/>
    </svg>
);

export function ArtIcon(props: Partial<CustomIconComponentProps>) {
    return (
        <Icon component={ArtSvg} {...props} />
    );
}

const PuzzleSvg = () => (
    <svg width="1rem" height="1rem" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M2,20.889V16.444H4.222a2.224,2.224,0,0,0,2.192-2.595A2.305,2.305,0,0,0,4.1,12H2V7.556A1.111,1.111,0,0,1,3.111,6.444H7.556V4.222a2.224,2.224,0,0,1,2.6-2.192A2.305,2.305,0,0,1,12,4.341v2.1h4.444a1.112,1.112,0,0,1,1.112,1.112V12h2.1a2.305,2.305,0,0,1,2.311,1.849,2.224,2.224,0,0,1-2.192,2.595H17.556v4.445A1.111,1.111,0,0,1,16.444,22H13.111V19.778a2.224,2.224,0,0,0-2.6-2.192A2.305,2.305,0,0,0,8.667,19.9V22H3.111A1.11,1.11,0,0,1,2,20.889Z"/>
    </svg>
);

export function PuzzleIcon(props: Partial<CustomIconComponentProps>) {
    return (
        <Icon component={PuzzleSvg} {...props} />
    );
}