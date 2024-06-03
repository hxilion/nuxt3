<template>
  <div class="email photo px-10 pb-10 text-color-1 font-medium" style="background-color: #902BF5;width:100%;min-width: 470px;font-family:'M PLUS 2'">
    <div>
      <img src="https://static4.smr.vc/fce0e306bd7aea9abe7105-desktop.png" alt="">
    </div>
    <div class="email-content" style="max-width: 640px; min-width: 390px;">
      <img src="/assets/img/email/deposit-apply.png" alt="">
      <div class="text-sm text-left text-start p-10" style="background-color: #fff;">
        <div class="mb-10">
          %user_name% 様
        </div>
        <div>
          いつもPazuruをご利用いただきありがとうございます。
        </div>
        <div class="mb-10">
          この度は<span class="font-bold">【%Dep_ Price%】</span>円の入金申請をいただきましたことをお知らせいたします。
        </div>
        <div>
          入金申請は正常に受付されましたので、しばらくお待ちください。
        </div>
        <div class="mb-10">
          入金が完了しましたら、再度メールにてご連絡いたします。
        </div>
        <div>
          Pazuruでは、お客様の満足度向上のために努めております。
        </div>
        <div class="mb-5">
          ご不明な点やご質問などがございましたら、お気軽にお問い合わせください。
        </div>
        <div class="mb-14">
          Pazuruカスタマーサポート
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
        <div class="text-xs" style="color: #f4eafe;">
          <a class="border-l-4 border-primary" href="/">プライバシーポリシー</a>
          <a class="border-l-4 border-primary" href="/">利用規約</a>
          <a class="border-l-4 border-primary" href="/">よくある質問</a>
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

  .border-l-4 border-primary {
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

  .email-ol {
    float: right;
    position: relative;
    top: -52px;
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
  