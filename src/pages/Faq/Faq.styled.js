import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const FaqStyle = styled.div`
    text-align: center;
    background: url(${PageBgd}) no-repeat;
    background-size: cover;
    padding: 110px 30px 198px;
    margin: 32px 0 56px;

    h2{
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 18px;
    }

    h3{
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 12px;
    }

    p{
        color: #000;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        max-width: 400px;
        margin: 0 auto;
    }

    .question{
        margin-bottom: 40px;
        &:last-child{
            margin-bottom: 0;
        }
    }

    @media screen and (max-width: 768px) {
        padding: 50px 15px 100px;
        margin: 20px 0 36px;
        
        h2{
            font-size: 26px;
            margin-bottom: 12px;
        }

        h3{
            font-size: 24px;
            margin-bottom: 5px;
        }

        p{
            font-size: 16px;
            line-height: 20px;
        }

        .question{
            margin-bottom: 20px;
        }
    }
`