<template>
  <v-container
  >
  
    <v-tabs v-model="activeTab">
      <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">{{ tab.label }}</v-tab>
    </v-tabs>
    <v-container>
      <v-row v-if="activeTab === 'profile'">
        <v-col cols="14" md="14" v-for="card in tabs[0].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description" />
        </v-col>
      </v-row>

      <v-row v-else-if="activeTab === 'sns'">
        <v-col cols="12" md="6" v-for="card in tabs[1].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description" :image="card.image" />
        </v-col>
      </v-row>

      <v-row v-else-if="activeTab === 'contact'">
        <v-col cols="12" md="6" v-for="card in tabs[2].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description" :image="card.image" />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue';

const tabs = [
  {
    id: 'profile',
    label: 'profile',
    cards: [
      { id: 1, 
        title: 'Profile', 
        description: "2014年4月 Webメディア会社に就職 新規メディアの構築やMySQLのバージョンアップなどに携わる。\n2016年4月頃から DevOpsの推進やGoogleContainerEngineを使ったインフラ基盤の構築・運用 自動化ツールの作成などバックエンドからインフラまで幅広く行っている。\n得意な分野はクラウドをうまく利用した開発環境の構築や便利ツール作成。" }
    ],
  },
  {
    id: 'sns',
    label: 'SNS',
    cards: [
      { id: 2, title: 'About Me 1', description: 'Description of about me 1', icon: 'mdi-github'},
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    cards: [
      { id: 6, title: 'Contact 1', description: 'Description of contact 1' },
      { id: 7, title: 'Contact 2', description: 'Description of contact 2'},
    ],
  },
];

const activeTab = ref('profile');
</script>

<style scoped>
</style>