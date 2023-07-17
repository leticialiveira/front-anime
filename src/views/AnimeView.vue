<script setup>
import Anime from "../components/anime.vue"
import axios from "axios";
import { ref } from "vue";

let dataAxios = ref([])
let validacao = ref(false)
console.log(validacao);
console.log(validacao.value);

async function Test() {
  await axios.get("http://localhost:3000/app/animes")
   .then((response) => {
      validacao.value = true
      validacao = validacao.value
      console.log(validacao);
      dataAxios = response.data.data;
      console.log(dataAxios);
    })
    .catch((error) => {
      console.log(error);
    });
  }
  await Test();
console.log(dataAxios);
</script>

<template>
    <div class="anime">
        <div class="header">
            <h1>ANIME</h1>
        </div>
        <div class="grid-animes">
            <Anime  v-if="validacao" v-for="item in dataAxios" :ref="dataAxios" :key="item.id" :name="item.name" :img="item.img"
            :description="item.description"/>
          </div>
        </div>
</template>

<style scoped>
.anime {
    display: flex;
    flex-direction: column;
    width:100%;
    height: auto;
    gap: 20vh;
    /* border: #FFC85E solid 1px; */
}
.header {
    background-color: #151515;
    border: solid 1px #FFC85E;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95.5vw;
    margin: auto 0;
    height: 10vh;
    /* position: sticky; */
}

.header h1 {
    font-family: 'Megrim', cursive;
    color: #FFFFFF;
}
.grid-animes {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: auto;
  gap: 50px;
}
</style>
