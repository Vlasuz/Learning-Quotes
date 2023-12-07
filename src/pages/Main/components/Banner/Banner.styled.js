import styled from "styled-components";

export const BannerStyle = styled.div`
    padding: 64px 0 81px;

    .banner{
        &__inner{
            text-align: center;

            h1{
                font-size: 72px;
                font-weight: 700;
                line-height: 89px;
                color: #000;
                margin-bottom: 16px;
            }
            p{
                font-size: 18px;
                line-height: 28px;
                color: #585858;
                width: 100%;
                max-width: 500px;
                margin: 0 auto;
                margin-bottom: 31px;
            }
        }

        &__buttons{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 24px;

            a{
                width: 100%;
                max-width: 171px;
                padding: 16px;
                border-radius: 20px;
                font-size: 20px;
                font-weight: 700;
                line-height: 32px;
                color: #172239;
                transition: all .3s ease;
            }

            &_log{
                background: #F2CCB3;
                border: 1px solid #F2CCB3;
                &:hover{
                    background: transparent;
                    border: 1px solid #EAEAEA;
                }
            }
            &_sig{
                background: transparent;
                border: 1px solid #EAEAEA;
                &:hover{
                    background: #F2CCB3;
                    border: 1px solid #F2CCB3;
                }
            }
        }
    }
    @media screen and (max-width: 768px) {
        padding: 50px 0;

        .banner__inner{
            h1{
                font-size: 56px;
                line-height: 60px;
                margin-bottom: 10px;
            }
            p{
                font-size: 15px;
                margin-bottom: 15px;
            }
        }
    }
    @media screen and (max-width: 575px) {
        .banner__inner{
            h1{
                font-size: 38px;
                line-height: normal;
            }
        }
        .banner__buttons {
            a{
                max-width: 132px;
                padding: 10px;
                font-size: 16px;
            }
        }
    }
`