<template>
  <div class="home">
    <div class="row">
      <h3>Customize Your Card</h3>
      <CreditCardForm />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CreditCardForm from "@/components/CreditCard/CreditCardForm.vue";

@Options({
  name: "HomeView",
  components: { CreditCardForm },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped></style>
