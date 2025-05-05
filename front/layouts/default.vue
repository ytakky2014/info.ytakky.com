<template>
  <v-app>
    <Header />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>