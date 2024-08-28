import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import {
  Button,
  DropdownMenu,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";
import React, { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Line, Link, RowWrapperMultipleCol } from "../styles";
import EditIcon from "assets/icons/common/edit-con";
import { loadStripe } from "@stripe/stripe-js";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import { AddressAutocomplete } from "components/core/address-autocomplete";
import CreditCardInput from "components/core/credit-card";
import ShippingMethod from "components/core/shipping-method";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { useMutation } from "@apollo/client";
import { CREATE_PAYMENT_INTENT } from "graphql/payment";
import { CheckoutFormVariables } from "./types";
import CheckoutDetail from "./checkout-detail";
import CheckoutContext from "context/CheckoutContext";
// import { CREATE_PAYMENT_INTENT } from "graphql/payment";

const EmailLabel = () => (
  <Typography color="systemDark">
    Receive emails about new products, sales, and store events.
  </Typography>
);
interface CheckoutFormProps {
  clientSecret: string | null;
}
const CheckoutForm = ({ clientSecret }: CheckoutFormProps) => {
  const methods = useForm<CheckoutFormVariables>();
  const { isDataReady, setIsDataReady } = useContext(CheckoutContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState<CheckoutFormVariables>({
    email: "",
    terms: false,
    firstName: "",
    lastName: "",
    address: "",
    province: "",
    district: "",
    subDistrict: "",
    postalcode: "",
    creditCardName: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
  });
  const [editMode, setEditMode] = useState({
    contact: false,
    shipping: false,
    payment: false,
  });
  console.log("this is formData", formData);

  const handleAddressChange = (address: {
    province: string;
    district: string;
    subDistrict: string;
    postalCode: string;
  }) => {
    setFormData((prevData) => {
      if (
        prevData.province !== address.province ||
        prevData.district !== address.district ||
        prevData.subDistrict !== address.subDistrict ||
        prevData.postalcode !== address.postalCode
      ) {
        return {
          ...prevData,
          province: address.province,
          district: address.district,
          subDistrict: address.subDistrict,
          postalcode: address.postalCode,
        };
      }
      return prevData; // Return the existing formData if there's no change
    });
  };

  const handleNext = (data: CheckoutFormVariables) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handleEdit = (section: keyof typeof editMode) => {
    setEditMode({ ...editMode, [section]: true });
    if (section === "contact") setStep(1);
    if (section === "shipping") setStep(2);
    if (section === "payment") setStep(3);
  };

  const stripe = useStripe();
  const elements = useElements();

  const saveContactEdit = async (data: CheckoutFormVariables) => {
    if (stripe && elements) {
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        const clientSecretS = clientSecret || ""; // Use the clientSecret from the parent component

        const { error, paymentIntent } = await stripe.confirmCardPayment(
          clientSecretS,
          {
            payment_method: {
              card: cardElement,
              billing_details: {
                name: data.creditCardName,
              },
            },
          }
        );

        if (error) {
          console.error("Payment Error!", error.message);
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
          console.log("Payment succeeded!");
        }
      }
    }

    setFormData({ ...formData, ...data });
    setEditMode({ ...editMode, contact: false });
    setStep(step + 1);
  };

  const saveShippingEdit = async (data: CheckoutFormVariables) => {
    setFormData({ ...formData, ...data });
    setEditMode({ ...editMode, shipping: false });
    setStep(step + 1);
  };

  const savePaymentEdit = async (data: CheckoutFormVariables) => {
    // Handle payment logic here
    setFormData({ ...formData, ...data });
    setEditMode({ ...editMode, payment: false });
    setStep(step + 1);
    checkDataReady();
  };

  const [selectedShipping, setSelectedShipping] = useState<string>("standard");

  const handleShippingChange = (method: string) => {
    setSelectedShipping(method);
  };

  const checkDataReady = () => {
    if (
      formData.email &&
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.province &&
      formData.district &&
      formData.subDistrict &&
      formData.postalcode &&
      formData.creditCardName &&
      !errors.email &&
      !errors.firstName &&
      !errors.lastName &&
      !errors.address &&
      !errors.province &&
      !errors.district &&
      !errors.subDistrict &&
      !errors.postalcode &&
      !errors.creditCardName
    ) {
      setIsDataReady(true);
    } else {
      setIsDataReady(false);
    }
  };

  //   const [createPaymentIntent] = useMutation(CREATE_PAYMENT_INTENT);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleNext)}>
        {/* Contact Step */}
        <div>
          <InlineWrapper justifyContent="space-between">
            <Typography
              color={step >= 1 || formData.email ? "systemDark" : "label"}
              variant="tags-medium"
            >
              Contact
            </Typography>
            {formData.email && step > 1 && !editMode.contact && (
              <div
                onClick={() => handleEdit("contact")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography color="systemDark" variant="action-text">
                  Edit
                </Typography>
                <Spacer x={4} />
                <EditIcon size={24} />
              </div>
            )}
          </InlineWrapper>
          <Spacer y={12} />
          {editMode.contact || step === 1 ? (
            <>
              <Typography color="systemDark" variant="p-articles">
                Please enter your email address:
              </Typography>

              <TextFieldForm
                variant="outlined"
                label="Email"
                validationType="email"
                {...register("email", { required: true })}
                defaultValue={formData.email}
              />
              <Spacer y={12} />

              <Typography color="systemDark">
                Got an account? <Link href="/privacy-notice">Login</Link>
              </Typography>
              <FormControlLabel
                control={<Checkbox {...register("terms")} />}
                label={<EmailLabel />}
              />
              <Button
                type="button"
                variant="filled"
                onClick={handleSubmit((data) => saveContactEdit(data))}
              >
                Save and Continue to Shipping
              </Button>
            </>
          ) : (
            <InlineWrapper>
              <Typography color="systemDark" variant="label-medium">
                Email:
              </Typography>
              <Spacer x={12} />
              <Typography color="systemDark" variant="p-detail">
                {formData.email}
              </Typography>
            </InlineWrapper>
          )}
        </div>

        <Spacer y={24} />
        <Line />
        <Spacer y={24} />
        {/* Shipping Step */}
        <div>
          <InlineWrapper justifyContent="space-between">
            <Typography
              color={step >= 2 || formData.address ? "systemDark" : "label"}
              variant="tags-medium"
            >
              Shipping
            </Typography>
            {formData.firstName && step > 2 && !editMode.shipping && (
              <div
                onClick={() => handleEdit("shipping")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography color="systemDark" variant="action-text">
                  Edit
                </Typography>
                <Spacer x={4} />
                <EditIcon size={24} />
              </div>
            )}
          </InlineWrapper>
          <Spacer y={24} />
          {editMode.shipping || step === 2 ? (
            <>
              <Typography color="systemDark" variant="p-articles">
                Shipping Address
              </Typography>
              <Spacer y={12} />
              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="First Name"
                  {...register("firstName", { required: true })}
                  defaultValue={formData.firstName}
                />
                <Spacer x={24} />
                <TextFieldForm
                  variant="outlined"
                  label="Last Name"
                  {...register("lastName", { required: true })}
                  defaultValue={formData.lastName}
                />
              </RowWrapperMultipleCol>
              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="Address"
                  {...register("address", { required: true })}
                  defaultValue={formData.address}
                />
              </RowWrapperMultipleCol>

              <RowWrapperMultipleCol>
                <AddressAutocomplete onAddressChange={handleAddressChange} />
              </RowWrapperMultipleCol>
              <Spacer y={12} />

              <FormControl>
                <RowWrapperMultipleCol>
                  <ShippingMethod onChange={handleShippingChange} />
                </RowWrapperMultipleCol>
              </FormControl>
              <Spacer y={24} />
              <Button
                type="button"
                variant="filled"
                onClick={handleSubmit((data) => saveShippingEdit(data))}
              >
                Save and Continue to Payment
              </Button>
            </>
          ) : (
            <CheckoutDetail
              section={"SHIPPING"}
              formData={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                address: formData.address,
                province: formData.province,
                district: formData.district,
                subDistrict: formData.subDistrict,
                postalcode: formData.postalcode,
              }}
            />
          )}
        </div>

        <Line />
        <Spacer y={24} />

        {/* Payment Step */}
        <div>
          <InlineWrapper justifyContent="space-between">
            <Typography
              color={
                step >= 3 || formData.creditCardName ? "systemDark" : "label"
              }
              variant="tags-medium"
            >
              Payment Options
            </Typography>
            <Spacer y={24} />
            {formData.creditCardName && step > 3 && !editMode.payment && (
              <div
                onClick={() => handleEdit("payment")}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography color="systemDark" variant="action-text">
                  Edit
                </Typography>
                <Spacer x={4} />
                <EditIcon size={24} />
              </div>
            )}
          </InlineWrapper>
          {editMode.payment || step === 3 ? (
            <>
              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="Cardholder name"
                  {...register("creditCardName", { required: true })}
                  defaultValue={formData.creditCardName}
                />
              </RowWrapperMultipleCol>
              <CreditCardInput />
              <Button
                type="button"
                variant="filled"
                onClick={handleSubmit((data) => savePaymentEdit(data))}
              >
                Confirm Details
              </Button>
            </>
          ) : (
            <>
              <CheckoutDetail
                section={"PAYMENT"}
                formData={{
                  creditCardName: formData.creditCardName,
                  cardNumber: formData.cardNumber,
                  expirationDate: formData.expirationDate,
                  securityCode: formData.securityCode,
                }}
              />
            </>
          )}
        </div>

        <Button
          type="button"
          variant="filled"
          onClick={handleSubmit((data) => savePaymentEdit(data))}
        >
          Confirm Details
        </Button>
      </form>
    </FormProvider>
  );
};

export default CheckoutForm;
