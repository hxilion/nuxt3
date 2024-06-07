<template>
  <PageLayout :loginStatus="false">
    <main class="flex-1 flex-grow overflow-x-hidden">
      <section class="px-4 py-2">
        <div class="max-w-screen-xl mx-auto">
          <div class="mb-8 sm:text-sm">
            <p class="mb-2">サポート対応時間 8:00-24:30</p>
            <p>
              カスタマーサポート（<a class="text-primary" href="support@yoxibitmail.com"
                >support@yoxibitmail.com</a
              >） までメールをお送りください。<br />
            </p>
          </div>
          <div class="mb-6 rounded-lg bg-white p-8 shadow-ctz1">
            <div class="flex justify-center text-2xl font-bold sm:text-xl">お問合せ</div>
            <ul class="my-5 flex flex-col border-b border-grayD2 sm:border-0">
              <li class="flex flex-row items-center py-4 sm:flex-col sm:items-start">
                <div
                  class="mb-0 mr-4 flex w-1/3 items-center bg-black px-6 py-8 font-bold text-white sm:w-full sm:bg-white sm:px-0 sm:py-2 sm:text-secondary"
                >
                  お名前
                </div>
                <div class="w-2/3 sm:w-full">
                  <input
                    class="w-full appearance-none border border-gray-300 p-3"
                    name="name"
                    value=""
                    type="text"
                    data-sharkid="__0"
                  />
                </div>
              </li>
              <li class="flex flex-row items-center py-4 sm:flex-col sm:items-start">
                <div
                  class="mb-0 mr-4 flex w-1/3 items-center bg-black px-6 py-8 font-bold text-white sm:w-full sm:bg-white sm:px-0 sm:py-2 sm:text-secondary"
                >
                  メールアドレス
                </div>
                <div class="w-2/3 sm:w-full">
                  <input
                    class="w-full appearance-none border border-gray-300 p-3"
                    name="email"
                    value=""
                    type="text"
                    data-sharkid="__1"
                  />
                </div>
              </li>
              <li class="flex flex-row items-center py-4 sm:flex-col sm:items-start">
                <div
                  class="mb-0 mr-4 flex w-1/3 items-center bg-black px-6 py-[10%] font-bold text-white sm:w-full sm:bg-white sm:px-0 sm:py-2 sm:text-secondary"
                >
                  お問合せ内容
                </div>
                <div class="w-2/3 sm:w-full">
                  <textarea
                    name="comment"
                    class="h-64 w-full rounded border border-gray-300 p-3"
                    placeholder=""
                    data-sharkid="__2"
                  ></textarea>
                </div>
              </li>
            </ul>
            <div class="mt-6 flex flex-col items-center justify-center space-y-8 text-center">
              <button
                type="button"
                class="black-vector-right relative block flex inline-flex w-auto cursor-pointer justify-center rounded-lg bg-primary px-24 py-4 text-center text-base font-bold tracking-widest text-black duration-300 hover:opacity-50 sm:px-20"
              >
                <span @click="showDialog = true">確認画面</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
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
import { ref } from 'vue';
const showDialog = ref(false);

const updateDialogValue = (value: boolean) => {
  showDialog.value = value;
};
</script>

<!-- <style scoped>

</style> -->
