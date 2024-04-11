<template>
  <div class="email photo text-color-1" style="background-color: #902BF5;width:100%;">
    <div>
      <img src="/assets/img/email/desktop.png" alt="">
    </div>
    <div>
      <img src="/assets/img/email/password-m.png" alt="">
      <div class="text-sm text-left text-start font-medium py-10 px-5" style="background-color: #fff;">
        <div class="mb-10" style="font-family:'M PLUS 2', Sans-serif">
          %user_name% 様
        </div>
        <div class="mb-10" style="font-family:'M PLUS 2', Sans-serif">
          Pazuruにご連絡いただき、ありがとうございます。パスワードの再設定リクエストを受け取りました。以下のリンクをクリックしてパスワードをリセットしてください。
        </div>
        <div class="photo mb-10">
          <a href="/" target="_blank">
            <button
              type="button"
              class="container-flex mail-verify px-3 py-5 rounded-lg text-white text-base" 
             >パスワードをリセット
              <img class="ml-2.5" src="/assets/img/email/vector.png" alt="">
            </button>
          </a>
        </div>
        <div class="mb-10">
          このリンクは24時間有効で、一度しか使用できません。
        </div>
        <div class="mb-10">
          パスワードを変更しない場合は、このメールを無視してください。
        </div>
        <div class="mb-10">
          何かご不明点やご質問があれば、お気軽にカスタマーサポートチャットまでお問い合わせください。
        </div>
        <div class="mb-20">
          引き続きどうぞよろしくお願いいたします。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールは自動送信のため、返信できません。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールに心当たりのない場合は、お手数ですがこのメールを削除してください。
        </div>
      </div>
      <div class="text-sm text-left text-start font-medium p-5 rounded-b-md" style="background-color: #F4EAFE;">
        <div class="email-ol">
          <img src="/assets/img/email/email-ol.png" alt="">
        </div>
        <div class="text-color-1 text-xs font-bold mb-2.5">
          Pazuru運営事務局
        </div>
        <div class="text-color-1 text-xs mb-2.5 whitespace-nowrap">
          メールアドレス：info@pazuru.com
        </div>
        <div class="text-color-1 text-xs">
          ※営業時間：
        </div>
      </div>
      <div class="text-sm font-medium px-10 py-5">
        <div class="container-flex">
            <div class="image-wrapper">
              <img src="/assets/img/email/facebook.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/email/instagram.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/email/twitter.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/email/youtube.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/email/tiktok.png" alt="">
            </div>
          </div>
        <div class="my-10">
          <img src="/assets/img/email/pazuru-logo-white.png" alt="">
        </div>
        <div class="font-xs" style="color: #f4eafe;">
          <a class="divide-y" href="/">プライバシーポリシー</a>
          <a class="divide-y" href="/">利用規約</a>
          <a class="divide-y" href="/">よくある質問</a>
          <a href="/">カスタマーサポート</a>
        </div>
        <div class="text-xs mt-10" style="color: #fff;">
          ©Pazuru 2024 | 全著作権所有
        </div>
      </div>
    </div>
  </div>
</template>
  
<style>
  .photo {
    text-align: -webkit-center;
  }

  .divide-x {
    border-bottom: 1px solid #cc9dfa;
  }

  .divide-y {
    border-right: 1px solid #f4eafe;
    margin-right: 10px;
    padding-right: 10px;
  }

  .text-color-1 {
    color: #131416;
  }
  .text-color-2 {
    color: #727478;
  }

  .container-flex {
    display: flex;
    justify-content: center; /* 將圖片水平置中 */
    align-items: center; /* 將圖片垂直置中 */
  }

  .image-wrapper {
    margin: 0 10px; /* 可根據需要調整圖片之間的間距 */
  }

  .image-wrapper img {
    max-width: 100%; /* 讓圖片保持其原始大小比例 */
    height: auto;
  }

  .email-ol {
    float: right;
    position: relative;
    top: -52px;
  }

  .mail-verify {
    width: 230px;
    height: 52px;
    background: linear-gradient(#a655f7, #902bf5);
    border: 2px solid #ddbdfc;
  }
</style>
  