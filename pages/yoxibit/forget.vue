<template>
  <PageLayout :loginStatus="false">
    <div class="flex w-full flex-col">
      <div
        class="flex w-full flex-col items-center justify-center rounded-lg bg-white p-4 text-xl shadow-ctz1"
      >
        <div class="my-4 font-bold">パスワードリマインダー</div>
        <div
          class="flex w-full border-b border-solid border-grayD2 py-4 sm:flex-col sm:border-0 sm:py-2"
        >
          <div
            class="mr-4 w-1/4 bg-secondary p-4 text-white sm:w-full sm:bg-white sm:px-0 sm:text-secondary"
          >
            メールアドレス
          </div>
          <input
            class="w-3/4 border border-solid border-grayD2 px-4 sm:h-14 sm:w-full sm:font-bold"
            type="text"
            v-model="email"
            @input="validateEmail"
            :class="{ 'border-red-500': emailError }"
            required
          />
        </div>
        <div
          class="flex w-full border-b border-solid border-grayD2 py-4 sm:flex-col sm:border-0 sm:py-2"
        >
          <div
            class="mr-4 w-1/4 bg-secondary p-4 text-white sm:w-full sm:bg-white sm:px-0 sm:text-secondary"
          >
            生年月日
          </div>
          <div class="flex w-3/4 sm:w-full">
            <select
              class="mr-4 w-1/5 border border-solid border-grayD2 px-4 sm:h-14 sm:w-full sm:w-full sm:flex-1 sm:font-bold"
              name="year"
              id="year"
              v-model="selectedYear"
              @change="updateDays"
            >
              <option value="">年</option>
              <option v-for="year in years" :key="year" :value="year">{{ year }}年</option>
            </select>

            <select
              class="mr-4 w-1/5 border border-solid border-grayD2 px-4 sm:w-full sm:flex-1"
              name="month"
              id="month"
              v-model="selectedMonth"
              @change="updateDays"
            >
              <option value="">月</option>
              <option v-for="month in 12" :key="month" :value="month">{{ month }}月</option>
            </select>

            <select
              class="mr-4 w-1/5 border border-solid border-grayD2 px-4 sm:w-full sm:flex-1"
              name="day"
              id="day"
              v-model="selectedDay"
            >
              <option value="">日</option>
              <option v-for="day in days" :key="day" :value="day">{{ day }}日</option>
            </select>
          </div>
        </div>
        <div
          class="arrow-right-black my-4 flex h-14 w-80 cursor-pointer items-center justify-center rounded-lg bg-primary font-bold"
          :class="{ 'cursor-not-allowed opacity-50': !isFormValid }"
          @click="showDialog = true"
        >
          確認画面
        </div>
      </div>
      <div class="flex flex-col">
        <div class="my-4 border-l-4 border-solid border-primary px-2 text-2xl font-bold sm:text-xl">
          お困りの場合はご連絡ください
        </div>
        <div class="text-primary underline sm:text-sm">
          お問合せフォームからパスワードの確認をする
        </div>
      </div>
    </div>
  </PageLayout>
  <Dialog
    :modelValue="showDialog"
    :modelButtonValue="true"
    :cancelText="'CANCEL'"
    title="確認送信"
    @update:modelValue="updateDialogValue"
    @update:modelButtonValue="true"
  >
  <div>There is a explain with this popup.</div>
  </Dialog>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
import Dialog from '~/components/yoxibit/dialog.vue';
import { ref, computed, watch } from 'vue';

const email = ref('');
const emailError = ref(false);
const currentYear: number = new Date().getFullYear();
const years = ref<number[]>(Array.from({ length: 101 }, (_, i) => currentYear - i - 17));
const selectedYear = ref<number | ''>('');
const selectedMonth = ref<number | ''>('');
const selectedDay = ref<number | ''>('');
const days = ref<number[]>([]);
const showDialog = ref(false);

const updateDialogValue = (value: boolean) => {
  showDialog.value = value;
};

const updateDays = (): void => {
  const year = parseInt(selectedYear.value as string, 10);
  const month = parseInt(selectedMonth.value as string, 10);

  if (!year || !month) {
    days.value = [];
    return;
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  days.value = Array.from({ length: daysInMonth }, (_, i) => i + 1);
};

watch([selectedYear, selectedMonth], updateDays);

const isFormValid = computed(() => {
  return (
    email.value !== '' &&
    !emailError.value &&
    selectedYear.value !== '' &&
    selectedMonth.value !== '' &&
    selectedDay.value !== ''
  );
});

const validateEmail = (): void => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  emailError.value = !emailPattern.test(email.value);
};

const handleSubmit = () => {
  if (isFormValid.value) {
    alert('送信成功');
  } else {
    alert('インフォメーションを入力してください');
  }
};
</script>

<style lang="scss" scoped></style>
