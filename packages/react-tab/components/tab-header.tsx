import { useRouter } from "next/router";
import React from "react";
import { Header } from "./style/header.styled";

interface tabHeaderProps {
  tabItems: [] | null;
  components: React.ReactElement;
  style: React.CSSProperties;
}

const TabHeader = ({ tabItems, components, style }: tabHeaderProps) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    components ? components(index) : null;
  };

  //   React.useEffect(() => {
  //     const { query } = router;
  //     const { tab } = query;

  //     const decodedTabName =
  //       typeof tab === "string" && tab && tab.match(/-/g)
  //         ? tab.split("-").join(" ")
  //         : tab;

  //     const tabNames = tabItems.map(({ slug }) => slug);
  //     const activeTabIndex = tabNames.indexOf(decodedTabName);
  //     setActiveTab(activeTabIndex);
  //   }, [activeTab]);

  return (
    <Header style={style}>
      <ul>
        {tabItems.map(({ name }, index) => {
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
