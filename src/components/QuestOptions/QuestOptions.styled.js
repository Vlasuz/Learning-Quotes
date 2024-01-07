import styled from "styled-components";

import optionBgd from '../../assets/img/optionBgd.png'

export const QuestOptionsStyle = styled.ul`
    
    margin-top: 60px !important;
    padding: 0 50px !important;
    

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
        width: 50px;
        height: 50px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;

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

    li{
        margin-bottom: 35px;

        &:last-child{
            margin-bottom: 0;
        }
    }

    .correct{
        margin-left: auto;
    }

`