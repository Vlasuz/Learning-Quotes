import styled from "styled-components";

export const HeaderLoginStyle = styled.div`
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 24px;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    position: relative;

    h2{
        font-size: 20px;
        font-weight: 700;
        color: #1F2937;
    }

    .header__login{
        display: flex;
        gap: 24px;
        a{
            display: flex;
            justify-content: center;
            width: 171px;
            padding: 16px 34px;
            white-space: nowrap;
            border-radius: 20px;
            color: #172239;
            font-size: 20px;
            font-weight: 700;
            line-height: 32px;
            transition: all .3s ease;
        }

        &_log{
            background: #F2CCB3;
            border: 1px solid #F2CCB3;
            &:hover{
                background: #FBAC79;
                border: 1px solid #FBAC79;
            }
        }
        &_sign{
            border: 1px solid #EAEAEA;
            &:hover{
                border: 1px solid #FBAC79;
            }
        }
    }

    .header__burger{
        display: none;
        img{
            max-width: 24px;
        }
        cursor: pointer;

        ul{
            position: absolute;
            transition: all .3s ease;
            left: 0;
            top: 36px;
            background: #fff;
            border-radius: 0 0 15px 15px;
            padding: 12px;
            width: 100%;
            z-index: 11;

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

    .header__profile{
        display: flex;
        align-items: center;
    
        h3{
            color: #ECF0FF;
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 130%;
        }
        h2{
            color: #1F2937;
            font-size: 16px;
            font-weight: 700;
            line-height: 150%;
            margin-right: 12px;
        }
        &__img{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 48px;
            height: 48px;
            border-radius: 50%;
            background: #9e6b58;
            margin-right: 12px;
        }

        &__list{

        }
    }
    .profile__list__head{
        display: flex;
        align-items: center;
        cursor: pointer;
        
        img{
            width: 30px;
            height: 30px;
        }
    }
    .profile__list__body{
        position: absolute;
        top: 112px;
        right: 10px;
        z-index: 9;

        border-radius: 8px;
        border: 1px solid #FFF;
        background: #FFF;
        box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
        width: 100%;
        max-width: 270px;
        padding: 12px;

        a{
            display: block;
            color: #333;
            font-size: 16px;
            font-weight: 500;
            line-height: 22px;
            padding: 12px;
            border-radius: 10px;
            background: transparent;
            width: 100%;
            transition: all .3s ease;
            text-align: start;

            &:hover{
                background: #EFD2BF;
            }
        }

        li{
            margin-bottom: 8px;
            &:last-child{
                margin-bottom: 0;
            }
        }

        @media screen and (max-width: 768px){
            top: 90px;
        }
    }
    .profile__list__bgd{
        position: fixed;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        margin-top: 110px;

        background: rgba(0, 0, 0, 0.50);
        filter: blur(10px);
        z-index: 8;
    }

    @media screen and (max-width: 768px) {
        .header__login{
            a{
                padding: 10px 15px;
                width: 120px;
            }
        }
    }
    @media screen and (max-width: 575px) {
        .header__burger{
            display: block;
        }
        .header__login{
            display: none;
        }
    }
`