import styled from "styled-components";

export const FooterStyle = styled.div`
    padding: 24px 0;
    background: #fff;

    .footer{
        &__inner{
            display: flex;
            align-items: center;

            h2{
                font-size: 20px;
                font-weight: 700;
                line-height: 28px;
                color: #1F2937;
                margin-right: 40px;
            }

            p{
                font-size: 12px;
                line-height: 140%;
                color: #111827;            
            }
        }


        &__list{
            display: flex;
            gap: 40px;
            margin-left: auto;

            a{
                font-size: 12px;
                line-height: 140%;
                color: #111827;
            }
        }
    }
`