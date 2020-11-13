import styled from 'styled-components'
  

export const Container = styled.div`
    display:flex;
    width:100%;
    .textarea-block{
        margin-top: 32px;
        position: relative;
        width:100%;
    }
    .textarea-block + .textarea-block{
        margin-top: 14px;
    }
    .textarea-block label{
        font:${({theme})=>theme.texts.main_text};
        color:${({theme})=>theme.color.gray_300};
    }
    .textarea-block textarea {
        width: 100%;
        height: 120px;
        min-height: 64px;
        margin-top: 8px;
        background: ${({theme})=>theme.color.gray_900};
        border: 1px solid ${({theme})=>theme.color.gray_800};
        border-radius: 8px;
        outline: 0;
        resize: vertical;
        padding: 12px 16px;
        font:${({theme})=>theme.texts.main_text};
    }
    .textarea-block:focus-within::after{
        width: calc(100% - 3.2rem);
        height: 2px;
        content: '';
        background: ${({theme})=>theme.color.blue_secondary};
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 8px;
    }
`;
