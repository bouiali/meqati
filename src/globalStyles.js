import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
        --background-color: #efe5d7;
        --main-color: #171411;
        --input-background-color: #e8ddcc;
    }
    html{
        scroll-behavior: smooth;
    }
    body {
        background-color: var(--background-color);
        margin: 0;
        font-family: Zodiak Variable, Georgia, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }
    button{
        padding: 15px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        background-color: var(--main-color);
        color: var(--background-color);
        i{
            color: var(--background-color);
        }
        font-family: Cabinetgrotesk Variable, Georgia, sans-serif;
    }
    a{
        color: var(--main-color);
        text-decoration: none;
        cursor: pointer;
    }
    p, h2, h3, i, a{
        color: var(--main-color);
    }
    section{
        margin: 300px 20px 20px 20px;
        width: calc(100% - 40px);
        height: calc(100vh - 40px);
        border-radius: 10px;
        transition: 2000ms;
        >*{
            transition: 2000ms;
            opacity: 0;
        }
    }   
    .visible{
        margin: 20px 20px 20px 20px;
        >*{
            opacity: 1;
        }
    }
`;

export const SpecialHeading = styled.div`
    padding-bottom: 15px;
    h2{
        text-transform: uppercase;
        font-size: 48px;
        font-weight: 400;
        padding-bottom: 15px;
    }
`;
export const ParagraphHeading = styled.div`
    text-align: center;
    position: relative;
    h3{
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        color: var(--main-color);
        background-color: var(--background-color);
        text-transform: uppercase;
        width: fit-content;
    }
    &::before{
        content:'';
        position: absolute;
        width: 100%;
        height: 2px;
        background-color: var(--main-color);
        left: 0;
        top: 50%;
    }
`;
export default GlobalStyles;