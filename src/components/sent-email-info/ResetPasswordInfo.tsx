import React from "react";

import PaletteIcon from "components/core/paletteIcon";
import Button from "components/core/button";
import { Typography } from "components/core/typography";
import { Link, VerifyEmailWrapper } from "../../pages/authentication/styles";
import { InlineWrapper } from "components/core/inline-wrapper";
import Spacer from "components/core/spacer";
import MailLock from "assets/icons/common/mail-lock";
import { useAuth } from "context/AuthContext";

type ResetPasswordInfoProps = {
  email: string;
};

export const ResetPasswordInfo: React.FC<ResetPasswordInfoProps> = ({
  email,
}) => {
  const { setAuthStage } = useAuth();

  const handleBacktoLogin = () => {
    setAuthStage("LOGIN");
  };
  return (
    <VerifyEmailWrapper>
      <PaletteIcon icon={<MailLock size={48} color="#FFFAF1" />} />

      <Spacer y={24} />
      <Typography variant="h4">Reset Link Sent!</Typography>
      <Spacer y={16} />
      <Typography color="secondary">
        A link to reset a new password has been sent to
        <Link href="/terms-of-service">{email}</Link>
      </Typography>

      <Typography color="secondary">
        Please check your inbox and click on the link to reset your password.
      </Typography>

      <Spacer y={16} />
      <InlineWrapper>
        <Typography color="secondary">Sill can’t find it ? </Typography>
        <Link href="/terms-of-service">
          <Typography color="info">Resent reset password link</Typography>
        </Link>
      </InlineWrapper>
      <Spacer y={16} />
      <Button type="button" onClick={handleBacktoLogin}>
        Back to login
      </Button>
    </VerifyEmailWrapper>
  );
};

export default ResetPasswordInfo;
