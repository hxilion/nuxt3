<template>
    <PageLayout :loginStatus="true">
        <main class="flex-grow flex-1 overflow-x-hidden">
            <section class="bg-white" id="title">
                <div class="py-16 px-4 max-w-screen-xl mx-auto relative">
                    <div class="overflow-x-scroll w-full sm:hidden block">
                        <nav
                            class="w-full bg-grey-light rounded-md w-full absolute top-0 left-4 ml-5 mt-5 ml-4 sm:mt-2 sm:ml-0">
                            <ol class="flex items-center justify-start space-x-2 text-sm">
                                <li class="whitespace-nowrap"><a class="text-secondary underline"
                                        href="/yoxibit/home">ホーム</a>
                                </li>
                                <li>&gt;</li>
                                <li class="whitespace-nowrap">購入事前申請</li>
                            </ol>
                        </nav>
                    </div>
                    <div class="text-center">
                        <h2 class="font-bold tracking-widest mb-1 sm:text-2xl text-4xl">購入事前申請</h2>
                        <p class="text-primary font-bold tracking-widest">DEPOSIT</p>
                    </div>
                </div>
            </section>
            <section class="bg-grayF8 py-20 px-4 tracking-widest sm:px-0">
                <div class="max-w-screen-xl mx-auto">
                    <div class="bg-white sm:p-4 shadow-vglow p-8">
                        <div class="wrap clearfix">
                            <div class="mb-8">
                                <p class="text-center mb-4 font-bold mb-4 text-2xl sm:text-xl">
                                    <span>購入の事前申請が完了しました。</span>
                                    <span>下記の通りお振込ください。</span>
                                </p>
                                <div class="inline-flex flex-col text-center w-full mb-4 sm:text-sm">
                                    <p>ご注意1:振込先は毎回変更になります</p>
                                    <p>ご注意2:お名前の前に購入ワンタイムコードをご入力ください</p>
                                </div>
                                <div class="w-full text-center sm:text-sm">
                                    <span>今回の購入ワンタイムコード：</span>
                                    <span class="text-[#0064FF] font-bold">N90ML587BD12</span>
                                </div>
                            </div>
                            <div class="mb-8 flex flex-col space-y-1">
                                <div class="font-bold text-2xl">振込人名義</div>
                                <div>N90ML587BD12 山田孝之</div>
                            </div>
                            <div class="mb-8 flex flex-col">
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">振込金額</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">15,000円</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">銀行名</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">銀行名</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">支店名</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">支店名</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">支店番号</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">支店番号</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">口座種別</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">口座種別</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">口座番号</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">口座番号</div>
                                </div>
                                <div class="w-full flex">
                                    <div class="bg-grayF8 border border-grayD2 font-bold flex items-center w-1/4 p-4 sm:w-1/3 sm:p-3">口座名義</div>
                                    <div class="p-4 border border-grayD2 flex items-center w-3/4 sm:w-2/3 sm:p-3">カ)エス.ビー.エー</div>
                                </div>
                            </div>
                            <div class="text-left mb-8">
                                <p class="mb-6">振込先は収納代行サービス会社名となります</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
</script>

<style scoped></style>