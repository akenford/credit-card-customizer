import CardVendor from "@/entities/CardVendors";
import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";
import { cardVendorsRegExp } from "@/types";

class MasterCard extends CardVendor implements cardVendorsRegExp {
  regex: RegExp;
  constructor(newRegex: cardVendorsRegExp = { regex: new RegExp("^5[1-5]") }) {
    super();
    this.type = cardVendors.MASTERCARD;
    this.src = cardVendorsSrc.MASTERCARD;
    this.regex = newRegex.regex;
  }
  compare(str: string): this | null {
    if (str.match(this.regex) != null) {
      return this;
    }
    return null;
  }
}
export default MasterCard;
