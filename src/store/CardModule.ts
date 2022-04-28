import { VuexModule, Module, Action, Mutation } from "vuex-class-modules";
import { cardModel } from "@/types";

@Module()
class CardModule extends VuexModule {
  private cards: cardModel[] = JSON.parse(
    localStorage.getItem("cards") || "[]"
  );

  get getCards(): cardModel[] {
    return this.cards;
  }

  @Mutation
  addCard(card: cardModel): void {
    this.cards.push(card);
    localStorage.setItem("cards", JSON.stringify(this.cards));
  }

  @Mutation
  deleteCard(id: number): void {
    this.cards.splice(
      this.cards.findIndex((i: cardModel) => i.id === id),
      1
    );
    localStorage.setItem("cards", JSON.stringify(this.cards));
  }

  @Action
  createCard(card: cardModel): void {
    this.addCard(card);
  }

  @Action
  removeCard(id: number): void {
    this.deleteCard(id);
  }
}

import store from "@/store/index";
export const cardModule = new CardModule({ store, name: "CardModule" });
