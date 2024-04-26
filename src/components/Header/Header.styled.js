import styled from "styled-components";

export const HeaderStyle = styled.div`
    padding: 28px 0 19px;
    border-bottom: 1px solid #D8D8D8;
    position: relative;
    z-index: 10;

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
                transition: all .3s ease;

                &:hover{
                    color: #FBAC79;
                }
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
                transition: all .3s ease;

                &:hover{
                    color: #FBAC79;
                }
            }

            &_log{
                padding: 11px 35px;
                color: #fff;
                background-color: #23232D;
                border: 1px solid #23232D;
                border-radius: 12px;
                transition: all .3s ease;

                &:hover{
                    background-color: #fff;
                }
            }

        }

        &__mob{
            display: none;
        }
        &__burger{
            max-width: 24px;
            cursor: pointer;
            transition: all .3s ease;                        
        }
        /* &__burger_active{
            transform: rotateY(180deg);
        } */

        &__burger__body{
            position: absolute;
            transition: all .3s ease;
            left: 0;
            top: 49px;
            background: #fff;
            border-radius: 0 0 15px 15px;
            padding: 12px;
            width: 100%;
            max-height: 0;
            opacity: 0;
            visibility: hidden;

            li{
                margin-bottom: 15px;
                &:last-child{
                    margin-bottom: 0;
                }
            }

            a{
                display: block;
                color: #333;
                font-size: 16px;
                font-weight: 500;
                line-height: 22px;
                padding: 12px;
                border-radius: 10px;
                transition: all .3s ease;
                text-align: center;

                &:hover{
                    background: #EFD2BF;
                }
            }

        }

    }

    .active{
        .header__burger{
            transform: rotateY(180deg);
        }

        .header__burger__body{
            max-height: 1000px;
            opacity: 1;
            visibility: visible;
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
            &__mob{
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