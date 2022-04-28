<template>
  <div class="row">
    <nav class="blue darken-3">
      <div class="nav-wrapper">
        <div class="col s12">
          <router-link class="brand-logo" to="/">Card customizer</router-link>
          <ul class="right hide-on-med-and-down">
            <router-link
              to="/"
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
              <router-link to="/list" active-class="active">
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

export default class Nav extends Vue {}
</script>

<style lang="scss" scoped>
nav {
  padding: 0;
}
</style>
