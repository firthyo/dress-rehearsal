import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import TaskCheckedLight from "assets/icons/common/task-checked-light";
import { Typography } from "components/core/typography";
import { Wrapper } from "./styles";
import Spacer from "components/core/spacer";
import Button from "components/core/button";
import { VERIFY_EMAIL } from "graphql/user/authMutation";
import { useAuth } from "context/AuthContext";

const VerifyEmail = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [verifyEmail, { data, loading, error }] = useMutation(VERIFY_EMAIL);
  const { login } = useAuth();

  useEffect(() => {
    if (data && data.verifyEmail && data.verifyEmail.success) {
      const { authToken, firstName, lastName, email, id } = data.verifyEmail;
      const userInfo = { firstName, lastName, email, id };
      login(authToken, userInfo);
      // navigate("/", { replace: true });
    }
  }, [data, navigate, login]);
  useEffect(() => {
    if (token) {
      verifyEmail({ variables: { token } });
    }
  }, [token, verifyEmail]);

  console.log(
    "this is authToken,  data.verifyEmail.",
    data && data.verifyEmail
  );

  if (loading) return <p>Verifying...</p>;
  if (error) return <p>An error occurred.</p>;

  if (data && data.verifyEmail.success) {
    localStorage.setItem("authToken", data?.verifyEmail); // Storing the authToken if provided
    return (
      <Wrapper>
        <TaskCheckedLight size={128} color="#684F3B" />
        <Spacer y={48} />
        <Typography variant="big-numbers" color={"systemDark"}>
          Welcome, {data.verifyEmail.firstName}!
        </Typography>
        <Spacer y={16} />
        <Typography variant="page-subtitle" color={"systemDark"}>
          Your email is verified, and you're logged in. Enjoy your shopping
          journey!
        </Typography>
        <Spacer y={48} />
        <Button onClick={() => <Navigate to="/dashboard" replace />}>
          Get Started
        </Button>
      </Wrapper>
    );
  }

  return <p>No data or verification failed.</p>;
};

export default VerifyEmail;
