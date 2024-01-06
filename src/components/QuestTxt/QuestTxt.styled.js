import styled from "styled-components";

export const QuestTxtStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 24px;
        text-align: center;
    }

    p{
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        max-width: 400px;
    }

    .vocabulary{
        margin-top: auto;
        margin-top: 50px;

        p{
            color: #000;
            font-size: 20px;
            font-weight: 700;
            line-height: normal;
        }
    }

    img{
        max-width: 200px;
    }
`