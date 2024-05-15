import { useMutation } from "@apollo/client";

import { VERIFY_EMAIL } from "graphql/user/authMutation";
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import TaskCheckedLight from "assets/icons/common/task-checked-light";
import { Typography } from "components/core/typography";
import { Wrapper } from "./styles";
import Spacer from "components/core/spacer";
import Button from "components/core/button";

const VerifyEmail = () => {
  const { token } = useParams();
  const [verifyEmail, { data, loading, error }] = useMutation(VERIFY_EMAIL);
  console.log("token data", data);
  useEffect(() => {
    if (token) {
      verifyEmail({ variables: { token } });
    }
  }, [token, verifyEmail]);

  if (loading) return <p>Verifying...</p>;
  if (error) return <p>An error occurred.</p>;
  if (!data || !data.verifyEmail) return <p>No data or verification failed.</p>;

  // Optionally, you could navigate the user after successful verification
  // This example shows a simple message, but you might want to include a <Navigate/> component here
  return (
    <Wrapper>
      {/* {data.verifyEmail.message} */}
      <TaskCheckedLight size={128} color="#684F3B" />
      <Spacer y={48} />
      <Typography variant="big-numbers" color={"systemDark"}>
        Welcome [User’s First Name]!
      </Typography>
      <Spacer y={16} />
      <Typography variant="page-subtitle" color={"systemDark"}>
        Your email is verified, and you're logged in. Enjoy your shopping
        journey!
      </Typography>
      <Spacer y={48} />
      <Button>Get start</Button>
    </Wrapper>
  );
};

export default VerifyEmail;
