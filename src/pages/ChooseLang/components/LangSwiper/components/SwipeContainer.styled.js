import styled from "styled-components";

export const SwiperContainerStyle = styled.div`
    width: 100%;
    max-width: 624px;

    @media screen and (max-width: 1024px){
        max-width: 450px;
    }

    @media screen and (max-width: 768px){
        max-width: none;
    }
`