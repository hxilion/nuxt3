<template>
    <template v-if="isLoggedIn">
        <footer class="flex flex-col justify-center justify-self-end bg-white text-secondary font-bold sm:px-4">
            <div class="border-primary border-b max-w-screen-xl py-4 max-w-[1184px] mx-auto w-3/4 text-xl sm:w-full">
                サイトマップ
                <span class="text-primary ml-4 text-sm">SITE MAP</span>
            </div>
            <div class="flex justify-start max-w-[1184px] w-3/4 mx-auto flex-wrap pt-4 pb-10 sm:w-full">
                <template v-for="(item, index) in items" :key="index">
                    <div class="flex items-center space-x-2 w-1/2 py-2 sm:w-full">
                        <img class="mr-1.5" src="/assets/img/yoxibit/topics-arrow.svg" />
                        <a class="underline" :href="item.href">{{ item.text }}</a>
                    </div>
                </template>
            </div>
            <div class="copyright bg-black flex justify-center justify-self-end text-white p-4 tracking-widest">
                copyright © 2024 yoxibit.com
            </div>
        </footer>
    </template>
    <template v-else>
        <footer class="flex flex-col justify-center justify-self-end bg-white text-secondary">
            <div class="footer flex justify-center">
                <a class="m-8" href="/yoxibit">ホーム</a>
                <a class="m-8" href="/yoxibit/terms">利用規約</a>
                <a class="m-8" href="/yoxibit/contact">お問合せ</a>
            </div>
            <div class="copyright bg-black flex justify-center justify-self-end text-white p-4 tracking-widest">
                copyright © 2024 yoxibit.com
            </div>
        </footer>
    </template>
</template>

<script lang="ts" setup>
import { withDefaults, ref } from 'vue'
const props = withDefaults(defineProps<{
    isLoggedIn?: boolean
}>(), {
    isLoggedIn: true
})

const items = ref([
    { href: '/yoxibit/home', text: 'ホーム' },
    { href: '/yoxibit/manual', text: '初めての⽅へ' },
    { href: '/yoxibit/point-back', text: 'ポイントバックについて' },
    { href: '/yoxibit/contact', text: 'お問合せ' },
    { href: '/yoxibit/trading-history', text: '取引履歴' },
    { href: '/yoxibit', text: '登録情報' },
    { href: '/yoxibit/handing-points-fees', text: '取扱限度額・手数料' },
    { href: '/yoxibit/terms', text: '利⽤規約' },
    { href: '/yoxibit/logo-download', text: 'ロゴデータ ダウンロード' },
]);

</script>