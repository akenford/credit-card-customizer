<template>
  <div class="row">
    <h3>Current Card</h3>
    <CreditCardForm :defaultModels="editCard" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreditCardForm from "@/components/CreditCard/CreditCardForm.vue";
import { cardModule } from "@/store/CardModule";
import { cardModel } from "@/types";
import CardVendor from "@/entities/CardVendors";

@Options({
  name: "CardView",
  components: { CreditCardForm },
})
export default class CardView extends Vue {
  public editCard: cardModel = {
    id: Date.now(),
    cardNumber: "",
    cardName: "",
    cardMonth: "",
    cardYear: "",
    cardCvv: "",
    cardBackground: Math.floor(Math.random() * 4 + 1),
    cardType: new CardVendor(),
  };

  mounted() {
    const { id } = this.$route.params;
    this.editCard = cardModule.getCardById(id.toString());
  }
}
</script>
<style lang="scss" scoped></style>
