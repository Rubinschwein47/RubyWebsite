import React, {useEffect, useRef, useState} from "react";
import {Col, InputNumber, InputNumberProps, Row, Slider, Typography} from "antd";
import Trans from "../../../../basics/Translate";
import "./colorPicker.css"
import {ColorPicker as AntPicker} from "antd";
import {clamp} from "../../../../util/util";

const {Text, Title} = Typography;

export default function ColorPicker() {
    // dropdown control
    // const [colorFieldMouseDown, setColorFieldMouseDown] = useState<boolean>(false);
    var colorFieldMouseDown = false;
    const colorImage = useRef<HTMLDivElement>(null);
    const colorDot = useRef<HTMLDivElement>(null);

    // all the color attributes
    const [hue, setHue] = useState<number>(0);
    const [saturation, setSaturation] = useState<number>(1);
    const [lightness, setLightness] = useState<number>(1);


    const mouseEnter = (event: React.MouseEvent) => {
        colorFieldMouseDown = true;
        console.log("mouseDown:",event);
        console.log("mouseDown native:",event.nativeEvent);
        mouseMove(event.nativeEvent);
    }
    const mouseMove = (event: MouseEvent) => {
        if (!colorFieldMouseDown)
            return;
        var rect = colorImage.current!.getBoundingClientRect();
        var x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        var y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        colorDot.current!.style.left = x * 100 + '%';
        colorDot.current!.style.top = y * 100 + '%';
        console.log(x, y);
    }
    const mouseLeave = () => {
        colorFieldMouseDown = false;
    }
    useEffect(() => {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseLeave);
        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseLeave);
        }
    })

    return (<div>
        <Title level={1}><Trans path={"thingis.color-picker.title"}/></Title>
        <div className={"main-order-color"}>
            <div className="container" style={{display: "flex", flexDirection: "column"}}>
                <div
                    className={"color-image hsl-image"}
                    // @ts-ignore
                    style={{'--hue': hue*360}}
                    onMouseDown={mouseEnter}
                    ref={colorImage}
                >
                    <div className={"color-dot"} ref={colorDot}></div>
                </div>
                <ColorSlider inputValue={hue} setInputValue={(value)=>setHue(value)} name={"thingis.color-picker.hue"}/>
            </div>
            <div className="container"><span>{colorFieldMouseDown + ""}</span></div>
        </div>
    </div>);
}
type ColorSliderProps = {
    inputValue: number,
    setInputValue: (value: number) => any,
    name: string;
    
}

function ColorSlider({inputValue, setInputValue}: ColorSliderProps) {

    const onChange: InputNumberProps['onChange'] = (newValue) => {
        setInputValue(newValue as number);
    };

    return (
        <div className={"slider-container"}>
            <Slider
                min={0}
                max={1}
                onChange={onChange}
                value={inputValue}
                step={0.01}
            />
            <span style={{margin: "auto 0"}}>Hue</span>
            <InputNumber
                step={0.01}
                min={0}
                max={1}
                style={{width: "4rem"}}
                value={inputValue}
                onChange={onChange}
            />
        </div>
    );
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    s /= 100;
    l /= 100;

    const k = (n: number) => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

    return [f(0) * 255, f(8) * 255, f(4) * 255]; // floats, no rounding
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const delta = max - min;

    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1));

        switch (max) {
            case r: h = ((g - b) / delta) % 6; break;
            case g: h = (b - r) / delta + 2;   break;
            case b: h = (r - g) / delta + 4;   break;
        }

        h = h * 60;
        if (h < 0) h += 360;
    }

    return [h, s * 100, l * 100];
}