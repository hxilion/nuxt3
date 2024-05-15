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
        <div class="image">
          <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="">
          <div class="name text-lg">James Curwen</div>
          <div class="job-title text-base">CEO</div>
        </div>
        <div class="image">
          <img src="/assets/img/ygg/Alex-New-150x150.png" alt="">
          <div class="name text-lg">Alexander Haywood</div>
          <div class="job-title text-base">MD - Core Services</div>
        </div>
        <div class="image">
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
        <div class="image">
          <img src="/assets/img/ygg/fredrik-elmqvist-150x150.png" alt="">
          <div class="name text-lg">Fredrik Elmqvist</div>
          <div class="job-title text-base break-words" style="width: 140px;">Yggdrasil Founder & Board member</div>
        </div>
        <div class="image">
          <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="">
          <div class="name text-lg">James Curwen</div>
          <div class="job-title text-base">Yggdrasil CEO</div>
        </div>
        <div class="image">
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
        <div class="content-img absolute"></div>
        <div class="tree">
          <div v-for="(item, index) in originYearData">
            <div
              class="year-dot rounded-sm ml-2 mb-10"
              :class="item.show ? 'year-dot-focus' : 'year-dot'"
              @click="statusChange(index, item.year, true, `content${item.year}`)"
            >
              <a :href="`#content${item.year}`">
                <div class="bg-tree absolute" :class="`bg-tree${index}`">
                  <div v-for=" in 9" class="dot mx-1 rounded-sm"></div>
                </div>
              </a>
            </div>
            <span class="text-lg">{{ item.year }}</span>
          </div>
        </div>
        <div v-if="isShowContent2013" id="content2013" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" disabled>
              <Icon class="text-white" name="tdesign:arrow-left" size="30" />
            </button>
            <button class="year-switch" @click="stepBtn('next', 2014)">
              <a href="#content2014">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            Yggdrasil Gaming was founded
          </div>
        </div>
        <div v-if="isShowContent2014" id="content2014" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2013)">
              <a href="#content2013">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2015)">
              <a href="#content2015">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>Malta licence</div>
            <div class="mt-2">First client</div>
            <div class="mt-2">iSENSE 2.0 Technology</div>
            <div class="mt-2">Kraków development HUB</div>
          </div>
        </div>
        <div v-if="isShowContent2015" id="content2015" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2014)">
              <a href="#content2014">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2016)">
              <a href="#content2016">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>BOOST in-game promotional tools - Industry first</div>
            <div class="mt-2">Launch of YGG Network Campaigns – Industry First</div>
          </div>
        </div>
        <div v-if="isShowContent2016" id="content2016" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2015)">
              <a href="#content2015">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2017)">
              <a href="#content2017">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>BRAG – Social media sharing tool</div>
            <div class="mt-2">Yggdrasil White Label Studios</div>
            <div class="mt-2">UK, Gibraltar & Romania Licences</div>
          </div>
        </div>
        <div v-if="isShowContent2017" id="content2017" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2016)">
              <a href="#content2016">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2018)">
              <a href="#content2018">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>Yggdrasil Dragons</div>
            <div class="mt-2">iSENSE. 2.0+ Live</div>
            <div class="mt-2">Swedish parent company</div>
            <div class="mt-2">Live in Italy</div>
            <div class="mt-2">Fusion Realms</div>
          </div>
        </div>
        <div v-if="isShowContent2018" id="content2018" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2017)">
              <a href="#content2017">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2019)">
              <a href="#content2019">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>Launch of Table Games</div>
            <div class="mt-2">Bingo Announcement</div>
            <div class="mt-2">Yggdrasil rebranding</div>
            <div class="mt-2">Largest Jackpot payout of €7.8M</div>
            <div class="mt-2">Launch of  YGS Masters program</div>
            <div class="mt-2">Live in Denmark & Spain</div>
          </div>
        </div>
        <div v-if="isShowContent2019" id="content2019" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2018)">
              <a href="#content2018">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2020)">
              <a href="#content2020">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>Launch of YG Franchise , YG Masters (extension of YGS Masters) and YGG Game IP</div>
            <div class="mt-2">Launch of new mechanic Splitz™</div>
            <div class="mt-2">Sweden re-regulated</div>
            <div class="mt-2">New majority owner of Yggdrasil</div>
            <div class="mt-2">BOOST UI/UX redesign</div>
            <div class="mt-2">First cross vertical BOOST campaign</div>
            <div class="mt-2">Full BOOST support  for YG Masters & TG</div>
            <div class="mt-2">Upgrade to YGS Masters program and rename to YG Masters</div>
          </div>
        </div>
        <div v-if="isShowContent2020" id="content2020" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2019)">
              <a href="#content2019">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2021)">
              <a href="#content2021">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>Yggdrasil Gaming redesign</div>
            <div class="mt-2">Multifly! MultiMax enters iGaming Tracker </div>
            <div class="mt-2">Launch of new mechanics GigaBlox™ and MultiMax™</div>
            <div class="mt-2">Launch of GATI™, YGG key enabling technology </div>
            <div class="mt-2">YG Franchise strategic client deals</div>
            <div class="mt-2">YG Masters program client expansion and enhancement (GATI™)</div>
            <div class="mt-2">YGG granted Isle of Man software licence</div>
            <div class="mt-2">ISO27001 – Info security certification</div>
            <div class="mt-2">Futureproof business with Google Cloud migration</div>
            <div class="mt-2">Expanding with +40 games in 2020 (incl. slots, YG Masters and excl. re-releases)</div>
            <div class="mt-2">YGG Affiliation partnering with Game Lounge</div>
            <div class="mt-2">First YGG digital Product roadshow</div>
            <div class="mt-2">YGG receives IGA Innovator of the Year award 4th year in a row</div>
            <div class="mt-2">Hades GigaBlox hits iGaming Tracker</div>
          </div>
        </div>
        <div v-if="isShowContent2021" id="content2021" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2020)">
              <a href="#content2020">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2022)">
              <a href="#content2022">
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </a>
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>GEMs partner expansion</div>
            <div class="mt-2">Source 2.0 launched</div>
            <div class="mt-2">What’s Up YGG' Podcast launch</div>
            <div class="mt-2">Many great game releases: Frost Queen Jackpots, Easter Island 2, TikiPop etc.</div>
            <div class="mt-2">GigaRise™ GEM launch</div>
            <div class="mt-2">Blockbuster Raptor DoubleMax launched</div>
            <div class="mt-2">New GEM DoubleMax™ launched</div>
            <div class="mt-2">YG Masters program launched 60 games</div>
            <div class="mt-2">YGG and IGT announced North America partnership</div>
            <div class="mt-2">New BOOST tool JackDrop launched</div>
          </div>
        </div>
        <div v-if="isShowContent2022" id="content2022" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2021)">
              <a href="#content2021">
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </a>
            </button>
            <button class="year-switch" @click="stepBtn('next', 2023)">
              <Icon class="text-white" name="tdesign:arrow-right" size="30" />
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>IGA Award - RNG Casino Provider of the year</div>
            <div class="mt-2">US Market Entry games released Vikings Go Wild and Cazino Zeppelin</div>
            <div class="mt-2">Blockbuster Vikings Go To Valhalla released</div>
            <div class="mt-2">YGG announces new CEO Björn Krantz</div>
            <div class="mt-2">EGR 2022 – Yggdrasil receives Platform Provider</div>
            <div class="mt-2">8 GEMs including DuoMax™ and WildFight™</div>
          </div>
        </div>
        <div v-if="isShowContent2023" id="content2023" class="flex">
          <div class="content-left mt-10">
            <div class="content-title mt-4 text-5xl font-light">{{ yearTitle }}</div>
            <button class="year-switch mt-10 mr-5" @click="stepBtn('back', 2022)">
              <Icon class="text-white" name="tdesign:arrow-left" size="30" />
            </button>
            <button class="year-switch" disabled>
              <Icon class="text-white" name="tdesign:arrow-right" size="30" />
            </button>
          </div>
          <div class="content-right ml-20 mt-16 font-normal">
            <div>YGG exhibited at well-attended ICE London 2023</div>
            <div class="mt-2">10 GEMs including WildEnergy™ and TopHit™</div>
            <div class="mt-2">Released YGG core games Neon Villains DoubleMax, Giganimals GigaBlox and Devour the Weak</div>
            <div class="mt-2">IGA 2023 – Yggdrasil receives Innovator of the Year</div>
            <div class="mt-2">YGG attending and exhibiting at key industry events iGB Live Amsterdam, SBC Barcelona and SiGMA</div>
            <div class="mt-2">YGG announces new CEO James Curwen</div>
          </div>
        </div>
      </div>
      
      <!-- <div class="bg-tree absolute">
        <div v-for="n in 90" class="dot mx-1 rounded-sm">
      </div>
      </div> -->
    </div>
    <div class="card4">
      <div class="pt-20 pb-12 px-8">
        <div class="text-2xl text-white pb-10 font-bold">
          Some of our partners
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isBoard = ref(false);
const isShowContent2013 = ref(true)
const isShowContent2014 = ref(false)
const isShowContent2015 = ref(false)
const isShowContent2016 = ref(false)
const isShowContent2017 = ref(false)
const isShowContent2018 = ref(false)
const isShowContent2019 = ref(false)
const isShowContent2020 = ref(false)
const isShowContent2021 = ref(false)
const isShowContent2022 = ref(false)
const isShowContent2023 = ref(false)

const originYearData = ref([
  {
    year: 2013,
    show: true
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

const yearTitle = ref(2013);
const statusChange = (index: number, year: number , isShow: boolean, content: string) => {
  originYearData.value.forEach((item: any, index: number) => {
    item.show = false;
  });
  originYearData.value[index].year = year;
  originYearData.value[index].show = isShow;
  yearTitle.value = year;

  showContent(content);
};

const showContent = (content: string) => {
  switch (content) {
    case 'content2014' :
      isShowContent2013.value = false;
      isShowContent2014.value = true;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2015' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = true;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2016' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = true;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2017' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = true;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2018' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = true;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2019' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = true;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2020' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = true;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2021' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = true;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
      break;
    case 'content2022' :
      isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = true;
      isShowContent2023.value = false;
      break;
    case 'content2023' :
    isShowContent2013.value = false;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = true;
      break;
    default: 
      isShowContent2013.value = true;
      isShowContent2014.value = false;
      isShowContent2015.value = false;
      isShowContent2016.value = false;
      isShowContent2017.value = false;
      isShowContent2018.value = false;
      isShowContent2019.value = false;
      isShowContent2020.value = false;
      isShowContent2021.value = false;
      isShowContent2022.value = false;
      isShowContent2023.value = false;
  }
}

const stepBtn = (step: string, year: number) => {
  showContent(`content${year}`);

  originYearData.value.forEach((item: any) => {
    item.show = false;
    if (item.year === year) {
      item.show = true;
    }
  });

  if (step === 'back') {
    yearTitle.value = yearTitle.value - 1;
  } else {
    yearTitle.value = yearTitle.value + 1;
  }
}
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

.image {
  margin: 20px 60px; 
}

.image img {
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
  overflow: auto;
}

.card3 .title {
  color: #474e5c;
}

.tree {
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-column-gap: 30px;
  min-width: 1160px;
}

.bg-tree {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-column-gap: 2px;
  top: 127px;
}

.bg-tree10 {
  display: none;
}

.year-dot {
  height: 20px;
  width: 20px;
  background-color: #fa6432;
  border-radius: 100%;
  cursor: pointer;
}

.year-dot-focus {
  outline: 1rem solid #fa6432;
  background-color: linear-gradient(#ff8900 0%, #ffba00 100%);
}

.dot {
  height: 5px;
  width: 5px;
  background-color: #fa6432;
  border-radius: 100%;
}

.content-title {
  color: #474e5c;
}

.year-switch {
  background: #fa6432;
  width: 40px;
  height: 40px;
}

.content-left {
  height: 355px;
  width: 200px;
  border-right: 2px solid #fa6432;
}

.content-left, .content-right {
  color: #474e5c;
}

.content-img {
  background-image: url(/assets/img/ygg/milestones-img.png);
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: contain;
  width: calc(80% + 80px);
  pointer-events: none;
  height: 50%;
  bottom: 60px;
  right: 5px;
}
</style>
