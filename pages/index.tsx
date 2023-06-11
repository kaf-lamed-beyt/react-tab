import React from "react";
import { data } from "../data";
import { Tab } from "../packages";
import styled from "styled-components";

const PlaygroundWrapper = styled.main`
  padding: 10px 120px;

  .playground-main {
    text-align: center;

    h1 {
      font-weight: 900;
      font-size: 60px;
      margin-bottom: 80px;
    }

    span {
      color: gray;
    }

    p {
      margin-top: -70px;
      margin-bottom: 90px;
      font-size: 25px;
    }
  }

  .title {
    font-weight: 900;
    font-size: 50px;
  }

  p {
    margin-top: -15px;
    color: gray;
    font-size: 18px;
    line-height: 25px;
  }

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    padding: 0;
  }
`;

export default function PlayGround() {
  return (
    <>
      <PlaygroundWrapper>
        <div className="playground-main">
          <h1>
            Hello <span>@react-tab</span> playground
          </h1>
          <p>state-aware tab components in react</p>
        </div>

        <Tab tabItems={data} theme="gray" />
      </PlaygroundWrapper>
    </>
  );
}
