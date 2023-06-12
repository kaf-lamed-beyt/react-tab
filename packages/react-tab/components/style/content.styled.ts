import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const PlaygroundWrapper = styled.main`
  padding: 10px 120px;
  color: #000;

  .playground-main {
    text-align: center;

    h1 {
      font-weight: 900;
      font-size: 80px;
      margin-bottom: 80px;
      /* margin-top: 200px; */
    }

    span {
      color: gray;
    }

    p {
      margin-top: -70px;
      margin-bottom: 90px;
      font-size: 35px;
    }
  }

  .title {
    font-weight: 900;
    font-size: 50px;
  }

  p {
    color: gray;
    font-size: 18px;
    line-height: 25px;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    padding: 0;
  }
`;

export const Components = styled.div`
  display: flex;

  div {
    width: 100%;
  }
`;
