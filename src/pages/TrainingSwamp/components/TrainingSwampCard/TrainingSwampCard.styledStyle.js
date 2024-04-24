import styled, { keyframes } from "styled-components";

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const TrainingSwampCardStyle = styled.div`

    .card_con{
        position: relative;
        max-width: 850px;
        margin: 0 auto;

        h2 {
            position: absolute;
            top: -50px;
            left: 0;
            font-size: 28px;
            line-height: 36px;
            transform: none;
        }
    }

    .card{
        background: #FDE7B6;
        padding: 50px;
        height: 540px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: all 1.1s ease;
        cursor: pointer;
        transform-style: preserve-3d;
        position: relative;

        span {
            font-weight: 700;
            font-size: 32px;
            line-height: 36px;
            color: #000;
            max-width: 700px;
            text-align: center;
            margin-bottom: 15px;
            animation: ${fadeIn} 1s ease;
        }

        p{
            font-weight: 700;
            font-size: 32px;
            line-height: 36px;
            color: #000;
            max-width: 700px;
            text-align: center;
            animation: ${fadeIn} 1s ease;
        }

        &.active {
            transform: rotateY(180deg);

            span{
                transform: rotateY(-180deg);
                animation: ${fadeIn} 2s ease;
            }
            p{
                transform: rotateY(-180deg);
                animation: ${fadeIn} 2s ease;
            }
        }

        @media screen and (max-width: 768px) {
            height: 380px;
        }
    }

    .card__answ{
        margin-top: 50px;
        display: flex;        
        gap: 50px;
        justify-content: center;
        animation: ${fadeOut} 2s ease;

        img {
            max-width: 50px;
            transition: all .3s ease;
        }

        button {
            transition: all .3s ease;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.9);
            }
            &:disabled{
                img {
                    opacity: 0.5;
                }
            }
        }

        @media screen and (max-width: 768px) {
            margin-top: 20px;
            gap: 30px;
        }
    }
`
