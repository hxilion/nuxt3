<template>
    <PageLayout>
      <div class="login w-full">
        <div class="login-header flex flex-col justify-center items-center">
          <div class="header-title font-bold text-3xl">『速くておトク』なYOXIBIT</div>
          <div class="header-feature flex my-8">
            <div class="feature-item flex items-center flex-col text-xl px-12 py-2">
              <div class="step">1</div>
              <div class="text-center">かんたん！1分で使えます</div>
            </div>
            <div class="feature-item flex items-center flex-col text-xl px-12 py-2 border-x border-solid border-[#D2D2D2]">
              <div class="step">2</div>
              <div class="text-center">高額ポイントバック！<br>使うほど増えます</div>
            </div>
            <div class="feature-item flex items-center flex-col text-xl px-12 py-2">
              <div class="step">3</div>
              <div class="text-center">即日換金！<br>現金を早く受取れます</div>
            </div>
          </div>
          <div class="about-yoxibit bg-secondary text-white rounded-lg w-[320px] h-[56px] flex justify-center items-center cursor-pointer arrow-right-white my-16">
            YOXIBITとは
          </div>
        </div>
        <div class="login-form bg-white flex flex-col justify-center items-center p-4 text-xl shadow rounded-lg">
            <div class="login-title font-bold my-4">ログインする</div>
            <div class="login-item w-full flex border-solid border-grayD2 border-b py-4">
              <div class="item-title bg-secondary text-white w-[320px] mr-4 p-4">メールアドレス</div>
              <input class="w-full border-solid border-[#D2D2D2] border" type="text">
            </div>
            <div class="login-item w-full flex border-solid border-grayD2 border-b py-4">
              <div class="item-title bg-secondary text-white w-[320px] mr-4 p-4">パスワード</div>
              <input class="w-full border-solid border-[#D2D2D2] border" type="text">
            </div>
            <div class="login-button bg-primary rounded-lg arrow-right-black w-[320px] h-[56px] flex justify-center items-center cursor-pointer my-4 font-bold">ログイン</div>
            <div class="forget-password p-4">
              <span class="forget-header">パスワードをお忘れの方は</span>
              <a class="text-primary" href="">こちら</a>
            </div>
          </div>
          <div class="register-new flex flex-col justify-center items-center p-4">
            <div class="p-2">会員登録がお済みでない方はこちら</div>
            <div class="bg-secondary arrow-right-white rounded-lg flex justify-center items-center w-[320px] h-[56px] cursor-pointer font-bold text-white">新規登録</div>
          </div>
      </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
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
    background-image: url(/assets/img/yoxibit/circle_bit.svg);
    background-repeat: no-repeat;
  }

  .arrow-right-white {
    position: relative;
    &::after {
      content: url(/assets/img/yoxibit/arrow_right_white.svg);
      position: absolute;
      right: 20px;
    }
  }

  .arrow-right-black {
    position: relative;
    &::after {
      content: url(/assets/img/yoxibit/arrow_right_black.svg);
      position: absolute;
      right: 20px;
    }
  }
}
</style>