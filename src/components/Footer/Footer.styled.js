import styled from "styled-components";

export const FooterStyle = styled.div`
    padding: 24px 0;
    background: #fff;
    margin-top: auto;

    .footer{
        &__inner{
            display: flex;
            align-items: center;
            gap: 10px;

            p{
                font-size: 12px;
                line-height: 140%;
                color: #111827;            
            }
        }
        &__logo{
            font-size: 20px;
            font-weight: 700;
            line-height: 28px;
            color: #1F2937;
            margin-right: 40px;
        }


        &__list{
            display: flex;
            gap: 40px;
            margin-left: auto;

            a{
                font-size: 12px;
                line-height: 140%;
                color: #111827;
                transition: all .3s ease;

                &:hover{
                    color: #FBAC79;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        padding: 20px 0;
        .footer{
            &__inner{
                justify-content: space-between;
            }
            &__list{ 
                gap: 20px;
                margin-left: 0;
            }
            &__logo{
                margin-right: 0;
            }
        }
    }
    @media screen and (max-width: 620px) {
        .footer{
            &__inner{
                flex-direction: column;
                p{
                    order: 3;
                }
            }
            &__logo{
                order: 1;
            }
            &__list{
                order: 2;
            }

        }
    }
`