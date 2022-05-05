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

type btnModel = {
  type: string;
  text: string;
  icon: {
    needShowIcon: boolean;
    direction: string;
    type: string;
    additionalStyles?: string;
  };
  handler: {
    func: (num: number) => null | void;
    arg: null | number;
  };
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

export {
  mountYearModel,
  cardModel,
  cardVendorsModel,
  cardVendorsRegExp,
  btnModel,
};
