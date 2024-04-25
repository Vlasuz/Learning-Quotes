import styled from "styled-components";

import ResultsBgd from '../../assets/img/vocabulary_bgd.png';

export const QuestResultStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 10;
    
    .results_bgd{
        background: rgba(0, 0, 0, 0.50);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .results{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;

        background: url(${ResultsBgd}) no-repeat;
        background-size: 100% 100%;
        width: 100%;
        max-width: 830px;
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

        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background: #783724;
            border-radius: 12px;
        }
        &::-webkit-scrollbar-track{
            background: #F2CCB3;
            border-radius: 12px;
        }

        img{
            max-width: 30px;
        }

        li{
            /* display: grid;
            grid-template-columns: 1fr 1fr 1fr; */
            display: flex;
            flex-direction: column;
            gap: 20px;
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 1px solid #fff;
            padding-bottom: 10px;
            &:last-child{
                margin-bottom: 0;
                /* border-bottom: none; */
            }
        }

        &__inner {
            display: flex;
            gap: 15px;
            justify-content: center;
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

    @media screen and (max-width: 768px){
        .question{
            p{
                font-size: 28px;
            }

            li{
                grid-template-columns: 1fr;
            }
        }

        .results {
            h2{
                font-size: 34px;
            }
        }
    }
`