import React, {useEffect, useRef, useState} from "react";
import {InputNumber, InputNumberProps, Slider, Typography} from "antd";
import Trans from "../../../../basics/Translate";
import "./colorPicker.css"
import {clamp, squareLerp,round} from "../../../../util/util";
import convert from "color-convert";
import FatHeader from "../../../../basics/fatHeader/fatHeader";

const {Text} = Typography;


//The corners of the color space represented in [saturation,lightness]
const tl = [0, 1]
const tr = [1, 0.5]
const bl = [0, 0]
const br = [1, 0]

export default function ColorPicker() {
    // dropdown control
    var colorFieldMouseDown = useRef(false);
    const colorImage = useRef<HTMLDivElement>(null);
    const colorDot = useRef<HTMLDivElement>(null);


    const colorDisplay = useRef<HTMLDivElement>(null);

    // all the color attributes
    const [hue, setHue] = useState<number>(0);
    const [saturation, setSaturation] = useState<number>(1);
    const [lightness, setLightness] = useState<number>(1);


    const mouseEnter = (event: React.MouseEvent) => {
        colorFieldMouseDown.current = true;
        mouseMove(event.nativeEvent);
    }
    const mouseMove = (event: MouseEvent) => {
        if (!colorFieldMouseDown.current)
            return;
        var rect = colorImage.current!.getBoundingClientRect();
        var x = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        var y = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        colorDot.current!.style.left = x * 100 + '%';
        colorDot.current!.style.top = y * 100 + '%';

        setSaturation(squareLerp(tl[0], tr[0], bl[0], br[0], 1 - x, 1 - y) * 100);
        setLightness(squareLerp(tl[1], tr[1], bl[1], br[1], 1 - x, 1 - y) * 100);
    }
    const mouseLeave = () => {
        colorFieldMouseDown.current = false;
    }
    useEffect(() => {
        if (colorDisplay.current != null)
            colorDisplay.current.style.setProperty("background-color", `hsl(${hue},${saturation}%,${lightness}%)`);
        colorImage.current!.style.setProperty("--hue", (hue).toString());
    });
    useEffect(() => {
        document.addEventListener('mousemove', mouseMove);
        document.addEventListener('mouseup', mouseLeave);
        //a simple way to force set all and get a refresh
        setHue(0);
        setSaturation(100);
        setLightness(100);
        return () => {
            document.removeEventListener('mousemove', mouseMove);
            document.removeEventListener('mouseup', mouseLeave);
        }
    }, [])

    function slToXY(s:number, l:number) {
        return {
            x: s / 100,
            y: 1 - (l / 100)
        };
    }
    function changeRgb(value: number,index:number) {
        const rgb = convert.hsl.rgb.raw(hue, saturation, lightness);
        rgb[index] = clamp(value,0,255);
        const hsl = convert.rgb.hsl.raw(rgb[0],rgb[1],rgb[2]);
        setHue(hsl[0]);
        setSaturation(hsl[1]);
        setLightness(hsl[2]);
        const hsv = convert.rgb.hsv.raw(rgb);
        colorDot.current!.style.left = hsv[1] + '%';
        colorDot.current!.style.top = (100-hsv[2]) + '%';
    }
    return (<div>
        <FatHeader level={1}><Trans path={"thingis.colorPicker.title"}/></FatHeader>
        <div className={"main-order-color"}>
            <div className="container" style={{display: "flex", flexDirection: "column"}}>
                <div
                    className={"color-image hsl-image"}
                    onMouseDown={mouseEnter}
                    ref={colorImage}
                >
                    <div className={"color-dot"} ref={colorDot}></div>
                </div>
                <ColorSlider
                    inputValue={hue} setInputValue={(value) => setHue(value)}
                    name={"thingis.colorPicker.hue"}
                    gradientName={"--rainbow-gradient"}
                    max={360}/>

                <ColorSlider
                    inputValue={convert.hsl.rgb.raw(hue, saturation, lightness)[0]}
                    setInputValue={(value) => changeRgb(value,0)}
                    name={"thingis.colorPicker.red"}
                    gradientName={"--red-gradient"}
                    max={255.1}/>
                <ColorSlider
                    inputValue={convert.hsl.rgb.raw(hue, saturation, lightness)[1]}
                    setInputValue={(value) => changeRgb(value,1)}
                    name={"thingis.colorPicker.green"}
                    gradientName={"--green-gradient"}
                    max={255.1}/>
                <ColorSlider
                    inputValue={convert.hsl.rgb.raw(hue, saturation, lightness)[2]}
                    setInputValue={(value) => changeRgb(value,2)}
                    name={"thingis.colorPicker.blue"}
                    gradientName={"--blue-gradient"}
                    max={255.1}/>
            </div>
            <div className="container">
                <div ref={colorDisplay} className={"color-display"}></div>
                <div><span>rgb: {convert.hsl.rgb(hue,saturation,lightness).join(",")}</span> <Text copyable={{text: convert.hsl.rgb(hue,saturation,lightness).join(",")}}/></div>
                <div><span>hsv: {convert.hsl.hsv(hue,saturation,lightness).join(",")}</span> <Text copyable={{text: convert.hsl.hsv(hue,saturation,lightness).join(",")}}/></div>
                <div><span>hsl: {Math.round(hue)},{Math.round(saturation)},{Math.round(lightness)}</span> <Text copyable={{text: Math.round(hue) +","+Math.round(saturation)+","+Math.round(lightness)}}/></div>
                <div><span>hex: #{convert.hsl.hex(hue,saturation,lightness)}</span> <Text copyable={{text: "#"+convert.hsl.hex(hue,saturation,lightness)}}/></div>
                <div><span>cmyk: {convert.hsl.cmyk(hue,saturation,lightness).join(",")}</span> <Text copyable={{text: convert.hsl.cmyk(hue,saturation,lightness).join(",")}}/></div>
            </div>
        </div>
    </div>);
}
type ColorSliderProps = {
    inputValue: number,
    setInputValue: (value: number) => any,
    name: string;
    gradientName: string;
    max: number;
}

function ColorSlider({inputValue, setInputValue, gradientName, name, max}: ColorSliderProps) {
    const ref = useRef(null);

    useEffect(() => {
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
                max={max}
                onChange={onChange}
                value={inputValue}
                step={0.1}
            />
            <span style={{margin: "auto 0"}}><Trans path={name}/></span>
            <InputNumber
                step={0.1}
                min={0}
                max={max}
                style={{width: "4rem"}}
                value={inputValue}
                onChange={onChange}
            />
        </div>
    );
}
