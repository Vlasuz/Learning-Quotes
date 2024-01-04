import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const QuizStartStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${PageBgd}) no-repeat;
    background-size: cover;
    padding: 46px 45px 86px;

    .select{
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: center;
    }

    a{
        text-align: center;

        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
    }

    img{
        max-width: 327px;
    }

    @media screen and (max-width: 768px) {
        margin: 20px 0 30px;
        padding: 25px 25px 43px;
    }
`