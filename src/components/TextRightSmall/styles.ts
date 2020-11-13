import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:start;
    margin:32px 0;
    .imgWrapper{
        max-width:33.33%;
        margin-right:32px;
    }
    .imgWrapper > img{
        border-radius:8px;
        width:100%;
        height:auto;
    }
    .textWrapper{
        max-width:66.66%
    }
    .textWrapper > h3{
        color:${({theme})=>theme.color.gray_300};
        margin-bottom:16px;
    }
    .textWrapper > p {
        font:${({theme})=>theme.texts.main_text};
        color:${({theme})=>theme.color.gray_400};
        margin-bottom:16px;
    }
    .textWrapper a small{
            font:${({theme})=>theme.texts.small_text};
            color:${({theme})=>theme.color.yallow_primary};
    }
    @media screen and (max-width: 1024px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin:0;
        padding:0;
        h2{
            margin-bottom:8px;
        }
        .imgWrapper{    
            max-width:100%;
            margin:0 0 32px 0;
        }
        .imgWrapper > img{
            margin:0;
            width:100%;
            height:auto;
        }
        .textWrapper{
            max-width:100%
        }
    }

`;
