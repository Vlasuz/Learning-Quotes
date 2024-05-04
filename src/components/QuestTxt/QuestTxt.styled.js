import styled from "styled-components";

export const QuestTxtStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;

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
        max-width: 450px;
    }

    .translations__pos {
        max-height: 500px;
        overflow: auto;
        padding-right: 10px;

        &::-webkit-scrollbar{
            width: 5px;
        }
        &::-webkit-scrollbar-thumb{
            background: #783724;
            border-radius: 12px;
        }
        &::-webkit-scrollbar-track{
            background: #F2CCB3;
            border-radius: 12px;
        }
    }

    .vocabulary__ph{
        margin-top: auto;
        display: block;

        color: #000;
        font-size: 20px;
        font-weight: 700;
        line-height: normal;
        transition: all .3s ease;

        &:hover{
            transform: scale(1.1);
        }
        &:focus{
            transform: scale(0.95);
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

    .translations{
        padding: 12px;
        border-radius: 8px;
        background: #FDE7B6;
        position: absolute;
        width: 100%;
        max-width: 320px;
        display: flex;
        flex-direction: column;


        &__container{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        /* &__pos{
            position: relative;
        } */

        p,
        h2{
            color: #000;
            text-align: center;
            font-family: Urbanist;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 16px;
            margin: 0;
            margin-right: 5px;
        }

        button{
            color: #172239;
            text-align: center;
            font-size: 12.5px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;

            padding: 10px;
            border-radius: 12.5px;
            background: #F2CCB3;
            margin: 0 auto;
            margin-top: 15px;
            transition: all .3s ease;

            &:hover{
                background: #E9AB83;
            }
        }
    }

    @media screen and (max-width: 768px) {
        img{
            max-width: 150px;
        }
    }
`