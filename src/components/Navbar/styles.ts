import styled from 'styled-components';
// const height = window.innerHeight.toString()

export const Header = styled.header`
display:flex;
flex-direction:column;
align-items:center;
top:0;
width:100vw;
height:100%;
z-index:100;
/* Top Nav Bar
It needs to implemensts adaptative layout
*/
.topNavContainer{
    display:none;
}
@media screen and (min-width:1024px){
    .topNavContainer{
        display:flex;
        position:fixed;
        top:0;
        left:0;
        width:100%;
        justify-content:center;
        align-items:center;
        background:${({theme})=>theme.color.gray_300};
        z-index:100;
    }
    .contactsContainer{
        display:flex;
        justify-content:space-between;
        align-items:center;
        width:100%;
        max-width:1120px;
        margin: 0 20px;
        padding:8px 0;
    }
    .socialMediaContainer > ul {
        display:inline-block;
        padding: 0 16px;
    }
    .socialMediaContainer > ul > li {
        display:inline-block;
        padding-right:8px;
    }
    .contactContainer{
        display:inline-block;
        padding:0 16px;
    }
    .contactContainer > a {
        display:inline-block;
        padding-left:32px;
    }
}
`
/*
Bottom Nav Bar 
*/
export const BottomNavBar = styled.div`
    display:block;
    position:fixed;
    width:100%;
    background: linear-gradient(180deg, ${({theme})=>theme.color.blue_secondary} 0%, ${({theme})=>theme.color.gray_200} 100%);
    /* background: ${({theme})=>theme.color.blue_secondary}; */
    z-index:100;
    @media screen and (min-width:1024px){
        display:flex;
        position:fixed;
        top:40px;
        width:100%;
        align-items:center;
        justify-content:center;
    }
`
export const NavContainer = styled.div`
    display: flex;
    flex-direction:row;
    padding: 16px;
    margin: 0 20px 0 20px;
    align-items:center;
    justify-content:space-between;
    .menuIcon{
        cursor:pointer;
        padding:0;
        margin:0;
        height:24px;
        width:auto;
    }
    .menuIcon svg{
        padding:0;
        height:24px;
        width:auto;
    }
    .LogoPlaceHolder{
        display:block;
        height:40px;
        align-items:center;
        justify-content:center;
        text-align:center;
    }
    @media screen and (min-width:1024px){
        max-width:1120px;
        width:100%;
        .menuIcon{
            display:none;
        }
    }
`
export const NavItems = styled.nav `
    @media screen and (max-width: 1024px) {
        display:none;
    }
    
    @media screen and (min-width:1024px){
        display:flex;
        flex-direction:row;
        justify-content:center;
        align-items:center;
        height:100%;

        ul{
            display:flex;
            flex-direction:row;
            justify-content:center;
            align-items:center;
        }
        .menuItem > a{
            display:flex;
            flex-direction:row;
            align-items: center;
            margin-left:32px;
        }
        .menuItem > a > svg{
            margin-left:8px;
        }
    }
`
export const NavItemsMobile = styled.nav`
    @media screen and (max-width:1024px){
        display:block;
        position:absolute;
        top:66px;
        left:0;
        width:100%;
        height:100%;
        min-height:100vh;
        >ul{
            display:block;
            flex-direction:column;
            position:absolute;
            left:-100%;
            width:100vw;
            min-height:100vh;
            height:100%;
            transition: all 0.3s ease-out; 
        }

        .active {
            display:block;
            position:absolute;
            left:0;
            padding:0;
            text-align:center;
            background:${({theme})=>theme.color.blue_secondary};  
            transition: all 0.3s ease-out; 
            min-height:100vh;
            height:auto;  
            scroll-behavior:auto; 
        }
        .menuItem{
            display:flex;
            flex-direction:column;
            padding-top:16px;
            padding-bottom:16px;
            align-items:center;
            justify-content:center;
            font-size:24px;
            font-weight:900;
        }
        .menuItem:hover{
            background:${({theme})=>theme.color.blue_primary};
            transition: all 0.3s ease-out;
        }
        .menuItem > a{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            width:100%;
        }
        .menuItem > a >svg {
            margin-left:4px;
        }
    }
    @media screen and (min-width:1024px){
        display:none;
    }
`