import { mountYearModel } from "@/types";

export const monthOptions: mountYearModel[] = [
  { text: "01", value: "01" },
  { text: "02", value: "02" },
  { text: "03", value: "03" },
  { text: "04", value: "04" },
  { text: "05", value: "05" },
  { text: "06", value: "06" },
  { text: "07", value: "07" },
  { text: "08", value: "08" },
  { text: "09", value: "09" },
  { text: "10", value: "10" },
  { text: "11", value: "11" },
  { text: "12", value: "12" },
];
export const yearOptions: mountYearModel[] = [
  { text: "2022", value: "2022" },
  { text: "2023", value: "2023" },
  { text: "2024", value: "2024" },
  { text: "2025", value: "2025" },
  { text: "2026", value: "2026" },
  { text: "2027", value: "2027" },
  { text: "2028", value: "2028" },
  { text: "2029", value: "2029" },
  { text: "2030", value: "2030" },
  { text: "2031", value: "2031" },
  { text: "2032", value: "2032" },
  { text: "2033", value: "2033" },
];

export const enum cardVendors {
  VISA = "visa",
  MASTERCARD = "mastercard",
  AMEX = "amex",
  DISCOVER = "discover",
  TROY = "troy",
  DEFAULT = "",
}
export const enum cardVendorsSrc {
  VISA = "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png",
  MASTERCARD = "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/mastercard.png",
  AMEX = "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/amex.png",
  DISCOVER = "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/discover.png",
  TROY = "https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/troy.png",
  DEFAULT = "",
}
export const enum cardVendorsMask {
  DEFAULT = "#### #### #### ####",
  AMEX = "#### ###### #####",
}
