import React from "react";
import {
  Line,
  NoDetail,
  ProfileBox,
  ProfileInfoWrapper,
  SWrapper,
} from "./styles";
import { InlineWrapper, Spacer, Typography } from "components/core";

export const Profile = () => {
  return (
    <>
      <SWrapper>
        <ProfileBox>
          <InlineWrapper justifyContent="space-between">
            <Typography variant="label-medium" color="systemDark">
              Personal Info
            </Typography>
            <Typography>Edit</Typography>
          </InlineWrapper>
          <Spacer y={12} />
          <Line />
          <Spacer y={12} />
          <InlineWrapper justifyContent="flex-start">
            <ProfileInfoWrapper>
              <Typography variant="p-semi-bold" color="systemDark">
                First Name
              </Typography>
              <Typography color="systemDark">Firth</Typography>
            </ProfileInfoWrapper>
            <ProfileInfoWrapper>
              <Typography variant="p-semi-bold" color="systemDark">
                Last Name
              </Typography>
              <Typography color="systemDark">Maneesuksri</Typography>
            </ProfileInfoWrapper>
          </InlineWrapper>
          <Spacer y={24} />
          <InlineWrapper justifyContent="flex-start">
            <ProfileInfoWrapper>
              <Typography variant="p-semi-bold" color="systemDark">
                Email
              </Typography>
              <Typography color="systemDark">firthyoo@gmail.com</Typography>
            </ProfileInfoWrapper>
            <ProfileInfoWrapper>
              <Typography variant="p-semi-bold" color="systemDark">
                Password
              </Typography>
              <Typography color="systemDark">********</Typography>
            </ProfileInfoWrapper>
          </InlineWrapper>
        </ProfileBox>

        <ProfileBox>
          <InlineWrapper justifyContent="space-between">
            <Typography variant="label-medium" color="systemDark">
              Address
            </Typography>
            <Typography>Edit</Typography>
          </InlineWrapper>
          <Spacer y={12} />
          <Line />
          <Spacer y={12} />
          <InlineWrapper justifyContent="flex-start">
            <ProfileInfoWrapper>
              Default Shipping Address
              <br />
              Home (Default)
              <br />
              Firth Maneesuksri
              <br />
              Jupiter 111, Apt 909
              <br />
              Seattle, WA 98109
              <br />
              United States
            </ProfileInfoWrapper>
          </InlineWrapper>
        </ProfileBox>
      </SWrapper>
      <Spacer y={24}></Spacer>
      <SWrapper>
        <ProfileBox>
          <InlineWrapper justifyContent="space-between">
            <Typography variant="label-medium" color="systemDark">
              Payment Setting
            </Typography>
            <Typography>Edit</Typography>
          </InlineWrapper>
          <Spacer y={12} />
          <Line />
          <Spacer y={12} />
          <NoDetail>We have no credit cards saved yet.</NoDetail>
        </ProfileBox>
        <ProfileBox>
          <InlineWrapper justifyContent="space-between">
            <Typography variant="label-medium" color="systemDark">
              Order History
            </Typography>
            <Typography>Edit</Typography>
          </InlineWrapper>
          <Spacer y={12} />
          <Line />
          <Spacer y={12} />
          <NoDetail>
            We have no orders saved yet. Get Shopping!
            <br />
            Please Contact Customer Service if you have any trouble accessing
            your order history or tracking information.
          </NoDetail>
        </ProfileBox>
      </SWrapper>
    </>
  );
};

export default Profile;
