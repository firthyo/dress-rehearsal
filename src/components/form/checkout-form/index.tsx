import { Checkbox, FormControlLabel, FormHelperText } from "@mui/material";
import {
  Button,
  DropdownMenu,
  InlineWrapper,
  Spacer,
  TextFieldForm,
  Typography,
} from "components/core";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Line, Link, RowWrapperMultipleCol } from "../styles";
import EditIcon from "assets/icons/common/edit-con";

import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormLabel from "@mui/material/FormLabel";
import { AddressAutocomplete } from "components/core/address-autocomplete";

type CheckoutFormVariables = {
  email: string;
  terms: boolean;
  firstName: string;
  lastName: string;
  address: string;
  province: string;
  district: string;
  subDistrict: string;
  postalcode: string;
  creditCardName: string;
  cardNumber: string;
  expirationDate: string;
  securityCode: string;
};

const EmailLabel = () => (
  <Typography color="systemDark">
    Receive emails about new products, sales, and store events.
  </Typography>
);
const handleClose = () => {
  console.log("choose");
};

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormVariables>();
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

  const saveEdit = (
    section: keyof typeof editMode,
    data: CheckoutFormVariables
  ) => {
    setFormData({ ...formData, ...data });
    setEditMode({ ...editMode, [section]: false });
    setStep(step + 1);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
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

          {editMode.contact || step === 1 ? (
            <>
              <Typography color="systemDark" variant="p-articles">
                Please enter your email address:
              </Typography>

              <TextFieldForm
                variant="outlined"
                label="Email"
                {...register("email", { required: true })}
                defaultValue={formData.email}
              />
              <Spacer y={12} />
              <Line />
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
                onClick={handleSubmit((data) => saveEdit("contact", data))}
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
          {editMode.shipping || step === 2 ? (
            <>
              <Typography color="systemDark" variant="p-articles">
                Shipping Address
              </Typography>
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
              <Typography color="systemDark" variant="p-articles">
                Shipping Method
              </Typography>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  onChange={handleChange}
                >
                  <FormControlLabel
                    value="standard"
                    control={<Radio />}
                    label="Standard: Free"
                  />
                  <Typography color="systemDark">
                    Get it by Saturday, July 13
                  </Typography>

                  <FormControlLabel
                    value="express"
                    control={<Radio />}
                    label="Express:  $12.95"
                  />
                  <Typography color="systemDark">
                    Get it by Saturday, July 13
                  </Typography>
                </RadioGroup>
              </FormControl>
              <Spacer y={12} />
              <Button
                type="button"
                variant="filled"
                onClick={handleSubmit((data) => saveEdit("shipping", data))}
              >
                Save and Continue to Payment
              </Button>
            </>
          ) : (
            <div>
              <div style={{ display: "flex" }}>
                <>
                  <Spacer y={12}></Spacer>
                  {formData.firstName && (
                    <Typography color="systemDark" variant="label-medium">
                      Shipping Address: <Spacer x={12} />
                    </Typography>
                  )}
                </>

                <div>
                  {formData.firstName && (
                    <>
                      <Typography color="systemDark" variant="p-detail">
                        {formData.firstName} {formData.lastName}
                      </Typography>
                    </>
                  )}
                  {formData.address && (
                    <>
                      <Typography color="systemDark" variant="p-detail">
                        {formData.address}
                      </Typography>
                    </>
                  )}
                  {formData.province && (
                    <>
                      <Typography color="systemDark" variant="p-detail">
                        {formData.province}, {formData.district},{" "}
                        {formData.subDistrict}
                      </Typography>
                    </>
                  )}
                  {formData.postalcode && (
                    <>
                      <Typography color="systemDark" variant="p-detail">
                        {formData.postalcode}
                      </Typography>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

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
                  label="Name on Card"
                  {...register("creditCardName", { required: true })}
                  defaultValue={formData.creditCardName}
                />
              </RowWrapperMultipleCol>

              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="Card Number"
                  {...register("cardNumber", { required: true })}
                  defaultValue={formData.cardNumber}
                />
              </RowWrapperMultipleCol>
              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="Expiration Date"
                  {...register("expirationDate", { required: true })}
                  defaultValue={formData.expirationDate}
                />
              </RowWrapperMultipleCol>
              <RowWrapperMultipleCol>
                <TextFieldForm
                  variant="outlined"
                  label="Security Code"
                  {...register("securityCode", { required: true })}
                  defaultValue={formData.securityCode}
                />
              </RowWrapperMultipleCol>

              <Button
                type="button"
                variant="filled"
                onClick={handleSubmit((data) => saveEdit("payment", data))}
              >
                Complete Order
              </Button>
            </>
          ) : (
            <InlineWrapper>
              {formData.creditCardName && (
                <>
                  <Typography color="systemDark" variant="label-medium">
                    Name on Card:{" "}
                  </Typography>
                  <Spacer x={12} />
                  <Typography color="systemDark" variant="p-articles">
                    {formData.creditCardName}
                  </Typography>
                </>
              )}
              {formData.cardNumber && (
                <>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="label-medium">
                    Card Number:{" "}
                  </Typography>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="p-articles">
                    {formData.cardNumber}
                  </Typography>
                </>
              )}
              {formData.expirationDate && (
                <>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="label-medium">
                    Expiration Date:{" "}
                  </Typography>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="p-articles">
                    {formData.expirationDate}
                  </Typography>
                </>
              )}
              {formData.securityCode && (
                <>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="label-medium">
                    Security Code:{" "}
                  </Typography>
                  <Spacer x={4} />
                  <Typography color="systemDark" variant="p-articles">
                    {formData.securityCode}
                  </Typography>
                </>
              )}
            </InlineWrapper>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
