export type CheckoutFormVariables = {
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

export type ShippingFormData = Pick<
  CheckoutFormVariables,
  | "firstName"
  | "lastName"
  | "address"
  | "province"
  | "district"
  | "subDistrict"
  | "postalcode"
>;

export type CreditCardFormData = Pick<
  CheckoutFormVariables,
  "creditCardName" | "cardNumber" | "securityCode" | "expirationDate"
>;

export type ContactFormData = Pick<CheckoutFormVariables, "email">;
