import React from "react";
import {Input, Typography} from "antd";
import Trans from "../../basics/Translate";
import "./thingisOverview.css";
import {thingis, ThingiTag, ThingiTagColors} from "./thingisList";
import ImageWaiter from "../../basics/ImageWaiter";
import {Link} from "react-router";
import {useInfoStore} from "../../store";
import FatHeader from "../../basics/fatHeader/fatHeader";

const {Text, Title} = Typography;

export default function ThingisOverview() {
    const translate = useInfoStore((state) => state.getTranslation);

    return (<>
        <FatHeader><Trans path={"thingis.header"}/></FatHeader>
        <div className={"container thingis-search-container"}>
            <span style={{width: '20rem'}}><Input placeholder={translate("thingis.searchByName")}/></span>
            {/*<span style={{width: '5rem'}}><Input placeholder={"Title"}/></span>*/}
        </div>
        <div className={"thingis-display"}>
            {thingis.map((thingi) => {
                return <Link className={"container thingi-display"} to={thingi.uri} >
                    <ImageWaiter size={"12rem"} alt={"logo of "+thingi.name} src={thingi.icon} forceSquare={true} preview={false}/>
                    <h3><Trans path={`thingis.${thingi.name}.title`}/></h3>
                    <Text><Trans path={`thingis.${thingi.name}.description`}/></Text>
                    <p style={{textAlign: "center", display: "flex", flexDirection: "row"}}>{
                        thingi.tags.map(tag => {
                            return <span className={"badge"} style={{backgroundColor: "var(--highlight-" + ThingiTagColors[tag] + ")"}}>{tag}</span>
                        })
                    }</p>
                </Link>
            })}
        </div>
    </>);
}