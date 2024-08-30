import { InlineWrapper, VerticalTab } from "components/core";
import React from "react";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { ContentArea, Sidebar } from "./styles";

// Placeholder components for each tab content

export const UserProfile = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    // Map tab names to match the nested routes defined in AppRoutes
    const routesMap: Record<string, string> = {
      profile: "profile",
      "track-orders": "track-orders",
      "wish-list": "wish-list",
      "membership-benefit": "membership-benefit",
      "returns-exchanges": "returns-exchanges",
    };

    // Navigate to the correct route
    if (routesMap[tab]) {
      navigate(`/user-profile/${routesMap[tab]}`);
    }
  };
  return (
    <InlineWrapper alignItems="flex-start">
      <Sidebar>
        <VerticalTab onTabClick={handleTabClick} />{" "}
      </Sidebar>
      <ContentArea>
        <Outlet></Outlet>
      </ContentArea>
    </InlineWrapper>
  );
};

export default UserProfile;
