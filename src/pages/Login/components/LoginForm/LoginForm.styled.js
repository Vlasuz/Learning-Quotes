import styled from "styled-components";

export const LoginFormStyle = styled.form`
    .form__input__con{
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        &:last-child{
            margin-bottom: 0;
        }

        .input__img{
            width: 100%;
            position: relative;
        }
        

        label{
            margin-bottom: 12px;
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #6D6D78;
        }

        input{
            border-radius: 20px;
            border: 2px solid #EAEAEA;
            padding: 20px 16px 20px 68px;
            width: 100%;
            font-size: 20px;
            font-weight: 400;
            line-height: 32px;
            color: #172239;

            &:focus{
                border: 2px solid #F2CCB3;
            }
            &::placeholder{
                font-size: 20px;
                font-weight: 400;
                line-height: 24px;
                color: #6D6D78;
            }
        }

        img{
            max-width: 24px;
            position: absolute;
            top: 0;
            left: 24px;
        }
    }

    .form__input__check{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        input{
            outline: none;
            height: 24px;
            width: 24px;
            border-radius: 50%;
            margin-right: 29px;
        }
        label{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #172239;
        }

        button{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #172239;
            cursor: pointer;
            
        }

        &_in{
            display: flex;
            align-items: center;
        }
    }

    .form__input__buttons{
        margin-top: 62px;
        display: flex;
        flex-direction: column;

        button{
            border-radius: 20px;
            padding: 16px 50px;
            margin-bottom: 24px;
            font-size: 20px;
            font-weight: 700;
            line-height: 32px;
            &:last-child{
                margin-bottom: 0;
            }
        }

        .log{
            background: #F2CCB3;
            border: 1px solid #F2CCB3;
            transition: all .3s ease;
            &:hover{
                background: #FBAC79;
                border: 1px solid #FBAC79;
            }
        }

        .sign{
            border: 1px solid #EAEAEA;
            transition: all .3s ease;

            &:hover{
                border: 1px solid #FBAC79;
            }
        }
    }

    .form__input__pay{
        text-align: center;
        margin-top: 64px;

        h3{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #172239;
            margin-bottom: 29px;
        }

        li{
            /* width: 100%; */
            /* max-width: 272px; */
        }

        a{
            width: 100%;
            max-width: 272px;
            display: flex;
        }

        img{
            max-width: 24px;

        }
    }
`