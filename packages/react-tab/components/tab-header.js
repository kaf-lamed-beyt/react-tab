import { useRouter } from "next/router";
import React from "react";
import { Header } from "./style/header.styled";
var TabHeader = function (_a) {
    var tabItems = _a.tabItems, components = _a.components, style = _a.style;
    var router = useRouter();
    var _b = React.useState(0), activeTab = _b[0], setActiveTab = _b[1];
    var handleTabClick = function (index) {
        setActiveTab(index);
        components ? components(index) : null;
    };
    React.useEffect(function () {
        var query = router.query;
        var tab = query.tab;
        var activeTabIndex;
        // @ts-ignore
        var decodedTabName = typeof tab === "string" && tab && tab.match(/-/g)
            ? tab.split("-").join(" ")
            : tab;
        var tabNames = tabItems && tabItems.map(function (_a) {
            var name = _a.name;
            return name;
        });
        if (tabNames && tabNames.includes(decodedTabName)) {
            activeTabIndex = tabNames.indexOf(decodedTabName);
            setActiveTab(activeTabIndex);
        }
    }, [router.query.tab]);
    return (React.createElement(Header, { color: style },
        React.createElement("ul", null, tabItems === null || tabItems === void 0 ? void 0 : tabItems.map(function (_a, index) {
            var name = _a.name;
            return (React.createElement("li", { className: activeTab === undefined && index === 0
                    ? "active"
                    : activeTab === index
                        ? "active"
                        : "", key: index, onClick: function () { return handleTabClick(index); } }, name));
        }))));
};
export default TabHeader;
//# sourceMappingURL=tab-header.js.map