<template>
  <div class="about-us" style="font-family:'M PLUS 2'">
    <div class="card1 py-10 px-10 flex">
      <div class="relative text-left">
        <div class="title text-4xl font-bold mt-5 mb-14">Our passion for gaming is limitless</div>
        <div class="pb-5" style="max-width: 800px;">
          Here at Yggdrasil we thrive on innovation and have been pushing boundaries in the gaming industry for over a decade.
          Our aim is to deliver top-performing games with high-quality graphics, innovative mechanics,
          and strong player engagement. Yggdrasil values a diverse portfolio, offering games with global flavours across various themes and mechanics.
        </div>
        <div class="pb-5" style="max-width: 800px;">
          Our success is intertwined with the success of our partners. Industry-first initiatives like GEMs, GATI,
          and BOOST showcase our commitment to innovation. The YG Masters program and strategic partnerships signify 
          Yggdrasil’s evolution into a global publishing powerhouse. We always strive to optimise,
          consolidate, and scale operations for long-term success, always keeping innovation at our forefront.
        </div>
      </div>
      <div class="picture text-right" style="max-width: 640px; min-width: 390px;">
        <img src="/assets/img/ygg/about-us-main.png" alt="">
      </div>
    </div>
    <div v-show="isBoard" id="section1" class="card2 text-4xl font-bold py-14 px-8">
      <div class="person-title text-4xl mb-10">
        <div>
          Yggdrasil Management
        </div>
        <div @click="isBoard=false">
          <a href="#section2">
            <button
              type="button"
              class="person-change px-7 text-base">Yggdrasil Board
            </button>
          </a>
        </div>
      </div>
      <div class="person" style="width: 100%;">
        <div class="image-wrapper">
          <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="">
          <div class="name text-lg">James Curwen</div>
          <div class="job-title text-base">CEO</div>
        </div>
        <div class="image-wrapper">
          <img src="/assets/img/ygg/Alex-New-150x150.png" alt="">
          <div class="name text-lg">Alexander Haywood</div>
          <div class="job-title text-base">MD - Core Services</div>
        </div>
        <div class="image-wrapper">
          <img src="/assets/img/ygg/Petter-150x150.png" alt="">
          <div class="name text-lg">Petter Envall</div>
          <div class="job-title text-base">CLCO</div>
        </div>
      </div>
    </div>
    <div v-show="!isBoard" id="section2" class="card2 text-4xl font-bold py-14 px-8">
      <div class="person-title text-4xl mb-10">
        <div>
          Yggdrasil Board
        </div>
        <div @click="isBoard=true">
          <a href="#section1">
            <button
              type="button"
              class="person-change2 px-7 text-base">Yggdrasil Management
            </button>
          </a>
        </div>
      </div>
      <div class="person" style="width: 100%;">
        <div class="image-wrapper">
          <img src="/assets/img/ygg/fredrik-elmqvist-150x150.png" alt="">
          <div class="name text-lg">Fredrik Elmqvist</div>
          <div class="job-title text-base break-words" style="width: 140px;">Yggdrasil Founder & Board member</div>
        </div>
        <div class="image-wrapper">
          <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="">
          <div class="name text-lg">James Curwen</div>
          <div class="job-title text-base">Yggdrasil CEO</div>
        </div>
        <div class="image-wrapper">
          <img src="/assets/img/ygg/itai-frieberger-150x150.png" alt="">
          <div class="name text-lg">Itai Frieberger</div>
          <div class="job-title text-base">Chairman of the board</div>
        </div>
      </div>
    </div>
    <div class="card3 relative">
      <div class="py-10 px-5">
        <div class="title text-4xl pb-10 font-bold">
          Yggdrasil Milestones
        </div>
        <div class="tree">
          <div v-for="item in yearData">
            <div
            class="year-dot rounded-sm ml-2 mb-10"
            :class="item.show ? 'year-dot-focus' : 'year-dot'"
            @click="item.show=!item.show">
              <a href=""></a>
            </div>
            <span class="text-lg">{{ item.year }}</span>
          </div>
        </div>
          <!-- <span><div v-for="n in 50" class="dot mx-1 rounded-sm"></div></span>
          <span><div v-for="n in 11" class="year-dot rounded-sm"></div></span> -->
      </div>
      <div class="bg-tree absolute">
        <div v-for="n in 75" class="dot mx-1 rounded-sm">
      </div>
      </div>
    </div>
    <!-- <div class="card4">
      <div class="pt-20 pb-12 px-8">
        <div class="text-2xl text-white pb-10 font-bold">
          Some of our partners
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isBoard = ref(false);
const isFocus = ref(false);
const yearData = reactive([
  {
    year: 2013,
    show: false
  },
  {
    year: 2014,
    show: false
  },
  {
    year: 2015,
    show: false
  },
  {
    year: 2016,
    show: false
  },
  {
    year: 2017,
    show: false
  },
  {
    year: 2018,
    show: false
  },
  {
    year: 2019,
    show: false
  },
  {
    year: 2020,
    show: false
  },
  {
    year: 2021,
    show: false
  },
  {
    year: 2022,
    show: false
  },
  {
    year: 2023,
    show: false
  },
]);
</script>

<style>
.card1 {
  width: 100%;
  height: 650px;
  background-color: #ecf0f1;
}

.card1 .title {
  color: #fa6432;
}

.card1 .picture {
  position: relative;
  top: -50px;
  /* height: calc(100% - 100px);;
  left: calc(10.6667% - 30px); */
  /* background-position: 10% 100%; */
}

.card2 {
  width: 100%;
  height: 480px;
  background: #ecf0f1;
  color: #474e5c;
}

.person {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.person-title  {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.person-change {
  width: 215px;
  height: 36px;
  border: 2px solid #fa6432;
  margin-bottom: 5px;
}

.person-change2 {
  width: 275px;
  height: 36px;
  border: 2px solid #fa6432;
  margin-bottom: 5px;
}

.person-change:hover, .person-change2:hover {
  background: #fa6432;
  color: #fff;
}

.image-wrapper {
  margin: 20px 60px; 
}

.image-wrapper img {
  min-height: 155px;
  min-width: 155px;
  height: auto;
}

.name {
  color: #fa6432;
}

.job-title {
  color: #474e5c;
}

.card3 {
  width: 100%;
  height: 700px;
  background: #fff;
}

.card3 .title {
  color: #474e5c;
}

.tree {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-column-gap: 30px;
}

.bg-tree {
  display: grid;
  grid-template-columns: repeat(80, 1fr);
  grid-column-gap: 2px;
  position: absolute;
  top: 127px;
  right: 15px;
}

.year-dot {
  height: 20px;
  width: 20px;
  background-color: #fa6432;
  border-radius: 100%;
}

.year-dot-focus {
  outline: 1rem solid #fa6432;
  background-color: linear-gradient(325deg, #fc531a 0, #ff8900 60%, #ffba00 100%);
}

.dot {
  height: 5px;
  width: 5px;
  background-color: #fa6432;
  border-radius: 100%;
}
</style>
