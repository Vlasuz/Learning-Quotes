import styled from "styled-components";

import optionBgd from '../../assets/img/OptionBgdReading.png'

export const ReadindQuestOptionStyle = styled.div`
    span svg {
        display: none;
    }
    input {
        display: none;
        transition: all 0.3 ease;

    }
    input:checked + span svg {
        display: block;
        transition: all 0.3 ease;
    }

    span{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 5px;
        right: 15px;
        transition: all 0.3 ease;

        svg{
            width: 50px;
            height: 50px;
        }
    }

    label{
        position: relative;
        background: url(${optionBgd}) no-repeat;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: 100%;
        max-width: 370px;
        height: 170px;
        padding: 20px 30px;
        transition: all 0.3 ease;

        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
    }

    p{
        position: absolute;
        top: 20px;
        left: 35px;

        color: #FFF;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        gap: 30px;

    }

    li{
        width: 100%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }

    @media screen and (max-width: 768px) {

        ul{
            grid-template-columns: 1fr;
            gap: 10px;
        }

        p{
            font-size: 28px;
        }

        label{
            font-size: 28px;
        }
    }
`