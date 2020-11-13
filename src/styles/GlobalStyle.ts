import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

interface Props {
    theme: ThemeType
}
const GlobalStyle = createGlobalStyle<Props>`
*, *::after, *::before {
    box-sizing:border-box;
    margin: 0;
    outline:none;
    padding:0;
}
body{
    font-size: 16px;
    font-family: 'Roboto', 'sans-serif';
    line-height:1.5;
    background: ${({theme})=> theme.color.gray_1000};
    color: ${({theme})=>theme.color.gray_1000};
}
a{
    text-decoration: none;
    color: ${({theme})=>theme.color.gray_1000};
}
ul{
    list-style:none;
}
h1{
    font:${({theme})=>theme.texts.main_title}
}
h2{
    font:${({theme})=>theme.texts.main_title_small}
}
h3{
    font:${({theme})=>theme.texts.main_subtitle}
}
.wrapperColumn{
    @media screen and (max-width: 1024px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        padding:24px;
        margin:0;
    }
    @media screen and (min-width: 1024px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        max-width:1120px;
        width:100%;
        padding:8px 20px;
        margin:0;
    }
}
.wrapperRow{
    @media screen and (max-width: 1024px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        padding:24px;
        margin:0;
    }
    @media screen and (min-width: 1024px){
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        max-width:1120px;
        width:100%;
        padding:8px;
        margin:0;
    }
}
`
export default GlobalStyle