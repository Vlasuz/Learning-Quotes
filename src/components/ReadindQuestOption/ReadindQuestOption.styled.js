import styled from "styled-components";

import optionBgd from '../../assets/img/OptionBgdReading.png'

export const ReadindQuestOptionStyle = styled.div`
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
        width: 70px;
        height: 70px;
        border-radius: 50%;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 15px;
        position: absolute;
        bottom: 0;
        right: 0;

        svg{
            width: 45px;
            height: 45px;
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
        max-width: 300px;
        height: 140px;
        padding: 20px 30px;

        color: #FFF;
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
    }

    ul{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        gap: 30px;

    }

    li{
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
    }
`