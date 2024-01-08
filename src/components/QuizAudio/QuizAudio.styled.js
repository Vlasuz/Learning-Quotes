import styled from "styled-components";

export const QuizAudioStyle = styled.div`

    .audio{
        display: flex;
        align-items: center;
        gap: 15px;
        justify-content: center;
    }

    .audio__btn{
        width: 75px;
        height: 75px;
    }

    .audio__road{
        cursor: pointer;
        width: 100%;
        max-width: 500px;
    }

    p{
        color: #000;
        font-size: 22.2px;
        font-weight: 700;
        line-height: 130%;
        width: 100%;
        max-width: 60px;
    }

    @media screen and (max-width: 575px) {
        .audio__btn{
            width: 50px;
            height: 50px;
        }

        p{
            font-size: 16px;
        }
    }
`