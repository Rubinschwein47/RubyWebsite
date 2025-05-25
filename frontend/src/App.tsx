import React from 'react';
import './App.css';
import {useState} from 'react';
// import { RubyWebsiteService } from "./services/openapi/services/RubyWebsiteService";
// import {OpenAPI } from  "./services/openapi/index";
//
// const {randomValues} = RubyWebsiteService;
// OpenAPI.BASE ="http://localhost:5037"

export default function App() {
    var [exampleList, setexampleList] = useState(["hello", "some longer text", "bye"]);

    const [showExample, setSchowExample] = useState(false);
    // async function getRandom(){
    //     randomValues(12).then((values) => {
    //         setexampleList(values.map((value) => {return value.toString()}));
    //     });
    // }
    function flipShowExample() {
        setSchowExample(!showExample);
        console.log(showExample);
    }

    return (
        <div className={"main"}>
            <button onClick={flipShowExample}>Call Backend</button>
            <TestList
                list={exampleList}
                showExample={showExample}
            />
        </div>
    );
}

type ToggleListProps = {
    showExample: boolean;
    list: string[];
}
function TestList({list,showExample}:ToggleListProps) {
    if (!showExample) {
        return null
    }
    const mappedList = list.map((item, id) => (<li key={id}>{item}</li>));
    return (<div className={"test-container"}>
            <ul className={"list-display"}>{mappedList}</ul>
        </div>
    );
}

