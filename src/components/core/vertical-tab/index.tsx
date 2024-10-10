import React, { useState } from "react";
import { TabIndicator, TabStyle, TabsContainer } from "./styles";

import { Typography } from "../typography";
import { useAuth } from "context/AuthContext";

import { useNavigate } from "react-router-dom";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";

type TabItem =
  | "Profile"
  | "Wish List"
  | "Membership Benefit"
  | "Track Orders"
  | "Returns & Exchanges"
  | "logout";

type VerticalTabsProps = {
  onTabClick: (tab: string) => void;
  defaultActiveTab?: TabItem;
};

export const VerticalTab: React.FC<VerticalTabsProps> = ({
  onTabClick,
  defaultActiveTab = "Profile",
}) => {
  const { logoutAuth } = useAuth();
  const [activeTab, setActiveTab] = useState<TabItem>(defaultActiveTab);
  const [loading, setLoading] = useState(false); // Manage loading state
  const navigate = useNavigate(); // For redirecting to the home page

  const handleTabClick = async (key: TabItem) => {
    if (key === "logout") {
      setLoading(true); // Start loading when logout is clicked
      try {
        await logoutAuth(); // Call the logout function (assuming it's asynchronous)
        setTimeout(() => {
          setLoading(false);
          navigate("/"); // Redirect to home page after logout
        }, 1000); // Delay to show the loading spinner
      } catch (error) {
        // Handle any errors during logout
        console.error("Logout failed", error);
        setLoading(false);
      }
      // Optionally, reset auth state or redirect after logout
    } else {
      setActiveTab(key);
      if (onTabClick) onTabClick(key); // Call custom onTabClick if provided
    }
  };
  const tabs = [
    { name: "Profile", key: "profile" },
    { name: "Track Orders", key: "track-orders" },
    { name: "Wish List", key: "wish-list" },
    { name: "Membership Benefit", key: "membership-benefit" },
    { name: "Returns & Exchanges", key: "returns-exchanges" },
    { name: "Logout", key: "logout" },
  ];

  return (
    <>
      {" "}
      {loading && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999, // Ensure it is above all other content
          }}
        >
          <CircularProgress size={68} style={{ color: "#684F3B" }} />
        </div>
      )}
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
    </>
  );
};

export default VerticalTab;
