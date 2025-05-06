<template>
  <v-footer app color="primary" dark>
    <v-col class="text-center">© 2025 ytakky</v-col>
     <v-icon class="github-icon" @click="openGithub">mdi-github</v-icon>
  </v-footer>
</template>

<script setup lang="ts">
function openGithub() {
  window.open('https://github.com/ytakky2014', '_blank');
}
</script>

<style scoped>
.v-footer {
  position: relative;
  bottom: 0;
  width: 100%;
  z-index: 10;
}

.github-icon {
  font-size: 24px;
  color: #000;
  cursor: pointer;
  margin-left: 10px;
}
.github-icon:hover {
  color: #555;
}
</style>