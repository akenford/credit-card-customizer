import CardVendor from "@/entities/CardVendors/CardVendor";
import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";
import { cardVendorsRegExp } from "@/types";

class Discover extends CardVendor implements cardVendorsRegExp {
  regex: RegExp;
  constructor(newRegex: cardVendorsRegExp = { regex: new RegExp("^6011") }) {
    super();
    this.type = cardVendors.DISCOVER;
    this.src = cardVendorsSrc.DISCOVER;
    this.regex = newRegex.regex;
  }
  compare(str: string): this | null {
    if (str.match(this.regex) != null) {
      return this;
    }
    return null;
  }
}
export default Discover;
