import styled from "styled-components";

import StatusBgd from '../../../../assets/img/statusList.png'

export const AreaStatsStyle = styled.div`
    background: url(${StatusBgd}) no-repeat;
    background-size: 100% 100%;
    padding: 50px 60px;
    margin-top: 30px;
    width: 100%;
    max-width: 350px;

    h2{
        color: #000;
        font-size: 32px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 7px;
    }

    a{
        display: block;
        color: #000;
        font-size: 23px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 10px;
    }

    h3{
        color: #000;
        font-size: 23px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 7px;
        max-width: 250px;
    }

    button{
        color: #172239;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 32px;
        border-radius: 20px;
        background: #8DAAC7;
        width: 100%;
        max-width: 250px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 5px;
        margin-top: 20px;
        transition: all .3s ease;

        &:hover{
            background: #437BAD;
        }
    }

    @media screen and (max-width: 1024px) {
        max-width: 300px;
        padding: 20px 40px;
    }

    @media screen and (max-width: 992px) {
        max-width: 270px;

        h2{
            font-size: 28px;
        }
        h3{
            font-size: 20px;
        }
        a{
            font-size: 20px;
        }

    }
`