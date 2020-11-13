import styled from 'styled-components';

export const Container = styled.div`
    margin-bottom:80px;
    .mainContainer{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-top:80px;
    }
    .partiners{
        h2{
            font:${({theme})=>theme.texts.main_title_small};
            color:${({theme})=>theme.color.gray_300};
            margin-bottom:32px;
        }
    }
    @media screen and (max-width:1024px){
        padding-top: 60px;
        .mainContainer{
            margin-top:40px;
        }
    }
`