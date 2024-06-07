<template>
  <PageLayout :loginStatus="false">
    <div class="sign-up-step1" >
      <div class="w-full bg-white shadow-ctz1 p-8 sm:py-6 sm:px-4">
        <div class="text-center font-bold py-5 text-2xl sm:text-xl">新規登録（仮登録）</div>
        <Form>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-56
              text-white
              text-xl
              font-bold
              py-24
              pl-6
              w-[360px]
              sm:bg-white
              sm:h-4
              sm:text-base
              sm:mx-0
              sm:p-0"
            >メールアドレス :</div>
            <div class="flex-1">
              <Field
                name="email"
                :rules="validateEmail"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.email"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3 sm:w-81"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="email" /></div>
              <div class="font-bold mt-2 sm:text-sm">×携帯会社のメールは登録できません（docomo, ezweb, softbank等）</div>
              <div class="my-2 tracking-widest sm:text-sm">確認のため、もう一度入力してください。</div>
              <div>
                <Field
                  name="emailConform"
                  :rules="validateEmailConform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.emailConform"
                    type="text"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                    @input="handleChange"
                  />
                </Field>
              </div>
              <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="emailConform" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0 sm:border-0"></div>
          <div class="my-5 tracking-widest text-center sm:text-sm">アカウントは複数作成できません。</div>
          <div class="text-center pb-5">
            <button
            type="submit"
            class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
            >メール送信
            </button>
          </div>
        </Form>
      </div>
      <div class="mt-14">
        <div class="border-l-4 border-primary pl-4 text-2xl font-bold sm:text-xl">通常5分程度で本登録のメールをお届けしていますが、届かない場合は下記をお試しください。</div>
        <div class="pl-5 mt-4 ml-1 tracking-widest">
          <ul class="list-disc sm:text-sm">
            <li>迷惑メールフォルダをご確認ください。</li>
            <li>携帯アドレスは登録できない場合がございますので、PCメールで再度送信してください。</li>
            <li>「support@yoxibitmail.com」を承認メールリストへ追加して、再度送信してください。</li>
          </ul>
        </div>
      </div>
      <div class="mt-14">
        <div class="border-l-4 border-primary pl-4 text-2xl font-bold sm:text-xl">お困りの場合はカスタマーサポートへご連絡ください。</div>
        <div class="mt-4 tracking-widest sm:text-sm">宛先: <span class="text-primary border-b border-primary">support@yoxibitmail.com</span></div>
        <div class="mt-2 tracking-widest sm:text-sm">件名: 口座開設希望</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
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
