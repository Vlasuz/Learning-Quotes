import styled from "styled-components";

import PageBgd from '../../assets/img/pageBgd.jpg'

export const ReadingQuestStyle = styled.div`
  margin: 32px 0 55px;
  background: url(${PageBgd}) no-repeat;
  background-size: cover;
  padding: 50px 40px 25px;

  @media screen and (max-width: 768px) {
    padding: 30px 10px;
  }

  .card_page {
    padding: 50px 0;
  }
`