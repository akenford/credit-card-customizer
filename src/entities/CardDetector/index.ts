import CardVendor from "@/entities/CardVendors";

interface ICardDetector {
  readonly cardVendors: CardVendor[];
  detect: (str: string) => CardVendor;
}

class CardDetector implements ICardDetector {
  readonly cardVendors: CardVendor[];

  constructor(cardVendors: CardVendor[]) {
    this.cardVendors = cardVendors;
  }

  detect(str: string): CardVendor {
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
export default CardDetector;
