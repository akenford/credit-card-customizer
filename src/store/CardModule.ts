import { VuexModule, Module, Action, Mutation } from "vuex-class-modules";
import { cardType } from "@/components/CreditCard/types";

@Module()
class CardModule extends VuexModule {
  private cards: cardType[] = JSON.parse(localStorage.getItem("cards") || "[]");

  get getCards(): cardType[] {
    return this.cards;
  }

  @Mutation
  addCard(card: cardType): void {
    this.cards.push(card);
    localStorage.setItem("cards", JSON.stringify(this.cards));
  }

  @Action
  createCard(card: cardType): void {
    this.addCard(card);
  }
}

import store from "@/store/index";
export const cardModule = new CardModule({ store, name: "CardModule" });
