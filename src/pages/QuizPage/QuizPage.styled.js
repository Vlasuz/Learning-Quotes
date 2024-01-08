import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const QuizPageStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${PageBgd}) no-repeat;
    background-size: cover;
    padding: 46px 45px 90px;

    .audio__img{
        max-width: 249px;
        margin: 0 auto;
        margin-bottom: 30px;
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

    @media screen and (max-width: 768px) {
        margin: 20px 0 30px;
        padding: 25px 25px 43px;

        .audio__next{
            margin-top: 60px;
            font-size: 18px;
            padding: 10px;
        }
    }
` 