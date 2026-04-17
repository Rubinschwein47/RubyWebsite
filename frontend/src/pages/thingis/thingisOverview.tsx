import React from "react";
import {Input, Typography} from "antd";
import Trans from "../../basics/Translate";
import "./thingisOverview.css";
import {thingis, ThingiTag, ThingiTagColors} from "./thingisList";
import ImageWaiter from "../../basics/ImageWaiter";
import {Link} from "react-router";

const {Text, Title} = Typography;

export default function ThingisOverview() {
    return (<>
        <Title level={1}><Trans path={"thingis.header"}/></Title>
        <div className={"container thingis-search-container"}>
            <span style={{width: '20rem'}}><Input placeholder={"thingis.search.title"}/></span>
            <span style={{width: '5rem'}}><Input placeholder={"Title"}/></span>

        </div>
        <div className={"thingis-display"}>
            {thingis.map((thingi) => {
                return <Link className={"container thingi-display"} to={thingi.uri} >
                    <ImageWaiter size={"12rem"} alt={"logo of "+thingi.name} src={thingi.icon} forceSquare={true} preview={false}/>
                    <h3><Trans path={`Thingis.titles.${thingi.name}.name`}/></h3>
                    <Text><Trans path={`Thingis.titles.${thingi.name}.description`}/></Text>
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