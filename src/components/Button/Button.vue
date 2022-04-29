<template>
  <button
    @click="btnConfig.handler.func(btnConfig.handler.arg)"
    :type="btnConfig.type"
    :class="`btn waves-effect waves-light ${btnConfig.icon.additionalStyles}`"
  >
    {{ btnConfig.text }}
    <i
      v-if="btnConfig.icon.needShowIcon"
      :class="`material-icons ${btnConfig.icon.direction}`"
    >
      {{ btnConfig.icon.type }}
    </i>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  name: "Button",
  props: {
    btnConfig: {
      type: Object,
      required: true,
      default: () => ({
        type: "button",
        text: "Submit",
        icon: {
          needShowIcon: true,
          direction: "right",
          text: "send",
          additionalStyles: "",
        },
        handler: {
          func: () => null,
          arg: null,
        },
      }),
    },
  },
})
export default class Button extends Vue {}
</script>
<style lang="scss" scoped></style>
