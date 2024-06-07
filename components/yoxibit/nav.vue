<template>
  <template v-if="isLoggedIn">
    <div class="relative bg-primary text-lg">
      <div class="absolute right-0 flex h-full text-secondary sm:hidden z-10">
        <ul class="flex h-full flex-row text-[1.1rem] text-base font-bold">
          <li class="flex h-full items-center px-3">
            <div class="flex items-center bg-primary pl-2">
              <img class="mr-2" src="/assets/img/yoxibit/profile.svg" width="16" height="16" />
              <span>山田　真一様</span>
              <span>（ID:U000437）</span>
            </div>
          </li>
          <li class="h-full border-l border-black">
            <a
              class="block flex h-full items-center px-8 duration-200 hover:bg-primaryVariant cursor-pointer"
              href="/yoxibit/registration-info"
            >
              <span class="pb-px">登録情報</span>
            </a>
          </li>
          <li class="flex h-full">
            <a
              class="flex items-center items-center bg-black px-8 text-white duration-200 hover:bg-gray8E cursor-pointer"
              href="/yoxibit"
              >ログアウト</a
            >
          </li>
        </ul>
      </div>
      <div
        class="max-w-screen-xl relative mx-auto flex w-full justify-between px-4 py-2.5 sm:h-[56px] sm:max-w-full sm:px-2 sm:py-4"
      >
        <p class="flex items-center pl-0 text-sm font-bold text-secondary">
          <span>『速くておトク』なベガウォレット</span>
        </p>
        <div
          class="right-0 top-0 hidden h-[56px] w-[64px] flex-col items-center justify-center bg-secondary p-4 text-xs font-bold tracking-widest text-white sm:fixed sm:flex"
          @click="toggleSideBar"
        >
          <img class="mb-1 h-8 w-8" src="/assets/img/yoxibit/icon-menu.svg" alt="" />
          <span>MENU</span>
        </div>
        <div
          class="fixed left-0 right-0 top-0 z-10 h-screen w-screen flex-col items-center bg-white p-4 tracking-widest"
          :class="isSideBarOpen ? 'flex' : 'hidden'"
        >
          <div
            class="absolute right-0 top-0 flex h-[56px] w-[64px] items-center justify-center bg-secondary"
            @click="toggleSideBar"
          >
            <img class="h-8 w-8" src="/assets/img/yoxibit/close.svg" alt="" />
          </div>
          <div
            class="flex w-full flex-col items-center justify-center border-b border-grayD2 font-bold"
          >
            <div class="p-4">
              <a href="/yoxibit/home/">ホーム</a>
            </div>
            <div class="p-4">
              <a href="/yoxibit/manual">初めての方へ</a>
            </div>
            <div class="p-4">
              <a href="/yoxibit/point-back/">ポイントバックについて</a>
            </div>
            <div class="p-4">
              <a href="/yoxibit/contact">お問合せ</a>
            </div>
            <div class="p-4">
              <a href="/yoxibit/registration-info">登録情報</a>
            </div>
          </div>
          <div class="flex w-full flex-wrap border-b border-grayD2 py-2 font-bold">
            <a
              href="/yoxibit/deposit"
              class="black-vector-right my-2 mr-4 flex-1 rounded-lg bg-primary p-4 text-center"
            >
              購入
            </a>
            <a
              href="/yoxibit/redemption-application/"
              class="black-vector-right my-2 flex-1 rounded-lg bg-primary p-4 text-center"
            >
              換金
            </a>
            <a
              href="/yoxibit/trading-history"
              class="white-vector-right my-2 w-full rounded-lg bg-secondary p-4 text-center text-white"
            >
              取引履歴一覧
            </a>
          </div>
          <div class="w-full py-4">
            <div
              class="white-vector-right w-full rounded-lg bg-gray96 p-4 text-center font-bold text-white"
              @click="logout"
            >
              ログアウト
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white pt-6 sm:pt-0">
      <div class="max-w-screen-xl sm: mx-auto max-w-full px-4">
        <div class="flex justify-between py-0 py-4 pb-0 sm:justify-center sm:py-4">
          <a class="duration-300" href="/yoxibit/home">
            <img
              class="mx-0 mb-0 h-[48px] h-[65px] w-[358px] w-full max-w-[400px] sm:w-[192px]"
              src="/assets/img/yoxibit/yoxibit-logo.svg"
            />
          </a>
          <div class="flex items-center space-x-2 text-white sm:hidden">
            <a
              class="black-vector-right relative block min-w-[200px] rounded-lg bg-primary px-2 py-2 text-center font-bold tracking-widest text-secondary duration-300 hover:bg-primaryVariant"
              href="/yoxibit/redemption-application"
            >
              <span>換金申請</span>
            </a>
            <a
              class="white-vector-right relative block min-w-[200px] rounded-lg bg-black px-2 py-2 text-center font-bold tracking-widest duration-300 hover:bg-gray8E"
              href="/yoxibit/trading-history"
            >
              <span>取引履歴一覧</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="block border-b border-[#e1e1e1] sm:hidden" id="global_menu_pc">
      <ul class="flex justify-center">
        <li
          @click="changeCurrentPage(0)"
          class="active_________ relative w-auto text-base font-bold text-secondary"
        >
          <a
            :class="currentPage == 0 ? 'border-b-2 border-primary' : ''"
            class="whitespace-nowraphover:opacity-50 block px-4 py-4 text-secondary duration-200"
            href="/yoxibit/home"
            >ホーム</a
          >
        </li>
        <li
          @click="changeCurrentPage(1)"
          class="relative w-auto text-base font-bold text-secondary"
        >
          <a
            :class="currentPage == 1 ? 'border-b-2 border-primary' : ''"
            class="whitespace-nowraphover:opacity-50 block px-4 py-4 text-secondary duration-200"
            href="/yoxibit/manual"
            >初めての方へ</a
          >
        </li>
        <li
          @click="changeCurrentPage(2)"
          class="relative w-auto text-base font-bold text-secondary"
        >
          <a
            :class="currentPage == 2 ? 'border-b-2 border-primary' : ''"
            class="whitespace-nowraphover:opacity-50 block px-4 py-4 text-secondary duration-200"
            href="/yoxibit/point-back"
            >ポイントバックについて</a
          >
        </li>
        <li
          @click="changeCurrentPage(3)"
          class="relative w-auto text-base font-bold text-secondary"
        >
          <a
            :class="currentPage == 3 ? 'border-b-2 border-primary' : ''"
            class="whitespace-nowraphover:opacity-50 block px-4 py-4 text-secondary duration-200"
            href="/yoxibit/contact"
            >お問合せ</a
          >
        </li>
      </ul>
    </div>
    <div
      v-if="props.pathTitle"
      class="max-w-screen-xl _bg-vred relative mx-auto w-full px-4 py-16 sm:px-0"
    >
      <div class="block w-full overflow-x-scroll bg-white">
        <nav class="bg-grey-light absolute left-4 top-0 ml-0 mt-5 w-full rounded-md">
          <ol class="flex w-full items-center justify-start space-x-2 text-sm">
            <li class="whitespace-nowrap">
              <a class="text-secondary underline" href="/yoxibit/home">ホーム</a>
            </li>
            <li>&gt;</li>
            <li class="whitespace-nowrap">{{ pathTitle }}</li>
          </ol>
        </nav>
      </div>
      <div class="text-center">
        <h2 class="mb-1 text-4xl font-bold tracking-widest">{{ pathTitle }}</h2>
        <p class="font-bold tracking-widest text-primary">{{ pathName }}</p>
      </div>
    </div>
  </template>
  <template v-else>
    <nav class="flex flex-col bg-white p-4">
      <div class="logo flex items-center justify-center">
        <a href="/yoxibit">
          <img
            class="h-[80px] w-[320px] sm:h-[48px] sm:w-[192px]"
            src="assets/img/yoxibit/yoxibit-logo.svg"
            alt=""
          />
        </a>
      </div>
    </nav>
  </template>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps({
  isLoggedIn: {
    type: Boolean,
    default: false
  },
  pathTitle: {
    type: String,
    default: ''
  },
  pathName: {
    type: String,
    default: ''
  }
});
const currentPage = ref(0);

const changeCurrentPage = (page: number) => {
  currentPage.value = page;
};

const isSideBarOpen = ref(false);
const toggleSideBar = () => {
  isSideBarOpen.value = !isSideBarOpen.value;
};

import { useRouter } from 'vue-router';
const router = useRouter();
const logout = () => {
  router.push('/yoxibit');
};
</script>
