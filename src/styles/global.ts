import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    ul, ol, li{
        list-style:none;
    }

    button{
        cursor: pointer;
        background: transparent;
        border: 0;
    }

    :root {
        --black: #101119;
        --black-1: #00000050;
        --white: #FFFFFF;
        --grey: #F5F5F5;
        --grey-1: #0F1411;
        --green: #11BCC7;
        --greenTransparent: #11BCC720;
        --font-family:"Montserrat";
        --font-family2:"Roboto";
    }

    body{
        font-family: var(--font-family);
    }
`;
