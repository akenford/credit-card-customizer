<template>
  <div class="row">
    <h3>Current Card</h3>
    <CreditCardForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreditCardForm from "@/components/CreditCard/CreditCardForm.vue";

@Options({
  name: "CardView",
  components: { CreditCardForm },
})
export default class CardView extends Vue {}
</script>
<style lang="scss" scoped></style>
