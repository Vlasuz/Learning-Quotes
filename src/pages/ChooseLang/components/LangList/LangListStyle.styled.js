import styled from "styled-components";

export const LangListStyle = styled.ul`
    width: 100%;

    li{
        margin-bottom: 24px;
        width: 100%;
        &:last-child{
            margin-bottom: 0;
        }
    }

    h2{
        color: #484848;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        text-align: center;
    }

    img{
        max-width: 463px;
    }

    button{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0px 30px 12px;
        border-radius: 12px;
        border: 2px solid #ADB4BB;
        background: #FFF;
        transition: all .3s ease;
    }
    .arabic{
        &.selected,
        &:hover{
            border: 2px solid #E1A073;
            background: #F5CFB6;
        }
    }

    .chinese{
        &.selected,
        &:hover{
            border: 2px solid #E39E9A;
            background: #E39E9A;
        }
    }
    .russian{
        &.selected,
        &:hover{
            border: 2px solid #8DAAC7;
            background: #8DAAC7;
        }
    }
`