import {  ConfigProvider,theme } from 'antd';
import React, {ReactNode, useState} from 'react';
import './theming.css'

export default function Theming({children}: {children: ReactNode}) {
    return (
        <ConfigProvider
            theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                    // Seed Token
                    colorPrimary: '#D364EC',
                    borderRadius: 4,
                    colorBgBase: '#2a2744',
                    // Alias Token
                    colorBgContainer: '#65459D',
                    colorIcon: '#ffffff',
                    colorIconHover: '#fff',
                    colorTextBase: '#ffffff',
                    colorText: '#ffffff',
                    
                },
                components: {
                    Layout: {
                        headerHeight: 48
                    },
                },
            }}
        >
            {children}
        </ConfigProvider>
    );
}

// const store={
//     theme: string,
// }