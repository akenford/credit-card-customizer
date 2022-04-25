import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";

type mountYearModel = {
  text: string;
  value: string;
};

type cardVendorsModel = {
  type: cardVendors;
  src: cardVendorsSrc;
};

type cardModel = {
  id: number;
  cardNumber: string;
  cardMonth: string;
  cardName: string;
  cardYear: string;
  cardCvv: string;
  cardBackground: number;
  cardType: cardVendorsModel;
};

export { mountYearModel, cardModel, cardVendorsModel };
