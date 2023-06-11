import { useRouter } from "next/router";
import React from "react";
import { Container } from "./components/style/content.styled";
import TabHeader from "./components/tab-header";

const Component = ({ text }) => <h1>{text}</h1>;

const items = [
  { name: "first tab", component: <Component text="Component One" /> },
  { name: "second tab", component: <Component text="Component Two" /> },
  { name: "third tab", component: <Component text="Component Three" /> },
];

const Tab = () => {
  const router = useRouter();
  const defaultTabContent = items[0].component;
  const [activeTabContent, setActiveTabContent] =
    React.useState(defaultTabContent);

  const handleActiveTabContent = (index) => {
    const tabContentName = items[index].name;
    const tabContent = items[index].component;
    setActiveTabContent(tabContent);

    const encodedTabName =
      encodeURIComponent(tabContentName).toLocaleLowerCase();
    const replaceEncodingParam = encodedTabName.replace("%20", "-");
    router.replace(`?tab=${replaceEncodingParam}`);
  };

  React.useEffect(() => {
    const {
      query: { tab },
    } = router;
    let activeTabIndex;

    const decodedTab =
      typeof tab === "string" && tab && tab.match(/-/g)
        ? tab.split("-").join(" ")
        : tab;

    const tabNames = items.map(({ name }) => name);
    const tabComponents = items.map(({ component }) => component);

    if (tabNames.includes(decodedTab, 0)) {
      activeTabIndex = tabNames.indexOf(decodedTab);
      setActiveTabContent(tabComponents[activeTabIndex]);
    }
  }, [router.query.tab, router.pathname]);

  return (
    <>
      <TabHeader tabItems={items} components={handleActiveTabContent} />
      <Container>{activeTabContent}</Container>
    </>
  );
};

export default Tab;
