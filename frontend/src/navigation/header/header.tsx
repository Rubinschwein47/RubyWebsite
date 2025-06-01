import React, {useState} from 'react';
import './header.css';
import {Header} from "antd/es/layout/layout";
import {Button, Dropdown, Flex, MenuProps} from "antd";
import {MoonFilled, FormatPainterFilled, SunFilled} from '@ant-design/icons';
import { Typography } from 'antd';
import { useInfoStore } from '../../store';

const { Title } = Typography;

export default function WebHeader() {
    const setTheme = useInfoStore(state => state.setTheme);
    const isLightTheme = useInfoStore((state) => state.isLightMode);

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (
                <p>Dark Mode <MoonFilled/></p>
            ),
            onClick: () => {
                setTheme(false);
            }
        },
        {
            key: 2,
            label: (
                <p>Light <SunFilled/></p>
            ),
            onClick: () => {
                setTheme(true);
            }
        }
    ];
    return (<Header className={"header"}>
        <Flex style={{height: '100%'}}>
            <div style={{width: '75%'}}>
            </div>
            <div style={{width: '25%', justifyContent: 'end', display: 'flex', alignItems: 'center'}}>
                <Dropdown menu={{items}} placement="bottomRight" arrow>
                    <Button>Theme <FormatPainterFilled/></Button>
                </Dropdown>
            </div>
        </Flex>
        <div className={'namePresent'}>
            <Flex style={{
                alignItems: 'center'
            }}>
                <div style={{
                    width: '5rem', height: '0',
                    borderColor: "var(--icon-color)",
                    borderBottomStyle: 'solid',
                    marginLeft: 'auto'
                }}></div>
                <Title style={{margin:'1rem'}}>Rubinschwein47</Title>
                <div style={{
                    width: '5rem', height: '0',
                    borderColor: "var(--icon-color)",
                    borderBottomStyle: 'solid',
                    marginRight: 'auto'
                }}></div>
            </Flex>
        </div>
    </Header>);
}