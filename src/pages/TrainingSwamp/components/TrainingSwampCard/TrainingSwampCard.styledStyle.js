import styled from "styled-components";


export const TrainingSwampCardStyle = styled.div`
    padding: 120px 0 50px;

    .card_con{
        position: relative;
        max-width: 750px;
        display: flex;
        margin: 0 auto;
        justify-content: center;

        h2 {
            position: absolute;
            top: -50px;
            left: 0;
            font-size: 28px;
            line-height: 36px;
            transform: none;
        }
    }

    .scene {
        display: inline-block;
        width: 100%;
        max-width: 750px;
        height: 460px;
        perspective: 900px;
    }

    .card {
        position: relative;
        width: 100%;
        height: 100%;
        cursor: pointer;
        transform-style: preserve-3d;
        transform-origin: center right;
        transition: transform 1s;
        box-shadow: 0px 8px 16px -2px #1B212C1F;
    }

    .card.is-flipped {
        transform: translateX(-100%) rotateY(-180deg);
    }

    .card__face {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 35px;
        font-weight: 700;
        font-size: 32px;
        line-height: 36px;
        color: #000;
        backface-visibility: hidden;

    }
    
    .card_image{
        padding: 5px;
        background: #fff;
        transform: rotate(5deg);
        margin-bottom: 30px;

        img {
            max-width: 350px;
        }

    }

    .card__face--front {
        background: #FDE7B6;
    }

    .card__face--back {
        background: #e1cda0;
        transform: rotateY(180deg);
    }


    .card__answ{
        margin-top: 50px;
        display: flex;        
        gap: 50px;
        justify-content: center;

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
