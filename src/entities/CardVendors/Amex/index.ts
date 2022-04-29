import CardVendor from "@/entities/CardVendors";
import {
  cardVendors,
  cardVendorsMask,
  cardVendorsSrc,
} from "@/components/CreditCard/data";
import { cardVendorsRegExp } from "@/types";

class Amex extends CardVendor implements cardVendorsRegExp {
  regex: RegExp;
  constructor(newRegex: cardVendorsRegExp = { regex: new RegExp("^(34|37)") }) {
    super();
    this.type = cardVendors.AMEX;
    this.src = cardVendorsSrc.AMEX;
    this.regex = newRegex.regex;
    this.mask = cardVendorsMask.AMEX;
  }
  compare(str: string): this | null {
    if (str.match(this.regex) != null) {
      return this;
    }
    return null;
  }
}
export default Amex;
