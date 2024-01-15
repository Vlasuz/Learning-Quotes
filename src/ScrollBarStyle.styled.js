import { createGlobalStyle } from "styled-components";

export const ScrollBarStyle = createGlobalStyle`
    body::-webkit-scrollbar {
        width: 12px;
    }

    body::-webkit-scrollbar-track {
        background-color: #F2CCB3;
        border-radius: 12px;
    }

    body::-webkit-scrollbar-thumb {
        background-color: #783724;
        border-radius: 12px;
    }

    body::-webkit-scrollbar-thumb:hover {
        background-color: #6E4E45;
    }
`