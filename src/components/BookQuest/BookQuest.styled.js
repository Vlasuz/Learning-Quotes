import styled from "styled-components";

import BookBgd from '../../assets/img/bookBgd.JPG'
import BookBgdMob from '../../assets/img/pageBgd.jpg'

export const BookQuestStyle = styled.div`
    margin: 32px 0 56px;
    background: url(${BookBgd}) no-repeat;
    background-size: 100% 100%;
    background-position: 0px 0px;
    padding: 80px 100px 100px;
    display: flex;
    flex-direction: column;
    height: 100vh;

    .book{
        display: flex;
        width: 100%;

        &__lft{
            width: 50%;
            padding-right: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        &__rht{
            width: 50%;
        }
    }

    @media screen and (max-width: 1024px) {
        padding: 30px 30px 80px;
        margin: 20px 0 0;
    }

    @media screen and (max-width: 768px) {
        background: url(${BookBgdMob}) no-repeat;
        background-size: cover;
        margin: 20px 0 30px;
        padding: 25px 25px 43px;

        .book{
            flex-direction: column;

            &__lft{
                width: 100%;
                padding-right: 0px;
            }
            &__rht{
                width: 100%;
            }
        }
    }
`