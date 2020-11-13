import styled from 'styled-components';

export const Container = styled.div`
    color:${({theme})=>theme.color.gray_1000};
    @media screen and (max-width: 1024px) {
        .hero{
            height:150px;
        }
        .navText{
            height:100%;
            display:flex;
            justify-content:center;
        }
        .navText h2{
            margin-bottom:32px;
            font: ${({theme})=>theme.texts.main_subtitle};
            color: ${({theme})=>theme.color.gray_1000};
        }
        .navigation{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            height:auto;
            font:${({theme})=>theme.texts.main_subtitle};
        }
        .navigation svg{
            height:24px;
            /* padding:32px 32px; */
        }
        .navigation a{
            padding:0px 16px;
        }
        .navigation p{
            padding:0px 16px;
            color:${({theme})=>theme.color.gray_1000};
        }
    }
    @media screen and (min-width:1024px){
        
        .hero{
            height:500px;
        }
        .navText{
            height:100%;
            display:flex;
            justify-content:center;
        }
        .navText h2{
            margin-bottom:120px;
            font: ${({theme})=>theme.texts.main_title_small};
            color: ${({theme})=>theme.color.gray_1000};
        }
        .navigation{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            height:auto;
            font:${({theme})=>theme.texts.main_subtitle};
        }
        .navigation svg{
            height:24px;
            /* padding:32px 32px; */
        }
        .navigation a{
            padding:0px 16px;
        }
        .navigation p{
            padding:0px 16px;
        }

    }
`;
