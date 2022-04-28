<template>
  <div class="row">
    <Card :models="models" :isCardFlipped="isCardFlipped" />
    <form
      @submit.prevent="submitHandler"
      class="col s12 m8 l8 offset-l2 offset-m2"
    >
      <div class="row">
        <div class="input-field col s12">
          <input
            id="models.cardNumber"
            type="text"
            class="validate"
            required
            autocomplete="off"
            data-ref="cardNumber"
            v-model="models.cardNumber"
          />
          <label for="models.cardNumber">Card Number</label>
        </div>
        <div class="input-field col s12">
          <input
            id="models.cardName"
            type="text"
            class="validate"
            required
            v-model="models.cardName"
          />
          <label for="models.cardName">Card Holder</label>
        </div>
        <div class="input-field col s4">
          <select id="models.cardMonth" v-model="models.cardMonth" required>
            <option value="" selected disabled>Month</option>
            <option
              :key="option.value"
              v-for="option in mOptions"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="input-field col s4">
          <select id="models.cardYear" v-model="models.cardYear" required>
            <option value="" selected disabled>Year</option>
            <option
              :key="option.value"
              v-for="option in yOptions"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>
        </div>
        <div class="input-field col s4">
          <input
            id="models.cardCvv"
            type="number"
            class="validate"
            required
            autocomplete="off"
            :value="models.cardCvv"
            @input="updateCvvValue"
            @focus="flipCard(true)"
            @blur="flipCard(false)"
          />
          <label for="models.cardCvv">CVV</label>
          <span class="character-counter" style="float: right; font-size: 12px">
            {{ models.cardCvv.length }}/3
          </span>
        </div>
        <button type="submit" class="waves-effect waves-light btn">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { monthOptions, yearOptions } from "./data";
import { cardModel } from "@/types";
import { cardModule } from "@/store/CardModule";

// components
import Card from "@/components/CreditCard/Card.vue";

// helpers
import { cardNumberType } from "@/helpers";
import CardVendor from "@/entities/CardVendors/CardVendor";

@Options({
  components: {
    Card,
  },
})
export default class CreditCardForm extends Vue {
  public models: cardModel = {
    id: Date.now(),
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    cardBackground: Math.floor(Math.random() * 4 + 1),
    cardType: new CardVendor(),
  };
  public isCardFlipped = false;
  public mOptions = monthOptions;
  public yOptions = yearOptions;

  @Watch("models.cardNumber")
  onCardNumberChanged(val: string) {
    this.models.cardType = cardNumberType(val);
  }

  updateCvvValue(event: { target: { value: string } }) {
    const value = event.target.value;
    if (value.length <= 3) {
      this.models.cardCvv = value;
    }
    this.$forceUpdate();
  }

  flipCard(status: boolean) {
    this.isCardFlipped = status;
  }

  submitHandler() {
    cardModule.createCard(this.models);
  }
}
</script>

<style lang="scss" scoped></style>
