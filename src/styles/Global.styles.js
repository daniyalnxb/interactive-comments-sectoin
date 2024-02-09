import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
        font-size: 16px;
        background-color: hsl(228, 33%, 97%);
        /* padding: 45px 250px; */
        padding: 60px 0px;
    }

    p {
        font-size: 16px;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    textarea {
        width: 100%;
        padding: 10px;
        font-size: 16px;
        border-radius: 8px;
        border-color: hsl(212, 24%, 26%);
        cursor: pointer;

        &:hover {
            border-color: hsla(212, 24%, 26%, 0.5);
        }

        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export default GlobalStyles;
