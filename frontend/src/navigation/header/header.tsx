import React from 'react';
import './header.css';
import {Header} from "antd/es/layout/layout";
import {Dropdown, Flex, MenuProps, Typography} from "antd";
import {ExperimentFilled, HomeFilled, MenuOutlined, MessageFilled, RocketFilled} from '@ant-design/icons';
import {useInfoStore, WindowRatio} from '../../store';
import {useNavigate} from "react-router";
import Trans from "../../basics/Translate";
import {ThemeDropdown} from "./themeDropdown";
import {LanguageDropdown} from "./languageDropdown";

const {Title, Text} = Typography;

const pages: { name: string; icon: React.JSX.Element }[] = [{
    name: "home",
    icon: <HomeFilled/>,
}, {
    name: "portfolio",
    icon: <RocketFilled/>,
}, {
    name: "contact",
    icon: <MessageFilled/>,
},{
    name: "thingis",
    icon: <ExperimentFilled />,
}
];
export default function WebHeader() {
    const ratio = useInfoStore((state) => state.windowRatio);

    return (<Header className={"header"}>
        <Flex style={{height: '100%'}}>
            {ratio !== WindowRatio.pc ?
                <><MobilePages pages={pages}/> <Title style={{margin: "auto 12px"}} level={3}>RS47</Title></> 
                : <DesktopPages pages={pages}/>}
            <div className={"options-panel"}>
                <LanguageDropdown ratio={ratio}></LanguageDropdown>
                <ThemeDropdown ratio={ratio}></ThemeDropdown>
            </div>

        </Flex>
        {ratio === WindowRatio.pc ?
            <div className={'name-present'}>
                <Flex style={{
                    alignItems: 'center',
                    pointerEvents: 'none'
                }}>
                    <div className={"name-present-line"} style={{marginLeft: "auto"}}></div>
                    <Title style={{margin: '1rem'}}>Rubinschwein47</Title>
                    <div className={"name-present-line"} style={{marginRight: "auto"}}></div>
                </Flex>
            </div>
            :null
        }
    </Header>);
}


type PagesProps = {
    pages: { name: string; icon: React.JSX.Element }[]
}

function DesktopPages({pages}: PagesProps) {
    return (
        <Flex style={{width: '75%', alignItems: 'center'}}>
            {pages.map((page, index) => (
                <>
                    <SubPage name={page.name}>
                        {React.cloneElement(page.icon, {className: "background-icon"})}
                    </SubPage>
                    {index !== pages.length - 1 ? <Text style={{fontSize: "2rem"}}>-</Text> : null}
                </>
            ))}
        </Flex>
    );
}

function MobilePages({pages}: PagesProps) {
    const navigate = useNavigate();
    const goToLink = (destination: string) => {
        navigate(destination);
    };
    const items: MenuProps['items'] = [];
    pages.forEach((page, index) => {
        items?.push({
            key: index,
            label: <Title level={3}><Trans
                path={"header.links." + page.name}/> {React.cloneElement(page.icon, {className: "mobile-icon"})}
            </Title>,
            onClick: () => {
                goToLink("/" + page.name);
            }
        });
    });

    return (
        <Dropdown menu={{items}} placement="bottomLeft" arrow>
            <MenuOutlined style={{fontSize: "3rem", marginLeft: "1rem"}}/>
        </Dropdown>
    );
}

type SupPageProps = {
    name: string;
    children: React.ReactNode;
}

function SubPage({name, children}: SupPageProps) {
    const navigate = useNavigate();
    const goToLink = (destination: string) => {
        navigate(destination);
    };
    return (
        <div onClick={() => goToLink("/" + name)} className={"header-tab"}>
            <Title level={3} style={{margin: "auto"}}><Trans path={"header.links." + name}/></Title>
            {children}
        </div>
    );
}