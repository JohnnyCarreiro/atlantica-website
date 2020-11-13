import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    margin-top: 32px;
    .input-block{
    position: relative;
    width:100%;
    }
    .input-block + .input-block{
        margin-top: 14px;
    }
    .input-block label{
        font:${({theme})=>theme.texts.main_text};
        color:${({theme})=>theme.color.gray_300};
    }
    .input-block input {
        width: 100%;
        height: 50px;
        margin-top: 8px;
        background: ${({theme})=>theme.color.gray_900};
        border: 1px solid ${({theme})=>theme.color.gray_800};
        border-radius: 8px;
        outline: 0;
        padding: 0 16px;
        font: ${({theme})=>theme.texts.small_text};
        color: ${({theme})=>theme.color.gray_500};
    }
    .input-block:focus-within::after{
        width: calc(100% - 32px);
        height: 2px;
        content: '';
        background: ${({theme})=>theme.color.blue_secondary};
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 0;
    }
`;
