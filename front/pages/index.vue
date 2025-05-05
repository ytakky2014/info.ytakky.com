<template>
  <v-container
  >
  
    <v-tabs v-model="activeTab">
      <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">{{ tab.label }}</v-tab>
    </v-tabs>
    <v-container>
      <v-row v-if="activeTab === 'profile'">
        <v-col cols="16" md="16" v-for="card in tabs[0].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description" />
        </v-col>
      </v-row>

      <v-row v-else-if="activeTab === 'sns'">
        <v-col cols="12" md="6" v-for="card in tabs[1].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description" :icon="card.icon" :link="card.link" />
        </v-col>
      </v-row>

      <v-row v-else-if="activeTab === 'contact'">
        <v-col cols="12" md="6" v-for="card in tabs[2].cards" :key="card.id">
          <PortfolioCard :title="card.title" :description="card.description"  />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue';

type Card = {
  id: number;
  title: string;
  description: string;
  icon?: string; // icon をオプショナルに
  link?: string; // link をオプショナルに
};

type Tab = {
  id: string;
  label: string;
  cards: Card[];
};

const tabs: Tab[] = [
  {
    id: 'profile',
    label: 'profile',
    cards: [
      {
        id: 1,
        title: 'Profile',
        description:
          '2014年4月 Webメディア会社に就職 新規メディアの構築やMySQLのバージョンアップなどに携わる。\n2016年4月頃から DevOpsの推進やGoogleContainerEngineを使ったインフラ基盤の構築・運用 自動化ツールの作成などバックエンドからインフラまで幅広く行っている。\n得意な分野はクラウドをうまく利用した開発環境の構築や便利ツール作成。',
      },
    ],
  },
  {
    id: 'sns',
    label: 'SNS',
    cards: [
      {
        id: 2,
        title: 'ブログ',
        description: 'ytakky てくめも',
        icon: 'mdi-post',
        link: 'https://ytacky.hatenablog.com/',
      },
    ],
  },
  {
    id: 'contact',
    label: 'Contact',
    cards: [
      { id: 6, title: 'Contact 1', description: 'Description of contact 1' },
      { id: 7, title: 'Contact 2', description: 'Description of contact 2' },
    ],
  },
];

const activeTab = ref('profile');
</script>

