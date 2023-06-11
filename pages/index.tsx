import React from "react";
import { Tab } from "../packages/";

import styled from "styled-components";

const PlaygroundWrapper = styled.main`
  padding: 10px 70px;

  @media only screen and (min-width: 0px) and (max-width: 992px) {
    padding: 0;
  }
`;

const Component = ({ text }) => <h1>{text}</h1>;

const data = [
  {
    name: "first tab",
    component: <Component text="Component One" />,
  },
  {
    name: "second tab",
    component: <Component text="Component Two" />,
  },
  {
    name: "third tab",
    component: <Component text="Component Three" />,
  },
];

export default function PlayGround() {
  return (
    <>
      <h1>Hello playground</h1>
      <PlaygroundWrapper>
        <Tab tabItems={data} />
      </PlaygroundWrapper>
    </>
  );
}
