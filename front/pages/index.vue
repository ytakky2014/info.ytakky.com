<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and get to know me better!</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4" v-for="project in projects" :key="project.id">
        <PortfolioCard :title="project.title" :description="project.description" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import PortfolioCard from '~/components/PortfolioCard.vue';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1' },
  { id: 2, title: 'Project 2', description: 'Description of project 2' },
  { id: 3, title: 'Project 3', description: 'Description of project 3' },
];
</script>

<style scoped>
/* 必要に応じてスタイルを追加 */
</style>