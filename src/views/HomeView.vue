<template>
  <div class="row">
    <h3>Create & Customize Your Card</h3>
    <CreditCardForm :customSubmit="handleCreate">
      <Button
        :btnConfig="{
          type: 'submit',
          text: 'Submit',
          icon: { needShowIcon: true, direction: 'right', type: 'send' },
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
import Button from "@/components/Button/Button.vue";
import { cardModule } from "@/store/CardModule";
import Routes from "@/router/routes";

@Options({
  name: "HomeView",
  components: { CreditCardForm, Button },
})
export default class HomeView extends Vue {
  handleCreate(card) {
    cardModule.createCard(card);
    setTimeout(() => {
      this.$router.push({ path: Routes.CARD_LIST });
    }, 2000);
  }
}
</script>
<style lang="scss" scoped></style>
