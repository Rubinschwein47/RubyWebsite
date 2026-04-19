import React, {useEffect, useRef, useState} from "react";
import {InputNumber, InputNumberProps, Slider, Typography} from "antd";
import Trans from "../../../../basics/Translate";
import "./colorPicker.css"
import {clamp} from "../../../../util/util";

const {Text, Title} = Typography;


//The corners of the color space represented in [saturation,lightness]
const tl = [0,1]
const tr = [1,0.5]
const bl = [0,0]
const br = [1,0]

export default function ColorPicker() {
    // dropdown control
    var colorFieldMouseDown = false;
    const colorImage = useRef<HTMLDivElement>(null);
    const colorDot = useRef<HTMLDivElement>(null);

    // all the color attributes
    const [hue, setHue] = useState<number>(0);
    const [saturation, setSaturation] = useState<number>(1);
    const [lightness, setLightness] = useState<number>(1);


    const mouseEnter = (event: React.MouseEvent) => {
        colorFieldMouseDown = true;
        console.log("mouseDown:", event);
        console.log("mouseDown native:", event.nativeEvent);
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
        <Title level={1}><Trans path={"thingis.colorPicker.title"}/></Title>
        <div className={"main-order-color"}>
            <div className="container" style={{display: "flex", flexDirection: "column"}}>
                <div
                    className={"color-image hsl-image"}
                    // @ts-ignore
                    style={{'--hue': hue * 360}}
                    onMouseDown={mouseEnter}
                    ref={colorImage}
                >
                    <div className={"color-dot"} ref={colorDot}></div>
                </div>
                <ColorSlider
                    inputValue={hue} setInputValue={(value) => setHue(value)}
                    name={"thingis.colorPicker.hue"}
                    gradientName={"--rainbow-gradient"}/>

                <ColorSlider
                    inputValue={hue} setInputValue={(value) => setHue(value)}
                    name={"thingis.colorPicker.red"}
                    gradientName={"--red-gradient"}/>
            </div>
            <div className="container"><span>{colorFieldMouseDown + ""}</span></div>
        </div>
    </div>);
}
type ColorSliderProps = {
    inputValue: number,
    setInputValue: (value: number) => any,
    name: string;
    gradientName: string;
}

function ColorSlider({inputValue, setInputValue, gradientName}: ColorSliderProps) {
    const ref = useRef(null);
    
    useEffect(() => {
        console.log(ref.current);
        // @ts-ignore
        ref.current.style.setProperty("--gradient", `var(${gradientName})`);
    }, []);
    const onChange: InputNumberProps['onChange'] = (newValue) => {
        setInputValue(newValue as number);
    };

    return (
        <div ref={ref} className={"slider-container"}>
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