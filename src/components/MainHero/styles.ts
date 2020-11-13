import styled from 'styled-components'
import main_hero from '../../assets/images/main_hero.jpg'

export const Container = styled.div`
    position:initial;
    height:100vh;
    padding-top:60px;
    background-image:linear-gradient(rgba(0, 0,0, 0.3), rgba(0, 0, 0, 0.3)),url(${main_hero});
    background-size:cover;
    padding-top:102px;
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    .mainHero > h2, h3, p {
        text-align: center;
    }
    .mainHero h2 {
        padding:16px 0;
    }
    .mainHero p {
        padding-top:24px 0;
        padding-bottom: 56px;
    }

`
 /* font:${({theme})=>theme.texts.main_title}; */
