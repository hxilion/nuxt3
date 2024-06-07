<template>
  <Nav :isLoggedIn="true" :pathTitle="'登録情報'" :pathName="'REGISTRATION INFORMATION'"/>
  <div class="registration-info">
    <div class="w-full h-52 bg-gray96 py-8 px-4 sm:h-[408px]">
      <div class="max-w-[1184px] mx-auto">
        <div class="grid grid-cols-2 gap-x-2.5 sm:grid-cols-1 gap-y-2.5 mb-3">
          <a href="#card1">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-5 rounded-lg font-bold hover:opacity-50" 
            >登録情報変更
            </button>
          </a>
          <a href="#card2">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-5 rounded-lg font-bold hover:opacity-50" 
            >メールアドレス変更
            </button>
          </a>
        </div>
        <div class="grid grid-cols-3 gap-x-2.5 sm:grid-cols-1 gap-y-2.5">
          <a href="#card3">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-5 rounded-lg font-bold hover:opacity-50" 
            >パスワード変更
            </button>
          </a>
          <a href="#card4">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-5 rounded-lg font-bold hover:opacity-50" 
            >秘密の質問変更
            </button>
          </a>
          <a href="#card5">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-5 rounded-lg font-bold hover:opacity-50" 
            >ワンタイムパスワード変更
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <PageLayerGray>
    <div class="registration-info">
      <div id="card1" class="bg-white p-4 shadow-ctz1 mb-20 sm:p-4">
        <div class="border-l-4 border-primary font-bold text-2xl pl-4 mb-10 sm:text-xl">登録情報変更</div>
        <Form>
          <div class="flex items-center gap-4 flex-wrap sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0
              sm:mb-3"
            >郵便番号 （半角）</div>
            <div class="flex items-center flex-wrap gap-y-4">
              <div class="w-[6.25rem] sm:w-20">
                <Field
                  name="firstPostalCode"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formAdress.firstPostalCode"
                    type="text"
                    class="w-[6.25rem] h-14 py-2 px-4 box-border border border-grayD2 sm:w-20"
                    maxlength="3"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="firstPostalCode" /></div>
              </div>
              <div class="w-4 text-center">-</div>
              <div class="w-36 mr-3  sm:min-w-24">
                <Field
                  name="lastPostalCode"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formAdress.lastPostalCode"
                    type="text"
                    class="w-36 h-14 py-2 px-4 box-border border border-grayD2 sm:min-w-24"
                    maxlength="4"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="lastPostalCode" /></div>
              </div>
              <div>
                <button
                  type="submit"
                  class="bg-secondary text-white px-4 rounded-lg font-bold w-24 h-12 hover:bg-gray8E" 
                >住所取得
                </button>
              </div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
            >都道府県</div>
            <div class="flex-1">
              <Field
                name="state"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.state"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="state" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
            >市区町村</div>
            <div class="flex-1">
              <Field
                name="city"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.city"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="city" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
            >町名・番地</div>
            <div class="flex-1">
              <Field
                name="address1"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.address1"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="address1" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
            >マンション名など</div>
            <div class="flex-1">
              <Field
                name="address2"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="formAdress.address2"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="address2" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="mb-5 sm:text-sm">※お名前の変更は出来ません。苗字などのご変更の際は<span class="text-primary border-b border-primary">お問合せフォーム</span>からお願いします</div>
            <div class="text-center pb-5">
              <button
              type="submit"
              class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
              >更新
              </button>
            </div>
        </Form>
      </div>
      <div id="card2" class="bg-white p-4 shadow-ctz1 mb-20">
        <div class="border-l-4 border-primary font-bold text-2xl pl-4 mb-10 sm:text-xl">メールアドレス変更</div>
        <Form>
          <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                h-22
                text-white
                text-xl
                font-bold
                p-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
              >現在のメールアドレス</div>
              <div class="flex-1 sm:mt-3 sm:text-sm">
                {{ formEmai.email }}
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                h-56
                text-white
                text-xl
                font-bold
                py-24
                pl-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
                >新しいメールアドレス</div>
              <div class="flex-1">
                <Field
                  name="newEmail"
                  :rules="validateEmail"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formEmai.newEmail"
                    type="text"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="newEmail" /></div>
                <div class="my-2 text-base tracking-widest sm:text-sm">確認のため、もう一度入力してください。</div>
                <Field
                  name="newEmailConform"
                  :rules="validateEmailonform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formEmai.newEmailConform"
                    type="text"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                    @input="handleChange"
                  />
                </Field>
                <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="newEmailConform" /></div>
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
                >更新
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card3" class="bg-white p-4 shadow-ctz1 mb-20">
        <div class="border-l-4 border-primary font-bold text-2xl pl-4 mb-10 sm:text-xl">パスワード変更</div>
        <Form>
          <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                h-22
                text-white
                text-xl
                font-bold
                p-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
              >現在のパスワード</div>
              <div class="flex-1">
                <input
                  v-model="formPassword.password"
                  type="password"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3 opacity-40"
                  disabled
                />
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                h-56
                text-white
                text-xl
                font-bold
                py-24
                pl-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
              >新しいパスワード<div class="text-sm">16～40文字（半角英数）</div></div>
              <div class="flex-1">
                <Field
                  name="newPassword"
                  :rules="validatePassword"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formPassword.newPassword"
                    type="password"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="newPassword" /></div>
                <div class="my-2 text-base tracking-widest">確認のため、もう一度入力してください。</div>
                <Field
                  name="newPasswordConform"
                  :rules="validatePasswordConform"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formPassword.newPasswordConform"
                    type="password"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                    @input="handleChange"
                  />
                </Field>
                <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="newPasswordConform" /></div>
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
                >更新
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card4" class="bg-white p-4 shadow-ctz1 mb-20">
        <div class="border-l-4 border-primary font-bold text-2xl pl-4 mb-10 sm:text-xl">秘密の質問変更</div>
        <Form>
          <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                w-90
                h-35
                text-white
                font-bold
                py-14
                pl-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
                >現在の質問</div>
              <div class="flex-1">
                <div class="font-bold sm:font-normal mt-3">質問</div>
                <div class="mb-2">{{ formSecurity.securityQuestion }}</div>
                <div class="font-bold sm:font-normal mt-3">答え</div>
                <div>{{ formSecurity.securityAnswer }}</div>
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div class="flex items-center gap-4 sm:block">
              <div class="
                bg-secondary
                h-56
                text-white
                text-xl
                font-bold
                py-24
                pl-6
                w-[22.5rem]
                sm:w-full
                sm:bg-white
                sm:text-secondary
                sm:h-4
                sm:text-base
                sm:p-0"
              >新しい質問</div>
              <div class="flex-1">
                <div class="font-bold sm:font-normal mt-3">質問</div>
                <select v-model="formSecurity.newSecurityQuestion" class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-2 vector">
                  <option selected>あなたの最初のペットの名前は？</option>
                  <option>あなたの母親の旧姓は？</option>
                  <option>あなたの好きな色は？</option>
                  <option>あなたの好きなレストランは？</option>
                  <option>あなたの生まれはどこですか？</option>
                  <option>あなたの最初の学校名は？</option>
                </select>
                <div class="my-2 text-base font-bold sm:font-normal">答え</div>
                <Field
                  name="securityAnswer"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="formSecurity.newSecurityAnswer"
                    type="password"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                    @input="handleChange"
                  />
                </Field>
              <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="securityAnswer" /></div>
              </div>
            </div>
            <div class="border-b border-grayD2 my-4 sm:border-0"></div>
            <div>
              <div class="text-center pb-5">
                <button
                type="submit"
                class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
                >更新
                </button>
              </div>
            </div>
        </Form>
      </div>
      <div id="card5" class="bg-white p-4 shadow-ctz1 mb-20">
        <div class="border-l-4 border-primary font-bold text-2xl pl-4 mb-10 sm:text-xl">ワンタイムパスワード設定変更</div>
        <Form>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
              >現在の設定
            </div>
            <div class="flex-1 mt-3">
              {{ formSetting.setting }}
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-22
              text-white
              text-xl
              font-bold
              p-6
              w-[22.5rem]
              sm:w-full
              sm:bg-white
              sm:text-secondary
              sm:h-4
              sm:text-base
              sm:p-0"
            >新しい設定</div>
            <div class="flex-1">
              <select v-model="formSetting.newSetting" class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3 vector">
                <option selected>設定する</option>
              </select>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
        </Form>
        <div class="text-center pb-5">
          <button
            type="button"
            class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]"
            @click="showDialog = true"
            >更新
          </button>
        </div>
      </div>
    </div>
  </PageLayerGray>
  <Footer />
  <Dialog
    :modelValue="showDialog"
    title="変更を受け付けました"
    @update:modelValue="updateDialogValue"
    @update:modelButtonValue="true"
  ></Dialog>
</template>

<script setup lang="ts">
import PageLayerGray from '@/components/yoxibit/pageLayerGray.vue';
import Dialog from '@/components/yoxibit/dialog.vue';
import Nav from '@/components/yoxibit/nav.vue';
import Footer from '@/components/yoxibit/footer.vue';
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

const showDialog = ref(false);

const updateDialogValue = (value: boolean) => {
  showDialog.value = value;
};

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
