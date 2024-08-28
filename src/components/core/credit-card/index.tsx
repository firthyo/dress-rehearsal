import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { IMaskInput } from "react-imask";
import { Controller, useFormContext } from "react-hook-form";
import Spacer from "../spacer";
import { RowWrapperMultipleCol } from "components/form/styles";
import { CreditCard, Jcb, Mastercard, Visa } from "assets/icons";

interface CreditCardInputProps {
  onChange?: (data: {
    cardNumber: string;
    expirationDate: string;
    securityCode: string;
  }) => void;
}

export const CreditCardInput: React.FC<CreditCardInputProps> = ({
  onChange,
}) => {
  const { control } = useFormContext();
  const [cardBrand, setCardBrand] = useState("");

  const getCardBrand = (number: string) => {
    const sanitizedNumber = number.replace(/\s/g, ""); // Remove spaces

    if (sanitizedNumber.startsWith("4")) {
      return "visa";
    } else if (/^5[1-5]/.test(sanitizedNumber)) {
      return "mastercard";
    } else if (
      /^35[2-8]/.test(sanitizedNumber) ||
      /^2131/.test(sanitizedNumber) ||
      /^1800/.test(sanitizedNumber)
    ) {
      return "jcb";
    } else {
      return "default";
    }
  };

  const renderCardIcon = () => {
    switch (cardBrand) {
      case "visa":
        return <Visa />;
      case "mastercard":
        return <Mastercard />;
      case "jcb":
        return <Jcb />;
      default:
        return <CreditCard />;
    }
  };

  return (
    <div>
      <RowWrapperMultipleCol>
        {/* Card Number */}
        <Controller
          name="cardNumber"
          control={control}
          rules={{ required: "Card Number is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Card Number"
              {...field} // Pass field object directly to ensure correct handling
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                inputComponent: IMaskInput as any,
                inputProps: { mask: "0000 0000 0000 0000" },
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end">{renderCardIcon()}</IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => {
                field.onChange(e);
                const brand = getCardBrand(e.target.value);
                setCardBrand(brand);
              }}
            />
          )}
        />
      </RowWrapperMultipleCol>

      <RowWrapperMultipleCol>
        {/* Expiration Date */}
        <Controller
          name="expirationDate"
          control={control}
          rules={{ required: "Expiration Date is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Expiration Date"
              {...field} // Pass field object directly to ensure correct handling
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                inputComponent: IMaskInput as any,
                inputProps: { mask: "00/00" },
              }}
            />
          )}
        />
        <Spacer x={24} />

        {/* Security Code */}
        <Controller
          name="securityCode"
          control={control}
          rules={{ required: "Security Code is required" }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              label="Security Code"
              {...field} // Pass field object directly to ensure correct handling
              error={!!error}
              helperText={error ? error.message : null}
              fullWidth
              InputProps={{
                inputComponent: IMaskInput as any,
                inputProps: { mask: "000" },
              }}
            />
          )}
        />
      </RowWrapperMultipleCol>
    </div>
  );
};

export default CreditCardInput;
