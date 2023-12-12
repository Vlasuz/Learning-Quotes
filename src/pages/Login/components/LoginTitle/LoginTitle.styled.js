import styled from "styled-components";

export const LoginTitleStyle = styled.div`
    width: 100%;
    text-align: center;
    margin-bottom: 48px;

    h2{
        color: #172239;
        margin-bottom: 16px;
        font-size: 24px;
        font-weight: 700;
        line-height: 32px;
    }

    p{
        color: #6D6D78;
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        max-width: 336px;
        margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 24px;

        h2{
            font-size: 20px;
            line-height: normal;
        }
        p{
            line-height: 22px;
        }
    }
`