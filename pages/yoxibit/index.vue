<template>
    <PageLayout>
      <div class="login w-full">
        <div class="flex flex-col justify-center items-center">
          <div class="font-bold text-3xl">『速くておトク』なYOXIBIT</div>
          <div class="flex my-8">
            <div class="flex items-center flex-col text-xl px-12 py-2">
              <div class="step">1</div>
              <div class="text-center">かんたん！1分で使えます</div>
            </div>
            <div class="flex items-center flex-col text-xl px-12 py-2 border-x border-solid border-grayD2">
              <div class="step">2</div>
              <div class="text-center">高額ポイントバック！<br>使うほど増えます</div>
            </div>
            <div class="flex items-center flex-col text-xl px-12 py-2">
              <div class="step">3</div>
              <div class="text-center">即日換金！<br>現金を早く受取れます</div>
            </div>
          </div>
          <a href="/yoxibit/manual" class="bg-secondary text-white rounded-lg w-80 h-14 flex justify-center items-center cursor-pointer arrow-right-white my-16">
            YOXIBITとは
          </a>
        </div>
        <div class="bg-white flex flex-col justify-center items-center px-8 py-4 text-xl shadow-2 rounded-lg">
            <div class="font-bold my-4">ログインする</div>
            <div class="w-full flex border-solid border-grayD2 border-b py-4">
              <div class="bg-secondary text-white w-80 mr-4 p-4">メールアドレス</div>
              <input class="w-full border-solid border-grayD2 border" type="text">
            </div>
            <div class="w-full flex border-solid border-grayD2 border-b py-4">
              <div class="bg-secondary text-white w-80 mr-4 p-4">パスワード</div>
              <input class="w-full border-solid border-grayD2 border" type="text">
            </div>
            <div class="bg-primary rounded-lg arrow-right-black w-80 h-14 flex justify-center items-center cursor-pointer my-4 font-bold" 
                @click="login"
            >ログイン</div>
            <div class="p-4">
              <span>パスワードをお忘れの方は</span>
              <a class="text-primary" href="/yoxibit/forget">こちら</a>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center p-4">
            <div class="p-2">会員登録がお済みでない方はこちら</div>
            <div class="bg-secondary arrow-right-white rounded-lg flex justify-center items-center w-80 h-14 cursor-pointer font-bold text-white">新規登録</div>
          </div>
      </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { useRouter } from 'vue-router'
import { onMounted, defineEmits } from 'vue';

const emit = defineEmits(['updateLoggedIn']);

onMounted(() => {
  emit('updateLoggedIn', false);
});
const router = useRouter()
const login = () => {
  router.push('/yoxibit/home')
}
</script>

<style lang="scss">
.login {
  .step {
    width: 48px;
    height: 48px;
    margin-bottom: 16px;
    line-height: 48px;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    background-image: url(/assets/img/yoxibit/circle-bit.svg);
    background-repeat: no-repeat;
  }
}
</style>