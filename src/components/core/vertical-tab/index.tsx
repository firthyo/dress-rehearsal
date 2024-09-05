import React, { useState } from "react";
import { TabIndicator, TabStyle, TabsContainer } from "./styles";
import { LocalShippingOutline } from "assets/icons";
import Spacer from "../spacer";
import { Typography } from "../typography";

type TabItem =
  | "Profile"
  | "Wish List"
  | "Membership Benefit"
  | "Track Orders"
  | "Returns & Exchanges";

type VerticalTabsProps = {
  onTabClick: (tab: string) => void;
};

export const VerticalTab: React.FC<VerticalTabsProps> = ({ onTabClick }) => {
  const [activeTab, setActiveTab] = useState<TabItem>("Profile");
  const handleTabClick = (key: TabItem) => {
    setActiveTab(key);
    onTabClick(key);
  };
  const tabs = [
    { name: "Profile", key: "profile" },
    { name: "Track Orders", key: "track-orders" },
    { name: "Wish List", key: "wish-list" },
    { name: "Membership Benefit", key: "membership-benefit" },
    { name: "Returns & Exchanges", key: "returns-exchanges" },
  ];

  return (
    <TabsContainer>
      {tabs.map((tab) => (
        <React.Fragment key={tab.key}>
          <TabIndicator isActive={activeTab === tab.key} />
          <TabStyle
            onClick={() => handleTabClick(tab.key as TabItem)}
            isActive={activeTab === tab.key}
          >
            <Typography variant="p-medium"> {tab.name}</Typography>
          </TabStyle>
        </React.Fragment>
      ))}
    </TabsContainer>
  );
};

export default VerticalTab;
