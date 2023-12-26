import styled from "styled-components";

export const LangNavigationStyle = styled.div`
    margin-top: 96px;
    display: flex;
    gap: 16px;

    button{
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #EAEAEA;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .3s ease;
        &:hover{
            border: 1px solid #E1A073;
        }
    }

    img{
        max-width: 16px;
        height: 16px;
    }
`