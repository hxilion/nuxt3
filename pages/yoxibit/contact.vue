<template>
    <PageLayout :loginStatus="false">
        <main class="flex-grow flex-1 overflow-x-hidden">
            <section class="py-2 px-4 xl:px-0">
                <div class="max-w-screen-xl mx-auto">
                    <div class="mb-8">
                        <p class="mb-2">サポート対応時間 8:00-24:30</p>
                        <p>
                            カスタマーサポート（<a class="text-primary" href="support@yoxibitmail.com">support@yoxibitmail.com</a>）
                            までメールをお送りください。<br>
                        </p>
                    </div>
                    <div class="mb-6 rounded-lg bg-white shadow-2 p-8">
                        <div class="flex justify-center font-bold text-2xl">お問合せ</div>
                        <ul class="flex flex-col divide-x1 divide-garyD2 border-b border-garyD2">
                            <li class="flex items-center py-4 flex-row">
                                <div class="mb-0 w-1/3 flex items-center font-bold bg-black text-white px-6 py-8 mr-4">お名前</div>
                                <div class="w-2/3">
                                    <input class="appearance-none border border-gray-300 p-3 w-full" name="name" value="" type="text" data-sharkid="__0">
                                </div>
                            </li>
                            <li class="flex items-center py-4 flex-row">
                                <div class=" mb-0 w-1/3 flex items-center font-bold bg-black text-white px-6 py-8 mr-4">メールアドレス</div>
                                <div class="w-2/3">
                                    <input class="appearance-none border border-gray-300 p-3 w-full" name="email" value="" type="text" data-sharkid="__1">
                                </div>
                            </li>
                            <li class="flex items-center py-4 flex-row">
                                <div class="mb-0 w-1/3 flex items-center font-bold bg-black text-white px-6 py-[10%] mr-4">お問合せ内容</div>
                                <div class="w-2/3">
                                    <textarea name="comment" class="border border-gray-300 rounded p-3 w-full h-64" placeholder="" data-sharkid="__2"></textarea>
                                </div>
                            </li>
                        </ul>
                        <div class="text-center flex flex-col items-center justify-center space-y-8 mt-6">
                            <button type="button" class="w-auto cursor-pointer font-bold relative py-4 text-center block tracking-widest text-base px-24 flex inline-flex justify-center text-black bg-primary hover:opacity-50 duration-300 rounded-lg arrow-right-black">
                            <span>確認画面</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
</script>

<!-- <style scoped>

</style> -->