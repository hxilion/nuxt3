<template>
    <PageLayout>
        <div class="flex flex-col w-full">
          <div class="w-full bg-white flex flex-col justify-center items-center p-4 text-xl shadow-2 rounded-lg">
              <div class="font-bold my-4">パスワードリマインダー</div>
              <div class="w-full flex border-solid border-grayD2 border-b py-4">
                <div class="bg-secondary text-white w-1/4 mr-4 p-4">メールアドレス</div>
                <input
                  class="w-3/4 border-solid border-grayD2 border px-4"
                  type="text"
                  v-model="email"
                  @input="validateEmail"
                  :class="{'border-red-500': emailError}"
                  required
                />
              </div>
              <div class="w-full flex border-solid border-grayD2 border-b py-4">
                <div class="bg-secondary text-white w-1/4 mr-4 p-4">生年月日</div>
                <select
                  class="w-1/5 border-solid border-grayD2 border mr-4 px-4"
                  name="year"
                  id="year"
                  v-model="selectedYear"
                  @change="updateDays"
                >
                  <option value="">年</option>
                  <option v-for="year in years" :key="year" :value="year">{{ year }}年</option>
                </select>

                <select
                  class="w-1/5 border-solid border-grayD2 border mr-4 px-4"
                  name="month"
                  id="month"
                  v-model="selectedMonth"
                  @change="updateDays"
                >
                  <option value="">月</option>
                  <option v-for="month in 12" :key="month" :value="month">{{ month }}月</option>
                </select>

                <select
                  class="w-1/5 border-solid border-grayD2 border mr-4 px-4"
                  name="day"
                  id="day"
                  v-model="selectedDay"
                >
                  <option value="">日</option>
                  <option v-for="day in days" :key="day" :value="day">{{ day }}日</option>
                </select>
              </div>
              <div
                class="bg-primary rounded-lg arrow-right-black w-80 h-14 flex justify-center items-center cursor-pointer my-4 font-bold"
                :class="{ 'cursor-not-allowed opacity-50': !isFormValid }"
                @click="handleSubmit"
              >
                確認画面
              </div>
            </div>
            <div class="flex flex-col">
                <div class="font-bold text-2xl px-2 border-primary border-l-4 border-solid my-4">お困りの場合はご連絡ください</div>
                <div class="text-primary underline">お問合せフォームからパスワードの確認をする</div>
            </div>
        </div>
    </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { ref, computed, watch } from 'vue';

const email = ref('');
const emailError = ref(false);
const currentYear: number = new Date().getFullYear();
const years = ref<number[]>(Array.from({ length: 101 }, (_, i) => currentYear - i - 17));
const selectedYear = ref<number | ''>('');
const selectedMonth = ref<number | ''>('');
const selectedDay = ref<number | ''>('');
const days = ref<number[]>([]);

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
  return email.value !== '' && !emailError.value && selectedYear.value !== '' && selectedMonth.value !== '' && selectedDay.value !== '';
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

<style lang="scss" scoped>

</style>