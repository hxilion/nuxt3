<template>
  <div class="email photo px-10 pb-10 text-color-1 font-medium" style="background-color: #902BF5;width:100%;min-width: 470px;font-family:'M PLUS 2'">
    <div>
      <img src="/assets/img/email/desktop.png" alt="">
    </div>
    <div class="email-content" style="max-width: 640px; min-width: 390px;">
      <img src="/assets/img/email/kyc-fail.png" alt="">
      <div class="text-sm text-left text-start font-medium p-10" style="background-color: #fff;">
        <div class="mb-10">
          %user_name% 様
        </div>
        <div class="mb-10">
          お世話になっております。Pazuruにて本人確認認証を行っていただき、ありがとうございました。
        </div>
        <div>
          残念ながら、本人確認認証が失敗しました。以下の理由により、認証が完了していない可能性があります。
        </div>
        <div class="mb-10">
          <ul>
            <li>提出された書類に不備がある</li>
            <li>書類の画像が不鮮明である</li>
            <li>本人確認書類が期限切れである</li>
          </ul>
        </div>
        <div class="divide-x mb-14"></div>
        <div class="mb-10">
          再度、正確な情報を提出いただき、KYC認証を完了させていただければ幸いです。以下のリンクから再申請を行ってください。
        </div>
        <div class="photo mb-14">
          <a href="https://pazuru.com/ja/promotions" target="_blank">
            <button
              type="button"
              class="container-flex mail-verify px-3 py-5 rounded-lg text-white text-base" >本人確認書類登録フォーム
              <img class="ml-2.5" src="/assets/img/email/vector.png" alt="">
            </button>
          </a>
        </div>
        <div class="mb-10">
          ご不明点やご質問があれば、お気軽にカスタマーサポートチャットまでお問い合わせください。
        </div>
        <div class="mb-14">
          よろしくお願いいたします。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールは自動送信のため、返信できません。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールに心当たりのない場合は、お手数ですがこのメールを削除してください。
        </div>
      </div>
      <div class="email-conect text-sm text-left text-start px-10 pt-5 pb-5 font-medium rounded-b-md" style="background-color: #F4EAFE;max-width: 640px; min-width: 390px;">
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
      <div class="email-about text-sm font-medium px-10 pt-5 pb-5" style="max-width: 640px; min-width: 390px;">
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
        <div class="text-xs" style="color: #f4eafe;">
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
    border-bottom: 1px solid #CC9DFA;
  }

  .divide-y {
    border-right: 1px solid #F4EAFE;
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

  .mail-verify {
    width: 240px;
    height: 52px;
    background: linear-gradient(#a655f7, #902BF5);
    border: 2px solid #ddbdfc;
  }

  .email-ol {
    float: right;
    position: relative;
    top: -52px;
  }

  ul {
    padding: 20px;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
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
