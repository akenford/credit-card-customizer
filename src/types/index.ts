import {
  cardVendors,
  cardVendorsMask,
  cardVendorsSrc,
} from "@/components/CreditCard/data";

declare global {
  interface Window {
    M: any;
  }
}

type mountYearModel = {
  text: string;
  value: string;
};

type cardVendorsModel = {
  readonly type: cardVendors;
  readonly src: cardVendorsSrc;
  readonly mask: cardVendorsMask;
};

type cardVendorsRegExp = {
  regex: RegExp;
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

export { mountYearModel, cardModel, cardVendorsModel, cardVendorsRegExp };
