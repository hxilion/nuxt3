<template>
    <div class="bg-white flex-col space-y-4 shadow-vglow p-8 sm:p-6">
        <div class="flex items-center justify-start space-x-2 pb-2 border-b border-primary mb-4">
            <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16">
            <p class="text-lg font-bold">{{ title }}</p>
        </div>
        <div>
            <p v-html="content"></p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps(['title', 'content'])
</script>