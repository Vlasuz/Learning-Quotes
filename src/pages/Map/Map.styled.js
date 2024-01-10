import styled from "styled-components";

export const MapStyle = styled.div`
    padding: 15px 0;
    position: relative;

    h2{
        color: #1F2937;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        position: absolute;
        top: 50px;
        left: 50%;
        transform: translate(-50%);
        z-index: 3;
        
        @media screen and (max-width: 1100px) {
            top: 30px;
        }
        @media screen and (max-width: 585px) {
            font-size: 16px;
            top: 20px;
        }
        @media screen and (max-width: 475px) {
            font-size: 12px;
            top: 15px;
        }
    }

    .description{
        text-align: center;
        width: 100%;
        max-width: 320px;
        padding: 12px;
        border-radius: 8px;
        background: #FDE7B6;
        box-shadow: 0px 8px 16px -2px rgba(27, 33, 44, 0.12);
        position: absolute;
        transition: all .3s ease;

        h3{
            color: #000;
            font-size: 24px;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 10px;
        }

        p{
            color: #000;
            font-size: 20px;
            font-weight: 400;
            line-height: 28px;
            margin-bottom: 12px;
        }

        img{
            width: 60px;
            height: 52px;
            position: absolute;
            top: 0;
            right: 0;
        }

        button{
            display: block;
            color: #172239;
            text-align: center;
            font-size: 12.5px;
            font-weight: 700;
            line-height: 20px;
            padding: 10px;
            border-radius: 12.5px;
            background: #F2CCB3;
            width: 100px;
            max-width: 135px;
            margin: 0 auto;
            transition: all .3s ease;
            &:hover{
                background: #FBAC79;
            }
        }
        
        @media screen and (max-width: 1024px) {
            img{
                display: none;
            }
        }
        @media screen and (max-width: 768px) {
            max-width: 280px;

            p{
                font-size: 16px;
                margin-bottom: 10px;
                line-height: 22px;
            }
        }
        @media screen and (max-width: 575px) {
            top: 50% !important; 
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
            right: auto !important;
            bottom: auto !important;

            p{
                font-size: 12px;
                margin-bottom: 10px;
                line-height: 16px;
            }

            h3{
                font-size: 18px;
                margin-bottom: 5px;
            }
        }
    }

    .buttonsLink{
        display: block;
        width: 200px;
        height: 200px;
        position: absolute;
    }

    .leader__board{       
        right: 127px;
        top: 421px;
    }
    .training__swamp{
        right: 92px;
        bottom: 308px;
    }
`