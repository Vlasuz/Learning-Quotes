import styled from "styled-components";

export const AreaOwnerStyle = styled.div`
    position: relative;

    img{
        margin-top: 20px;
        max-width: 270px;
        border-radius: 135px;

        @media screen  and (max-width: 768px){
            max-width: 200px;
        }
    }

    .tutorial__owner{
        padding: 12px;
        border-radius: 8px;
        background: #FDE7B6;
        width: 310px;
        position: absolute;
        bottom: -33px;
        right: -56px;
        z-index: 8;
        cursor: pointer;

        h2{
            color: #000;
            text-align: center;
            font-size: 20px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;
            margin-bottom: 15px;
        }

        p{
            color: #000;
            text-align: center;
            font-size: 12px;
            font-style: normal;
            font-weight: 700;
            line-height: 16px;

        }

        &__arrow{
            width: 16px;
            height: 8px;
            position: absolute;
            top: -27px;
            left: 50%;
            transform: translate(-50%);
        }
    }
`