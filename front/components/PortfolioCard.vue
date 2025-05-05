<template>
  <v-card 
    class="portfolio-card" 
    elevation="3"
    :prepend-icon="icon" 
    variant="outlined"
    :title="title"
    :href="link"
    target="_blank"
  >
    <v-img v-if="image" :src="image" alt="Project image" class="card-image" />
    <v-divider thickness="3"></v-divider>
    <v-card-text class="text-pre-wrap">{{ description }}</v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String,
  image: String,
  icon: String,
  link: String,
});
</script>

<style scoped>

.card-image {
  height: 200px;
  object-fit: cover;
}

.learn-more-btn {
  margin-left: auto;
}

</style>