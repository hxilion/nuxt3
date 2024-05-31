<template>
    <template v-if="isLoggedIn">
        <div class="bg-primary relative text-lg">
            <div class="absolute right-0 text-black h-full flex">
                <ul class="font-bold flex-row h-full flex text-base text-[1.1rem]">
                    <li class="h-full flex items-center px-3">
                        <div class="flex items-center bg-primary pl-2">
                            <img class="mr-2" src="/assets/img/yoxibit/profile.svg" width="16" height="16">
                            <span>山田　真一様</span>
                            <span>（ID:U000437）</span>
                        </div>
                    </li>
                    <li class="h-full border-l border-black">
                        <a class="h-full block flex items-center px-8 hover:opacity-50 duration-200" href="#">
                            <span class="pb-px">登録情報</span>
                        </a>
                    </li>
                    <li class="h-full flex">
                        <a class="bg-black items-center px-8 flex items-center hover:bg-white hover:text-black duration-200 text-white"
                            href="/yoxibit">ログアウト</a>
                    </li>
                </ul>
            </div>
            <div class="py-2.5 w-full max-w-screen-xl mx-auto flex justify-between block">
                <p class="font-bold text-black text-sm flex items-center pl-0">
                    <span>『速くておトク』なベガウォレット</span>
                </p>
            </div>
        </div>
        <div class="bg-white pt-6 border-b border-[#e1e1e1] border-0">
            <div class="max-w-screen-xl mx-auto px-4 xl:px-0">
                <div class="flex justify-between py-4 pb-0 py-0  ">
                    <a class="hover:opacity-50 duration-300" href="/yoxibit/home">
                        <img class="w-full max-w-[400px]  mb-0 mx-0 "
                            src="/assets/img/yoxibit/yoxibit-logo.svg" width="358" height="65">
                    </a>
                    <div class="space-x-2 text-white items-center flex">
                        <a class="font-bold relative px-2 py-2 text-center block tracking-widest min-w-[200px] bg-primary hover:opacity-50 duration-300 arrow-right-black text-black rounded-lg"
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
        <div class="block border-b border-[#e1e1e1]" id="global_menu_pc">
            <ul class="flex justify-center">
                <li @click="changeCurrentPage(0)"
                    class="relative w-auto font-bold active_________ text-black text-base">
                    <a :class="currentPage == 0 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-black"
                        href="/yoxibit/home">ホーム</a>
                </li>
                <li @click="changeCurrentPage(1)"
                    class="relative w-auto font-bold  text-black text-base">
                    <a :class="currentPage == 1 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-black"
                        href="/yoxibit/manual">初めての方へ</a>
                </li>
                <li @click="changeCurrentPage(2)"
                    class="relative w-auto font-bold  text-black text-base">
                    <a :class="currentPage == 2 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-black"
                        href="/yoxibit/handing-points-fees/">ポイントバックについて</a>
                </li>
                <li @click="changeCurrentPage(3)"
                    class="relative w-auto font-bold  text-black text-base">
                    <a :class="currentPage == 3 ? 'border-b-2 border-primary' : ''"
                        class="py-4 block whitespace-nowraphover:opacity-50 duration-200 px-4 text-black"
                        href="/yoxibit/contact">お問合せ</a>
                </li>
            </ul>
        </div>
    </template>
    <template v-else>
        <nav class="bg-white p-4 flex flex-col">
            <div class="logo flex justify-center items-center">
                <a href="/yoxibit">
                    <img src="assets/img/yoxibit/yoxibit-logo.svg" alt="" width="320px" height="80px">
                </a>
            </div>
        </nav>
    </template>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, ref } from 'vue'
const props = withDefaults(defineProps<{
    isLoggedIn?: boolean
}>(), {
    isLoggedIn: true
})
const currentPage = ref(0);

const changeCurrentPage = (page: number) => {
    currentPage.value = page;
}

</script>