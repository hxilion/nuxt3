<template>
  <PageLayout>
    <div class="redemption-apply-step1 text-secondary" >
      <div class="title font-bold mb-4">換金の所要時間</div>
      <div class="application">
        <Form>
          <table class="mb-10">
            <tbody>
              <tr>
                <td>残高</td>
                <td>100.57pt</td>
              </tr>
              <tr>
                <td>換金額</td>
                <td>
                  <Field
                    name="amount"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.amount"
                      type="text"
                      class="input-style2"
                      @input="handleChange"
                    /><span class="text-sm ml-1">pt</span>
                  </Field>
                  <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="amount" /></div>
                </td>
              </tr>
              <tr>
                <td>口座選択</td>
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
              <tr>
                <td>口座情報</td>
                <td>
                  <Field
                    name="account1"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account1"
                      type="text"
                      class="input-style2 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="account1" /></div>
                  <Field
                    name="account2"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account2"
                      type="text"
                      class="input-style2 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="account2" /></div>
                  <div class="mb-4">普通</div>
                  <Field
                    name="account3"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account3"
                      type="text"
                      class="input-style2 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="amoaccount3unt" /></div>
                  <Field
                    name="account4"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="form.account4"
                      type="text"
                      class="input-style2 mb-4"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="account4" /></div>
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
        <div class="text-redDC font-bold text-2xl text-center mb-10">ご注意</div>
        <div class="font-bold">送金は1日5回</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul>
            <li>年中無休、土日祝も送金されます</li>
            <li>毎日9:00, 13:00, 17:00, 22:00に作業開始<br>完了までに数分～120分程度かかります</li>
            <li>休み明け等で申請が集中するときは、通常より時間がかかります</li>
            <li>お客さまの銀行口座によっては、当日着金しないことがありま</li>
          </ul>
        </div>
        <div class="font-bold">換金レートは、銀行店頭水準</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul>
            <li>都市銀行の「アメリカドルの現金両替レート（Cash.B）」と同水準の、リアルタイム変動レートが適用されます<br>> 参考：<span class="divide-x2 text-primary">三菱UFJ銀行 外国為替相場</span></li>
          </ul>
        </div>
        <div class="font-bold mb-1">口座情報は正しくご入力ください</div>
        <div>口座情報の間違いや、お客さまの銀行口座が利用できない等の原因で資金が到着しなかったとしても、当社は責任を負いかねます。銀行で組戻し等の手続きもできません。</div>
        <div class="container-flex1 justify-center mt-10">
          <div>
            <button
              type="button"
              class="btn-style3 btn-return px-12 rounded-lg font-bold text-white bg-secondary mr-4" 
              >トップに戻る
            </button>
          </div>
          <div>
            <button
              type="button"
              class="btn-style1 btn-agree px-12 rounded-lg font-bold bg-secondary" 
              >上記に同意して換金する
            </button>
          </div>
        </div>
      </div>
      <div class="mb-10">
        <div class="divide-y font-bold text-2xl pl-5 mb-5">お振込みについて</div>
        <div>日本国内からお振込みいたします。</div>
        <div>安全、確実にお受けとりいただけます。</div>
      </div>
      <div class="mb-10">
        <div class="divide-y font-bold text-2xl pl-5 mb-5">換金の所要時間</div>
        <div class="pl-5 my-4 ml-1 tracking-widest">
          <ul>
            <li>9時、13時、17時、22時に締めて順次手続きされます</li>
            <li>お客さまがご利用の銀行口座によっては当日着金にならない場合があります</li>
            <li>土日祝も対応しています</li>
          </ul>
        </div>
        <div>※休み明け等、申請が集中するときは通常よりも処理に時間の掛かることがあります</div>
      </div>
      <div class="mb-10">
        <div class="divide-y font-bold text-2xl pl-5 mb-5">換金レート</div>
        <div>換金レートは日本国内都市銀行のアメリカドルの現金売却レート（Cash. Buy Rate)と同水準のリアルタイムレートとなります</div>
      </div>
      <div class="mb-10">
        <div class="divide-y font-bold text-2xl pl-5 mb-5">振込元名義</div>
        <div>振込元名義は委託先支払サービスの会社名となります。</div>
      </div>
      <div class="mb-10">
        <div class="divide-y font-bold text-2xl pl-5 mb-5">換金申請のキャンセルができます</div>
        <div><a href="#" class="divide-x2 text-primary">取引履歴</a>の閲覧から換金申請のキャンセルが可能です</div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { reactive } from 'vue';

const form = reactive ({
  amount: '',
  account1: '三井住友銀行',
  account2: '支店名',
  account3: '口座番号',
  account4: 'ヤマダ　シンイチ',
  bank1: '',
  bank2: '',
  bank3: '',
});

const validateRequest = (value: any) => {
  if (!value) {
    return '資料必填';
  }

  return true;
}


</script>

<style lang="scss" scoped>
.redemption-apply-step1 {

  .title {
    background-image: url(/assets/img/yoxibit/vector-right.png);
    background-repeat: no-repeat;
    background-position: center left 130px;
  }

  button > img {
    margin-top: 5px;
  }

  .application {
    width: 100%;
    background-color: #fff;
    padding: 32px;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
    margin-bottom: 80px;
  }

  .application-table {
    overflow:hidden;
    border-radius:10px 10px 0px 0px;
    padding: 12px 16px;
    gap: 8px;
  }

  table, th, td {
    border: 1px solid #D2D2D2;
    padding: 12px 16px;
    width: 100%;
  }

  td {
    background-color:#ffffff;
    color: #1E1E1E;
    width: auto;
    height: 48px;
  }

  td:first-of-type {
    width: 320px;
    font-size: 20px;
    font-weight: 700;
    background-color:#F8F8F8;
  }

  li {
    list-style-type: disc;
    color: #1E1E1E;
  }

  .btn-return {
    background-image: url(/assets/img/yoxibit/white-vector-left.png);
    background-repeat: no-repeat;
    background-position: center left 20px;
  }

  .btn-agree {
    background-image: url(/assets/img/yoxibit/vector-right.png);
    background-repeat: no-repeat;
    background-position: center right 20px;
  }
}
</style>