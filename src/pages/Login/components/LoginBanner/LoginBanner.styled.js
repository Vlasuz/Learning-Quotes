import styled from "styled-components";

export const LoginBannerStyle = styled.div`
    border-radius: 12px;
    border: 1px solid #EAEAEA;
    background: #F2CCB3;
    width: 100%;
    max-width: 624px;
    padding: 139px 0 113px;
    overflow-x: hidden;

    img{
        max-width: 644px;
        height: 644px;
        margin-left: -53px;
    }

    @media screen and (max-width: 992px) {
        img{
            margin-left: 0;
        }
    }
    @media screen and (max-width: 768px) {
        max-width: none;
        padding: 0;
        display: flex;
        justify-content: center;

        img{
            height: auto;
        }
    }
`