import styled from "styled-components";

import ResultsBgd from '../../assets/img/vocabulary_bgd.png';

export const QuestResultStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.50);
    z-index: 10;

    .results{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;

        background: url(${ResultsBgd}) no-repeat;
        background-size: cover;
        height: 690px;
        width: 755px;
        padding: 60px 60px;

        display: flex;
        flex-direction: column;

        h2{
            color: #FFF;
            text-align: center;
            font-size: 40px;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 40px;
        }
    }

    .question{
        width: 100%;
        height: 100%;
        max-height: 405px;
        overflow-y: auto;
        margin-bottom: 10px;

        img{
            max-width: 30px;
        }

        li{
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 20px;
            text-align: center;
            margin-bottom: 40px;
            &:last-child{
                margin-bottom: 0;
            }
        }

        &__answer{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 5px;
        }

        p{
            color: #FFF;
            font-size: 32px;
            font-weight: 700;
            line-height: normal;
        }
    }

    .ok__btn{
        display: block;
        margin: 0 auto;
        text-align: center;
        width: 100%;
        max-width: 235px;
        border-radius: 20px;
        background: #FCA08B;
        padding: 16px;
        margin-top: auto;
        transition: all .3s ease;

        color: #FFF;
        font-size: 20px;
        font-weight: 700;

        &:hover{
            background: #DD6D55;
        }
    }

    .close__btn{
        max-width: 40px;
        position: absolute;
        top: 50px;
        right: 60px;
    }
`