<template>
  <PageLayout :loginStatus="true">
    <div class="redemption-application" >
      <div class="text-w[32px] font-bold mb-4 block-vector-left">換金の所要時間</div>
      <div class="w-full bg-white p-4 shadow-ctz1 mb-20">
        <Form>
          <table class="w-full mb-10 sm:text-sm">
            <tbody>
              <tr>
                <td class="w-80 text-xl font-bold bg-grayF8 sm:text-sm sm:min-w-[88px]">残高</td>
                <td>100.57pt</td>
              </tr>
              <tr>
                <td class="w-80 text-xl font-bold bg-grayF8 sm:text-sm sm:min-w-[88px]">換金額</td>
                <td>
                  <Field
                    name="amount"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.amount"
                      type="text"
                      class="w-[400px] h-14 px-4 py-2 box-border border border-grayD2 sm:w-48"
                      @input="handleChange"
                    /><span class="text-sm ml-1">pt</span>
                  </Field>
                  <div class="text-red-600 text-xs font-normal"><ErrorMessage name="amount" /></div>
                </td>
              </tr>
              <tr v-if="isAccount">
                <td class="w-80 text-xl font-bold bg-grayF8 sm:text-sm sm:min-w-[88px]">口座選択</td>
                <td>
                  <div>
                    <input type="radio" id="bank1" name="contact" :value="form.bank1" class="mr-3" />
                    <label for="bank1">三井住友銀行</label>
                  </div>
                  <div>
                    <input type="radio" id="bank2" name="contact" :value="form.bank2" class="mr-3" />
                    <label for="bank2">りそな銀行</label>
                  </div>
                  <div>
                    <input type="radio" id="bank3" name="contact" :value="form.bank3" class="mr-3" />
                    <label for="bank3">三菱東京UFJ銀行</label>
                  </div>
                  <div>
                    <button
                      type="button"
                      class="rounded-lg font-bold text-white bg-secondary px-4 h-12 mt-1" 
                      >口座の登録/削除はこちら
                    </button>
                  </div>
                </td>
              </tr>
              <tr v-else>
                <td class="w-80 text-xl font-bold bg-grayF8 sm:text-sm sm:min-w-[88px]">口座選択</td>
                <td>
                  <span class="text-sm">登録口座はありません。口座登録を行ってください。</span>
                  <div>
                    <button
                      type="button"
                      class="rounded-lg font-bold text-white bg-secondary px-4 h-12 mt-1" 
                      >口座の登録/削除はこちら
                    </button>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="w-80 text-xl font-bold bg-grayF8 sm:text-sm sm:min-w-[88px]">口座情報</td>
                <td>
                  <Field
                    name="account1"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account1"
                      type="text"
                      placeholder="銀行名"
                      class="w-[400px] h-14 px-4 py-2 box-border border border-grayD2 sm:w-48 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-red-600 text-xs font-normal"><ErrorMessage name="account1" /></div>
                  <Field
                    name="account2"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account2"
                      type="text"
                      placeholder="支店名"
                      class="w-[400px] h-14 px-4 py-2 box-border border border-grayD2 sm:w-48 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-red-600 text-xs font-normal"><ErrorMessage name="account2" /></div>
                  <div v-if="isAccount" class="mb-4">{{ form.account3 }}</div>
                  <Field
                    name="account4"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account4"
                      type="text"
                      placeholder="口座番号"
                      class="w-[400px] h-14 px-4 py-2 box-border border border-grayD2 sm:w-48 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-red-600 text-xs font-normal"><ErrorMessage name="account4" /></div>
                  <Field
                    name="account5"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account5"
                      type="text"
                      class="w-[400px] h-14 px-4 py-2 box-border border border-grayD2 sm:w-48 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-red-600 text-xs font-normal"><ErrorMessage name="account5" /></div>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
        <div class="text-redDC font-bold text-2xl text-center mb-10 sm:text-xl sm:mb-5">ご注意</div>
        <div class="font-bold">送金は1日5回</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul class="list-disc sm:text-sm">
            <li>年中無休、土日祝も送金されます</li>
            <li>毎日9:00, 13:00, 17:00, 22:00に作業開始<br>完了までに数分～120分程度かかります</li>
            <li>休み明け等で申請が集中するときは、通常より時間がかかります</li>
            <li>お客さまの銀行口座によっては、当日着金しないことがありま</li>
          </ul>
        </div>
        <div class="font-bold">換金レートは、銀行店頭水準</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul class="list-disc sm:text-sm">
            <li>都市銀行の「アメリカドルの現金両替レート（Cash.B）」と同水準の、リアルタイム変動レートが適用されます<br>> 参考：<span class="border-b border-primary text-primary">三菱UFJ銀行 外国為替相場</span></li>
          </ul>
        </div>
        <div class="font-bold mb-1">口座情報は正しくご入力ください</div>
        <div class="sm:text-sm">口座情報の間違いや、お客さまの銀行口座が利用できない等の原因で資金が到着しなかったとしても、当社は責任を負いかねます。銀行で組戻し等の手続きもできません。</div>
        <div class="flex items-center justify-center mt-10 gap-4 sm:block">
          <div class="sm:text-center">
            <button
              type="button"
              class="white-vector-left w-80 h-14 px-12 rounded-lg font-bold text-white bg-secondary sm:mb-4 sm:w-[311px]" 
              >トップに戻る
            </button>
          </div>
          <div class="sm:text-center">
            <button
              type="button"
              class="block-vector-right w-80 h-14 bg-primary px-12 rounded-lg font-bold sm:w-[311px]" 
              >上記に同意して換金する
            </button>
          </div>
        </div>
      </div>
      <div class="mb-10">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-5 sm:text-xl">お振込みについて</div>
        <div class="sm:text-sm">日本国内からお振込みいたします。</div>
        <div class="sm:text-sm">安全、確実にお受けとりいただけます。</div>
      </div>
      <div class="mb-10">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-5 sm:text-xl">換金の所要時間</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul class="list-disc sm:text-sm">
            <li>9時、13時、17時、22時に締めて順次手続きされます</li>
            <li>お客さまがご利用の銀行口座によっては当日着金にならない場合があります</li>
            <li>土日祝も対応しています</li>
          </ul>
        </div>
        <div class="sm:text-sm">※休み明け等、申請が集中するときは通常よりも処理に時間の掛かることがあります</div>
      </div>
      <div class="mb-10">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-5 sm:text-xl">換金レート</div>
        <div class="sm:text-sm">換金レートは日本国内都市銀行のアメリカドルの現金売却レート（Cash. Buy Rate)と同水準のリアルタイムレートとなります</div>
      </div>
      <div class="mb-10">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-5 sm:text-xl">振込元名義</div>
        <div class="sm:text-sm">振込元名義は委託先支払サービスの会社名となります。</div>
      </div>
      <div class="mb-10">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-5 sm:text-xl">換金申請のキャンセルができます</div>
        <div class="sm:text-sm"><a href="#" class="border-b border-primary text-primary">取引履歴</a>の閲覧から換金申請のキャンセルが可能です</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive, ref } from 'vue';

const form = reactive ({
  amount: '',
  account1: '',
  account2: '',
  account3: '普通',
  account4: '',
  account5: '',
  bank1: '',
  bank2: '',
  bank3: '',
});

const isAccount = ref(true);

const validateRequest = (value: any) => {
  if (!value) {
    return '資料必填';
  }

  return true;
}

</script>

<style lang="scss" scoped>
.redemption-application {

  table, th, td {
    border: 1px solid #D2D2D2;
    padding: 12px;
  }

  td {
    height: 48px;
  }
}
</style>