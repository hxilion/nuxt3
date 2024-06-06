<template>
    <template v-if="isLoggedIn">
        <div class="bg-primary relative text-lg">
            <div class="absolute right-0 text-secondary h-full flex sm:hidden">
                <ul class="font-bold flex-row h-full flex text-base text-[1.1rem]">
                    <li class="h-full flex items-center px-3">
                        <div class="flex items-center bg-primary pl-2">
                            <img class="mr-2" src="/assets/img/yoxibit/profile.svg" width="16" height="16">
                            <span>山田　真一様</span>
                            <span>（ID:U000437）</span>
                        </div>
                    </li>
                    <li class="h-full border-l border-black">
                        <a class="h-full block flex items-center px-8 hover:opacity-50 duration-200" href="/yoxibit/registration-info">
                            <span class="pb-px">登録情報</span>
                        </a>
                    </li>
                    <li class="h-full flex">
                        <a class="bg-black items-center px-8 flex items-center hover:bg-white hover:text-secondary duration-200 text-white"
                            href="/yoxibit">ログアウト</a>
                    </li>
                </ul>
            </div>
            <div class="py-2.5 w-full max-w-screen-xl mx-auto flex justify-between block sm:px-2 sm:py-4 sm:h-[56px]">
                <p class="font-bold text-secondary text-sm flex items-center pl-0">
                    <span>『速くておトク』なベガウォレット</span>
                </p>
                <div class="bg-secondary hidden flex-col justify-center items-center sm:flex sm:fixed top-0 right-0 p-4 w-[64px] h-[56px] text-white text-xs font-bold tracking-widest"
                    @click="toggleSideBar">
                    <img class="w-8 h-8 mb-1" src="/assets/img/yoxibit/icon-menu.svg" alt="">
                    <span>MENU</span>
                </div>
                <div class="fixed top-0 right-0 left-0 w-screen h-screen bg-white flex-col items-center p-4 tracking-widest z-10"
                    :class="isSideBarOpen ? 'flex' : 'hidden'">
                    <div class="absolute top-0 right-0 flex items-center justify-center bg-secondary w-[64px] h-[56px]" @click="toggleSideBar">
                        <img class="w-8 h-8" src="/assets/img/yoxibit/close.svg" alt="">
                    </div>
                    <div class="border-grayD2 border-b w-full flex flex-col justify-center items-center font-bold">
                        <div class="p-4">
                            <a href="/yoxibit/home/">ホーム</a>
                        </div>
                        <div class="p-4">
                            <a href="/yoxibit/manual">初めての方へ</a>
                        </div>
                        <div class="p-4">
                            <a href="/yoxibit/handing-points-fees/">ポイントバックについて</a>
                        </div>
                        <div class="p-4">
                            <a href="/yoxibit/contact">お問合せ</a>
                        </div>
                        <div class="p-4">
                            <a href="/yoxibit/registration-info">登録情報</a>
                        </div>
                    </div>
                    <div class="flex flex-wrap w-full py-2 font-bold border-grayD2 border-b">
                        <div class="bg-primary flex-1 arrow-right-black rounded-lg text-center my-2 p-4 mr-4">購入</div>
                        <div class="bg-primary flex-1 arrow-right-black rounded-lg text-center my-2 p-4">換金</div>
                        <div class="bg-secondary text-white w-full arrow-right-white rounded-lg text-center my-2 p-4">取引履歴一覧
                        </div>
                    </div>
                    <div class="w-full py-4">
                        <div class="arrow-right-white bg-gray96 rounded-lg w-full p-4 text-white text-center font-bold">
                            ログアウト</div>
                    </div>
                </div>
            </div>

        </div>
        <div class="bg-white pt-6 sm:pt-0">
            <div class="max-w-screen-xl mx-auto px-4">
                <div class="flex justify-between py-4 pb-0 py-0 sm:justify-center sm:py-4">
                    <a class="hover:opacity-50 duration-300" href="/yoxibit/home">
                        <img class="w-full max-w-[400px] w-[358px] h-[65px] sm:w-[192px] h-[48px] mb-0 mx-0 "
                            src="/assets/img/yoxibit/yoxibit-logo.svg">
                    </a>
                    <div class="space-x-2 text-white items-center flex sm:hidden">
                        <a class="font-bold relative px-2 py-2 text-center block tracking-widest min-w-[200px] bg-primary hover:opacity-50 duration-300 arrow-right-black text-secondary rounded-lg"
                            href="/yoxibit/redemption-application">
                            <span>換金申請</span>
                        </a>
                        <a class="font-bold relative px-2 py-2 text-center block tracking-widest min-w-[200px] bg-black hover:opacity-50 duration-300 arrow-right-white rounded-lg"
                            href="/yoxibit/trading-history">
                            <span>取引履歴一覧</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="block border-b border-[#e1e1e1] sm:hidden" id="global_menu_pc">
            <ul class="flex justify-center">
                <li @click="changeCurrentPage(0)"
                    class="relative w-auto font-bold active_________ text-secondary text-base">
                    <a :class="currentPage == 0 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-secondary"
                        href="/yoxibit/home">ホーム</a>
                </li>
                <li @click="changeCurrentPage(1)" class="relative w-auto font-bold  text-secondary text-base">
                    <a :class="currentPage == 1 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-secondary"
                        href="/yoxibit/manual">初めての方へ</a>
                </li>
                <li @click="changeCurrentPage(2)" class="relative w-auto font-bold  text-secondary text-base">
                    <a :class="currentPage == 2 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-secondary"
                        href="/yoxibit/handing-points-fees/">ポイントバックについて</a>
                </li>
                <li @click="changeCurrentPage(3)" class="relative w-auto font-bold  text-secondary text-base">
                    <a :class="currentPage == 3 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-secondary"
                        href="/yoxibit/contact">お問合せ</a>
                </li>
            </ul>
        </div>
    </template>
    <template v-else>
        <nav class="bg-white p-4 flex flex-col">
            <div class="logo flex justify-center items-center">
                <a href="/yoxibit">
                    <img class="w-[320px] h-[80px] sm:w-[192px] sm:h-[48px]" src="assets/img/yoxibit/yoxibit-logo.svg"
                        alt="">
                </a>
            </div>
        </nav>
    </template>
</template>

<script lang="ts" setup>
import { withDefaults, ref } from 'vue'
const props = withDefaults(defineProps<{
    isLoggedIn?: boolean
}>(), {
    isLoggedIn: true
})
const currentPage = ref(0);

const changeCurrentPage = (page: number) => {
    currentPage.value = page;
}

const isSideBarOpen = ref(false);
const toggleSideBar = () => {
    isSideBarOpen.value = !isSideBarOpen.value
}

</script>