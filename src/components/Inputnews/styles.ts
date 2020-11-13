import styled from 'styled-components';

export const Container = styled.form`
    width:100%;
    margin-top: 32px;
    .input-block{
        display:flex;
        flex-direction:row;
        align-items:center;
        position: relative;
        width:100%;
        background: ${({theme})=>theme.color.gray_900};
        border: 1px solid ${({theme})=>theme.color.gray_800};
        border-radius: 8px;
        outline: 0;
        font: ${({theme})=>theme.texts.small_text};
        color: ${({theme})=>theme.color.gray_500};
    }
    .input-block + .input-block{
        margin-top: 14px;
    }
    .input-block input {
        width: 100%;
        height: 50px;
        background: none;
        border: none;
        outline: 0;
        padding-left:16px;
        font: ${({theme})=>theme.texts.small_text};
        color: ${({theme})=>theme.color.gray_500};
    }
    .input-block:focus-within::after{
        width: calc(100% - 82px);
        height: 2px;
        content: '';
        background: ${({theme})=>theme.color.blue_secondary};
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 0;
    }
    .input-block button{
        cursor:pointer;
        display:flex;
        align-items:center;
        justify-content:center;
        background: ${({theme})=>theme.color.yallow_primary};
        border: 1px solid ${({theme})=>theme.color.yallow_primary};
        border-radius:8px;
        height: 50px;
        width:50px;
    }
    .input-block button div{
        padding:0 24px;
    }
    .input-block button div svg{
        color: ${({theme})=>theme.color.gray_1000};
    }
`;
