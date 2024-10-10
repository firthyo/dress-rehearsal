import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  InlineWrapper,
  Spacer,
  Typography,
  VerticalTab,
} from "components/core";
import { ContentArea, Sidebar, Wrapper } from "./styles";

// Placeholder components for each tab content

export const UserProfile = () => {
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    const routesMap: Record<string, string> = {
      profile: "profile",
      "track-orders": "track-orders",
      "wish-list": "wish-list",
      "membership-benefit": "membership-benefit",
      "returns-exchanges": "returns-exchanges",
      "log-out": "logout",
    };

    if (routesMap[tab]) {
      navigate(`/user-profile/${routesMap[tab]}`);
    }
  };

  return (
    <Wrapper>
      <div
        style={{ width: "100vw", justifyContent: "center", display: "flex" }}
      >
        <Sidebar>
          <Typography variant="p-articles" color="systemDark">
            Account Overview
          </Typography>
          <Spacer y={24}></Spacer>
          <VerticalTab onTabClick={handleTabClick} />
        </Sidebar>

        <ContentArea>
          <Outlet></Outlet>
        </ContentArea>
        <InlineWrapper alignItems="flex-start"></InlineWrapper>
      </div>
    </Wrapper>
  );
};

export default UserProfile;
