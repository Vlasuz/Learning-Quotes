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

    @media screen and (max-width: 768px) {
        margin: 20px 0 30px;
        padding: 25px 25px 43px;
    }
` 