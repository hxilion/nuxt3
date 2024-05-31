<template>
    <div class="items-stretch flex flex-col md:flex-row border">
        <div class="p-6 self-stretch text-xl md:p-8 md:w-1/3 flex justify-center items-center bg-primaryVariant">
            <p class="font-bold">{{ title }}</p>
        </div>
        <div class="p-6 md:p-8 md:w-2/3 bg-white relative  ">
            <div class="absolute left-0 flex items-center h-auto top-0 w-full md:w-auto justify-center md:items-center md:h-full">
            <div class="rotate-45 -mt-2.5 md:-mt-0 md:-ml-2.5 w-5 h-5 bg-primaryVariant"></div>
            </div>
            <p class="mb-2" v-html="text"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['title', 'text'])
</script>