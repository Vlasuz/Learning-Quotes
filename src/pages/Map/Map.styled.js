import styled from "styled-components";

export const MapStyle = styled.div`
    padding: 15px 0;
    display: flex;
    justify-content: center;

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
            max-width: 60px;
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

    .map__main{
        overflow: auto;
    }
    .map__container{
        position: relative;
        width: 1200px;

        img{
            width: 100%;
            margin: 0 auto;
        }

        @media screen and (max-width: 1240px){
            width: 1000px;
        }
        @media screen and (max-width: 1024px){
            width: 700px;
        }
    }

    .leader__board{
        position: absolute;
        right: 130px;
        top: 390px;
        transition: all .3s ease;
        img{
            transition: all .3s ease;
            max-width: 160px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            right: 84px;
            top: 308px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 100px;
            }
            right: 69px;
            top: 224px;
        }
    }

    .training__swamp{
        position: absolute;
        right: 88px;
        bottom: 300px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 180px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }


        @media screen and (max-width: 1240px){
            right: 53px;
            bottom: 229px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 110px;
            }
            right: 49px;
            bottom: 169px;
        }
    }

    .first__lvl{
        position: absolute;
        right: 295px;
        bottom: 155px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 160px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            right: 233px;
            bottom: 110px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 100px;
            }
            right: 166px;
            bottom: 86px;
        }
    }

    .second__lvl{
        position: absolute;
        left: 350px;
        bottom: 161px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 170px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            left: 273px;
            bottom: 122px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 110px;
            }
            left: 197px;
            bottom: 90px;
        }
    }

    .second__lvl__plus{
        position: absolute;
        top: 426px;
        right: 324px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 150px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            top: 340px;
            right: 257px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 90px;
            }
            top: 251px;
            right: 184px;
        }
    }

    .ship__lvl{
        position: absolute;
        top: 444px;
        left: 94px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 160px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            top: 351px;
            left: 70px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 100px;
            }
            top: 255px;
            left: 51px;
        }
    }

    .dlpt__lvl{
        position: absolute;
        top: 220px;
        left: 540px;
        transition: all .3s ease;

        img{
            transition: all .3s ease;
            max-width: 180px;
            &:hover{
                transform: scale(1.1);
            }
            &:active{
                transform: scale(0.95);
            }
        }

        @media screen and (max-width: 1240px){
            top: 173px;
            left: 437px;
        }
        @media screen and (max-width: 1024px){
            img{
                max-width: 120px;
            }
            top: 125px;
            left: 314px;
        }
    }
`