import CardVendor from "@/entities/CardVendors/CardVendor";
import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";
import { cardVendorsRegExp } from "@/types";

class Visa extends CardVendor implements cardVendorsRegExp {
  regex: RegExp;
  constructor(newRegex: cardVendorsRegExp = { regex: new RegExp("^4") }) {
    super();
    this.type = cardVendors.VISA;
    this.src = cardVendorsSrc.VISA;
    this.regex = newRegex.regex;
  }
  compare(str: string): this | null {
    if (str.match(this.regex) != null) {
      return this;
    }
    return null;
  }
}
export default Visa;
