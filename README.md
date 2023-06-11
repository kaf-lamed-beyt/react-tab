# @react-tab

state-aware tab components in react.

## Why?

This started off from working with the Tab component in ChakraUI. Although, there's a "managing active tab state" section in their docs and that may suffice for some of your use-cases.

With react-tabs, you might not need to write the logic to manage just the active state of your tab items or use state management library. The state of the tab component is preserved in the browser URL when you switch between routes.

Say, for example, there are four `tabItems`, you procced to select the second tab item and navigate to another route or you refresh the current page, React re-renders the component and the state is lost, hence the active component goes back to being the first `tabItem`.

This becomes an issue when you're working in large applications, where tiny details &mdash; like preserving the tab state &mdash; that improve the overall UX of your app depends on these side effects.

The browser URL can be used as a global state store which we'll use to keep the state of this component.

## Usage

Currently, react-tab has support for barebones react projects &mdash; that do not depend on a component UI library &mdash; and ChakraUI projects.
