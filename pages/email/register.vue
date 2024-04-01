<template>
  <head>
    <meta charset="UTF-8">
    <meta name="register" content="width=device-width, initial-scale=1.0">
    <title>Your Title</title>
    <!-- 引入 Tailwind CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css" rel="stylesheet">
  </head>
  <div class="photo flex flex-col justify-center h-full px-10 pb-10 text-color-1" style="background-color: #902BF5;">
    <div>
      <img src="/assets/img/desktop.png" alt="">
    </div>
    <div>
      <img src="/assets/img/mail-cover.png" alt="">
      <div class="text-sm text-left text-start font-medium p-10" style="background-color: #fff;width: 640px;">
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
          <img src="/assets/img/purple.png" alt="">
        </div>
        <div class="mb-5">
          メールアドレスの確認が完了すると、Pazuruの会員として、様々なゲームをご遊戯いただけます。
        </div>
        <div class="mb-10">
          ※このURLは24時間以内に有効です。期限が過ぎた場合は、再度登録手続きを行ってください。
        </div>
        <div class="divide mb-10">
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
          <img src="/assets/img/yellow.png" alt="">
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
      <div class="text-sm text-left text-start font-medium px-10 pt-5 pb-5 rounded-b-md" style="background-color: #F4EAFE;width: 640px;">
        <div class="photo mb-10" style="float: right;position: relative;top: -52px;">
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
      <div class="text-sm text-left text-start font-medium px-10 pt-5 pb-5 rounded-b-md" style="width: 640px;">
        <div class="flex flex-nowrap">
          <img src="/assets/img/facebook.png" alt="">
          <img src="/assets/img/instagram.png" alt="">
          <img src="/assets/img/twitter.png" alt="">
          <img src="/assets/img/youtube.png" alt="">
          <img src="/assets/img/tiktok.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  .photo {
    text-align: -webkit-center;
  }

  .divide {
    border-bottom: 1px solid #CC9DFA;
  }

  .text-color-1 {
    color: #131416;
  }
  .text-color-2 {
    color: #727478;
  }

  .social-media {
    text-align: -webkit-right;
  }
</style>
