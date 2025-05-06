<template>
    <v-card class="skill-card" elevation="3">
              <v-card-title>{{title }}</v-card-title>
              <v-card-text>
                <v-list>
                  <v-list-item v-for="(detail, index) in details" :key="index">
                    <v-list-item-content>
                      <v-list-item-title>{{ detail.title }}</v-list-item-title>
                      <v-list-item-subtitle>{{ detail.description }}</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  details: { title: string; description: string }[];
}>();
</script>

<style scoped>
.skill-card {
  background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem;
}

.skill-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.card-title {
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.detail-item {
  margin-bottom: 0.5rem;
}
</style>