import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }
    html {
        font-size: 62.5%;
        scroll-behavior: smooth;
        scroll-padding-top: 110px;
    }
    body {
        font-family: 'Poppins';
        background-color: ${({ theme }) => theme.colors.background1};
        color: ${({ theme }) => theme.colors.primary1};
    }
    a {
        color: #fff;
        text-decoration: none;
    }
    li {
        list-style: none;
    }
`
