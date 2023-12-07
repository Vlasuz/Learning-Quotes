import styled from "styled-components";

export const FeatersStyle = styled.div`
    padding-top: 127px;
    text-align: center;
    padding-bottom: 80px;

    h2{
        font-size: 56px;
        font-weight: 700;
        line-height: 69px;
        color: #000;
        /* margin-bottom: 48px; */
    }
    .featers__sub_title{
        font-size: 24px;
        font-weight: 700;
        line-height: 20px;
        color: #FCA08B;
        margin-bottom: 9px;
    }

    .featers{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 13px;

        li{
            margin-bottom: 20px;
            background: #fff;
            border-radius: 48px;
            padding: 32px 91px 32px 32px;
            display: flex;
            align-items: center;
            text-align: start;

            &:last-child{
                margin-bottom: 0;
            }

            img{
                width: 48px;
                height: 48px;
            }

            &:nth-child(1){
                .featers__icons{
                    background: #F5CFB6;
                }
            }
            &:nth-child(2){
                .featers__icons{
                    background: #E39E9A;
                }
            }
            &:nth-child(3){
                .featers__icons{
                    background: #8DAAC7;
                }
            }
        }

        .featers__icons{
            padding: 20px;
            border-radius: 50%;
            margin-right: 24px;
            border: 1px solid #D8D8D8;
            filter: drop-shadow(0px 24px 32px rgba(0, 0, 0, 0.08));;
        }

        img{
            max-width: 585px;
        }

        h3{
            font-size: 18px;
            font-weight: 700;
            line-height: 23px;
            margin-bottom: 8px;
            color: #000;
        }
        p{
            font-size: 14px;
            line-height: 22px;
            color: #585858;
            max-width: 323px;
        }
    }

    @media screen and (max-width: 1092px) {
        padding-bottom: 112px;
        h2{
            margin-bottom: 58px;
        }
        .featers{
            /* flex-direction: column; */
            img{
                max-width: 435px;
            }

            li{
                padding: 18px;
            }

            .featers__icons{
                padding: 12px;
            }
        }
    }
    @media screen and (max-width: 768px){
        padding: 50px 0;
        h2{
            margin-bottom: 0px;
            font-size: 36px;
            line-height: normal;
        }
        .featers{
            flex-direction: column-reverse;

            &__list{
                width: 100%;
            }
            li{
                width: 100%;
                padding: 20px;
            }
        }
    }
`