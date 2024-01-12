import styled from "styled-components";

export const KeywordsQuestionStyle = styled.div`
    width: 100%;

    h2{
        color: #000;
        text-align: center;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 45px;
    }

    li{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        margin-bottom: 24px;

        &:last-child{
            margin-bottom: 0;
        }
    }

    p{
        color: #000;
        font-size: 26px;
        font-weight: 400;
        line-height: 28px;    
    }

    input{
        padding: 10px 15px;
        border-radius: 12px;
        border: 1px solid #000;
        background: transparent;
        width: 100%;
        max-width: 300px;

        color: #000;
        font-size: 24px;
        font-weight: 400;
        line-height: normal;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 30px;

        p{
            font-size: 24px;
        }

        h2{
            margin-bottom: 25px;
        }
    }
`