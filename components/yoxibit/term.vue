<template>
    <div class="mb-12">
        <div class="mb-4">
            <h3 class="font-bold mb-4 border-l-4 border-primary pl-4 text-2xl py-1">{{ title }}</h3>
        </div>
        <div>
            {{ text }}
        </div>
    </div>
</template>

<script lang="ts" setup name="term">
defineProps(['title', 'text'])
</script>