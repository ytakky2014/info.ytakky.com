<template>
  <v-container>
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
      class="d-flex justify-center my-5"
    ></v-progress-circular>

    <v-tabs v-else v-model="activeTab" mandatory eager>
      <v-tab v-for="tab in tabs" :key="tab.id" :value="tab.id">{{ tab.label }}</v-tab>
    </v-tabs>

    <v-container v-if="!loading">
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

      <v-container v-if="activeTab === 'skills'">
        <v-row>
          <v-col cols="12" md="6" v-for="skill in skills" :key="skill.id">
            <SkillCard :title="skill.title" :details="skill.details" />
          </v-col>
        </v-row>
      </v-container>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import PortfolioCard from '@/components/PortfolioCard.vue';
import SkillCard from '@/components/SkillCard.vue';
type Card = {
  id: number;
  title: string;
  description: string;
  icon?: string;
  link?: string;
};

type Tab = {
  id: string;
  label: string;
  cards: Card[];
};

type SkillDetail = {
  title: string;
  description: string;
};

type Skill = {
  id: number;
  title: string;
  details: SkillDetail[];
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
`2014年4月 Webメディア会社に就職 新規メディアの構築やMySQLのバージョンアップなどに携わる。
2016年4月頃から DevOpsの推進やGoogleContainerEngineを使ったインフラ基盤の構築・運用 自動化ツールの作成などバックエンドからインフラまで幅広く行っている。
2018年4月からはSaaSの開発に携わり、主にバックエンドの開発を担当。
また、テックリードとして技術選定や、新卒の育成なども行っている。
得意な分野はクラウドをうまく利用した環境の構築やプロダクトの戦略と合わせた技術選定など。`
      ,
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
      {
        id: 3,
        title: 'Github',
        description: 'https://github.com/ytakky2014',
        icon: 'mdi-github',
        link: 'https://github.com/ytakky2014/',
      },
      {
        id: 4,
        title: 'Qiita',
        description: 'https://qiita.com/ytakky2014',
        icon: 'mdi-pen',
        link: 'https://qiita.com/takky',
      },
      {
        id: 5,
        title: 'RESUME',
        description: 'https://www.resume.id/ytakky',
        icon: 'mdi-file-account',
        link: 'https://www.resume.id/ytakky',
      },
      {
        id: 6,
        title: 'Zenn',
        description: 'https://zenn.dev/takky',
        icon: 'mdi-rocket',
        link: 'https://zenn.dev/takky',
      },

    ],
  },
  {
    id: 'skills',
    label: 'Skills',
    cards: [],
  },
];

const skills: Skill[] = [
  {
    id: 1,
    title: 'Language',
    details: [
      {
        title: 'PHP',
        description: '使っている期間が一番長い言語。 PHP5.2-5.5の時代あたりよく書いていた。 PHP7独自の機能は使えてないので勉強し直す必要がある',
      },
      {
        title: 'Golang',
        description: '簡単な自動化ツールなどはGolangで実装 期間的には半年程度 CLIアプリだけなのでWebも組んでみたい',
      },
      {
        title: 'Python',
        description: 'データ処理や簡単なスクリプト作成に使用。期間は1年程度。',
      },
    ],
  },
  {
    id: 2,
    title: 'Framework',
    details: [
      {
        title: 'Laravel',
        description: 'PHPのフレームワークで、主にAPI開発に使用。経験は2年程度。',
      },
      {
        title: 'CodeIgniter',
        description: '軽量なPHPフレームワークで、小規模なプロジェクトで使用。経験は1年程度。',
      },
    ],
  },
  {
    id: 3,
    title: 'InfraStructure',
    details: [
      {
        title: 'Kubernetes',
        description: 'コンテナオーケストレーションツールで、主にGCP上で使用。経験は3年程度。',
      },
      {
        title: 'Docker',
        description: '開発環境の構築やデプロイに使用。経験は5年程度。',
      },
    ],
  },
  {
    id: 4,
    title: 'CI/CD',
    details: [
      {
        title: 'Jenkins',
        description: 'CI/CDパイプラインの構築に使用。経験は3年程度。',
      },
      {
        title: 'Wercker',
        description: 'クラウドベースのCIツールで、小規模プロジェクトで使用。経験は1年程度。',
      },
    ],
  },
  {
    id: 5,
    title: 'Editor',
    details: [
      {
        title: 'Visual Studio Code',
        description: '主にフロントエンド開発で使用。',
      },
      {
        title: 'Vim',
        description: 'サーバー上での簡単な編集に使用。',
      },
    ],
  },
  {
    id: 6,
    title: 'Others',
    details: [
      {
        title: 'Fluentd',
        description: 'ログ収集ツールとして使用。経験は2年程度。',
      },
      {
        title: 'Raspberry Pi',
        description: 'IoTプロジェクトで使用。経験は1年程度。',
      },
    ],
  },
];

const activeTab = ref('profile');
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000); // 1秒後にローディングを終了
});
</script>

<style scoped>
.skill-card {
  margin-bottom: 1rem;
}
</style>

