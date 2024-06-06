<template>
  <div class="yoxibit flex flex-col min-h-screen">
    <Nav :isLoggedIn="props.loginStatus" />
    <div class="flex-grow flex-1 overflow-x-hidden">
      <div class="bg-grayF8 font-['Murecho'] text-secondary px-4 py-10">
        <div class="max-w-[1184px] mx-auto">
          <slot>
            <router-view/>
          </slot>
        </div>
      </div>
    </div>
    <Footer :isLoggedIn="props.loginStatus" />
  </div>
</template>

<script lang="ts" setup>
import Nav from './nav.vue';
import Footer from './footer.vue';
interface Props {
  loginStatus?: boolean;
}

const props = defineProps<Props>();
</script>