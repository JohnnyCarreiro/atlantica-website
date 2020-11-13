import styled from 'styled-components';

export const Container = styled.div`
    text-align: center;
    width:100%;
    h1{
        color:${({theme})=>theme.color.gray_300};
        margin-bottom:24px;
    }
    h3{
        color:${({theme})=>theme.color.gray_400};
        margin-bottom:32px;
    }
    p{
        font-size:${({theme})=>theme.texts.main_text};
        color:${({theme})=>theme.color.gray_400};
        margin-bottom:32px;
    }
    .content{
        display:flex;
        align-items:start;
        justify-content:space-between;
        width:100%;
    }
    .mainText{
        display:flex;
        flex-direction:column;
        justify-content:start;
        text-align:start;
        max-width:560px;
        width:100%;
        margin-right:32px;
    }
    .mainText > img {
        width:100%;
        height:auto;
        margin-bottom:24px;
    }
    .mainText > h2{
        color:${({theme})=>theme.color.gray_300};
        margin-bottom:16px;
    }
    .mainText > h3{
        color:${({theme})=>theme.color.gray_400};
        margin-bottom:16px;
    }
    .mainText > p{
        font:${({theme})=>theme.texts.main_text};
        color:${({theme})=>theme.color.gray_400};
    }
    .mainForm{
        display:flex;
        flex-direction:column;
        align-items:start; 
        text-align:start;
        max-width:528px;
        width:100%;
    }
    .mainForm > small{
        font:${({theme})=>theme.texts.small_notation};
        color:${({theme})=>theme.color.gray_500};
    }
    .mainForm button{
        margin-top:24px;
        cursor:pointer;
        width:100%;
        padding:16px 32px;
        background:${({theme})=>theme.color.yallow_primary};
        border:none;
        border-radius: 8px;
        font:${({theme})=>theme.texts.main_subtitle};
        color:${({theme})=>theme.color.gray_1000};
    }
    .mainForm button:hover{
        width:100%;
        padding:16px 32px;
        background:none;
        border:1px solid ${({theme})=>theme.color.yallow_primary};
        border-radius: 8px;
        font:${({theme})=>theme.texts.main_subtitle};
        color:${({theme})=>theme.color.yallow_primary};
    }
    .input{
        width:95%;
        margin-right:16px;
    }
    .contacts{
        display:flex;
        align-items:start;
        justify-content:space-between;
        width:100%;
    }
    .contacts a {
        display:flex;
        align-items:center;
        color:${({theme})=>theme.color.gray_400};

    }
    .contacts a svg{
        font-size:24px;
        margin-right:24px;
        color:${({theme})=>theme.color.yallow_primary};
    }
    .phone, .address, .email{
        width:100%;
        padding:8px;
        margin-bottom:16px;
    }

    @media screen and (max-width: 1024px){
        text-align:left;
        h1,h3{
            padding:0 24px;
        }
        .content, .contacts{
            display:flex;
            flex-direction:column;
            padding:0 20px;
        }
        .contacts{
            padding:0px;
        }
        .mainText h3{
            padding:0;
        }
    }
`;
