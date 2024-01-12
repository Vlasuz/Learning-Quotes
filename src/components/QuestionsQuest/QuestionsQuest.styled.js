import styled from "styled-components";

import RamkaBgd from '../../assets/img/questionRamka.png'

export const QuestionsQuestStyle = styled.div`
    background: url(${RamkaBgd}) no-repeat;
    background-size: 100% 100%;
    padding: 70px 80px 140px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 30px;
        display: flex;
        align-items: center;
    }

    span{
        margin-left: 7px;
    }
    
    p{
        color: #000;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        max-width: 390px;
    }

    @media screen and (max-width: 575px){
        padding: 55px 44px 65px;
    }
`