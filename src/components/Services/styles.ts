import styled from 'styled-components';

export const Container = styled.div`
    @media screen and (min-width: 1024px) {
        padding:16px;
    }
    margin-bottom:64px;
    color: ${({theme})=>theme.color.gray_600};
    .image{
        height:232px;
        width: 351px;  
        margin-bottom:24px;   
    }
    .image > img{
        height:100%;
        width:100%;
        border-radius:8px;
    }
    h3{
        margin-bottom:16px;
        color: ${({theme})=>theme.color.gray_300};
    }
    p{
        margin-bottom:16px;
    }
    a{
        font:${({theme})=>theme.texts.small_text};
        color: ${({theme})=>theme.color.gray_600};
    }
`;
