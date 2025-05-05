<template>
  <v-card class="portfolio-card" elevation="3">
    <v-img v-if="image" :src="image" alt="Project image" class="card-image" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text class="text-pre-wrap">{{ description }}</v-card-text>
    <v-icon v-if="icon" class="card-icon">{{ icon }}</v-icon>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String,
  image: String,
  icon: String,
});
</script>

<style scoped>
.portfolio-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  height: 200px;
  object-fit: cover;
}

.learn-more-btn {
  margin-left: auto;
}

.card-icon {
  font-size: 24px;
  color: #1976d2;
  margin-top: 10px;
}
</style>