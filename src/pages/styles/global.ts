import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        background: linear-gradient(180deg, #9BC8DE 0%, #40BCE2 100%) center fixed;
        height: 100vh;

        @media(max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body {
        -webkit-font-smoothing: antialiased;
        font-family: 'Amaranth', sans-serif !important;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }
`;