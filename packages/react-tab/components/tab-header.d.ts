import React from "react";
type tabHeaderProps {
    tabItems: {
        name: string;
    }[] | null;
    components: (index: number) => void;
    style?: string;
}
declare const TabHeader: ({ tabItems, components, style }: tabHeaderProps) => React.JSX.Element;
export default TabHeader;
