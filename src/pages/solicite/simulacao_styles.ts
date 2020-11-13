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
    .content{
        h2{
            font:${({theme})=>theme.texts.main_title_small};
            color:${({theme})=>theme.color.gray_300};
            margin-bottom:64px;
            text-align:center;
        }
        p{
            font:${({theme})=>theme.texts.main_text};
            color:${({theme})=>theme.color.gray_400};
            margin-bottom:32px; 
        }
        .btn{
            width:20%
        }
    }
    @media screen and (max-width:1024px){
        padding-top: 60px;
        .mainContainer{
            margin-top:40px;
        }
    }
`