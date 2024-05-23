<template>
  <PageLayout>
    <div class="sign-up-step2" >
      <div class="basic-info-form py-5">
        <Form>
          <div class="mb-5">
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">メールアドレス</div>
              <div class="flex-63">
                <input
                  v-model="form.email"
                  type="text"
                  class="input-style1 opacity-40"
                  disabled
                />
              </div>
            </div>
            <div class="divide-x1"></div>
            <div class="container-flex1">
              <div class="form-lable1 text-white mx-5 py-24 flex-30">パスワード</div>
              <div class="flex-63">
                <Field
                  name="password"
                  :rules="validatePassword"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.password"
                    type="password"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="password" /></div>
                <div class="my-2 text-base tracking-widest">確認のため、再入力をお願いします。</div>
                <Field
                  name="passwordConform"
                  :rules="validatePasswordConform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.passwordConform"
                    type="password"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="passwordConform" /></div>
              </div>
            </div>
            <div class="divide-x1 my-4"></div>
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">フルネーム（漢字）</div>
              <div class="flex-63">
                <Field
                  name="name"
                  :rules="validateUsername"
                >
                  <input
                    v-model="form.name"
                    type="text"
                    class="input-style1 opacity-40"
                    disabled
                  />
                </Field>
                <div class="text-redDC font-normal">※フリガナを間違えると、引き出しの際の振込ができませんので、正確にご入力ください。</div>
              </div>
            </div>
            <div class="divide-x1 my-4"></div>
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">フルネーム（フリガナ）</div>
              <div class="flex-63">
                <Field
                  name="username"
                  :rules="validateUsername"
                >
                  <input
                    v-model="form.username"
                    type="text"
                    class="input-style1 opacity-40"
                    disabled
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="username" /></div>
              </div>
            </div>
            <div class="divide-x1 my-4"></div>
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">フルネーム（アルファベット）</div>
              <div class="flex-30">
                <Field
                  name="firstName"
                  :rules="validateUsername"
                >
                  <span class="font-bold">名前(FirstName)</span>
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="input-style1 opacity-40"
                    disabled
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="firstName" /></div>
              </div>
              <div class="flex-30 ml-8">
                <Field
                  name="lastName"
                  :rules="validateUsername"
                >
                <span class="font-bold">名字(LastName)</span>
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="input-style1 opacity-40"
                    disabled
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="lastName" /></div>
              </div>
            </div>
          </div>
          <div class="divide-x1"></div>
          <div class="my-5 text-base tracking-widest text-center">アカウントは複数作成できません。</div>
          <div class="text-center pb-5">
            <button
            type="button"
            class="btn-style1 px-12 rounded-lg font-bold" 
            >メール送信
            <img class="float-right clear-right" src="/assets/img/yoxibit/vector.png" alt="">
            </button>
          </div>
        </Form>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive } from 'vue';

const form = reactive ({
  email: 'lion@lucklab.page',
  password: '',
  passwordConform: '',
  name: '王小明',
  username: '王小明',
  firstName: '王',
  lastName: '小明',
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

const validatePassword = (value:any) => {
  if (!value) {
    return '密碼必填';
  }

  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*_-]{4,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入4-20字元，需英文+數字';
  }
  return true;
}

const validatePasswordConform = () => {
  if (form.password !== form.passwordConform) {
    return '密碼不一樣重打吧';
  }

  return true;
}

const validateUsername = (value: any) => {
  // if the field is empty
  if (!value) {
    return '帳號必填';
  }
  // if the field is not a valid email
  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{2,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入2-20字元，需英文+數字';
  }
  // All is good
  return true;
}
</script>

<style lang="scss" scoped>
.sign-up-step2 {

  .basic-info-form {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
  }

  button > img {
    margin-top: 5px;
  }
}
</style>