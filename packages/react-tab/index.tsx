import { useRouter } from "next/router";
import React from "react";
import { Container } from "./components/style/content.styled";
import TabHeader from "./components/tab-header";

interface tabProps {
  tabItems: { name: string; component: React.ReactNode }[] | null;
  theme?: string;
}

const Tab = ({ tabItems, theme }: tabProps) => {
  const router = useRouter();
  const defaultTabContent = tabItems[0].component;
  const [activeTabContent, setActiveTabContent] =
    React.useState(defaultTabContent);

  const handleActiveTabContent = (index) => {
    const tabContentName = tabItems[index].name;
    const tabContent = tabItems[index].component;
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

    // @ts-ignore
    const decodedTab: string =
      typeof tab === "string" && tab && tab.match(/-/g)
        ? tab.split("-").join(" ")
        : tab;

    const tabNames = tabItems.map(({ name }) => name);
    const tabComponents = tabItems.map(({ component }) => component);

    if (tabNames.includes(decodedTab, 0)) {
      activeTabIndex = tabNames.indexOf(decodedTab);
      setActiveTabContent(tabComponents[activeTabIndex]);
    }
  }, [router.query.tab, router.pathname]);

  return (
    <>
      <TabHeader
        style={theme}
        tabItems={tabItems}
        components={handleActiveTabContent}
      />
      <Container>{activeTabContent}</Container>
    </>
  );
};

export default Tab;
