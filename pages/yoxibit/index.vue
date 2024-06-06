<template>
  <PageLayout :loginStatus="false">
    <div class="login w-full">
      <div class="flex flex-col justify-center items-center">
        <div class="font-bold text-3xl sm:text-2xl">『速くておトク』なYOXIBIT</div>
        <div class="flex my-8 sm:flex-col sm:w-full">
          <div class="flex items-center flex-col sm:flex-row sm:w-full text-xl px-12 sm:px-4 py-2">
            <div class="step sm:mr-4 mb-4 sm:mb-0">1</div>
            <div class="text-center sm:text-start">かんたん！1分で使えます</div>
          </div>
          <div class="flex items-center flex-col sm:flex-row sm:w-full text-xl px-12 sm:px-4 py-2 border-x border-solid border-grayD2 sm:border-0">
            <div class="step sm:mr-4 mb-4 sm:mb-0">2</div>
            <div class="text-center sm:text-start">高額ポイントバック！<br>使うほど増えます</div>
          </div>
          <div class="flex items-center flex-col sm:flex-row sm:w-full text-xl px-12 sm:px-4 py-2">
            <div class="step sm:mr-4 mb-4 sm:mb-0">3</div>
            <div class="text-center sm:text-start">即日換金！<br>現金を早く受取れます</div>
          </div>
        </div>
        <a href="/yoxibit/manual"
          class="bg-secondary text-white rounded-lg sm:rounded-none w-80 sm:w-full h-14 flex justify-center items-center cursor-pointer arrow-right-white my-16">
          YOXIBITとは
        </a>
      </div>
      <div class="bg-white flex flex-col justify-center items-center px-8 py-4 text-xl shadow-ctz1 rounded-lg">
        <div class="font-bold my-4">ログインする</div>
        <div class="w-full flex border-solid border-grayD2 border-b py-4 sm:flex-col sm:border-0 sm:py-2">
          <div class="bg-secondary text-white w-80 mr-4 p-4 sm:bg-white sm:text-secondary sm:font-bold sm:px-0 sm:py-4">メールアドレス</div>
          <input class="w-full border-solid border-grayD2 border sm:h-14" type="text">
        </div>
        <div class="w-full flex border-solid border-grayD2 border-b py-4 sm:flex-col sm:border-0 sm:py-2">
          <div class="bg-secondary text-white w-80 mr-4 p-4 sm:bg-white sm:text-secondary sm:font-bold sm:px-0 sm:py-4">パスワード</div>
          <input class="w-full border-solid border-grayD2 border sm:h-14" type="text">
        </div>
        <div
          class="bg-primary rounded-lg arrow-right-black w-80 h-14 flex justify-center items-center cursor-pointer my-4 font-bold"
          @click="login">ログイン</div>
        <div class="p-4 sm:text-sm">
          <span>パスワードをお忘れの方は</span>
          <a class="text-primary" href="/yoxibit/forget">こちら</a>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center p-4">
        <div class="p-2">会員登録がお済みでない方はこちら</div>
        <div class="bg-secondary arrow-right-white rounded-lg flex justify-center items-center w-80 h-14 cursor-pointer font-bold text-white" @click="register">新規登録</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
import { useRouter } from 'vue-router'
import { onMounted } from 'vue';

const emit = defineEmits(['updateLoggedIn']);

onMounted(() => {
  emit('updateLoggedIn', false);
});
const router = useRouter()
const login = () => {
  router.push('/yoxibit/home')
}
const register = () => {
  router.push('/yoxibit/sign-up-step1')
}
</script>

<style lang="scss">
.login {
  .step {
    width: 48px;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    background-image: url(/assets/img/yoxibit/circle-bit.svg);
    background-repeat: no-repeat;
  }
}
</style>