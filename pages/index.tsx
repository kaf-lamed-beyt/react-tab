import React from "react";
import { data } from "../data";
import { Tab } from "../packages";
import {
  PlaygroundWrapper,
  Components,
} from "../packages/react-tab/components/style/content.styled";

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
        <Components>
          <div className="react-tab">
            <Tab tabItems={data} theme="gray" />
          </div>
        </Components>
      </PlaygroundWrapper>
    </>
  );
}
