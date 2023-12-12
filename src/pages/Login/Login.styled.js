import styled from "styled-components";

export const LoginContainer = styled.div`
    padding: 34px 0;
    display: flex;
    gap: 64px;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 32px;
    }
`