import styled from "styled-components";

import RamkaBgd from '../../assets/img/questionRamka2.png' 

export const ReadingQuestQuestionStyle = styled.div`
    background: url(${RamkaBgd}) no-repeat;
    background-size: 100% 100%;
    max-width: 780px;
    text-align: center;
    padding: 40px 70px 90px;
    margin: 0 auto;
    margin-bottom: 40px;

    h2{
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 18px;
        position: relative;
    }

    p{
        color: #000;
        font-size: 32px;
        font-weight: 400;
        line-height: normal;
        
    }

    @media screen and (max-width: 768px) {
        h2{
            font-size: 28px;
        }

        p{
            font-size: 28px;
        }
    }
`