import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const QuizStartStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${PageBgd}) no-repeat;
    background-size: cover;
    padding: 46px 45px 86px;

    @media screen and (max-width: 768px) {
        margin: 20px 0 30px;
        padding: 25px 25px 43px;
    }
`