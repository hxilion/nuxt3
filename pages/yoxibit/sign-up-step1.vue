<template>
  <PageLayout>
    <div class="sign-up-step1" >
      <div class="email-form">
        <div class="text-center font-bold py-4">新規登録（仮登録）</div>
        <Form>
          <div class="container-flex1 mb-5">
            <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">メールアドレス :</div>
            <div class="flex-63">
              <Field
                name="email"
                :rules="validateEmail"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.email"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="email" /></div>
              <div class="font-bold mt-2 ml-5 text-base">×携帯会社のメールは登録できません（docomo, ezweb, softbank等）</div>
              <div class="my-2 ml-5 text-base tracking-widest">確認のため、もう一度入力してください。</div>
              <div>
                <Field
                  name="emailConform"
                  :rules="validateEmailConform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.emailConform"
                    type="text"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
              </div>
              <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="emailConform" /></div>
            </div>
          </div>
          <div class="divide-x1"></div>
          <div class="my-5 text-base tracking-widest text-center">アカウントは複数作成できません。</div>
          <div class="text-center pb-5">
            <button
            type="button"
            class="btn-style1 px-12 rounded-lg font-bold" 
            >メール送信
            <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
            </button>
          </div>
        </Form>
      </div>
      <div class="mt-14">
        <div class="divide-y pl-4 text-2xl font-bold">通常5分程度で本登録のメールをお届けしていますが、届かない場合は下記をお試しください。</div>
        <div class="pl-5 mt-4 ml-1 tracking-widest">
          <ul>
            <li>迷惑メールフォルダをご確認ください。</li>
            <li>携帯アドレスは登録できない場合がございますので、PCメールで再度送信してください。</li>
            <li>「support@yoxibitmail.com」を承認メールリストへ追加して、再度送信してください。</li>
          </ul>
        </div>
      </div>
      <div class="mt-14">
        <div class="divide-y pl-4 text-2xl font-bold">お困りの場合はカスタマーサポートへご連絡ください。</div>
        <div class="pl-5 mt-4 ml-1 tracking-widest">宛先: <span class="text-primary divide-x2">support@yoxibitmail.com</span></div>
        <div class="pl-5 mt-4 ml-1 tracking-widest">件名: 口座開設希望</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive } from 'vue';

const form = reactive ({
  email: '',
  emailConform: '',
});

const validateEmail = (value: any) => {
  if (!value) {
    return '信箱必填';
  }

  const regex =  /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
  if (!regex.test(value)) {
    return '格式錯誤';
  }

  return true;
}

const validateEmailConform = () => {
  if (form.email !== form.emailConform) {
    return '信箱不一樣重打吧';
  }

  return true;
}
</script>

<style lang="scss" scoped>
.sign-up-step1 {

  .email-form {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
  }

  button > img {
    margin-top: 5px;
  }

  li {
    list-style-type: disc;
  }
}
</style>