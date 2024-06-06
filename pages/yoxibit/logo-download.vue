<template>
    <PageLayout :loginStatus="true">
        <div class="bg-grayF8">
            <div class="flex flex-col">
                <div class="px-4 border-l-4 border-primary text-2xl font-bold">サムネイル</div>
                <img class="" src="/assets/img/yoxibit/yoxibit-logo-preview.svg" alt="">
                <div class="flex sm:flex-col w-full sm:space-y-4 font-bold space-x-4 justify-center sm:space-x-0 items-center">
                    <div class="flex w-80 h-14 justify-center items-center bg-primary rounded-lg arrow-right-black cursor-pointer">llustrator(.ai)</div>
                    <div class="flex w-80 h-14 justify-center items-center bg-secondary rounded-lg arrow-right-white cursor-pointer text-white">PNG</div>
                </div>
            </div>
        </div>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
</script>

<style scoped></style>