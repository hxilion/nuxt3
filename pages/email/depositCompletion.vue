<template>
  <div class="email photo px-10 pb-10 text-color-1" style="background-color: #902BF5;width:100%;min-width: 470px;">
    <div>
      <img src="/assets/img/desktop.png" alt="">
    </div>
    <div class="email-content" style="max-width: 640px; min-width: 390px;">
      <img src="/assets/img/deposit-completion.png" alt="">
      <div class="text-sm text-left text-start font-medium p-10" style="background-color: #fff;">
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
            class="mail-verify px-3 py-5 rounded-lg text-white text-base" 
            onclick="location.href='/'" target="_blank">ログイン
            <img class="ml-2.5" src="/assets/img/vector.png" alt="">
          </button>
        </div>
        <div class="mb-10">
          プレイヤー様の勝利をお祈りしています彡！
        </div>
        <div class="divide-x mb-10"></div>
        <div class="title mb-5">
          <div class='left'></div>
          <div class="p-2 content">
            <span class="content-text text-2xl font-extrabold">人気ゲーム情報</span>
          </div>
          <div class='right'></div>
        </div>
        <div class="grid-game">
          <div class="photo mb-5">
            <img src="/assets/img/game-1.png" alt="">
            <span class="leading-10">Quest to the West</span>
          </div>
          <div class="photo mb-5">
            <img src="/assets/img/game-2.png" alt="">
            <span class="leading-10">Triple Juicy Drops</span>
          </div>
          <div class="photo mb-5">
            <img src="/assets/img/game-3.png" alt="">
            <span class="leading-10">Take Olympus</span>
          </div>
          <div class="photo mb-5">
            <img src="/assets/img/game-4.png" alt="">
            <span class="leading-10">Lost Mystery Chests</span>
          </div>
        </div>
        <div class="photo mb-10">
          <a href="https://pazuru.com/ja/promotions" target="_blank">
            <button
              type="button"
              class="mail-promotion text-color-1 px-3 py-5 rounded-lg text-white text-base" >
                人気ゲーム
              <img class="ml-2.5" src="/assets/img/vector-b.png" alt="">
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
      <div class="email-conect text-sm text-left text-start px-10 pt-5 pb-5 font-medium rounded-b-md" style="background-color: #F4EAFE;max-width: 640px; min-width: 390px;">
        <div class="photo" style="float: right;position: relative;top: -52px;">
          <img src="/assets/img/email-ol.png" alt="">
        </div>
        <div class="text-color-1 text-xs font-bold mb-2.5">
          Pazuru運営事務局
        </div>
        <div class="text-color-1 text-xs mb-2.5">
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

  .title {
    display: flex;
    justify-content: center; /* 將圖片水平置中 */
    align-items: center; /* 將圖片垂直置中 */
  }

  .content {
    height: 48px;
    min-width: 148px;
    text-align: center;
    line-height: initial;
    background: linear-gradient(90deg, #ECD9FF 0%, #DDBDFC 100%);
  }

  .content-text {
    background: linear-gradient(90deg, #8327DF 0%, #3C1267 100%);
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
    background-color: #ECD9FF;
    border-right: 24px solid transparent;
    border-left: 12px solid rgb(255, 255, 255);
    border-top: 24px solid transparent;
    border-bottom: 24px solid transparent;
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
