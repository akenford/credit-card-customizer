import { cardVendorsModel } from "@/types";
import Visa from "@/entities/CardVendors/Visa";
import Amex from "@/entities/CardVendors/Amex";
import MasterCard from "@/entities/CardVendors/MasterCard";
import Discover from "@/entities/CardVendors/Discover";
import Troy from "@/entities/CardVendors/Troy";
import CardVendorsDetector from "@/entities/CardVendorsDetector";

export const cardNumberType = (cardNumber: string): cardVendorsModel => {
  const cartVendorsDetector = new CardVendorsDetector([
    new Visa(),
    new Amex(),
    new MasterCard(),
    new Discover(),
    new Troy(),
  ]);

  return cartVendorsDetector.detect(cardNumber);
};
