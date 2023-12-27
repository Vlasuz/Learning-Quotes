import styled from "styled-components";

import BgdTaverna from '../../assets/img/taverna.jpg'

export const TavernStyle = styled.div`
    background: url(${BgdTaverna}) no-repeat;
    background-size: cover;
    padding: 57px 60px 320px;
    margin: 24px 0 52px;

    .back__btn{
        display: flex;
        align-items: center;
        margin-bottom: 113px;
        color: #FFF;
        font-size: 14px;
        font-weight: 700;
        line-height: 150%;
        transition: all .3s ease;
        &:hover{
            color: #F2CCB3;
        }


        img{
            width: 16px;
            height: 16px;
            margin-right: 6px;
        }
    }
`