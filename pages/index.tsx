import React from "react";
import { TabHeader } from "../packages";

const items = [
  { name: "First tab" },
  { name: "second tab" },
  { name: "third tab" },
];

export default function PlayGround() {
  return (
    <>
      <div>
        <h1>Hello playground</h1>
        <TabHeader tabItems={items} />
      </div>
    </>
  );
}
