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
`