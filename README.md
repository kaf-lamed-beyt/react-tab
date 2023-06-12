# @react-tab

state-aware tab components in react built with Next.js router.

## Why?

This started off from working with the Tab component in ChakraUI. Although, there's a "managing active tab state" section in their docs and that may suffice for some of your use-cases.

With react-tabs, you might not need to write the logic to manage just the active state of your tab items or use state management library. The state of the tab component is preserved in the browser URL when you switch between routes.

Say, for example, there are four `tabItems`, you procced to select the second tab item and navigate to another route or you refresh the current page, React re-renders the component and the state is lost, hence the active component goes back to being the first `tabItem`.

This becomes an issue when you're working in large applications, where tiny details &mdash; like preserving the tab state &mdash; that improve the overall UX of your app depends on these side effects.

The browser URL can be used as a global state store which we'll use to keep the state of this component.

## Usage

Currently, react-tab has support for barebones react projects &mdash; that do not depend on a component UI library like Chakra UI etc. &mdash;

Support for chakra-ui is going on though. It should be live soon &mdash; or never. it all depends on the bandwidth i can give to it :sad:

To use the component, you can install it with your preferred package manager. The command below ascertains that.

```bash
yarn add react-tab-state
```

The component expects you to have an array of `tabItems` you wish to render, something like the one below;

```tsx
import React from "react";

const Component = ({ text: string }) => <h1>{text}</h1>;

export const data = [
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
```

It should have the `name` and `component` properties in it. The way you chose to structure is completely up to you. But, it is important that you pass an array of objects to the `tabItems` props like so:

```tsx
import { Tab } from "react-tab-state";

export default function HomePage() {
  return (
    <>
      <Tab tabItems={data} />
    </>
  );
}
```

Because you might wan to customize the look and feel of `tabHeader`. react-tab exposes a `theme` prop that accepts any color as a string depending on the design tokens that you're working with.

```tsx
<Tab tabItems={data} theme="brown" />
```

## perks

- state preservation any `tabItem` when you navigate away from and back to the current route.
- you can copy the link in the URL share it and the state is shared across devices
- I can't remember the last one....

## Want to contribute?

See the [CONTRIBUTING](CONTRIBUTING) guide.
