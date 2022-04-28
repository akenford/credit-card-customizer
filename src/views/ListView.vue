<template>
  <div class="row">
    <h3>Cards List</h3>
    <div v-for="models in cardArray" :key="models.id" class="col xl4 l6 m6 s12">
      <Card :isCardFlipped="false" :isFlipOnHover="true" :models="models" />
      <div class="btns">
        <transition name="slide-fade-up">
          <div class="btns_inner">
            <button
              class="btn waves-effect waves-light"
              @click="handleEditCard(models.id)"
            >
              Edit
              <i class="material-icons small right">edit</i>
            </button>
            <button
              class="btn waves-effect waves-light red"
              @click="handleDeleteCard(models.id)"
            >
              Delete
              <i class="material-icons small right">close</i>
            </button>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Card from "@/components/CreditCard/Card.vue";
import { cardModule } from "@/store/CardModule";
import { cardModel } from "@/types";
import Routes from "@/router/routes";

@Options({
  name: "ListView",
  components: { Card },
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
