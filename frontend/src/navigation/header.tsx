import React from 'react';
import './header.css';
import {Header} from "antd/es/layout/layout";
import {Button, Dropdown, Flex, MenuProps} from "antd";
import { MoonFilled,FormatPainterFilled,SunFilled } from '@ant-design/icons';

const items:MenuProps['items'] = [
    {
        key: 1,
        label: (
            <p>Dark Mode <MoonFilled/></p>
        )
    },
    {
        key: 2,
        label: (
            <p onClick={()=>console.log("light")}>Light <SunFilled/></p>
        )
    }
];
export default function WebHeader() {

    return (<Header>
        <Flex>
            <div style={{width:'75%'}}>

            </div>
            <div style={{width:'25%',justifyContent:'end',display:'flex', alignItems:'center'}}>
                <Dropdown menu={{items}} placement="bottomRight" arrow>
                    <Button>Theme <FormatPainterFilled/></Button>
                </Dropdown>
            </div>
        </Flex>
    </Header>);
}