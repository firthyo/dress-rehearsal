import { Button, Spacer, Typography } from "components/core";
import React, { useContext, useState } from "react";
import { Form, FormWrapper, Overview, Wrapper } from "./styles";
import CheckoutForm from "components/form/checkout-form";
import OrderSummary from "components/core/order-summary";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useMutation } from "@apollo/client";
import CheckoutContext from "context/CheckoutContext";
import { CREATE_PAYMENT_INTENT } from "graphql/payment";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY || "");

export const Checkout = () => {
  const { isDataReady } = useContext(CheckoutContext);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const [createPaymentIntent, { loading, error }] = useMutation(
    CREATE_PAYMENT_INTENT,
    {
      onCompleted: (data) => {
        setClientSecret(data.createPaymentIntent.clientSecret);
      },
      onError: (error) => {
        console.error("Error creating payment intent:", error);
      },
    }
  );

  const handleProceedToPayment = async () => {
    try {
      await createPaymentIntent({
        variables: {
          amount: 1000, // Amount in cents
          currency: "usd",
        },
      });
    } catch (err) {
      console.error("Error creating payment intent:", err);
    }
  };
  console.log("isDataReady", isDataReady);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      <Wrapper>
        <FormWrapper>
          <Form>
            <Typography variant="h3" color="systemDark">
              Checkout
            </Typography>
            <Spacer y={24} />
            <Elements stripe={stripePromise}>
              <CheckoutForm clientSecret={clientSecret} />
            </Elements>
            <Spacer y={24} />
            {isDataReady && (
              <Button onClick={handleProceedToPayment} disabled={loading}>
                {loading ? "Processing..." : "Proceed to Payment"}
              </Button>
            )}
          </Form>
          <Overview>
            <OrderSummary></OrderSummary>
          </Overview>
        </FormWrapper>
      </Wrapper>
    </div>
  );
};

export default Checkout;
