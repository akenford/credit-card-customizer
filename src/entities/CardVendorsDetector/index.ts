import CardVendor from "@/entities/CardVendors/CardVendor";

class CardVendorsDetector {
  private readonly cardVendors: CardVendor[];

  constructor(cardVendors: CardVendor[]) {
    this.cardVendors = cardVendors;
  }

  detect(str: string) {
    let detectedCardVendor;

    for (let i = 0; i < this.cardVendors.length; i++) {
      if (this.cardVendors[i].compare(str) != null) {
        detectedCardVendor = { ...this.cardVendors[i] };
        break;
      } else {
        detectedCardVendor = new CardVendor();
      }
    }
    return detectedCardVendor;
  }
}
export default CardVendorsDetector;
