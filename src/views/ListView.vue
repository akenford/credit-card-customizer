<template>
  <div class="row">
    <h3>Cards List</h3>
    <div v-for="models in cardArray" :key="models.id" class="col xl4 l6 m6 s12">
      <Card :isCardFlipped="false" :isFlipOnHover="true" :models="models" />
      <div class="btns">
        <div class="btns_inner">
          <Button
            :btnConfig="{
              type: 'button',
              text: 'Edit',
              icon: {
                needShowIcon: true,
                direction: 'right',
                type: 'edit',
                additionalStyles: 'light-blue darken-1',
              },
              handler: {
                func: handleEditCard,
                arg: models.id,
              },
            }"
          />
          <Button
            :btnConfig="{
              type: 'button',
              text: 'Delete',
              icon: {
                needShowIcon: true,
                direction: 'right',
                type: 'close',
                additionalStyles: 'red',
              },
              handler: {
                func: handleDeleteCard,
                arg: models.id,
              },
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { cardModule } from "@/store/CardModule";
import { cardModel } from "@/types";
import Routes from "@/router/routes";

// components
import Card from "@/components/CreditCard/Card.vue";
import Button from "@/components/Button/Button.vue";

@Options({
  name: "ListView",
  components: {
    Card,
    Button,
  },
})
export default class ListView extends Vue {
  public cardArray: cardModel[] = [];
  mounted() {
    this.cardArray = cardModule.getCards;
  }

  handleEditCard(id: number) {
    this.$router.push({ path: `${Routes.LIST}/${id}` });
  }

  handleDeleteCard(id: number) {
    cardModule.removeCard(id);
  }
}
</script>
<style lang="scss" scoped>
.btns {
  height: 36px;
  &_inner {
    display: flex;
    justify-content: space-between;
    max-width: 300px;
    margin: 0 auto;

    i {
      font-size: 1rem;
    }
  }
}
</style>
