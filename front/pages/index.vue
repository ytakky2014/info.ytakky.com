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
        title: 'Golang',
        description: '主に使用している言語。開発期間は直近6年。主にSaaSのバックエンド開発に使用している',
    },
    {
        title: 'PHP',
        description: '過去利用していた言語。PHP5.2-5.5の時代あたりよく書いていた。PHP7独自の機能は使えてないので勉強し直す必要がある',
    },
    {
        title: 'Python',
        description: 'データ処理や簡単なスクリプト作成に使用',
      },
    ],
  },
  {
    id: 2,
    title: 'Framework',
    details: [
      {
        title: 'Echo',
        description: 'Golangのフレームワーク。主にAPI開発に使用。一番利用していて手になじんでいるフレームワーク',
      },
      {
        title: 'Chi',
        description: 'Golangのフレームワーク。内部のAPI開発に利用していた。一部CodeGeneratorで生成したコードを利用していた',
      },
      {
        title: 'Laravel',
        description: 'PHPのフレームワークで、過去にAPI開発に使用。',
      },
    ],
  },
  {
    id: 3,
    title: 'InfraStructure',
    details: [
    {
        title: 'Docker',
        description: '開発環境の構築やデプロイに使用。経験は5年程度。',
      },
      {
        title: 'Kubernetes',
        description: 'コンテナオーケストレーションツール。過去運用実績あり。直近の業務では利用していない',
      },
      {
        title: 'AWS',
        description: 'メインで使用しているクラウドサービス。ECS,RDS,Lambda,SQSなどを利用している',
      },
      {
        title: 'Google Cloud Platform',
        description: '過去に運用したことがあるクラウドサービス。GKE,Cloud Run,Cloud Functionsなどを利用していた',
      },
    ],
  },
  {
    id: 5,
    title: 'Editor',
    details: [
      {
        title: 'Visual Studio Code',
        description: '主に開発で使用。',
      },
      {
        title: 'Vim',
        description: 'サーバー上での簡単な編集に使用。',
      },
    ],
  },
  {
    id: 6,
    title: 'AI',
    details: [
      {
        title: 'Github Copilot',
        description: 'プライベート,業務問わず利用している。',
      },
      {
        title: 'Gemini',
        description: 'プライベート,業務問わず利用している。業務で趣味の分析をしてもらったりしている。APIを利用したツールも作成',
      },
    ],
  },
  {
    id: 6,
    title: 'Others',
    details: [
      {
        title: 'Fluentd',
        description: 'ログ収集ツールとして使用',
      },
      {
        title: 'Raspberry Pi',
        description: 'IoTで使用。',
      },
      {
        title: '自作キーボード',
        description: 'キットを利用して、いくつかはんだ付けを含めて作成',
      },
    ],
  },
];

const activeTab = ref('profile');
const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>

<style scoped>
.skill-card {
  margin-bottom: 1rem;
}
</style>

