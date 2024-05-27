<template>
  <PageLayout>
    <div class="sign-up-step3" >
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
              <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">パスワード<br><span class="text-redDC text-sm">16～40文字（半角英数）</span></div>
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
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.name"
                    type="text"
                    class="input-style1"
                    placeholder="王小明"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="name" /></div>
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
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.username"
                    type="text"
                    class="input-style1"
                    placeholder="王小明"
                    @input="handleChange"
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
                  v-slot="{ handleChange }"
                >
                  <span class="font-bold">名前(FirstName)</span>
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="input-style1"
                    placeholder="王"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="firstName" /></div>
              </div>
              <div class="flex-30 ml-8">
                <Field
                  name="lastName"
                  :rules="validateUsername"
                  v-slot="{ handleChange }"
                >
                <span class="font-bold">名字(LastName)</span>
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="input-style1"
                    placeholder="小明"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="lastName" /></div>
              </div>
            </div>
            <div class="divide-x1 my-4"></div>
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">フルネーム（アルファベット）</div>
              <div>
                <Field
                  v-model="form.year"
                  name="year"
                  as="select"
                  :rules="validateRequest"
                  class="date-select vector"
                >
                  <option disabled value="">年</option>
                  <option v-for=" n in (100)" :value="year - n">{{ year - n }}</option>
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="year" /></div>
              </div>
              <div>
                <Field
                  v-model="form.month"
                  name="month"
                  as="select"
                  :rules="validateRequest"
                  class="date-select vector"
                >
                  <option disabled value="">月</option>
                  <option v-for=" n in 12" :value="n">{{ n }}</option>
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="month" /></div>
              </div>
              <div>
                <Field
                  v-model="form.day"
                  name="day"
                  as="select"
                  :rules="validateRequest"
                  class="date-select vector"
                >
                  <option disabled value="">日</option>
                  <option v-for=" n in 31" :value="n">{{ n }}</option>
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="day" /></div>
              </div>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1 flex-row">
            <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">郵便番号 （半角）</div>
            <div class="firstPostalCode">
              <Field
                name="firstPostalCode"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.firstPostalCode"
                  type="text"
                  class="input-style1"
                  maxlength="3"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="firstPostalCode" /></div>
            </div>
            <span class="mx-4">-</span>
            <div class="lastPostalCode">
              <Field
                name="lastPostalCode"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.lastPostalCode"
                  type="text"
                  class="input-style1"
                  maxlength="4"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="lastPostalCode" /></div>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1">
            <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">都道府県</div>
            <div class="flex-63">
              <Field
                name="state"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.state"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="state" /></div>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1">
            <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">市区町村</div>
            <div class="flex-63">
              <Field
                name="city"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.city"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="city" /></div>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1">
            <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">町名・番地</div>
            <div class="flex-63">
              <Field
                name="address1"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.address1"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="address1" /></div>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1">
            <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">マンション名など</div>
            <div class="flex-63">
              <Field
                name="address2"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.address2"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="address2" /></div>
            </div>
          </div>
          <div class="divide-x1"></div>
          <div class="container-flex1">
            <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">秘密の質問</div>
            <div class="flex-63">
              <select v-model="form.securityQuestion" class="input-style1 vector">
                <option selected>あなたの最初のペットの名前は？</option>
                <option>あなたの母親の旧姓は？</option>
                <option>あなたの好きな色は？</option>
                <option>あなたの好きなレストランは？</option>
                <option>あなたの生まれはどこですか？</option>
                <option>あなたの最初の学校名は？</option>
              </select>
              <div class="my-2 text-base font-bold">質問の答え</div>
              <Field
                name="securityAnswer"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.securityAnswer"
                  type="password"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="securityAnswer" /></div>
            </div>
          </div>
          <div class="divide-x1"></div>
          <div class="container-flex1 justify-center mb-5">
            <input
              v-model="form.agreeUserAgreement"
              type="checkbox"
            />
            <div class="ml-1 text-base tracking-widest text-center"><a class="text-primary">利用規約</a>に同意します</div>
          </div>
          <div class="text-center pb-5">
            <button
            type="submit"
            class="btn-style1 px-12 rounded-lg font-bold" 
            >登録する
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
  name: '',
  username: '',
  firstName: '',
  lastName: '',
  originYear: '',
  year: '',
  month: '',
  day: '',
  firstPostalCode: '',
  lastPostalCode: '',
  state: '',
  city: '',
  address1: '',
  address2: '',
  securityQuestion: 'あなたの最初のペットの名前は？',
  securityAnswer: '',
  agreeUserAgreement: '',
});

const date = new Date();
const year = date.getFullYear();

const validatePassword = (value: any) => {
  if (!value) {
    return '密碼必填';
  }

  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*_-]{4,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入4-20字元，需英文+數字';
  }
  return true;
}

const validatePasswordConform = (value: any) => {
  if (!value) {
    return '密碼必填';
  }

  if (form.password !== form.passwordConform) {
    return '密碼不一樣重打吧';
  }

  return true;
}

const validateUsername = (value: any) => {

  if (!value) {
    return '帳號必填';
  }

  const regex = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{2,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入2-20字元，需英文+數字';
  }

  return true;
}

const validateRequest = (value: any) => {
  if (!value) {
    return '資料必填';
  }

  return true;
}

</script>

<style lang="scss" scoped>
.sign-up-step3 {

  .basic-info-form {
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
  }

  .firstPostalCode {
    width: 100px;
  }

  .lastPostalCode {
    width: 140px;
  }

  button > img {
    margin-top: 5px;
  }

  input::placeholder {
    color: grayD2;
  }

  .date-select {
    width: 184px;
    height: 56px;
    border: 1px;
    padding: 8px 16px;
    border: 1px solid #D2D2D2;
  }
}
</style>