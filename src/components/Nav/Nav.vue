<template>
  <div class="row">
    <nav class="blue darken-3">
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link class="brand-logo" to="/">Card customizer</router-link>
          <ul class="right hide-on-med-and-down">
            <router-link
              :to="routes.HOME"
              active-class="active"
              custom
              v-slot="{ href, isActive, isExactActive }"
            >
              <li>
                <a
                  :class="[
                    isActive && 'active',
                    isExactActive && 'router-link-exact-active',
                  ]"
                  :href="href"
                >
                  Home
                </a>
              </li>
            </router-link>
            <li>
              <router-link :to="routes.CARD_LIST" active-class="active">
                Cards List
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import Routes from "@/router/routes";

export default class Nav extends Vue {
  public routes = Routes;
}
</script>

<style lang="scss" scoped>
nav {
  padding: 0;
}
</style>
