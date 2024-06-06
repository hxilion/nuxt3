<template>
    <Nav />
    <div class="max-w-screen-xl mx-auto px-4 py-20 sm:py-0 sm:px-0 flex flex-col flex-1 items-stretch">
        <PageLayerGray>
            <div class="max-w-screen-xl mx-auto w-full text-secondary">
                <div class="mb-12" id="topics">
                    <ul class="transition transform text-base grid gap-y-1 grid-cols-2 sm:grid-cols-1 sm:gap-y-4">
                        <template v-for="(item, index) in items" :key="index">
                            <li class="flex items-start space-x-2">
                                <img class="mt-1.5" src="/assets/img/yoxibit/topics-arrow.svg" />
                                <a class="underline" :href="item.href">{{ item.text }}</a>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="bg-white p-8 shadow-vglow text-center mb-6">
                    <div class="flex justify-center items-center mb-6 space-x-6_ flex-col space-y-2 space-y-4">
                        <div class="font-bold">
                            <p class="tracking-widest text-xl">
                                <span>山田孝之</span>
                                <span class="text-xl mx-1">様</span>
                            </p>
                        </div>
                        <div class="add-style-c--4">
                            <p class="text-2xl sm:text-xl mb-2 tracking-widest font-bold">
                                <span>ベガID</span>
                                <span class="sm:text-sm">(ユーザーネーム・口座番号)</span>
                            </p>
                        </div>
                        <div class="flex flex-none items-center font-bold justify-left">
                            <p class="bg-gray-100 px-4 py-1 text-2xl text-secondary tracking-widest rounded-lg border-grayD2 border">U000001</p>
                        </div>
                    </div>
                    <div class="add-style-c--4">
                        <p class="text-2xl mb-6 tracking-widest font-bold">
                            <span>現在ポイント</span>
                            <span class="sm:text-sm">(1pt=1USD)</span>
                        </p>
                    </div>
                    <p class="tracking-wider  text-primary font-bold sm:text-[40px] text-[80px] -my-3.5">
                        100.57<span class="text-2xl">pt</span></p>
                </div>
                <div class="text-center">
                    <div class="flex text-secondary items-center justify-center mb-6 space-y-0 flex-row space-x-4 sm:flex-col sm:space-x-0 sm:space-y-4">
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60 max-w-15 bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black sm:w-full sm:text-base"
                            href="/yoxibit/deposit/"><span>購入</span>
                        </a>
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60 max-w-15 bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black sm:w-full sm:text-base"
                            href="/yoxibit/redemption-application/"><span>換金</span>
                        </a>
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60  max-w-15 bg-vblack hover:opacity-50 duration-300 text-white rounded-lg bg-secondary arrow-right-white sm:w-full sm:text-base"
                            href="/yoxibit/trading-history"><span>取引履歴</span>

                        </a>
                    </div>
                    <div class="flex items-center justify-center">
                        <a class="text-lg font-bold flex items-center justify-center space-x-2 px-10 arrow-right-black sm:text-base"
                            href="/yoxibit/handing-points-fees"><span>利用限度額・手数料</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageLayerGray>
        <PageLayerWhite>
            <div class="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4 w-full" id="manual">
                <div class="title font-bold text-center sm:text-2xl">YOXIBITの仕組み</div>
                <div class="w-full h-80 bg-grayD2 my-10 sm:h-24"></div>
                <div class="w-full font-normal sm:text-sm sm:mb-10">YOXIBITは、ユーザーと加盟店間の資金（ポイント）の購入・受取・送付・換金ができるサービスです。</div>
                <div>
                    <div class="mb-10">
                        <h3 class="font-bold mb-4 border-l-4 border-primary pl-4 text-2xl py-1 sm:text-xl">初めての方へ</h3>
                        <p class="sm:text-sm">YOXIBITの仕組みについて、詳しく説明しています。初めて利用される方や、YOXIBITについて詳しく知りたい方はこちらのページをご確認ください。</p>
                    </div>
                    <div class="text-center flex justify-center">
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest text-md w-full max-w-[333px] text-secondary bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black"
                            href="/yoxibit/manual/">
                            <span>初めての方へ</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageLayerWhite>
        <PageLayerGray>
            <section class="bg-vgray undefined py-20 px-4 w-full mx-auto sm:py-0 sm:px-0" id="about">
                <div class="max-w-screen-xl mx-auto">
                    <div class="max-w-screen-xl mx-auto">
                        <div class="grid gap-4 grid-cols-2 sm:grid-cols-1">
                            <div class="bg-white p-8 shadow-vglow rounded-lg">
                                <div class="flex space-x-4 mb-6 items-start space-x-6">
                                    <div class="circle-bit flex justify-center items-center">
                                        <img class="flex-none flex-0 w-[48px]" src="/assets/img/yoxibit/gift.svg">
                                    </div>
                                    <div class="flex-grow pt-2">
                                        <p class="font-bold mb-2 text-2xl text-primary sm:text-xl">PROMOTION 1</p>
                                        <p class="font-bold text-[#444444] sm:font-normal">PROMOTION-TITLE</p>
                                    </div>
                                </div>
                                <div class="mb-6 sm:text-sm">
                                    <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                        sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                                </div>
                                <div>
                                    <a class="font-bold relative p-1 py-4 text-center block tracking-widest text-xl w-full text-vblack bg-primary hover:opacity-50 duration-300 arrow-right-black rounded-lg sm:text-base"
                                        href="#">
                                        <span>詳しく見る</span>
                                    </a>
                                </div>
                            </div>
                            <div class="bg-white p-8 shadow-vglow">
                                <div class="flex space-x-4 mb-6 items-start space-x-6">
                                    <div class="circle-bit flex justify-center items-center">
                                        <img class="flex-none flex-0  w-[48px]" src="/assets/img/yoxibit/gift.svg">
                                    </div>
                                    <div class="flex-grow pt-2">
                                        <p class="font-bold mb-2 text-2xl text-primary sm:text-xl">PROMOTION 2</p>
                                        <p class=" hidden font-bold text-[#444444] sm:font-normal">PROMOTION-TITLE</p>
                                    </div>
                                </div>
                                <div class="mb-6 sm:text-sm">
                                    <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                        sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                                </div>
                                <div><a class="font-bold relative p-1 py-4 text-center block tracking-widest text-xl w-full text-vblack bg-primary hover:opacity-50 duration-300 arrow-right-black rounded-lg sm:text-base"
                                        href="#">
                                        <span>詳しく見る</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="undefined py-20 px-4 w-full mx-auto" id="calendar">
                <div class="max-w-screen-xl mx-auto">
                    <article class="prose prose-md prose-a:text-primary max-w-none" id="notice_a">
                        <div class=" w-full bg-white shadow-vglow text-left mb-6 p-8 py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-row space-y-0 space-x-4 sm:flex-col sm:space-y-4">
                                <p class="bg-primary text-secondary text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-xl sm:text-base">NOTICE A</p>
                            </div>
                            <div class="sm:text-sm">
                                <p>
                                    Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi,
                                    sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed
                                    tincidunt ac, finibus non odio.
                                </p>
                                <br>
                                <p>
                                    Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu,
                                    faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit
                                    sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi,
                                    consequat dictum risus dapibus a.
                                </p>
                                <br>
                                <p>
                                    Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida
                                    sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi
                                    ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                                </p>
                                <br>
                                <p>
                                    support@yoxibitmail.com
                                </p>
                                <br>
                                <p>
                                    よろしくお願いします。
                                </p>
                            </div>
                        </div>
                    </article>
                    <article class="prose prose-md prose-a:text-primary max-w-none" id="notice_b">
                        <div class=" w-full bg-white shadow-vglow text-left mb-6 p-8 py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-row space-y-0 space-x-4 sm:flex-col sm:space-y-4">
                                <p class="bg-primary text-secondary text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-xl sm:text-base">NOTICE B</p>
                            </div>
                            <div class="sm:text-sm">
                                <p>
                                    Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi,
                                    sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed
                                    tincidunt ac, finibus non odio.
                                </p>
                                <br>
                                <p>
                                    Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu,
                                    faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit
                                    sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi,
                                    consequat dictum risus dapibus a.
                                </p>
                                <br>
                                <p>
                                    Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida
                                    sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi
                                    ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                                </p>
                                <br>
                                <p>
                                    support@yoxibitmail.com
                                </p>
                                <br>
                                <p>
                                    よろしくお願いします。
                                </p>
                            </div>
                        </div>
                    </article>
                    <article class="prose prose-md prose-a:text-primary max-w-none" id="notice_c">
                        <div class=" w-full bg-white shadow-vglow text-left mb-6 p-8 py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-row space-y-0 space-x-4 sm:flex-col sm:space-y-4">
                                <p class="bg-primary text-secondary text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-xl sm:text-base">NOTICE C</p>
                            </div>
                            <div class="sm:text-sm">
                                <p>
                                    Nam pulvinar blandit velit, id condimentum diam faucibus at. Aliquam lacus nisi,
                                    sollicitudin at nisi nec, fermentum congue felis. Quisque mauris dolor, fringilla sed
                                    tincidunt ac, finibus non odio.
                                </p>
                                <br>
                                <p>
                                    Sed vitae mauris nec ante pretium finibus. Donec nisl neque, pharetra ac elit eu,
                                    faucibus aliquam ligula. Nullam dictum, tellus tincidunt tempor laoreet, nibh elit
                                    sollicitudin felis, eget feugiat sapien diam nec nisl. Aenean gravida turpis nisi,
                                    consequat dictum risus dapibus a.
                                </p>
                                <br>
                                <p>
                                    Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida
                                    sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi
                                    ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet.
                                </p>
                                <br>
                                <p>
                                    support@yoxibitmail.com
                                </p>
                                <br>
                                <p>
                                    よろしくお願いします。
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        </PageLayerGray>
    </div>
    <Footer />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Nav from '@/components/yoxibit/nav.vue';
import Footer from '@/components/yoxibit/footer.vue';
import PageLayerGray from '@/components/yoxibit/pageLayerGray.vue';
import PageLayerWhite from '@/components/yoxibit/pageLayerWhite.vue';

const items = ref([
    { href: '#manual', text: 'YOXIBITの仕組み' },
    { href: '#notice_a', text: 'NOTICE A' },
    { href: '#notice_b', text: 'NOTICE B' },
    { href: '#notice_c', text: 'NOTICE C' },
    { href: '#', text: 'NOTICE D' },
    { href: '#', text: 'NOTICE E' },
]);

</script>

<style scoped></style>