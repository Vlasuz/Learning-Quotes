import styled from "styled-components";

export const TrainingSwampCardStyle = styled.div`
    .card{
        background: #FDE7B6;
        padding: 50px;
        width: 100%;
        max-width: 850px;
        margin: 0 auto;
        height: 540px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .8s ease;
        cursor: pointer;

        h2 {
            font-weight: 600;
            font-size: 32px;
            line-height: 36px;
            color: #000;
            max-width: 700px;
            text-align: center;
        }

        &.active {
            transform: rotateY(180deg);
        }

        @media screen and (max-width: 768px) {
            height: 380px;
        }
    }

    .card__answ{
        margin-top: 50px;
        display: flex;
        gap: 50px;
        justify-content: center;

        button {
            transition: all .3s ease;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.9);
            }
        }

        @media screen and (max-width: 768px) {
            margin-top: 20px;
            gap: 30px;
        }
    }
`