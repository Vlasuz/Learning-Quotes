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
        max-width: 24px;
        cursor: pointer;
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