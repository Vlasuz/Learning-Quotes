import styled from "styled-components";

export const QuizTitleStyle = styled.div`
    text-align: center;
    margin: 60px 0 45px;

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
        font-weight: 700;
        line-height: normal;        
    }

    @media screen and (max-width: 768px) {
        margin: 30px 0 20px;

        h2{
            font-size: 25px;
            margin-bottom: 10px;
        }

        p{
            font-size: 20px;
        }
    }
`