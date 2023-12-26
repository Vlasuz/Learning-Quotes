import styled from "styled-components";

export const LangSlideStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 189px 30px 32px;
    border-radius: 64px;
    border: 1px solid #EAEAEA;

    img{
        max-width: 369px;
    }

    .slide__photo{
        position: relative;
        margin-bottom: 42px;

        &__bgd{
            position: absolute;
            top: 0;
            z-index: -1;
        }
    }
    .text__container{
        text-align: center;
        margin-bottom: 38px;
    }

    h2{
        color: #172239;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
        margin-bottom: 16px;
        position: relative;

        &::after{
            content: '';
            display: block;
            height: 2px;
            width: 70px;
            border-radius: 5px;
            background: #E1A073;
            position: absolute;
            bottom: 0;
            right: -15px;
        }
    }
    p{
        color: #6D6D78;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        width: 100%;
        max-width: 336px;
    }

    @media screen and (max-width: 768px) {
        padding: 30px;

        .slide__photo{
            margin-bottom: 22px;
        }

        h2{
            font-size: 20px;
            margin-bottom: 10px;
        }

        .text__container{
            margin-bottom: 20px;
        }
    }
`