<template>
  <div class="email photo px-10 pb-10 text-color-1 font-medium" style="background-color: #902BF5;width:100%;min-width: 470px;font-family:'M PLUS 2'">
    <div>
      <img src="/assets/img/email/desktop.png" alt="">
    </div>
    <div class="email-content" style="max-width: 640px; min-width: 390px;">
      <img src="/assets/img/email/password.png" alt="">
      <div class="text-sm text-left text-start p-10" style="background-color: #fff;">
        <div class="mb-10">
          %user_name% 様
        </div>
        <div class="mb-10">
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
        <div class="mb-5">
          このリンクは24時間有効で、一度しか使用できません。
        </div>
        <div class="mb-10">
          パスワードを変更しない場合は、このメールを無視してください。
        </div>
        <div class="mb-5">
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
      <div class="email-conect contact-us text-sm text-left text-start px-10 pt-5 pb-5 font-medium rounded-b-md" style="background-color: #f4eafe;">
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
      <div class="email-about text-sm font-medium px-10 py-5" style="max-width: 640px; min-width: 390px;">
        <div class="container-flex" style="width: 100%;">
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
        <div class="text-color-1 text-xs mt-10" style="color: #fff;">
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

  .grid-game {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }

  .grid-game img {
    border-radius: 8px;
  }

  .image-wrapper {
    margin: 0 10px; /* 可根據需要調整圖片之間的間距 */
  }

  .image-wrapper img {
    max-width: 100%; /* 讓圖片保持其原始大小比例 */
    height: auto;
  }

  .mail-verify {
    width: 230px;
    height: 52px;
    background: linear-gradient(#a655f7, #902bf5);
    border: 2px solid #ddbdfc;
  }

  .mail-promotion {
    display: flex;
    justify-content: center; /* 將圖片水平置中 */
    align-items: center; /* 將圖片垂直置中 */
    width: 180px;
    height: 52px;
    font-weight: 700;
    background: linear-gradient(90deg, #ffe555 0%, #ffd801 100%);
    border: 2px solid #ffed8a;
  }

  .content {
    height: 48px;
    min-width: 148px;
    text-align: center;
    line-height: initial;
    background: linear-gradient(90deg, #ecd9ff 0%, #ddbdfc 100%);
  }

  .content-text {
    background: linear-gradient(90deg, #8327df 0%, #3c1267 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
  
  .right {
    width: 0;
    height: 0;
    background-color: #ddbdfc;
    border-right: 12px solid rgb(255, 255, 255);
    border-left: 12px solid transparent;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }

  .left {
    width: 0;
    height: 0;
    background-color: #ecd9ff;
    border-right: 12px solid transparent;
    border-left: 12px solid rgb(255, 255, 255);
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }

  .email-ol {
    float: right;
    position: relative;
    top: -52px;
  }

  .contact-us {
    max-width: 640px;
    min-width: 390px;
  }

  /* @media (max-width: 1024px) {
    .email {
      padding: 0 40px 40px 40px;
    }
    .email-content {
      max-width: 640px; min-width: 390px;
    }
    .email-conect {
      padding: 20px 40px 20px 40px;
      max-width: 640px; min-width: 390px;
    }
    .email-about {
      max-width: 640px;
      min-width: 390px;
    }
  }

  @media (max-width: 768px) {
    .email {
      padding: 0 40px 40px 40px;
    }
    .email-content {
      max-width: 640px; min-width: 390px;
    }
    .email-conect {
      padding: 20px 40px 20px 40px;
      max-width: 640px; min-width: 390px;
    }
    .email-about {
      max-width: 640px;
      min-width: 390px;
    }
  }

  @media (max-width: 500px) {
    .email-conect {
      padding: 20px;
    }
  } */
</style>
