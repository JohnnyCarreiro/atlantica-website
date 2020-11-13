import styled from 'styled-components'

export const Container = styled.div`
    margin-bottom:80px;
    color:${({theme})=>theme.color.gray_300};
    .mainContainer{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
        margin-top:80px;
    }
    .contacts{
        display:flex;
        flex-direction:column;
        align-items:center;
        h1{
            color:${({theme})=>theme.color.gray_300};
            margin-bottom:32px;
        }
    }
    .companyContacts{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
    }
    .companyContacts h1{
        margin:32px 0 32px 0;
    }
    .companyContacts h3{
        width:50%;
        color:${({theme})=>theme.color.gray_400};
        margin-bottom:32px;
    }
    @media screen and (min-width:1024px){
        .contactsAndMap{
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            max-width:1120px;
            width:100%;
            padding:8px;
            margin:0;
        }
    }
    

    @media screen and (max-width:1024px){
        padding-top: 60px;
        .mainContainer{
            margin-top:40px;
        }
        .companyContacts{
            display:block;
            text-align:left;
        }
        .companyContacts h1{
            font:${({theme})=>theme.texts.main_title_small};
        }
        .companyContacts h3{
            width:100%;
            font:${({theme})=>theme.texts.main_subtitle};
            color:${({theme})=>theme.color.gray_400};
            margin-bottom:32px;
        }
    }
`