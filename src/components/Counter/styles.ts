import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    .border{
        border: 1px solid #D4B738;
        width:184px;
        height:184px;
        border-radius:50%;
        padding:20px;
        margin-bottom:24px;
    }
    .sunBG{
        background:transparent radial-gradient(closest-side at 50% 50%, ${({theme})=>theme.color.yallow_primary} 0%, ${({theme})=>theme.color.orange_primary} 100%) 0% 0% no-repeat padding-box; 
        width:100%;
        height:100%;
        border: none;
        border-radius:50%;
    }
`;
