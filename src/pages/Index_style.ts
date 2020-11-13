import styled from 'styled-components'
import main_cta from '../assets/images/main_cta.jpg'

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    .topcs{
        padding:80px 0;
    }
    .energyNum{
        display:flex;
        align-items:center;
        justify-content:center;
        background:#333;
        width:100%;
        background-image:linear-gradient(rgba(0, 0,0, 0.3), rgba(0, 0, 0, 0.3)),url(${main_cta});
        background-size:cover;
        background-position:0 -130px;
        min-height:557px;
        height:100%;
    }
    .energyNum > div > h3{
        margin-bottom: 24px;
    }
    .energyNum > div > p{
        text-align: center;
        max-width:600px;
        margin-bottom: 24px;
    }
    
    .process{
        display: flex;
        justify-content:center;
        padding: 80px 10px;
        background-color:${({theme})=>theme.color.gray_900};
        width:100%;
    }
    .process > div >h2{
        font:${({theme})=>theme.texts.main_title_small};
        color:${({theme})=>theme.color.gray_300};
        margin-bottom: 24px;
    }
    .simulation{
        display:flex;
        justify-content:center;
        width:100%;
        background-color:${({theme})=>theme.color.gray_1000};
        padding:80px 0;
    }
    .conter{
        display:flex;
        align-items:start;
    }
    .services{
        margin:40px 0 32px 0;
        text-align:center;
        h3{
            color:${({theme})=>theme.color.gray_300};
        }
        p{
            color:${({theme})=>theme.color.gray_400};
        }
    }
    @media screen and (max-width: 1024px){
        .energyNum{
            background-position:center;
        }
        .services{
            text-align: left;
        }
        
    }
`