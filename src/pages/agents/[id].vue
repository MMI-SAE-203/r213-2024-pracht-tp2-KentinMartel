<script setup lang="ts">
import AgentCard from '@/components/AgentCard.vue'
import { useRoute } from 'vue-router/auto'
import { infoAgent, maisonsAgent } from '@/backend'

const route = useRoute('/agents/[id]')
console.log('id : ', route.params.id)

const agent = await infoagent(route.params.id)
console.log(agent)
const agentsListe = await maisonsAgent(route.params.id)
console.log(agentsListe)
</script>

<template>
  <div class="mt-10">
    <h1 class="text-xl">{{ agent.prenom }} {{ agent.nom }}</h1>
    <h2>Offres gérés</h2>
    <div class="flex">
      <AgentCard v-for="agent in agentsListe" v-bind="agent" :key="agent.id" />
    </div>
  </div>
</template>
