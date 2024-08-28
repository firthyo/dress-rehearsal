import React from "react";
import {
  CheckoutFormVariables,
  ContactFormData,
  CreditCardFormData,
  ShippingFormData,
} from "./types";
import { InlineWrapper, Spacer, Typography } from "components/core";
interface ShippingAddressInfoProps {
  section: "CONTACT" | "SHIPPING" | "PAYMENT";
  formData: ShippingFormData | CreditCardFormData | ContactFormData;
}
export const CheckoutDetail: React.FC<ShippingAddressInfoProps> = ({
  formData,
  section,
}) => {
  switch (section) {
    case "CONTACT":
      const { email } = formData as ContactFormData;
      return (
        <>
          <InlineWrapper>
            <Typography color="systemDark" variant="label-medium">
              Email:
            </Typography>
            <Spacer x={12} />
            <Typography color="systemDark" variant="p-detail">
              {email}
            </Typography>
          </InlineWrapper>
        </>
      );
    case "SHIPPING":
      const {
        firstName,
        lastName,
        address,
        province,
        district,
        subDistrict,
        postalcode,
      } = formData as ShippingFormData;

      return (
        <div style={{ display: "flex" }}>
          <>
            <Spacer y={12}></Spacer>
            {firstName && (
              <Typography color="systemDark" variant="label-medium">
                Shipping Address: <Spacer x={12} />
              </Typography>
            )}
          </>

          <div>
            {firstName && (
              <>
                <Typography color="systemDark" variant="p-detail">
                  {firstName} {lastName}
                </Typography>
              </>
            )}
            {address && (
              <>
                <Typography color="systemDark" variant="p-detail">
                  {address}
                </Typography>
              </>
            )}
            {province && (
              <>
                <Typography color="systemDark" variant="p-detail">
                  {district}, {subDistrict}
                </Typography>
              </>
            )}
            {province ||
              (postalcode && (
                <>
                  <Typography color="systemDark" variant="p-detail">
                    {province}, {postalcode}
                  </Typography>
                </>
              ))}
          </div>
        </div>
      );
    case "PAYMENT":
      const { creditCardName, cardNumber, expirationDate } =
        formData as CreditCardFormData;

      return (
        <>
          {creditCardName && (
            <InlineWrapper>
              <Typography color="systemDark" variant="label-medium">
                Cardholder name :
              </Typography>
              <Spacer x={12} />
              <Typography color="systemDark" variant="p-articles">
                {creditCardName}
              </Typography>
            </InlineWrapper>
          )}

          {cardNumber && (
            <>
              <Spacer y={12} />
              <InlineWrapper>
                <Typography color="systemDark" variant="label-medium">
                  Card Number:{" "}
                </Typography>
                <Spacer x={12} />
                <Typography color="systemDark" variant="p-articles">
                  {cardNumber}
                </Typography>
              </InlineWrapper>
            </>
          )}
          {expirationDate && (
            <>
              <InlineWrapper>
                <Typography color="systemDark" variant="label-medium">
                  Expiration Date:
                </Typography>
                <Spacer x={12} />
                <Typography color="systemDark" variant="p-articles">
                  {expirationDate}
                </Typography>
              </InlineWrapper>
            </>
          )}
          <Spacer y={24} />
        </>
      );
    default:
      return null;
  }
};

export default CheckoutDetail;
