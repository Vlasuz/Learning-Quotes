import styled from "styled-components";

export const FeatersStyle = styled.div`
    padding-top: 127px;
    text-align: center;

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
            .featers__icons{
                padding: 20px;
                border-radius: 50%;
                margin-right: 24px;
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
`