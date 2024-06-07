<template>
  <div class="yoxibit flex min-h-screen flex-col">
    <Nav
      :isLoggedIn="props.loginStatus"
      :pathName="props.pathName"
      :pathTitle="props.pathTitle"
    />
    <div class="flex-1 flex-grow overflow-x-hidden">
      <div class="bg-grayF8 px-4 py-10 font-['Murecho'] text-secondary">
        <div class="mx-auto max-w-[1184px]">
          <slot>
            <router-view />
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

const props = defineProps({
  loginStatus: {
    type: Boolean,
    default: false
  },
  pathTitle: {
    type: String,
    default: ''
  },
  pathName: {
    type: String,
    default: ''
  },
});
</script>
