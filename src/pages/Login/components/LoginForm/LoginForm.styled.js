import styled from "styled-components";

export const LoginFormStyle = styled.form`
    .navlink{
        display: contents;
    }

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
            height: 24px;
            position: absolute;
            top: 50px;
            left: 24px;
        }
    }

    .form__input__check{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        span svg {
            display: none;
        }
        input {
            display: none;

        }
        input:checked + span svg {
            display: block;
        }


        span{
            width: 24px;
            height: 24px;
            border-radius: 50%;
            cursor: pointer;
            background: #8DAAC7;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 29px;
        }

        label{
            font-size: 14px;
            font-weight: 400;
            line-height: 24px;
            color: #172239;
            display: flex;
            flex-direction: row-reverse;
            cursor: pointer;
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
    .verification__label{
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 4px;
    }
    .verification__inner{
        display: flex;
        justify-content: space-between;
        gap: 10px;   
    }
    .verification__again{
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        gap: 10px;
        justify-content: space-between;

        p{
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            color: #6D6D78;
        }
        button{
            padding: 0;
            font-size: 14px;
            font-weight: 400;
            line-height: 26px;
            color: #F2CCB3;
        }
    }
    .verification__input{
        border-radius: 8px;
        border: 1px solid #EAEAEA;
        max-width: 89px;
        padding: 12px 16px;
        transition: all .3s ease;
        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
        letter-spacing: -0.21px;
        color: #6D6B6B;
        margin-bottom: 8px;

        &:hover{
            border: 1px solid #FBAC79;
        }
        &:focus{
            border: 1px solid #FBAC79;
        }
    }

    .form__input__buttons_mar{
        margin-top: 32px;
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

        ul{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 28px 16px;
            width: 100%;
            max-width: 500px;
            margin: 0 auto;
        }

        li{
            width: 100%;
            max-width: 272px;
            /* display: block; */
        }

        a{
            width: 100%;
            max-width: 272px;
            display: flex;
            padding: 16px 24px;
            justify-content: center;
            font-size: 16px;
            font-weight: 400;
            line-height: 150%; 
            letter-spacing: 0.2px;
            border-radius: 12px;
            border: 1px solid #E9EAEC;
            transition: all .3s ease;

            &:hover{
                border: 1px solid #FBAC79;
            }
        }

        img{
            max-width: 24px;
            margin-right: 12px;
        }
    }
`