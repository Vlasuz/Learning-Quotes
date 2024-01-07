import styled from "styled-components";

export const NavigationQuestStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;

    button{
        display: flex;
        align-items: center;
        gap: 6px;

        color: #000;
        font-size: 14px;
        font-weight: 700;
        line-height: 150%;

    }

    img{
        width: 16px;
        height: 16px;
    }

    .arrow__next{
        transform: rotateY(180deg);
    }

    @media screen and (max-width: 768px) {
        margin-top: 50px;
    }
`