import { createGlobalStyle } from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        min-height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
    }

    ul {
        list-style: none;
    }

    .ant-btn-primary {
        background-color: #f58220 !important;
        border-color: #f58220 !important;
    }

    .rc-virtual-list-scrollbar {
        display: block !important;
    }

    :root {
    --primary: #f58220;
    --primaryFade: #f7b67e;
    --black: #000000;
    --dark: #424242;
    --secondary: #414042;
    --terciary: #6D6D6D;
    --semiLight: #D6D6D6;
    --light: #F0F0F0;
    --white: #FFFFFF;   
    --red: #f5222db5;    
    }
`;
