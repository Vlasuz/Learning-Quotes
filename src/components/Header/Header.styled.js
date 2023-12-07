import styled from "styled-components";

export const HeaderStyle = styled.div`
    padding: 28px 0 19px;
    border-bottom: 1px solid #D8D8D8;

    .header__inner{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 30px;
    }

    h2{
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
        color: #1F2937;
    }

    .header__review{
        display: flex;
        gap: 32px;
        a{
            font-size: 14px;
            line-height: 18px;
            color: #000;
        }
    }

    .header__login{
        display: flex;
        align-items: center;
        gap: 30px;
        a{
            font-size: 14px;
            font-weight: 700;
            line-height: 18px;
            white-space: nowrap;
        }

        &_log{
            padding: 11px 35px;
            color: #fff;
            background-color: #23232D;
            border-radius: 12px;
        }
    }
`