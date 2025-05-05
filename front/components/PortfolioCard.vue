<template>
  <v-card class="portfolio-card" elevation="3">
    <v-img :src="image" alt="Project image" class="card-image" />
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" class="learn-more-btn" outlined>Learn More</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  title: String,
  description: String,
  image: String,
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
</style>