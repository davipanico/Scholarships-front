import {createGlobalStyle} from 'styled-components';
import 'antd/dist/antd.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto',sans-serif;
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

    .ant-image-img {
        max-height: 150px;
        border: 1px solid blue;
        border-radius: 5px;
    }

    .ant-btn-primary {
        background-color: #f58220 !important;
        border-color: #f58220 !important;
    }

    .rc-virtual-list-scrollbar {
        display: block !important;
    }

    .ant-typography {
        color: #555;
       
      }

      h5.ant-typography {
        color: #18ACC4;
      }

      h2.ant-typography {
        color: #18ACC4;
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
