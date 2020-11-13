import styled from 'styled-components';

export const Container = styled.div`
@media screen and (max-width: 1024px) {
    display:flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${({theme})=>theme.color.blue_primary};
    .dropdownMenuContainer {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width:300px;
        height:100%;
    }
    .dropdownMenu{
        display:flex;
        flex-direction:column;
        width: 300px;
        height:100%;
        position: relative;
        text-align: center;
        padding:0 !important;
        margin-top:24px;
    }

    .dropdownMenu.clicked{
        display:none;
    }
    .dropdownTitle{
        border-bottom: 1px solid ${({theme})=>theme.color.gray_900};
        margin-bottom:32px;
    }
    .dropdownTitle > li {
        padding-bottom:8px;
    }
    .dropdownTitle > p{
        width:100%;
        color:${({theme})=>theme.color.gray_800};
        font-weight:400;
        font-size:24px;
        margin-bottom: 8px;
        margin-top:16px;
        padding-bottom:8px;
    }
    .dropdownLink{
        display:block;
        width:100%;
        height:100%;
        padding:16px;
        font-size:18px;
    }
}
@media screen and (min-width:1024px){
    position:absolute;
    top:70px;
    background:${({theme})=>theme.color.gray_900};
    .clicked{
        display:none;
    }
    .dropdownMenuContainer {
        padding:16px;
    }
    .dropdownMenu{
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: center;
        padding:0;
        width:100%;
    }
    .dropdownTitle{
        display:block;
        text-align:center;
        width:100%;
        border-bottom: 1px solid ${({theme})=>theme.color.gray_700};
        margin-bottom:8px;
    }
    .dropdownTitle > p{
        width:100%;
        color:${({theme})=>theme.color.gray_800};
        font-weight:400;
        font-size:18px;
        padding-bottom:4px;
    }
    .dropdownLink{
        display:block;
        width:100%;
        height:100%;
        padding:8px;
        font-size:16px;
        color:${({theme})=>theme.color.gray_500}
    }
}
`;
