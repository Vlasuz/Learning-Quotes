import styled from "styled-components";

import BgdArea from '../../assets/img/area-bgd.jpg'

export const AreaStyle = styled.div`
    background: url(${BgdArea}) no-repeat;
    background-size: cover;
    margin: 24px 0 52px;
    padding: 25px 90px 35px;

    .area__top{
        display: flex;
        align-items: center;
        gap: 30px;
        justify-content: space-between;
        margin-bottom: 70px;
    }

    @media screen and (max-width: 1200px) {
        padding: 25px 15px;
    }

    @media screen and (max-width: 768px) {
        
        .area__top{
            margin-bottom: 30px;
            flex-direction: column;
            gap: 15px;
        }
    }
`