import React from "react";

import PaletteIcon from "components/core/PaletteIcon";
import Button from "components/core/button";
import { Typography } from "components/core/typography";
import { Link, VerifyEmailWrapper } from "../../pages/authentication/styles";
import { InlineWrapper } from "components/core/inline-wrapper";
import Spacer from "components/core/spacer";
import MailFill from "assets/icons/common/mail-fill";

type VerifyEmailInfoProps = {
  email: string;
};

export const VerifyEmailInfo: React.FC<VerifyEmailInfoProps> = ({ email }) => {
  return (
    <VerifyEmailWrapper>
      <PaletteIcon icon={<MailFill size="48" color="#684F3B" />} />
      <Spacer y={24} />
      <Typography variant="h2">Verify your email</Typography>
      <Spacer y={16} />
      <Typography color="secondary">
        We’ve sent a verification link to
        <Link href="/terms-of-service">{email || ""}</Link>
      </Typography>

      <Typography color="secondary">
        Click on the link to complete the your signup.
      </Typography>
      <Typography color="secondary">
        If you don’t see it, you may need to check your spam folder
      </Typography>
      <Spacer y={16} />
      <InlineWrapper>
        <Typography color="secondary">Sill can’t find it ? </Typography>
        <Link href="/terms-of-service">
          <Typography color="info">Resent verification link</Typography>
        </Link>
      </InlineWrapper>
      <Spacer y={16} />
      <Button>Back to sign up</Button>
    </VerifyEmailWrapper>
  );
};

export default VerifyEmailInfo;
