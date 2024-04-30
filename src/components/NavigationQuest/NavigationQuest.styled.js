import styled from "styled-components";

export const NavigationQuestStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-right: 50px;
    position: absolute;
    bottom: -60px;
    right: 50px;

    button{
        display: flex;
        align-items: center;
        gap: 6px;

        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 150%;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.1);
        }
        &:active{
            transform: scale(0.95);
        }
    }

    img{
        width: 16px;
        height: 16px;
    }

    .arrow__next{
        transform: rotateY(180deg);
    }

    .arrows{
        margin-left: auto;
    }

    @media screen and (max-width: 768px) {
        padding-right: 0;
    }
`