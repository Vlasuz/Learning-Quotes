import styled from "styled-components";

export const HeroStyle = styled.div`

    .hero{
        background: #8DAAC7;
        padding: 49px 46px 0;
        border-radius: 20px 20px 0 0;
        width: 100%;

        img{
            height: 100%;
        }

        @media screen and (max-width: 768px) {
            padding: 32px 32px 0;
        }
        @media screen and (max-width: 575px) {
            padding: 15px 15px 0;
        }
    }
`