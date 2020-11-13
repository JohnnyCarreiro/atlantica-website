import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    padding:16px;
    margin:16px;
    border:1px solid #333;
    border-radius:8px;
    width:100%;
    min-height:375px;
 a { 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    color:#333;
    
 }
    .Icon-sun{
        color:${({theme})=>theme.color.yallow_primary};
        height: 54px;
        width:auto;
        margin-bottom: 48px;
        margin-top:32px;
    }
    h3{
        margin-bottom:32px;
    }
    p{
        text-align:center;
        margin-bottom:48px;
    }
    
`;
