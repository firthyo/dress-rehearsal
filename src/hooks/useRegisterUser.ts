import { useMutation } from "@apollo/client";
import { REGISTER_USER_MUTATION } from "graphql/user/authMutation";

interface SignUpVariables {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  terms: boolean;
}

interface SignUpResponse {
  register: {
    success: boolean;
    message?: string;
  };
}

export const useRegisterUser = () => {
  const [mutationFunction, { data, loading, error }] = useMutation<
    SignUpResponse,
    SignUpVariables
  >(REGISTER_USER_MUTATION);

  // Wrap the mutation function to simplify its usage in components
  const registerUser = (variables: SignUpVariables): Promise<any> => {
    return mutationFunction({ variables })
      .then((response) => response.data)
      .catch((err) => {
        throw err;
      });
  };
  console.log("this is data from hook", data);
  return { registerUser, data, loading, error };
};
