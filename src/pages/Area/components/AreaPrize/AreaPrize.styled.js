import styled from "styled-components";

export const AreaPrizeStyle = styled.div`

    .shelf__list{

        li{
            width: 100%;
            max-width: 310px;
            display: flex;
            flex-direction: column;

            &:nth-child(2){
                margin-left: 75px;
                margin-top: 30px;

                .shelf__list__cup{
                    margin-left: 35px;
                }
            }
        }
    
        &__cup{
            max-width: 123px;
            margin-left: auto;
            margin-bottom: -25px;
            position: relative;
            z-index: 3;
        }

        &__polka{
            max-width: 310px;
            position: relative;
            z-index: 2;
        }
    }

`