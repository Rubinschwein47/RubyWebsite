import {FormatPainterFilled, GlobalOutlined, MoonFilled, SunFilled} from "@ant-design/icons";
import {Button, Dropdown, MenuProps, Typography} from "antd";
import {useInfoStore, WindowRatio} from "../../store";
import Trans from "../../basics/Translate";
import React from "react";

const {Text} = Typography;

export function LanguageDropdown({ratio}: { ratio: WindowRatio }) {
    const setLanguage = useInfoStore(state => state.setLanguage);

    const items: MenuProps['items'] = [
        {
            key: 1,
            label: (
                <p><Trans path={"header.language.de"}/></p>
            ),
            onClick: () => {
                setLanguage("de");
            }
        },
        {
            key: 2,
            label: (
                <p><Trans path={"header.language.en"}/></p>
            ),
            onClick: () => {
                setLanguage("en");
            }
        }
    ];
    return (
        <Dropdown menu={{items}} placement="bottomRight" arrow>
            <Button style={{marginRight: "1rem"}}>
                {ratio === WindowRatio.mobile ? null :
                    <Text> <Trans path={"header.language.language"}/></Text>
                }
                <GlobalOutlined/></Button>
        </Dropdown>
    );
}
