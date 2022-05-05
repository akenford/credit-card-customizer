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
import { Prop } from "vue-property-decorator";
import { btnModel } from "@/types";

@Options({
  name: "Button",
})
export default class Button extends Vue {
  @Prop({
    type: Object as () => btnModel,
    required: true,
    default: {
      type: "button",
      text: "Submit",
      icon: {
        needShowIcon: true,
        direction: "right",
        type: "send",
        additionalStyles: "",
      },
      handler: {
        func: () => null,
        arg: null,
      },
    },
  })
  readonly btnConfig!: btnModel;
}
</script>
<style lang="scss" scoped></style>
