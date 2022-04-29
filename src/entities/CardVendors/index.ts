import {
  cardVendors,
  cardVendorsMask,
  cardVendorsSrc,
} from "@/components/CreditCard/data";
import { cardVendorsModel } from "@/types";

interface ICardVendor extends cardVendorsModel {
  compare: (str: string) => object | null;
}

class CardVendor implements ICardVendor {
  type: cardVendors;
  src: cardVendorsSrc;
  mask: cardVendorsMask;
  constructor(
    newCard: cardVendorsModel = {
      type: cardVendors.DEFAULT,
      src: cardVendorsSrc.DEFAULT,
      mask: cardVendorsMask.DEFAULT,
    }
  ) {
    this.type = newCard.type;
    this.src = newCard.src;
    this.mask = newCard.mask;
  }

  compare(str: string): this | null {
    throw new Error(`Compare method should be implemented Str value: ${str}`);
  }
}
export default CardVendor;
