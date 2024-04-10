<template>
  <div class="email photo px-10 pb-10 text-color-1" style="background-color: #902BF5;width:100%;min-width: 470px;">
    <div>
      <img src="/assets/img/desktop.png" alt="">
    </div>
    <div class="email-content" style="max-width: 640px; min-width: 390px;">
      <img src="/assets/img/mail-cover.png" alt="">
      <div class="text-sm text-left text-start font-medium p-10" style="background-color: #fff;">
        <div class="mb-10" style="font-family:'M PLUS 2', Sans-serif">
          %user_name% 様
        </div>
        <div style="font-family:'M PLUS 2', Sans-serif">
          この度は、Pazuruにご登録いただき、誠にありがとうございます！
        </div>
        <div class="mb-5">
          このメールは、ご登録時に入力されたメールアドレスが正しいかどうかを確認するためにお送りしています。
        </div>
        <div class="mb-10">
          以下のURLをクリックして、メールアドレスの認証を完了してください。
        </div>
        <div class="photo mb-10">
          <button
            type="button"
            class="mail-verify px-3 py-5 rounded-lg text-white text-base" 
            onclick="location.href='/'" target="_blank">メール認証
            <img class="ml-2.5" src="/assets/img/vector.png" alt="">
          </button>
        </div>
        <div class="mb-5">
          メールアドレスの確認が完了すると、Pazuruの会員として、様々なゲームをご遊戯いただけます。
        </div>
        <div class="mb-10">
          ※このURLは24時間以内に有効です。期限が過ぎた場合は、再度登録手続きを行ってください。
        </div>
        <div class="divide-x mb-10">
        </div>
        <div class="photo mb-10">
          <img src="/assets/img/title-a.png" alt="">
        </div>
        <div class="photo mb-10">
          <img src="/assets/img/banner.png" alt="">
        </div>
        <div class="mb-10">
          Pazuruでは会員様にゲームを最大限お楽しみいただけるよう、 登録してすぐご利用可能なボーナスをご用意しております。 是非ご活用ください♪
        </div>
        <div class="photo mb-10">
          <a href="https://pazuru.com/ja/promotions" target="_blank">
            <button
              type="button"
              class="mail-promotion text-color-1 px-3 py-5 rounded-lg text-white text-base" >
                プロモーション
            </button>
          </a>
        </div>
        <div class="mb-10">
          今後とも、Pazuruをよろしくお願いいたします。
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
          <img src="/assets/img/email-ol.png" alt="">
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
        <div class="container">
            <div class="image-wrapper">
              <img src="/assets/img/facebook.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/instagram.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/twitter.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/youtube.png" alt="">
            </div>
            <div class="image-wrapper">
              <img src="/assets/img/tiktok.png" alt="">
            </div>
          </div>
        <div class="photo my-10">
          <img src="/assets/img/pazuru-logo-white.png" alt="">
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

  .container {
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
    display: flex;
    justify-content: center; /* 將圖片水平置中 */
    align-items: center; /* 將圖片垂直置中 */
    width: 180px;
    height: 52px;
    background: linear-gradient(#a655f7, #902BF5);
    border: 2px solid #ddbdfc;
  }

  .mail-promotion {
    display: flex;
    justify-content: center; /* 將圖片水平置中 */
    align-items: center; /* 將圖片垂直置中 */
    width: 180px;
    height: 52px;
    font-weight: 700;
    background: linear-gradient(90deg, #FFE555 0%, #FFD801 100%);
    border: 2px solid #FFED8A;
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
