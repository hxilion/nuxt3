<template>
  <div class="photo text-color-1 font-medium" style="background-color: #902BF5;width:100%;font-family:'M PLUS 2';">
    <div>
      <img src="/assets/img/email/desktop.png" alt="">
    </div>
    <div>
      <img src="/assets/img/email/mail-cover-m.png" alt="">
      <div class="text-sm text-left text-start py-10 px-5" style="background-color: #fff;">
        <div class="mb-10">
          %user_name% 様
        </div>
        <div>
          この度は、Pazuruにご登録いただき、誠にありがとうございます！
        </div>
        <div class="mb-5">
          このメールは、ご登録時に入力されたメールアドレスが正しいかどうかを確認するためにお送りしています。
        </div>
        <div class="mb-10">
          以下のURLをクリックして、メールアドレスの認証を完了してください。
        </div>
        <div class="photo mb-10">
          <a href="/" target="_blank">
            <button
              type="button"
              class="container-flex mail-verify px-3 py-5 rounded-lg text-white text-base" 
              >メール認証
              <img class="ml-2.5" src="/assets/img/email/vector.png" alt="">
            </button>
          </a>
        </div>
        <div class="mb-5">
          メールアドレスの確認が完了すると、Pazuruの会員として、様々なゲームをご遊戯いただけます。
        </div>
        <div class="mb-10">
          ※このURLは24時間以内に有効です。期限が過ぎた場合は、再度登録手続きを行ってください。
        </div>
        <div class="divide-x mb-10">
        </div>
        <div class="container-flex mb-10">
          <div class="left"></div>
          <div class="p-2 content">
            <span class="content-text text-2xl font-extrabold">おすすめプロモーション ♪</span>
          </div>
          <div class="right"></div>
        </div>
        <div class="photo mb-10">
          <img src="/assets/img/email/banner.png" alt="">
        </div>
        <div class="mb-10">
          Pazuruでは会員様にゲームを最大限お楽しみいただけるよう、 登録してすぐご利用可能なボーナスをご用意しております。 是非ご活用ください♪
        </div>
        <div class="photo mb-10">
          <a href="https://pazuru.com/ja/promotions" target="_blank">
            <button
              type="button"
              class="container-flex mail-promotion text-color-1 px-3 py-5 rounded-lg text-white text-base" >
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
      <div class="text-sm font-medium px-10 pt-5 pb-5">
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
    width: 180px;
    height: 52px;
    background: linear-gradient(#a655f7, #902BF5);
    border: 2px solid #ddbdfc;
  }

  .mail-promotion {
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
    border-left: 24px solid transparent;
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }

  .left {
    width: 0;
    height: 0;
    background-color: #ecd9ff;
    border-right: 24px solid transparent;
    border-left: 12px solid rgb(255, 255, 255);
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
  }
</style>
  