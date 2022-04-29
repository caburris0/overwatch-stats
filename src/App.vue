<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Overwatch Statistics
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<style>

#app {
  max-width: 1280px;
  margin: 50px auto;
  margin-left: 620px;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

</style>
