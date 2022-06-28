import { VuexModule, Module, Action, Mutation } from "vuex-class-modules";
import { cardModel } from "@/types";
import LocalStorageClient from "@/entities/clients/LocalStorageClient";

@Module()
class CardModule extends VuexModule {
  private readonly cards: cardModel[];
  private readonly dataCollector: LocalStorageClient<cardModel> =
    new LocalStorageClient();

  constructor(options) {
    super(options);
    this.cards = this.dataCollector.clientGet("cards");
  }

  get getCards(): cardModel[] {
    return this.cards;
  }

  getCardById(id: number | string): cardModel {
    let lCard: cardModel | undefined = undefined;

    lCard = this.cards.find((item: cardModel) => item.id === Number(id));

    if (!lCard) {
      throw new Error("Nothing founded!!!");
    }

    return lCard;
  }

  @Mutation
  addCard(card: cardModel): void {
    this.cards.push(card);
    this.dataCollector.clientSet("cards", this.cards);
  }

  @Mutation
  deleteCard(id: number): void {
    this.cards.splice(
      this.cards.findIndex((i: cardModel) => i.id === id),
      1
    );
    this.dataCollector.clientSet("cards", this.cards);
  }

  @Mutation
  updateCard(card: cardModel): void {
    this.cards.splice(
      this.cards.findIndex((i: cardModel) => i.id === card.id),
      1,
      card
    );
    this.dataCollector.clientSet("cards", this.cards);
  }

  @Action
  createCard(card: cardModel): void {
    this.addCard(card);
  }

  @Action
  removeCard(id: number): void {
    this.deleteCard(id);
  }

  @Action
  editCard(card: cardModel): void {
    this.updateCard(card);
  }
}

import store from "@/store/index";
export const cardModule = new CardModule({ store, name: "CardModule" });
