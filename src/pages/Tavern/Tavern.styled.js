import styled from "styled-components";

import BgdTaverna from '../../assets/img/taverna.jpg'
import BgdDesk1 from '../../assets/img/tavern-desc-1.png'
import BgdDesk2 from '../../assets/img/tavern-desc-2.png'
import BgdDesk3 from '../../assets/img/tavern-desc-3.png'
import BgdDesk4 from '../../assets/img/tavern-desc-4.png'

export const TavernStyle = styled.div`
    background: url(${BgdTaverna}) no-repeat;
    background-size: cover;
    padding: 57px 60px 200px;
    margin: 24px 0 52px;

    .back__btn{
        display: flex;
        align-items: center;
        margin-bottom: 96px;
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

    .desk{
        display: flex;
        gap: 30px;
        li{
            background: url(${BgdDesk1}) no-repeat;
            background-size: calc(100% + 70px);
            background-position: -35px -30px;
            width: 100%;
            max-width: 300px;
            height: 460px;
            padding: 20px 20px;

            &:nth-child(2){
                background: url(${BgdDesk2});
                background-size: calc(100% + 70px);
                background-position: -35px -30px;
            }
            &:nth-child(3){
                background: url(${BgdDesk3});
                background-size: calc(100% + 70px);
                background-position: -20px -30px;
            }
            &:nth-child(4){
                background: url(${BgdDesk4});
                background-size: calc(100% + 70px);
                background-position: -25px -30px;
            }
        }

        h2{
            color: #FFF;
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            text-align: center;
        }

    }
`