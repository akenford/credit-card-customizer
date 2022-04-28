import {
  cardVendors,
  cardVendorsMask,
  cardVendorsSrc,
} from "@/components/CreditCard/data";
import { cardVendorsModel } from "@/types";

class CardVendor implements cardVendorsModel {
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
    throw new Error("Compare method should be implemented");
  }
}
export default CardVendor;
