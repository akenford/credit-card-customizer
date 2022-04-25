import { cardVendorsModel } from "@/components/CreditCard/types";
import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";

export const cardNumberType = (cardNumber: string): cardVendorsModel => {
  let re = new RegExp("^4");

  if (cardNumber.match(re) != null)
    return { type: cardVendors.VISA, src: cardVendorsSrc.VISA };

  re = new RegExp("^(34|37)");
  if (cardNumber.match(re) != null)
    return { type: cardVendors.AMEX, src: cardVendorsSrc.AMEX };

  re = new RegExp("^5[1-5]");
  if (cardNumber.match(re) != null)
    return { type: cardVendors.MASTERCARD, src: cardVendorsSrc.MASTERCARD };

  re = new RegExp("^6011");
  if (cardNumber.match(re) != null)
    return { type: cardVendors.DISCOVER, src: cardVendorsSrc.DISCOVER };

  re = new RegExp("^9792");
  if (cardNumber.match(re) != null)
    return { type: cardVendors.TROY, src: cardVendorsSrc.TROY };

  return { type: cardVendors.DEFAULT, src: cardVendorsSrc.DEFAULT };
};
