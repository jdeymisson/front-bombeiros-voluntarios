import { createGlobalStyle } from "styled-components";
import theme from "./theme";

export default createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: ${({ theme }) => theme.COLORS.WHITE};
        color: ${({ theme }) => theme.COLORS.BLACK};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea {
        font-family: 'Inter', sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    a, button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    a:hover, button:hover {
        filter: brightness(0.9);
    }
`;