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

    .audio__next{
        display: block;
        text-align: center;
        margin: 0 auto;
        width: 100%;
        max-width: 620px;
        padding: 16px;
        border-radius: 20px;
        background: #93AEC6;
        margin-top: 100px;
        transition: all .3s ease;

        color: #FFF;
        font-size: 20px;
        font-weight: 700;
        line-height: 32px;

        &:hover{
            background: #437BAD;
        }
    }

    @media screen and (max-width: 575px) {
        .audio__btn{
            width: 50px;
            height: 50px;
        }

        p{
            font-size: 16px;
        }

        .audio__next{
            margin-top: 60px;
            font-size: 18px;
            padding: 10px;
        }
    }
`