<template>
  <div class="about-us" style="font-family: 'M PLUS 2'">
    <div class="card1 px-10 pt-10">
      <div class="mx-auto flex max-w-screen-2xl">
        <div class="text-left">
          <div class="title mb-[30px] mt-5 text-4xl font-bold">
            Our passion for gaming is limitless
          </div>
          <div class="pb-5" style="max-width: 800px">
            Here at Yggdrasil we thrive on innovation and have been pushing boundaries in the gaming
            industry for over a decade. Our aim is to deliver top-performing games with high-quality
            graphics, innovative mechanics, and strong player engagement. Yggdrasil values a diverse
            portfolio, offering games with global flavours across various themes and mechanics.
          </div>
          <div class="pb-5" style="max-width: 800px">
            Our success is intertwined with the success of our partners. Industry-first initiatives
            like GEMs, GATI, and BOOST showcase our commitment to innovation. The YG Masters program
            and strategic partnerships signify Yggdrasil’s evolution into a global publishing
            powerhouse. We always strive to optimise, consolidate, and scale operations for
            long-term success, always keeping innovation at our forefront.
          </div>
        </div>
        <div class="block h-full text-right lg:hidden" style="max-width: 640px; min-width: 390px">
          <img
            class="mt-[100px] xl:mt-0"
            src="https://yggdrasilgaminggames.com/wp-content/uploads/2024/05/about-us-main.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div v-show="isBoard" id="section1" class="card2 h-auto px-8 pb-14 text-4xl font-bold">
      <div class="mx-auto flex max-w-screen-2xl flex-col">
        <div class="mb-10 flex flex-wrap items-center justify-center text-4xl">
          <div>Yggdrasil Management</div>
          <div @click="isBoard = false" class="text-center sm:ml-auto sm:mt-4">
            <a href="#section2">
              <button type="button" class="person-change px-7 text-base">Yggdrasil Board</button>
            </a>
          </div>
        </div>
        <div class="person" style="width: 100%">
          <div class="image">
            <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="" />
            <div class="name text-lg">James Curwen</div>
            <div class="job-title text-base">CEO</div>
          </div>
          <div class="image">
            <img src="/assets/img/ygg/Alex-New-150x150.png" alt="" />
            <div class="name text-lg">Alexander Haywood</div>
            <div class="job-title text-base">MD - Core Services</div>
          </div>
          <div class="image">
            <img src="/assets/img/ygg/Petter-150x150.png" alt="" />
            <div class="name text-lg">Petter Envall</div>
            <div class="job-title text-base">CLCO</div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="!isBoard" id="section2" class="card2 h-auto px-8 pb-14 text-4xl font-bold">
      <div class="mx-auto flex max-w-screen-2xl flex-col">
        <div class="mb-10 flex flex-wrap items-center justify-center text-4xl">
          <div>Yggdrasil Board</div>
          <div @click="isBoard = true" class="ml-auto mt-0 text-center sm:mt-4">
            <a href="#section1">
              <button type="button" class="person-change2 px-7 text-base">
                Yggdrasil Management
              </button>
            </a>
          </div>
        </div>
        <div class="person" style="width: 100%">
          <div class="image">
            <img src="/assets/img/ygg/fredrik-elmqvist-150x150.png" alt="" />
            <div class="name text-lg">Fredrik Elmqvist</div>
            <div class="job-title break-words text-base" style="width: 140px">
              Yggdrasil Founder & Board member
            </div>
          </div>
          <div class="image">
            <img src="/assets/img/ygg/JamesCurwen-150x150.png" alt="" />
            <div class="name text-lg">James Curwen</div>
            <div class="job-title text-base">Yggdrasil CEO</div>
          </div>
          <div class="image">
            <img src="/assets/img/ygg/itai-frieberger-150x150.png" alt="" />
            <div class="name text-lg">Itai Frieberger</div>
            <div class="job-title text-base">Chairman of the board</div>
          </div>
        </div>
      </div>
    </div>
    <div class="card3 relative h-auto">
      <div class="mx-auto max-w-screen-2xl">
        <div class="px-5 py-10">
          <div class="title whitespace-nowrap pb-10 text-4xl font-bold sm:text-[33px]">
            Yggdrasil Milestones
          </div>
          <div class="content-img absolute block lg:hidden"></div>
          <div class="tree relative h-[150px] max-w-[1400px] overflow-x-auto p-5">
            <div v-for="(item, index) in originYearData">
              <div
                class="year-dot mb-10 rounded-sm"
                :class="item.show ? 'year-dot-focus' : 'year-dot'"
                @click="statusChange(index, item.year, true, `content${item.year}`)"
              >
                <div class="w-[140px] lg:w-[85px]" :class="`bg-tree${index}`">
                  <img class="pt-[9px]" src="/assets/img/ygg/bg-dot.svg" alt="" />
                </div>
              </div>
              <span class="text-lg">{{ item.year }}</span>
            </div>
          </div>
          <div v-if="isShowContent2013" id="content2013" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                disabled
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2014)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              Yggdrasil Gaming was founded
            </div>
          </div>
          <div v-if="isShowContent2014" id="content2014" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2013)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2015)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>Malta licence</div>
              <div class="mt-2">First client</div>
              <div class="mt-2">iSENSE 2.0 Technology</div>
              <div class="mt-2">Kraków development HUB</div>
            </div>
          </div>
          <div v-if="isShowContent2015" id="content2015" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2014)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2016)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>BOOST in-game promotional tools - Industry first</div>
              <div class="mt-2">Launch of YGG Network Campaigns – Industry First</div>
            </div>
          </div>
          <div v-if="isShowContent2016" id="content2016" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2015)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2017)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>BRAG – Social media sharing tool</div>
              <div class="mt-2">Yggdrasil White Label Studios</div>
              <div class="mt-2">UK, Gibraltar & Romania Licences</div>
            </div>
          </div>
          <div v-if="isShowContent2017" id="content2017" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2016)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2018)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>Yggdrasil Dragons</div>
              <div class="mt-2">iSENSE. 2.0+ Live</div>
              <div class="mt-2">Swedish parent company</div>
              <div class="mt-2">Live in Italy</div>
              <div class="mt-2">Fusion Realms</div>
            </div>
          </div>
          <div v-if="isShowContent2018" id="content2018" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2017)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2019)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>Launch of Table Games</div>
              <div class="mt-2">Bingo Announcement</div>
              <div class="mt-2">Yggdrasil rebranding</div>
              <div class="mt-2">Largest Jackpot payout of €7.8M</div>
              <div class="mt-2">Launch of YGS Masters program</div>
              <div class="mt-2">Live in Denmark & Spain</div>
            </div>
          </div>
          <div v-if="isShowContent2019" id="content2019" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2018)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2020)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>
                Launch of YG Franchise , YG Masters (extension of YGS Masters) and YGG Game IP
              </div>
              <div class="mt-2">Launch of new mechanic Splitz™</div>
              <div class="mt-2">Sweden re-regulated</div>
              <div class="mt-2">New majority owner of Yggdrasil</div>
              <div class="mt-2">BOOST UI/UX redesign</div>
              <div class="mt-2">First cross vertical BOOST campaign</div>
              <div class="mt-2">Full BOOST support for YG Masters & TG</div>
              <div class="mt-2">Upgrade to YGS Masters program and rename to YG Masters</div>
            </div>
          </div>
          <div v-if="isShowContent2020" id="content2020" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2019)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2021)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>Yggdrasil Gaming redesign</div>
              <div class="mt-2">Multifly! MultiMax enters iGaming Tracker</div>
              <div class="mt-2">Launch of new mechanics GigaBlox™ and MultiMax™</div>
              <div class="mt-2">Launch of GATI™, YGG key enabling technology</div>
              <div class="mt-2">YG Franchise strategic client deals</div>
              <div class="mt-2">YG Masters program client expansion and enhancement (GATI™)</div>
              <div class="mt-2">YGG granted Isle of Man software licence</div>
              <div class="mt-2">ISO27001 – Info security certification</div>
              <div class="mt-2">Futureproof business with Google Cloud migration</div>
              <div class="mt-2">
                Expanding with +40 games in 2020 (incl. slots, YG Masters and excl. re-releases)
              </div>
              <div class="mt-2">YGG Affiliation partnering with Game Lounge</div>
              <div class="mt-2">First YGG digital Product roadshow</div>
              <div class="mt-2">YGG receives IGA Innovator of the Year award 4th year in a row</div>
              <div class="mt-2">Hades GigaBlox hits iGaming Tracker</div>
            </div>
          </div>
          <div v-if="isShowContent2021" id="content2021" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2020)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2022)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>GEMs partner expansion</div>
              <div class="mt-2">Source 2.0 launched</div>
              <div class="mt-2">What’s Up YGG' Podcast launch</div>
              <div class="mt-2">
                Many great game releases: Frost Queen Jackpots, Easter Island 2, TikiPop etc.
              </div>
              <div class="mt-2">GigaRise™ GEM launch</div>
              <div class="mt-2">Blockbuster Raptor DoubleMax launched</div>
              <div class="mt-2">New GEM DoubleMax™ launched</div>
              <div class="mt-2">YG Masters program launched 60 games</div>
              <div class="mt-2">YGG and IGT announced North America partnership</div>
              <div class="mt-2">New BOOST tool JackDrop launched</div>
            </div>
          </div>
          <div v-if="isShowContent2022" id="content2022" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2021)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button
                class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('next', 2023)"
              >
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>IGA Award - RNG Casino Provider of the year</div>
              <div class="mt-2">
                US Market Entry games released Vikings Go Wild and Cazino Zeppelin
              </div>
              <div class="mt-2">Blockbuster Vikings Go To Valhalla released</div>
              <div class="mt-2">YGG announces new CEO Björn Krantz</div>
              <div class="mt-2">EGR 2022 – Yggdrasil receives Platform Provider</div>
              <div class="mt-2">8 GEMs including DuoMax™ and WildFight™</div>
            </div>
          </div>
          <div v-if="isShowContent2023" id="content2023" class="flex">
            <div class="content-left mt-10 w-[200px] min-w-[70px] sm:w-[70px]">
              <div class="content-title mt-4 text-5xl font-light sm:text-2xl">{{ yearTitle }}</div>
              <button
                class="year-switch mr-5 mt-10 h-10 w-10 sm:mr-1 sm:mt-2 sm:h-[30px] sm:w-[30px]"
                @click="stepBtn('back', 2022)"
              >
                <Icon class="text-white" name="tdesign:arrow-left" size="30" />
              </button>
              <button class="year-switch h-10 w-10 sm:h-[30px] sm:w-[30px]" disabled>
                <Icon class="text-white" name="tdesign:arrow-right" size="30" />
              </button>
            </div>
            <div class="content-right ml-20 mt-16 font-normal sm:ml-5 sm:mt-12">
              <div>YGG exhibited at well-attended ICE London 2023</div>
              <div class="mt-2">10 GEMs including WildEnergy™ and TopHit™</div>
              <div class="mt-2">
                Released YGG core games Neon Villains DoubleMax, Giganimals GigaBlox and Devour the
                Weak
              </div>
              <div class="mt-2">IGA 2023 – Yggdrasil receives Innovator of the Year</div>
              <div class="mt-2">
                YGG attending and exhibiting at key industry events iGB Live Amsterdam, SBC
                Barcelona and SiGMA
              </div>
              <div class="mt-2">YGG announces new CEO James Curwen</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card4">
      <div class="px-8 pb-12 pt-20">
        <div class="pb-10 text-2xl font-bold text-white">Some of our partners</div>
      </div>
    </div>
    <div class="card5">
      <div class="title pb-4 pl-10 pt-14 text-4xl font-bold">Awards</div>
      <div id="marquee">
        <div class="view2">
          <div class="pic-container">
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2015</div>
              <div class="job-title text-center font-bold">SOFTWARE RISING STAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2016</div>
              <div class="job-title text-center font-bold">
                GAMING SORTWARE SUPPLIER OF THE YEAR
              </div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2016</div>
              <div class="job-title text-center font-bold">SLOT PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2017</div>
              <div class="job-title text-center font-bold">IG AWARDS</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2017</div>
              <div class="job-title text-center font-bold">SLOT PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2018</div>
              <div class="job-title text-center font-bold">INNOVATOR OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2018</div>
              <div class="job-title text-center font-bold">INNOVATOR IN RNG CASINO SOFTWARE</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2019</div>
              <div class="job-title text-center font-bold">INNOVATOR OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2019</div>
              <div class="job-title text-center font-bold">INNOVATOR IN RNG CASINO SUPPLIER</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2020</div>
              <div class="job-title text-center font-bold">INNOVATOR OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2021</div>
              <div class="job-title text-center font-bold">SLOT PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-nordics-2-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2022</div>
              <div class="job-title text-center font-bold">PLATFORM SUPPLIER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2022</div>
              <div class="job-title text-center font-bold">RNG CASINO PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2023</div>
              <div class="job-title text-center font-bold">INNOVATOR OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2015</div>
              <div class="job-title text-center font-bold">SOFTWARE RISING STAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2016</div>
              <div class="job-title text-center font-bold">
                GAMING SORTWARE SUPPLIER OF THE YEAR
              </div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2016</div>
              <div class="job-title text-center font-bold">SLOT PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2017</div>
              <div class="job-title text-center font-bold">IG AWARDS</div>
            </div>
            <div class="pic">
              <div class="mb-10">
                <img src="/assets/img/ygg/egr-300x247.png" alt="" />
              </div>
              <div class="name text-center font-bold">2017</div>
              <div class="job-title text-center font-bold">SLOT PROVIDER OF THE YEAR</div>
            </div>
            <div class="pic">
              <div class="mb-11">
                <img src="/assets/img/ygg/gaming-awards-300x233.png" alt="" />
              </div>
              <div class="name text-center font-bold">2018</div>
              <div class="job-title text-center font-bold">INNOVATOR OF THE YEAR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card6 mt-10">
      <div class="mx-auto max-w-screen-2xl">
        <div class="flex flex-nowrap items-center justify-center lg:flex-wrap">
          <div class="area1 px-8">
            <div class="name pb-10 text-lg font-bold">
              Yggdrasil stands for entertainment in a responsible way
            </div>
            <div class="mb-5 text-base">
              <span class="font-bold"
                >Playing Yggdrasil games should be entertaining but also done in a responsible
                manner.</span
              >
              At Yggdrasil we take Responsible Gaming seriously and are constantly working on
              keeping our products not only fun, but also safe.
            </div>
            <div class="mb-5 text-base">
              Yggdrasil Gaming complies with the industry’s best practice on responsible gaming. All
              games are developed for an adult audience, both experienced players as well as those
              who are just starting their gaming experience.
            </div>
            <div class="mb-5 text-base">
              Our front-end game-client includes software to enable players to gamble responsibly
              and to support our licensees with responsible gaming controls.
            </div>
          </div>
          <div class="area2">
            <div class="relative">
              <div class="contain-bg px-8 text-white">
                <img src="/assets/img/ygg/about-us-responsible-bg.jpg" alt="" />
              </div>
              <div class="entertainment-large entertainment-small bg-small">
                <div>
                  <img src="/assets/img/ygg/self-exclusions.svg" alt="" />
                  <div class="text-center font-bold text-white">Self-Exclusions</div>
                </div>
                <div>
                  <img src="/assets/img/ygg/age-verifications.svg" alt="" />
                  <div class="text-center font-bold text-white">Age erifications</div>
                </div>
                <div>
                  <img src="/assets/img/ygg/reality-checks.svg" alt="" />
                  <div class="text-center font-bold text-white">Reality Checks</div>
                </div>
                <div>
                  <img src="/assets/img/ygg/help-lines.svg" alt="" />
                  <div class="text-center font-bold text-white">Help Lines</div>
                </div>
                <div>
                  <img src="/assets/img/ygg/jackpot-amount.svg" alt="" />
                  <div class="text-center font-bold text-white">Jackpot Amount</div>
                </div>
                <div>
                  <img src="/assets/img/ygg/certified-games.svg" alt="" />
                  <div class="text-center font-bold text-white">Certified Games</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mx-auto max-w-screen-2xl">
        <div class="area3 flex flex-row gap-4 p-10 md:flex-col">
          <div class="area3-card p-7">
            <div class="title name mb-7 text-lg font-bold">Keep everyone informed</div>
            <div class="job-title font-normal">
              To build safe and entertaining products, it is vital that all employees are annually
              trained in Responsible Gaming. This is also a part of our onboarding process.
            </div>
          </div>
          <div class="area3-card p-7">
            <div class="title name mb-7 text-lg font-bold">Build sustainable gaming</div>
            <div class="job-title font-normal">
              TWe build games for regulated markets and support our clients with features needed to
              ensure Responsible Gaming as our games are made available on their websites.
            </div>
          </div>
          <div class="area3-card p-7">
            <div class="title name mb-7 text-lg font-bold">Keep everyone informed</div>
            <div class="job-title font-normal">
              To build safe and entertaining products, it is vital that all employees are annually
              trained in Responsible Gaming. This is also a part of our onboarding process.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isBoard = ref(false);
const isShowContent2013 = ref(true);
const isShowContent2014 = ref(false);
const isShowContent2015 = ref(false);
const isShowContent2016 = ref(false);
const isShowContent2017 = ref(false);
const isShowContent2018 = ref(false);
const isShowContent2019 = ref(false);
const isShowContent2020 = ref(false);
const isShowContent2021 = ref(false);
const isShowContent2022 = ref(false);
const isShowContent2023 = ref(false);

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
  }
]);

const yearTitle = ref(2013);
const statusChange = (index: number, year: number, isShow: boolean, content: string) => {
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
    case 'content2014':
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
    case 'content2015':
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
    case 'content2016':
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
    case 'content2017':
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
    case 'content2018':
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
    case 'content2019':
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
    case 'content2020':
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
    case 'content2021':
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
    case 'content2022':
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
    case 'content2023':
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
};

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
};
</script>

<style>
.card1 {
  width: 100%;
  background-color: #ecf0f1;
}

.card1 .title {
  color: #fa6432;
}

.picture {
  position: relative;
  top: 130px;
}

.card2 {
  width: 100%;
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

.person-change:hover,
.person-change2:hover {
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

.bg-tree10 {
  display: none;
}

.bg-tree::before {
  content: url('/assets/img/ygg/bg-dot.svg');
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
}

.content-left {
  height: 355px;
  border-right: 2px solid #fa6432;
}

.content-left,
.content-right {
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

.card4 {
  background-color: #474e5c;
  height: 550px;
}

.card5 {
  background-color: #ecf0f1;
  height: 475px;
}

.card5 > .title {
  color: #fa6432;
}

@keyframes marquee {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-110%);
  }
}

.entertainment-large {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-column-gap: 40px;
  padding: 60px;
}

@media (max-width: 1024px) {
  .entertainment-large {
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-column-gap: 40px;
    padding: 60px;
  }
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-250%);
    }
  }
}
@media (max-width: 768px) {
  .entertainment-small {
    display: flex;
    flex-direction: column;
    flex-basis: 50%;
    grid-column-gap: 40px;
  }
  .bg-small {
    background-color: #000;
  }
  @keyframes marquee {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-333%);
    }
  }
}

#marquee {
  width: 100%;
}
#marquee .view2 {
  overflow: hidden;
  width: 100%;
}
#marquee .pic-container {
  display: flex;
  animation: marquee 20s linear 1s infinite;
}
#marquee .pic-container .pic {
  flex-basis: auto;
  flex-shrink: 0;
  padding: 30px;
}

.pic > div {
  text-align: -webkit-center;
}

.pic img {
  width: 155px;
}

.contain-flex-1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.contain-flex-2 {
  display: flex;
  justify-content: center;
  align-items: center;
}

.contain-bg {
  position: absolute;
  top: 40px;
  z-index: -1;
}

.area3-card {
  background-color: #ecf0f1;
}
</style>
