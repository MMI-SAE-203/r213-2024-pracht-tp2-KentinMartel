<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import MaisonCard from '@/components/MaisonCard.vue'
import { allMaisonsFavori } from '@/backend'

const maisonListe = await allMaisonsFavori()

/* const maisonsListe: MaisonResponse[] = [
{
    adresse: '20 place de Ferrier, Bayonne ',
    collectionId: 'nxoouoovor5zn6o',
    collectionName: Collections.Maison,
    created: '2024-04-11 12:24:03.398Z',
    favori: true,
    id: 'sllqar9aewe0m3i',
    image: 'modele_manoir_1_r1_5_maEtZE1HuQ.jpg',
    nbChambres: 4,
    nbSdb: 2,
    nomMaison: 'Maison Soleil',
    prix: 15000,
    surface: 300,
    updated: '2024-04-11 12:24:10.969Z'
  },
  {
    adresse: '20 du coquelicot ',
    collectionId: 'nxoouoovor5zn6o',
    collectionName: Collections.Maison,
    created: '2024-04-11 12:26:01.918Z',
    favori: true,
    id: 'vfnfnlwcc018rag',
    image: '40617b57_b3de_4703_8539_16529251a45c_w74FbeSjOH.webp',
    nbChambres: 7,
    nbSdb: 3,
    nomMaison: 'Maison Caxias',
    prix: 350000,
    surface: 275,
    updated: '2024-04-11 12:26:01.918Z'
  },
  {
    adresse: '10 rue Victor Hugo',
    collectionId: 'nxoouoovor5zn6o',
    collectionName: Collections.Maison,
    created: '2024-04-11 12:28:07.137Z',
    favori: false,
    id: '113e3fikgk4n5jf',
    image:
      'random_picture_of_houses_sold_by_us_regine_villedieu_immobilier_img_986136b80204f124_4_9327_1_d1acfe_wHbkYDka96.jpg',
    nbChambres: 2,
    nbSdb: 1,
    nomMaison: 'Maison boueuse ',
    prix: 450000,
    surface: 150,
    updated: '2024-04-11 12:28:07.137Z'
  },
  {
    adresse: '20 impasse Dubois ',
    collectionId: 'nxoouoovor5zn6o',
    collectionName: Collections.Maison,
    created: '2024-04-11 12:30:27.157Z',
    favori: true,
    id: 'rmc4f4wam8erjle',
    image: '17c10e23_377a_4708_a23f_a1fd90941520_kPTeuRn2eg.webp',
    nbChambres: 6,
    nbSdb: 2,
    nomMaison: 'Maison Boucho ',
    prix: 699999,
    surface: 340,
    updated: '2024-04-11 12:30:27.157Z'
  },
  {
    adresse: '7 avenue LesCharmants',
    collectionId: 'nxoouoovor5zn6o',
    collectionName: Collections.Maison,
    created: '2024-04-11 12:32:29.917Z',
    favori: false,
    id: 'lwwm9nj2q7cvtr5',
    image: '2d4f8769_6e4f_4456_a312_0c56c8493725_Vz2COKfieC.webp',
    nbChambres: 3,
    nbSdb: 2,
    nomMaison: 'Maison Magnifico',
    prix: 1200000,
    surface: 280,
    updated: '2024-04-11 12:32:29.917Z'
  }
]
console.log(maisonsListe) */
</script>

<template>
  <h1 class="text-2xl">Liste des maisons favorites</h1>
  <ul>
    <li v-for="uneMaison of maisonListe" :key="uneMaison.id">
      <RouterLink
        :to="{
          name: '/offres/[id]',
          params: {
            id: uneMaison.id
          }
        }"
        class="text-red-400 hover:text-red-600"
      >
        {{ uneMaison.nomMaison }}
      </RouterLink>
    </li>
  </ul>
</template>
