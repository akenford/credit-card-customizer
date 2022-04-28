import CardVendor from "@/entities/CardVendors/CardVendor";
import { cardVendors, cardVendorsSrc } from "@/components/CreditCard/data";
import { cardVendorsRegExp } from "@/types";

class Troy extends CardVendor implements cardVendorsRegExp {
  regex: RegExp;
  constructor(newRegex: cardVendorsRegExp = { regex: new RegExp("^9792") }) {
    super();
    this.type = cardVendors.TROY;
    this.src = cardVendorsSrc.TROY;
    this.regex = newRegex.regex;
  }
  compare(str: string): this | null {
    if (str.match(this.regex) != null) {
      return this;
    }
    return null;
  }
}
export default Troy;
