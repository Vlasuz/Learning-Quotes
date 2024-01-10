import styled from "styled-components";

export const QuestTxtStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    h2{
        color: #000;
        font-size: 24px;
        font-weight: 700;
        line-height: normal;
        margin-bottom: 24px;
        text-align: center;
    }

    p{
        color: #000;
        text-align: center;
        font-size: 20px;
        font-weight: 400;
        line-height: 28px;
        max-width: 400px;
    }

    .vocabulary{
        margin-top: auto;

        p{
            color: #000;
            font-size: 20px;
            font-weight: 700;
            line-height: normal;
        }
    }

    img{
        max-width: 200px;
    }

    span{
        color: #FF5C00;
        transition: all .3s ease;
        display: inline-block;
        width: fit-content;
        cursor: pointer;

        &:after{
            display: block;
            content: '';
            width: 100%;
            height: 1px;
            background: #FF5C00;
            margin-top: -4px;
        }
    }
`