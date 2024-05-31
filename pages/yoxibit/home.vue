<template>
    <div>
        <Nav />
        <PageLayerGray>
            <div class="max-w-screen-xl mx-auto">
                <div class="mb-6 md:mb-12 " id="topics">
                    <ul class="transition transform font-bold text-base grid gap-y-1 grid-cols-1 lg:grid-cols-2">
                        <template v-for="(item, index) in items" :key="index">
                            <li class="flex items-start space-x-2">
                                <img class="mt-1.5" src="/assets/img/yoxibit/topics-arrow.svg" />
                                <a class="underline" :href="item.href">{{ item.text }}</a>
                            </li>
                        </template>
                    </ul>
                </div>
                <div class="hidden bg-white shadow-vglow text-center mb-12 pb-4 p-4 md:p-8">
                    <div class="mb-6">
                        <p class="pb-3 border-b border-primary text-2xl tracking-widest font-bold"><span
                                class="inline-block">山田孝之様の</span><span class="inline-block">ポイントバック</span></p>
                    </div>
                </div>
                <div class="bg-white p-8 shadow-vglow text-center mb-6">
                    <div
                        class="flex justify-center items-center mb-6 md:space-x-6_ flex-col space-y-2 md:space-y-4 md:flex-col">
                        <div class="font-bold">
                            <p class="md:tracking-widest text-xl">山田孝之<span class="text-xl mx-1">様</span></p>
                        </div>
                        <div class="add-style-c--4">
                            <p class="text-lg mb-2_ md:text-2xl md:mb-2 tracking-widest font-bold">ベガID <span>
                                    (ユーザーネーム・口座番号)</span></p>
                        </div>
                        <div class="flex flex-none items-center font-bold justify-center md:justify-left">
                            <p class="bg-gray-100 px-4 py-1 text-2xl text-black tracking-widest">U000001</p>
                        </div>
                    </div>
                    <div class="add-style-c--4">
                        <p class="text-lg mb-2 md:text-2xl md:mb-6 tracking-widest font-bold">現在ポイント <span>(1pt=1USD)</span>
                        </p>
                    </div>
                    <p class="tracking-wider  text-primary font-bold text-4xl md:text-[80px] _md:-my-3.5">
                        100.57<span class="text-xl md:text-4xl">pt</span></p>
                </div>
                <div class="text-center">
                    <div
                        class="flex text-black items-center justify-center mb-6 flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60 md:max-w-15 bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black"
                            href="/yoxibit/deposit/"><span>購入</span>
                        </a>
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60 md:max-w-15 bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black"
                            href="/yoxibit/redemption-apply-step/"><span>換金</span>
                        </a>
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest py-3 text-lg w-60  md:max-w-15 bg-vblack hover:opacity-50 duration-300 text-white rounded-lg bg-secondary arrow-right-white"
                            href="/yoxibit/trading-history"><span>取引履歴</span>

                        </a>
                    </div>
                    <div class="flex items-center justify-center">
                        <a class="text-lg font-bold flex items-center justify-center space-x-2 px-10 arrow-right-black"
                            href="/yoxibit/handing-points-fees"><span>利用限度額・手数料</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageLayerGray>
        <PageLayerWhite>
            <div class="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4" id="manual">
                <div class="title font-bold text-center">YOXIBITの仕組み</div>
                <div class="w-full h-80 bg-grayD2 my-10"></div>
                <div class="w-full font-normal">YOXIBITは、ユーザーと加盟店間の資金（ポイント）の購入・受取・送付・換金ができるサービスです。</div>
                <div>
                    <div class="mb-10">
                        <h3 class="font-bold mb-4 border-l-4 border-primary pl-4 text-xl md:text-2xl py-1">初めての方へ</h3>
                        <p>ベガウォレットの仕組みについて、詳しく説明しています。初めて利用される方や、ベガウォレットについて詳しく知りたい方はこちらのページをご確認ください。</p>
                    </div>
                    <div class="text-center flex justify-center">
                        <a class="font-bold relative p-1 py-4 text-center block tracking-widest text-md w-full max-w-[333px] text-black bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black"
                            href="/yoxibit/manual/">
                            <span>初めての方へ</span>
                        </a>
                    </div>
                </div>
            </div>
        </PageLayerWhite>
        <PageLayerGray>
            <section class="bg-vgray undefined py-8 md:py-20 px-4 xl:px-0" id="about">
                <div class="max-w-screen-xl mx-auto">
                    <div class="max-w-screen-xl mx-auto">
                        <div class="grid gap-4 grid-cols-1 md:grid-cols-2">
                            <div class="bg-white p-8 shadow-vglow rounded-lg">
                                <div class="flex space-x-4 mb-6 items-start md:space-x-6">
                                    <div class="circle-bit flex justify-center items-center">
                                        <img class="flex-none flex-0 w-[24px] md:w-[48px]"
                                            src="/assets/img/yoxibit/gift.svg">
                                    </div>
                                    <div class="flex-grow md:pt-2">
                                        <p class="font-bold mb-2 text-2xl text-primary">PROMOTION 1</p>
                                        <p class="font-bold text-[#444444]">PROMOTION-TITLE</p>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                        sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                                </div>
                                <div>
                                    <a class="font-bold relative p-1 py-4 text-center block tracking-widest text-xl w-full text-vblack bg-primary hover:opacity-50 duration-300 arrow-right-black rounded-lg"
                                        href="#">
                                        <span>詳しく見る</span>
                                    </a>
                                </div>
                            </div>
                            <div class="bg-white p-8 shadow-vglow">
                                <div class="flex space-x-4 mb-6 items-start md:space-x-6">
                                    <div class="circle-bit flex justify-center items-center">
                                        <img class="flex-none flex-0 w-[24px] md:w-[48px]"
                                            src="/assets/img/yoxibit/gift.svg">
                                    </div>
                                    <div class="flex-grow md:pt-2">
                                        <p class="font-bold mb-2 text-2xl text-primary">PROMOTION 2</p>
                                        <p class=" hidden font-bold text-[#444444]">PROMOTION-TITLE</p>
                                    </div>
                                </div>
                                <div class="mb-6">
                                    <p>Borem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
                                        dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem
                                        sollicitudin lacus, ut interdum tellus elit sed risus. </p>
                                </div>
                                <div><a class="font-bold relative p-1 py-4 text-center block tracking-widest text-xl w-full text-vblack bg-primary hover:opacity-50 duration-300 arrow-right-black rounded-lg"
                                        href="#">
                                        <span>詳しく見る</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="undefined py-8 md:py-20 px-4 xl:px-0" id="calendar">
                <div class="max-w-screen-xl mx-auto">
                    <article class="prose lg:prose-md prose-a:text-primary max-w-none" id="notice_a">
                        <div
                            class=" w-full bg-white shadow-vglow text-left mb-6 p-4 py-6 md:p-8 md:py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <p class="bg-primary text-black text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-lg md:text-xl">NOTICE A</p>
                            </div>
                            <div>
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
                    <article class="prose lg:prose-md prose-a:text-primary max-w-none" id="notice_b">
                        <div
                            class=" w-full bg-white shadow-vglow text-left mb-6 p-4 py-6 md:p-8 md:py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <p class="bg-primary text-black text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-lg md:text-xl">NOTICE B</p>
                            </div>
                            <div>
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
                    <article class="prose lg:prose-md prose-a:text-primary max-w-none" id="notice_c">
                        <div
                            class=" w-full bg-white shadow-vglow text-left mb-6 p-4 py-6 md:p-8 md:py-12 rounded-lg shadow">
                            <div class="flex items-center mb-4 flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <p class="bg-primary text-black text-sm px-4 py-1">重要なお知らせ</p>
                                <p class="text-lg md:text-xl">NOTICE C</p>
                            </div>
                            <div>
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
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Nav from '~/components/yoxibit/nav.vue';
import Footer from '~/components/yoxibit/footer.vue';
import PageLayerGray from '~/components/yoxibit/pageLayerGray.vue';
import PageLayerWhite from '~/components/yoxibit/pageLayerWhite.vue';

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