<template>
  <div class="row">
    <h3>Edit Current Card: {{ editCard.cardName }}</h3>
    <CreditCardForm :customSubmit="handleEditCard" :defaultModels="editCard">
      <Button
        :btnConfig="{
          type: 'submit',
          text: 'Save',
          icon: {
            needShowIcon: true,
            direction: 'right',
            type: 'edit',
            additionalStyles: 'light-blue darken-1',
          },
          handler: {
            func: () => null,
            arg: null,
          },
        }"
      />
    </CreditCardForm>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreditCardForm from "@/components/CreditCard/CreditCardForm.vue";
import { cardModule } from "@/store/CardModule";
import { cardModel } from "@/types";
import CardVendor from "@/entities/CardVendors";
import Button from "@/components/Button/Button.vue";
import Routes from "@/router/routes";

@Options({
  name: "CardView",
  components: { CreditCardForm, Button },
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

  handleEditCard(card) {
    cardModule.editCard(card);
    setTimeout(() => {
      this.$router.push({ path: Routes.CARD_LIST });
    }, 2000);
  }
}
</script>
<style lang="scss" scoped></style>
