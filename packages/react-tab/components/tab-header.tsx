import { useRouter } from "next/router";
import React from "react";
import { Header } from "./style/header.styled";

interface tabHeaderProps {
  tabItems: { name: string }[] | null;
  components: (index: number) => void;
  style?: string;
}

const TabHeader = ({ tabItems, components, style }: tabHeaderProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    components ? components(index) : null;
  };

  React.useEffect(() => {
    const { query } = router;
    const { tab } = query;
    let activeTabIndex;

    // @ts-ignore
    const decodedTabName: string =
      typeof tab === "string" && tab && tab.match(/-/g)
        ? tab.split("-").join(" ")
        : tab;

    const tabNames = tabItems && tabItems.map(({ name }) => name);

    if (tabNames && tabNames.includes(decodedTabName)) {
      activeTabIndex = tabNames.indexOf(decodedTabName);
      setActiveTab(activeTabIndex);
    }
  }, [router.query.tab]);

  return (
    <Header color={style}>
      <ul>
        {tabItems?.map(({ name }, index) => {
          return (
            <li
              className={
                activeTab === undefined && index === 0
                  ? "active"
                  : activeTab === index
                  ? "active"
                  : ""
              }
              key={index}
              onClick={() => handleTabClick(index)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </Header>
  );
};

export default TabHeader;
