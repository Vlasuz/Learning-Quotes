import styled from "styled-components";

import RamkaBgd from '../../assets/img/questionRamka.png' 

export const ReadingQuestQuestionStyle = styled.div`
    background: url(${RamkaBgd}) no-repeat;
    background-size: 100%;
    max-width: 780px;
    text-align: center;
    padding: 90px 80px 140px;
    margin: 0 auto;

    h2{
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 18px;
    }

    p{
        color: #000;
        font-size: 32px;
        font-weight: 400;
        line-height: normal;
        
    }
`