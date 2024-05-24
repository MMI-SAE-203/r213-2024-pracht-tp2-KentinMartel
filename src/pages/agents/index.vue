<script setup lang="ts">
import AgentCard from '@/components/AgentCard.vue'
</script>

<template>
  Les agents disponibles :

  <AgentCard v-for="agent in agentsListe" v-bind="agent" :key="agent.id" />
</template>
