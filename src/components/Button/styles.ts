import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    background: ${({theme})=>theme.color.yallow_primary};
    border: none;
    border-radius:8px;
    padding:20px 0;

    a{
        padding: 0 40px;
    }
`;
