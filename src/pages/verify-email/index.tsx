import { useMutation } from "@apollo/client";
import { VERIFY_EMAIL } from "graphql/user/authMutation";
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [verifyEmail, { data, loading, error }] = useMutation(VERIFY_EMAIL);

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
  return <p>{data.verifyEmail.message}</p>;
};

export default VerifyEmail;
