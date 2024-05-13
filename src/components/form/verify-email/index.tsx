import { useMutation } from "@apollo/client";
import { VERIFY_EMAIL } from "graphql/user/authMutation";
import { useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";

const VerifyEmail = () => {
  const { token } = useParams();
  const [verifyEmail, { data, loading, error }] = useMutation(VERIFY_EMAIL);

  console.log("this is data", data);
  useEffect(() => {
    verifyEmail({ variables: { token } });
  }, [token, verifyEmail]);

  if (loading) return <p>Verifying...</p>;
  if (error) return <p>An error occurred.</p>;

  return <p>{data.verifyEmail.message}</p>;
};

export default VerifyEmail;
