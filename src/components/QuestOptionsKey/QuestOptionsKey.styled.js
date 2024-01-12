import styled from "styled-components";

import optionBgd from '../../assets/img/optionBgd.png'

export const QuestOptionsKeyStyle = styled.div`
    padding: 0 0 0 20px;
    width: 100%;

    span svg {
        display: none;
    }
    input {
        display: none;

    }
    input:checked + span svg {
        display: block;
    }

    span{
        background: url(${optionBgd}) no-repeat;
        background-size: cover;
        overflow: hidden;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;

        svg{
            width: 25px;
            height: 25px;
        }
    }

    label{
        display: flex;
        align-items: center;
        cursor: pointer;
        width: 100%;
        max-width: 500px;

        color: #1C274C;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
    }

    h2{
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        margin-bottom: 20px;
    }

    ul{
        display: flex;
        align-items: center;
        gap: 20px;
        justify-content: center;
    }

    .quest{
        margin-bottom: 30px;
        &:last-child{
            margin-bottom: 0;
        }    
    }

    @media screen and (max-width: 768px){
        padding: 0;
    }

    @media screen and (max-width: 575px){
        ul{
            flex-direction: column;
        }
    }
`