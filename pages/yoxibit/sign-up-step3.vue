<template>
  <PageLayout :loginStatus="false">
    <div class="sign-up-step3" >
      <div class="p-8 w-full bg-white shadow-ctz1 sm:py-6 sm:px-4">
        <Form>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-[88px]
              text-white
              text-xl
              font-bold
              py-8
              p-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0"
            >メールアドレス</div>
            <div class="flex-1">
              <input
                v-model="form.email"
                type="text"
                class="w-full h-14 py-2 px-4 box-border border border-grayD2 opacity-40 sm:mt-3"
                disabled
              />
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-[188px]
              text-white
              text-xl
              font-bold
              py-16
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0"
            >パスワード<br><span class="text-redDC text-sm sm:font-normal">16～40文字（半角英数）</span></div>
            <div class="flex-1 sm:mt-6">
              <Field
                name="password"
                :rules="validatePassword"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.password"
                  type="password"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="password" /></div>
              <div class="my-2 text-base tracking-widest sm:text-sm sm:mb-0">確認のため、再入力をお願いします。</div>
              <Field
                name="passwordConform"
                :rules="validatePasswordConform"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.passwordConform"
                  type="password"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="passwordConform" /></div>
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0"
            >フルネーム（漢字）</div>
            <div class="flex-1">
              <Field
                name="name"
                :rules="validateUsername"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.name"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 placeholder:text-grayD2 sm:mt-3"
                  placeholder="王小明"
                  @input="handleChange"
                />
              </Field>
              <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="name" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center gap-4 sm:block">
            <div class="
              bg-secondary
              h-[120px]
              text-white
              text-xl
              font-bold
              py-10
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0"
            >フルネーム（フリガナ）</div>
            <div class="flex-1">
              <Field
                name="username"
                :rules="validateUsername"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.username"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 placeholder:text-grayD2 sm:mt-3"
                  placeholder="王小明"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="username" /></div>
              <div class="text-redDC font-normal sm:text-sm">※フリガナを間違えると、引き出しの際の振込ができませんので、正確にご入力ください。</div>
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0
              sm:mb-2"
            >フルネーム（アルファベット）</div>
            <div class="flex items-center gap-4 flex-1 flex-wrap sm:block">
              <div class="flex-1">
                <Field
                  name="firstName"
                  :rules="validateUsername"
                  v-slot="{ handleChange }"
                >
                  <span class="font-bold sm:font-normal">名前(FirstName)</span>
                  <input
                    v-model="form.firstName"
                    type="text"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2 placeholder:text-grayD2"
                    placeholder="王"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="firstName" /></div>
              </div>
              <div class="flex-1 sm:mt-2">
                <Field
                  name="lastName"
                  :rules="validateUsername"
                  v-slot="{ handleChange }"
                >
                <span class="font-bold sm:font-normal">名字(LastName)</span>
                  <input
                    v-model="form.lastName"
                    type="text"
                    class="w-full h-14 py-2 px-4 box-border border border-grayD2 placeholder:text-grayD2"
                    placeholder="小明"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="lastName" /></div>
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0
              sm:mb-2"
            >生年月日</div>
            <div class="flex items-center gap-4 flex-1 flex-wrap">
              <div class="sm:w-[103px]">
                <Field
                  v-model="form.year"
                  name="year"
                  as="select"
                  :rules="validateRequest"
                  class="w-[184px] h-14 border px-2 py-4 border-grayD2 vector sm:w-[103px] sm:mr-2"
                >
                  <option disabled value="">年</option>
                  <option v-for=" n in (100)" :value="year - n">{{ year - n }}</option>
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="year" /></div>
              </div>
              <div class="sm:w-[103px]">
                <Field
                  v-model="form.month"
                  name="month"
                  as="select"
                  :rules="validateRequest"
                  class="w-[184px] h-14 border px-2 py-4 border-grayD2 vector sm:w-[103px] sm:mr-2"
                >
                  <option disabled value="">月</option>
                  <option v-for=" n in 12" :value="n">{{ n }}</option>
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="month" /></div>
              </div>
              <div class="sm:w-[103px]">
                <Field
                  v-model="form.day"
                  name="day"
                  as="select"
                  :rules="validateRequest"
                  class="w-[184px] h-14 border px-2 py-4 border-grayD2 vector sm:w-[103px]"
                >
                  <option disabled value="">日</option>
                  <option v-for=" n in 31" :value="n">{{ n }}</option>
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="day" /></div>
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
              sm:text-base
              sm:p-0
              sm:mb-3"
            >郵便番号 （半角）</div>
            <div class="flex items-center flex-wrap gap-y-2.5">
              <div class="w-[100px] sm:w-20">
                <Field
                  name="firstPostalCode"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.firstPostalCode"
                    type="text"
                    class="w-[100px] h-14 py-2 px-4 box-border border border-grayD2 sm:w-20"
                    maxlength="3"
                    @input="handleChange"
                  />
                </Field>
                <div class="text-red-600 text-xs font-normal"><ErrorMessage name="firstPostalCode" /></div>
              </div>
              <div class="w-4 text-center">-</div>
              <div class="w-36 sm:min-w-24">
                <Field
                  name="lastPostalCode"
                  :rules="validateRequest"
                  v-slot="{ handleChange }"
                >
                  <input
                    v-model="form.lastPostalCode"
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
                  class="bg-secondary text-white px-4 rounded-lg font-bold w-24 h-12 ml-2 hover:bg-gray8E" 
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
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
                  v-model="form.state"
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
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
                  v-model="form.city"
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
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
                  v-model="form.address1"
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
              py-8
              pl-6
              w-[360px]
              sm:w-full
              sm:bg-white
              sm:h-4
              sm:text-secondary
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
                  v-model="form.address2"
                  type="text"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3"
                  @input="handleChange"
                />
              </Field>
              <div class="text-red-600 text-xs font-normal"><ErrorMessage name="address2" /></div>
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
                w-[360px]
                sm:w-full
                sm:bg-white
                sm:h-4
                sm:text-secondary
                sm:text-base
                sm:p-0"
              >秘密の質問</div>
            <div class="flex-1">
              <select v-model="form.securityQuestion" class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:mt-3 vector">
                <option selected>あなたの最初のペットの名前は？</option>
                <option>あなたの母親の旧姓は？</option>
                <option>あなたの好きな色は？</option>
                <option>あなたの好きなレストランは？</option>
                <option>あなたの生まれはどこですか？</option>
                <option>あなたの最初の学校名は？</option>
              </select>
              <div class="my-2 text-base font-bold sm:font-normal">質問の答え</div>
              <Field
                name="securityAnswer"
                :rules="validateRequest"
                v-slot="{ handleChange }"
              >
                <input
                  v-model="form.securityAnswer"
                  type="password"
                  class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                  @input="handleChange"
                />
              </Field>
              <div class="ml-15 text-red-600 text-xs font-normal"><ErrorMessage name="securityAnswer" /></div>
            </div>
          </div>
          <div class="border-b border-grayD2 my-4 sm:border-0"></div>
          <div class="flex items-center justify-center mb-5">
            <input
              v-model="form.agreeUserAgreement"
              type="checkbox"
            />
            <div class="ml-1 text-base tracking-widest text-center"><a class="border-b border-primary text-primary">利用規約</a>に同意します</div>
          </div>
          <div class="text-center pb-5">
            <button
            type="submit"
            class="w-80 h-14 bg-primary black-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
            >登録する
            </button>
          </div>
        </Form>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
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
