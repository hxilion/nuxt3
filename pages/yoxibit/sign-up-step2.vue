<template>
  <PageLayout>
    <div class="sign-up-step2 sm:text-sm" >
      <div class="mb-5">メールをお送りしました</div>
      <div>あなたのメールアドレスへ口座開設のご案内をお送りしました。</div>
      <div>メール文中の仮登録ページURLをクリックし、本登録手続きへお進みください。</div>
      <div class="mt-14">
        <div class="border-l-4 border-primary pl-4 text-2xl font-bold sm:text-xl">通常5分程度で本登録のメールをお届けしていますが、届かない場合は下記をお試しください。</div>
        <div class="pl-5 mt-4 ml-1 tracking-widest">
          <ul class="list-disc">
            <li>迷惑メールフォルダをご確認ください。</li>
            <li>携帯アドレスは登録できない場合がございますので、PCメールで再度送信してください。</li>
            <li>「support@yoxibitmail.com」を承認メールリストへ追加して、再度送信してください。</li>
          </ul>
        </div>
      </div>
      <div class="mt-14">
        <div class="border-l-4 border-primary pl-4 text-2xl font-bold sm:text-xl">お困りの場合はカスタマーサポートへご連絡ください。</div>
        <div class="mt-4 tracking-widest">宛先: <span class="text-primary border-l border-primary">support@yoxibitmail.com</span></div>
        <div class="mt-2 tracking-widest">件名: 口座開設希望</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
</script>

<style lang="scss" scoped>
.sign-up-step2 {

  li {
    list-style-type: disc;
  }
}
</style>