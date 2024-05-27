<template>
  <div class="registration">
    <div class="first-block bg-gray96 py-4">
      <div class="max-w-screen-xl mx-auto px-4 py-4">
        <div class="grid-btn1">
          <a href="#card1">
            <button
              type="button"
              class="btn-style2 px-5 rounded-lg font-bold mb-5 mr-2" 
            >登録情報変更
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-down.png" alt="">
            </button>
          </a>
          <a href="#card2">
            <button
              type="button"
              class="btn-style2 px-5 rounded-lg font-bold" 
            >メールアドレス変更
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-down.png" alt="">
            </button>
          </a>
        </div>
        <div class="grid-btn2">
          <a href="#card3">
            <button
              type="button"
              class="btn-style2 px-5 rounded-lg font-bold" 
            >パスワード変更
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-down.png" alt="">
            </button>
          </a>
          <a href="#card4">
            <button
              type="button"
              class="btn-style2 px-5 rounded-lg font-bold" 
            >秘密の質問変更
            <img class="float-right clear-right" src="/assets/img/yoxibit/vector-down.png" alt="">
            </button>
          </a>
          <a href="#card5">
            <button
              type="button"
              class="btn-style2 px-5 rounded-lg font-bold" 
            >ワンタイムパスワード変更
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-down.png" alt="">
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <PageLayout>
    <div class="registration-info">
      <div id="card1" class="card">
        <div class="divide-y font-bold text-2xl pl-10 mb-10">登録情報変更</div>
        <Form>
          <div class="container-flex1 flex-row">
            <div class="form-lable2 text-white mr-5 py-8 pl-4 flex-30">郵便番号 （半角）</div>
            <div class="firstPostalCode">
              <Field
                name="firstPostalCode"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.firstPostalCode"
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
                  v-model="formAdress.lastPostalCode"
                  type="text"
                  class="input-style1"
                  maxlength="4"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="lastPostalCode" /></div>
            </div>
            <div>
              <button
                type="submit"
                class="bg-secondary text-white px-4 rounded-lg font-bold w-24 h-12 ml-5" 
              >住所取得
              </button>
            </div>
          </div>
          <div class="divide-x1 my-4"></div>
          <div class="container-flex1">
            <div class="form-lable2 text-white mr-5 py-8 pl-4 flex-30">都道府県</div>
            <div class="flex-63">
              <Field
                name="state"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.state"
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
            <div class="form-lable2 text-white mr-5 py-8 pl-4 flex-30">市区町村</div>
            <div class="flex-63">
              <Field
                name="city"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.city"
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
            <div class="form-lable2 text-white mr-5 py-8 pl-4 flex-30">町名・番地</div>
            <div class="flex-63">
              <Field
                name="address1"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.address1"
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
            <div class="form-lable2 text-white mr-5 py-8 pl-4 flex-30">マンション名など</div>
            <div class="flex-63">
              <Field
                name="address2"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.address2"
                  type="text"
                  class="input-style1"
                  @input="handleChange"
                />
              </Field>
              <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="address2" /></div>
            </div>
          </div>
          <div class="divide-x1"></div>
          <div class="ml-5 mb-5">※お名前の変更は出来ません。苗字などのご変更の際は<span class="text-primary divide-x2">お問合せフォーム</span>からお願いします</div>
            <div class="text-center pb-5">
              <button
              type="submit"
              class="btn-style1 px-12 rounded-lg font-bold" 
              >更新
                <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
              </button>
            </div>
        </Form>
      </div>
      <div id="card2" class="card">
        <div class="divide-y font-bold text-2xl pl-10 mb-10">メールアドレス変更</div>
        <Form>
          <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">メールアドレス</div>
              <div class="flex-63">
                {{ formEmai.email }}
              </div>
            </div>
            <div class="divide-x1"></div>
            <div class="container-flex1">
              <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">現在のメールアドレス</div>
              <div class="flex-63">
                <Field
                  name="newEmail"
                  :rules="validateEmail"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formEmai.newEmail"
                    type="text"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="newEmail" /></div>
                <div class="my-2 text-base tracking-widest">確認のため、もう一度入力してください。</div>
                <Field
                  name="newEmailConform"
                  :rules="validateEmailonform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formEmai.newEmailConform"
                    type="text"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="newEmailConform" /></div>
              </div>
            </div>
            <div class="divide-x1"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="btn-style1 px-12 rounded-lg font-bold" 
                >更新
                  <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card3" class="card">
        <div class="divide-y font-bold text-2xl pl-10 mb-10">パスワード変更</div>
        <Form>
          <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">現在のパスワード</div>
              <div class="flex-63">
                <input
                  v-model="formPassword.password"
                  type="password"
                  class="input-style1 opacity-40"
                  disabled
                />
              </div>
            </div>
            <div class="divide-x1"></div>
            <div class="container-flex1">
              <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">現在のメールアドレス</div>
              <div class="flex-63">
                <Field
                  name="newPassword"
                  :rules="validatePassword"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formPassword.newPassword"
                    type="password"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="newPassword" /></div>
                <div class="my-2 text-base tracking-widest">確認のため、もう一度入力してください。</div>
                <Field
                  name="newPasswordConform"
                  :rules="validatePasswordConform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formPassword.newPasswordConform"
                    type="password"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
                <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="newPasswordConform" /></div>
              </div>
            </div>
            <div class="divide-x1"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="btn-style1 px-12 rounded-lg font-bold" 
                >更新
                  <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card4" class="card">
        <div class="divide-y font-bold text-2xl pl-10 mb-10">秘密の質問変更</div>
        <Form>
          <div class="container-flex1">
              <div class="form-lable3 text-white mx-5 py-14 pl-4 flex-30">現在の質問</div>
              <div class="flex-63">
                <div class="font-bold">質問</div>
                <div class="mb-2">{{ formSecurity.securityQuestion }}</div>
                <div class="font-bold">答え</div>
                <div>{{ formSecurity.securityAnswer }}</div>
              </div>
            </div>
            <div class="divide-x1"></div>
            <div class="container-flex1">
              <div class="form-lable1 text-white mx-5 py-24 pl-4 flex-30">新しい質問</div>
              <div class="flex-63">
                <div class="font-bold">質問</div>
                <select v-model="formSecurity.newSecurityQuestion" class="input-style1 vector">
                  <option selected>あなたの最初のペットの名前は？</option>
                  <option>あなたの母親の旧姓は？</option>
                  <option>あなたの好きな色は？</option>
                  <option>あなたの好きなレストランは？</option>
                  <option>あなたの生まれはどこですか？</option>
                  <option>あなたの最初の学校名は？</option>
                </select>
                <div class="my-2 text-base font-bold">答え</div>
                <Field
                  name="securityAnswer"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formSecurity.newSecurityAnswer"
                    type="password"
                    class="input-style1"
                    @input="handleChange"
                  />
                </Field>
              <div class="error-msg ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="securityAnswer" /></div>
              </div>
            </div>
            <div class="divide-x1"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="btn-style1 px-12 rounded-lg font-bold" 
                >更新
                  <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card5" class="card">
        <div class="divide-y font-bold text-2xl pl-10 mb-10">ワンタイムパスワード設定変更</div>
        <Form>
          <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">現在の設定</div>
              <div class="flex-63">
                {{ formSetting.setting }}
              </div>
            </div>
            <div class="divide-x1"></div>
            <div class="container-flex1">
              <div class="form-lable2 text-white mx-5 py-8 pl-4 flex-30">新しい設定</div>
              <div class="flex-63">
                <select v-model="formSetting.newSetting" class="input-style1 vector">
                  <option selected>設定する</option>
                </select>
              </div>
            </div>
            <div class="divide-x1"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="btn-style1 px-12 rounded-lg font-bold" 
                >更新
                  <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
                </button>
              </div>
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

const formAdress = reactive ({
  firstPostalCode: '',
  lastPostalCode: '',
  state: '',
  city: '',
  address1: '',
  address2: '',
});

const formEmai = reactive ({
  email: 'lion@luckylab,page',
  newEmail: '',
  newEmailConform: '',
});

const formPassword = reactive ({
  password: 'qwer1234',
  newPassword: '',
  newPasswordConform: '',
});

const formSecurity = reactive ({
  securityQuestion: 'あなたの最初のペットの名前は？',
  securityAnswer: '123',
  newSecurityQuestion: 'あなたの最初のペットの名前は？',
  newSecurityAnswer: '',
});

const formSetting = reactive ({
  setting: '設定しない',
  newSetting: '設定する',
});

const validateRequest = (value: any) => {
  if (!value) {
    return '資料必填';
  }

  return true;
}

const validateEmail = (value: any) => {
  if (!value) {
    return '信箱必填';
  }

  const regex = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9!@#$%^&*_-]{4,20}$/;
  if (!regex.test(value)) {
    return '格式錯誤，輸入4-20字元，需英文+數字';
  }
  return true;
}

const validateEmailonform = (value: any) => {
  if (!value) {
    return '信箱必填';
  }

  if (formEmai.newEmail !== formEmai.newEmailConform) {
    return '信箱不一樣重打吧';
  }

  return true;
}

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

  if (formPassword.password !== formPassword.newPasswordConform) {
    return '密碼不一樣重打吧';
  }

  return true;
}

</script>

<style lang="scss" scoped>
.registration {

  .first-block {
    width: 100%;
    height: 208px;
  }

  .grid-btn1 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  }

  .grid-btn2 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
  }

  .title {
    font-size: 32px;
  }

  button > img {
    margin-top: 6px;
  }
}

.registration-info {

  .card {
    width: 100%;
    background-color: #fff;
    padding: 32px;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
    margin-bottom: 80px;
  }

  button > img {
    margin-top: 6px;
  }
}
</style>
