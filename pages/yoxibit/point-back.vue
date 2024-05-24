<template>
  <div class="yoxibit flex flex-col">
    <div class="point-back">
      <div class="select-area bg-gray96">
        123
      </div>
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
  </div>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
</script>
<style lang="scss" scoped>
.point-back {

  .select-area {
    width: 100%;
    background-color: gray96;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
  }

  .title {
    font-size: 32px;
  }

  button > img {
    margin-top: 5px;
  }
}
</style>

<style lang="scss">
.yoxibit {
	width: 100%;
	height: auto;
	background-color: #F8F8F8;
	margin-left: auto;
	margin-right: auto;
  font-family: Murecho;
}
</style>