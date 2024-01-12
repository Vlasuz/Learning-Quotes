import styled from "styled-components";

import VocabularyBgd from '../../assets/img/vocabulary_bgd.png'

export const VocabularyStyle = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.50);
    z-index: 10;
    
    .vocabulary{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 11;
        width: 100%;
        max-width: 586px;
        padding: 70px 30px 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        background: url(${VocabularyBgd}) no-repeat;
        background-size: 100% 100%;

        &__close{
            width: 40px;
            height: 40px;
            position: absolute;
            top: 60px;
            right: 60px;
        }

        &__ok{
            display: block;
            padding: 16px;
            width: 100%;
            max-width: 230px;
            border-radius: 20px;
            background: #FCA08B;
            transition: all .3s ease;
            margin: 0 auto;
            margin-top: auto;
            transition: all .3s ease;

            color: #FFF;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
            line-height: 32px;

            &:hover{
                background: #DD6D55;
            }
        }

        &__list{
            width: 100%;
            height: 100%;
            overflow-y: auto;
            max-width: 400px;
            margin: 0 auto;
            margin-bottom: 30px;

            li{
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 5px;
                margin-bottom: 15px;
                &:last-child{
                    margin-bottom: 0;
                }

                p{
                    color: #FFF;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: normal;
                }
            }
        }
    }

    h2{
        color: #FFF;
        text-align: center;
        font-size: 40px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 40px;
    }

    h3{
        color: #FFF;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
    }

    @media screen and (max-width: 768px){
        
    }
`