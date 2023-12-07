import styled from "styled-components";

export const HeaderStyle = styled.div`
    padding: 28px 0 19px;
    border-bottom: 1px solid #D8D8D8;

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;

        &__review{
            display: flex;
            gap: 32px;
            a{
                font-size: 14px;
                line-height: 18px;
                color: #000;
            }
        }

        &__login{
            display: flex;
            align-items: center;
            gap: 30px;
            a{
                font-size: 14px;
                font-weight: 700;
                line-height: 18px;
                white-space: nowrap;
            }

            &_log{
                padding: 11px 35px;
                color: #fff;
                background-color: #23232D;
                border-radius: 12px;
            }

        }

        &__burger{
            max-width: 24px;
            display: none;
            cursor: pointer;
            transition: all .3s ease;
        }
        &__burger_active{
            transform: rotateY(180deg);
        }

    }

    h2{
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        color: #1F2937;
    }

    @media screen and (max-width: 575px) {
        padding: 20px 0;

        .header{
            &__burger{
                display: block;
            }
            &__review{
                display: none;
            }
            &__login{
                display: none;
            }
        }
    }
`