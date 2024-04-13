<template>
  <div class="photo text-color-1 font-medium" style="background-color: #902BF5;width:100%;font-family:'M PLUS 2'">
    <div>
      <img src="https://static4.smr.vc/fce0e306bd7aea9abe7105-desktop.png" alt="">
    </div>
    <div>
      <img src="/assets/img/email/login-prompt-m.png" alt="">
      <div class="text-sm text-left text-start px-5 py-10" style="background-color: #fff;">
        <div class="mb-10">
          %user_name% 様
        </div>
        <div class="mb-5">
          いつもPazuruをご利用いただき、ありがとうございます。
        </div>
        <div class="mb-10">
          この度、会員様のご利用状況を確認したところ、最終ログインから1ヶ月以上経過していることが判明いたしました。
        </div>
        <div class="mb-10">
          Pazuruでは、ゲームを純粋に楽しみたいプレイヤー様に向けて様々な特典や情報を提供しております。最新のゲームコンテンツやイベント、キャンペーンなどをお見逃しなく！
        </div>
        <div class="mb-10">
          今すぐログインして、Pazuruの魅力を再発見しましょう！
        </div>
        <div class="divide-x mb-10"></div>
        <div class="container-flex mb-10">
          <div class="left"></div>
          <div class="p-2 content">
            <span class="content-text text-2xl font-extrabold">Pazuru特徴</span>
          </div>
          <div class="right"></div>
        </div>
        <div class="grid-button photo mb-10">
          <div >
            <img src="/assets/img/email/info-1.png" alt="">
            <div class="text-center" style="width: 160px;">操作しやすいユーザーインターフェースプラットフォーム</div>
          </div>
          <div>
            <img src="/assets/img/email/info-2.png" alt="">
            <div class="text-center" style="width: 160px;">ライセンス取得済みで安心安全なプレイ</div>
          </div>
          <div>
            <img src="/assets/img/email/info-3.png" alt="">
            <div class="text-center" style="width: 160px;">すぐに勝利を味わえるスピード入出金</div>
          </div>
        </div>
        <div class="mb-5 text-center font-bold">
          今すぐログイン ♪
        </div>
        <div class="photo mb-10">
          <a href="/" target="_blank">
              <button
              type="button"
              class="container-flex mail-verify px-3 py-5 rounded-lg text-white text-base" 
              >ログイン
              <img class="ml-2.5" src="/assets/img/email/vector.png" alt="">
              </button>
          </a>
        </div>
        <div class="mb-14">
          ※ログインには会員IDとパスワードが必要です。お忘れの場合は、こちらから再設定してください。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールは自動送信のため、返信できません。
        </div>
        <div class="text-color-2 text-xs">
          ※このメールに心当たりのない場合は、お手数ですがこのメールを削除してください。
        </div>
      </div>
      <div class="email-conect text-sm text-left text-start p-5 font-medium rounded-b-md" style="background-color: #F4EAFE;">
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
      <div class="email-about text-sm font-medium px-10 pt-5 pb-5">
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
    width: 144px;
    height: 52px;
    background: linear-gradient(#a655f7, #902BF5);
    border: 2px solid #ddbdfc;
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

  .grid-button {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 5px;
  }
</style>
  