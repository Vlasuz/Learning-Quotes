import styled from "styled-components";

import BookBgd from '../../assets/img/bookBgd.JPG'

export const BookQuestStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${BookBgd}) no-repeat;
    background-size: cover;
    background-position: 0px -40px;
    padding: 80px 100px 50px;

    .book{
        display: flex;
        width: 100%;

        &__lft{
            width: 50%;
            padding-right: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
        }

        &__rht{
            width: 50%;
        }
    }

    @media screen and (max-width: 768px) {
        /* margin: 20px 0 30px;
        padding: 25px 25px 43px; */
    }
`