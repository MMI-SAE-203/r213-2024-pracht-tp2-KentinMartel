<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'

// const agentListe = await allagent()
const agentListe = await pb.collection('Agent').getFullList()

console.log('Tous les Agents', agentListe)
</script>

<template>
  <h1 class="text-2xl">Liste des agents</h1>

  <ul>
    <li v-for="agent of agentListe" :key="agent.id">
      <RouterLink
        :to="{
          name: '/offres/[id]',
          params: {
            id: agent.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ agent.nom }}
      </RouterLink>
    </li>
  </ul>
</template>
