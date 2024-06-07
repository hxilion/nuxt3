<template>
  <div
    v-if="isOpen"
    class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div class="w-[480px] h-[276px] bg-white p-5 rounded shadow-lg">
      <div class="text-right">
        <button @click="closeDialog">
          <Icon class="text-gray96" name="tdesign:close" size="32" />
        </button>
      </div>
      <h3 class="text-2xl text-center font-bold mb-4 tracking-widest">{{ title }}</h3>
      <div class="text-center my-10 tracking-widest">
        <slot></slot>
      </div>
      <div v-if="isReturn">
        <button
          class="w-48 h-14 px-12 font-bold text-secondary rounded-lg bg-white "
          @click="closeDialog"
        >
          {{ cancelText }}
        </button>
        <button
          class="w-48 h-14 px-12 font-bold text-secondary rounded-lg bg-primary ml-3"
          @click="comfirmDialog"
        >
          Yes
        </button>
      </div>
      <div v-else class="text-center">
        <button
          class="w-[400px] h-14 px-12 font-bold text-secondary rounded-lg bg-primary mt-10"
          @click="closeOKDialog"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


const props = defineProps({
  title: {
    type: String,
    default: 'Dialog Title',
  },
  modelValue: {
    type: Boolean,
    default: false,
  },
  modelButtonValue: {
    type: Boolean,
    default: false,
  },
  cancelText: {
    type: String,
    default: 'Close'
  }
});

const emit = defineEmits(['update:modelValue', 'update:modelButtonValue']);

const isOpen = ref(props.modelValue);
const isReturn = ref(props.modelButtonValue);

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal;
});

watch(() => props.modelButtonValue, (newVal) => {
  isReturn.value = newVal;
});

const comfirmDialog = () => {
  isOpen.value = false;
  emit('update:modelValue', false);
};

const closeDialog = () => {
  isOpen.value = false;
  emit('update:modelValue', false);
};

const closeOKDialog = () => {
  isOpen.value = false;
  emit('update:modelButtonValue', false);
};
</script>

<style scoped>
/* Custom styles for the dialog */
</style>
