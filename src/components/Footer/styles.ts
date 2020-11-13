import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content:center;
    padding:80px 0;
    background: ${({theme})=>theme.color.blue_secondary};
    .footerWrapper{
        @media screen and (max-width: 1024px){
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        width:100%;
        padding:8px;
        margin:0 20px;
        margin-bottom:64px;
        }
        @media screen and (min-width: 1024px){
            display:flex;
            flex-direction:row;
            align-items:start;
            justify-content:center;
            max-width:1120px;
            width:100%;
            margin:0;
            margin-bottom:64px;
            .about{
                max-width:41.66%;
                width:100%;
                margin-right:32px;
            }
            .about > h3 {
                margin-bottom:32px;
            }
            .newsLetter{
                max-width:33.33%;
                width:100%;
                margin-right:32px;
            }
            .newsLetter h3{
                margin-bottom:32px;
            }
            .socialMedia{
                max-width:25%;
                width:100%;
            }
            .socialMedia h3{
                margin-bottom:32px;
            }
            .socialMedia > ul{
                display:flex;
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                width:50%;
                margin-top:32px;
                padding:0;
            }
            .socialMedia > ul > li{
                display:flex;
                flex-direction:row;
                align-items:center;
                padding:0;
            }
            .socialMedia > ul > li > a > svg{
                padding:0;
                width:40px;
                height:auto;
            }
        }
    }
    
    @media screen and (max-width: 1024px){
        .about{
        width:100%;
        margin-bottom:32px;
        }
        .about > h3 {
            margin-bottom:32px;
        }
        .newsLetter{
            width:100%;
            margin-bottom:32px;
        }
        .newsLetter h3{
            margin-bottom:32px;
        }
        .socialMedia{
            width:100%;
            margin-bottom:32px;
        }
        .socialMedia h3{
            margin-bottom:32px;
        }
        .socialMedia > ul{
            display:flex;
            flex-direction:row;
            justify-content:space-between;
            align-items:center;
            width:50%;
            margin-top:32px;
            padding:0;
        }
        .socialMedia > ul > li{
            display:flex;
            flex-direction:row;
            align-items:center;
            padding:0;
        }
        .socialMedia > ul > li > a > svg{
            padding:0;
            width:40px;
            height:auto;
        }
    }
`;
