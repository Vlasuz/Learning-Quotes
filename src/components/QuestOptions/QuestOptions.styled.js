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

    @media screen and (max-width: 768px) {
        margin-top: 20px !important;

        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
    }
    @media screen and (max-width: 575px) {
        padding: 0 0px !important;

        label{
            text-align: center;
            font-size: 20px;
            flex-direction: column;
        }

        span{
            width: 35px;
            height: 35px;
            margin-right: 0;
        }

        .correct{
            img{
                width: 30px;
                height: 30px;
            }
        }
    }
`