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
type CheckoutFormVariables = {
  email: string;
  terms: boolean;
  firstName: string;
};

const EmailLabel = () => {
  return (
    <Typography>
      Receive emails about new products, sales and store events.{" "}
    </Typography>
  );
};

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
          </Form>
          <Overview>
            <OrderSummary></OrderSummary>
          </Overview>
        </FormWrapper>
      </Wrapper>
      {!isDataReady && (
        <Button onClick={handleProceedToPayment} disabled={loading}>
          {loading ? "Processing..." : "Proceed to Payment"}
        </Button>
      )}
    </div>
  );
};

export default Checkout;
