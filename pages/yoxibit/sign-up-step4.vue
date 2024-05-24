<template>
  <PageLayout>
    <div class="sign-up-step4 text-center" >
      <div class="title font-bold">YOXIBIT登録申請</div>
      <div class="my-16">ご登録申請が完了いたしました。</div>
      <div>ご入力内容を<span class="font-bold">メールアドレスが表示</span>に送信いたしました。</div>
      <div>審査完了後に登録完了のお知らせをお送りいたしますのでしばらくお待ちください。</div>
      <div>登録完了のお知らせが届くと、 アカウントをご利用いただけるようになります。</div>
      <div class="text-center my-16">
        <button
        type="submit"
        class="btn-style1 px-12 rounded-lg font-bold" 
        >ログイン画面
        <img class="float-right clear-right" src="/assets/img/yoxibit/vector.png" alt="">
        </button>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
</script>

<style lang="scss" scoped>
.sign-up-step4 {

  .title {
    font-size: 32px;
  }

  button > img {
    margin-top: 5px;
  }
}
</style>