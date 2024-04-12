<template>
  <div class="photo text-color-1" style="background-color: #902BF5;width:100%;">
    <div>
      <img src="/assets/img/email/desktop.png" alt="">
    </div>
    <div>
      <img src="/assets/img/email/deposit-completion.png" alt="">
      <div class="text-sm text-left text-start font-medium py-10 px-5" style="background-color: #fff;">
        <div class="mb-10" style="font-family:'M PLUS 2', Sans-serif">
          %user_name% 様
        </div>
        <div class="mb-5" style="font-family:'M PLUS 2', Sans-serif">
          いつもPazuruをご利用いただきありがとうございます。
        </div>
        <div class="mb-10">
          この度は【%Dep_ Price%】円の入金申請につきまして、無事にお客様のPazuru口座に反映されました。是非プレーをお楽しみくださいませ！
        </div>
        <div class="photo mb-10">
          <button
            type="button"
            class="container-flex mail-verify px-3 py-5 rounded-lg text-white text-base" 
            onclick="location.href='/'" target="_blank">ログイン
            <img class="ml-2.5" src="/assets/img/email/vector.png" alt="">
          </button>
        </div>
        <div class="mb-10">
          プレイヤー様の勝利をお祈りしています彡！
        </div>
        <div class="divide-x mb-10"></div>
        <div class="container-flex mb-10">
          <div class="left"></div>
          <div class="p-2 content">
            <span class="content-text text-2xl font-extrabold">人気ゲーム情報</span>
          </div>
          <div class="right"></div>
        </div>
        <div class="photo grid-game">
          <div class="mb-2.5">
            <img src="/assets/img/email/game-1.png" alt="">
            <span class="text-xs leading-10">Quest to the West</span>
          </div>
          <div class="mb-2.5">
            <img src="/assets/img/email/game-2.png" alt="">
            <span class="text-xs leading-10">Triple Juicy Drops</span>
          </div>
          <div class="mb-2.5">
            <img src="/assets/img/email/game-3.png" alt="">
            <span class="text-xs leading-10">Take Olympus</span>
          </div>
          <div class="mb-5">
            <img src="/assets/img/email/game-4.png" alt="">
            <span class="text-xs leading-10">Lost Mystery Chests</span>
          </div>
        </div>
        <div class="photo mb-10">
          <a href="https://pazuru.com/ja/promotions" target="_blank">
            <button
              type="button"
              class="container-flex mail-promotion text-color-1 px-3 py-5 rounded-lg text-white text-base" >
                人気ゲーム
              <img class="ml-2.5" src="/assets/img/email/vector-b.png" alt="">
            </button>
          </a>
        </div>
        <div>
          Pazuruでは、お客様の満足度向上のために努めております。
        </div>
        <div class="mb-5">
          ご不明な点やご質問などがございましたら、お気軽にお問い合わせください。
        </div>
        <div class="mb-10">
          Pazuruカスタマーサポート
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
    grid-template-columns: repeat(1, 1fr);
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
    width: 180px;
    height: 52px;
    background: linear-gradient(#a655f7, #902BF5);
    border: 2px solid #ddbdfc;
  }

  .mail-promotion {
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

  .contact-us {
    background-color: #f4eafe;
  }

  .email-ol {
    float: right;
    position: relative;top: -52px;
  }
</style>
