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

    .video-container {
        display: flex;
        justify-content: center;
    }

    .video-container video {
        width: 90%;
        height: auto;
    }

    .calendly-btn a {
        display: block;
        font-size: 3rem;
        background-color: #c2185b;
        width: fit-content;
        margin: 5rem auto 0;
        padding: 1rem 2rem;
        border-radius: 10px;
        font-weight: 600;
    }

    .calendly-btn.btn-services {
        margin: 5rem auto;
    }

    @media ${({ theme }) => theme.breakpoints.md} {
        .video-container video {
            width: 100%;
        }
        .calendly-btn a {
            font-size: 2rem;
            margin: 4rem auto 0;
            padding: 1rem 2rem;
        }
        .calendly-btn.btn-services {
            margin: 3rem auto;
        }
    }
    @media ${({ theme }) => theme.breakpoints.sm} {
        .video-container video {
            width: 100%;
        }
        .calendly-btn a {
            font-size: 1.7rem;
            margin: 4rem auto 0;
            padding: 1rem;
        }
        .calendly-btn.btn-services {
            margin: 3rem auto;
        }
    }
`
