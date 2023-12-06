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
                padding: 16px 60px;
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
`