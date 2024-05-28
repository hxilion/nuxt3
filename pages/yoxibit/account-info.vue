<template>
  <div class="yoxibit text-secondary">
    <div class="account-info">
      <div class="first-block bg-gray96 py-4">
        <div class="max-w-screen-xl mx-auto px-4 py-4">
          <div class="grid-btn">
            <a href="#card1">
              <button
                type="button"
                class="btn-style2 block-vector-right px-12 rounded-lg font-bold mb-5 mr-2" 
              >登録済み口座情報
              </button>
            </a>
            <a href="#card2">
              <button
                type="button"
                class="btn-style2 block-vector-right px-12 rounded-lg font-bold" 
              >新規口座登録
              </button>
            </a>
          </div>
        </div>
      </div>
      <PageLayerWhite>
        <div id="card1">
          <div class="title font-bold text-center mb-10">登録済み口座情報</div>
          <div class="bank-table">
            <table id="table-list">
              <thead>
                <tr>
                  <th v-for="header in headers" class="font-bold py-8 px-3 bg-secondary text-white h-12"> {{ header }} </th>
                </tr>
              </thead>
              <tbody v-if="isShowTable">
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <button
                      type="button"
                      class="btn-style4 text-white" 
                      >削除
                    </button>
                  </td>
                </tr>
              </tbody>
              <tbody v-else>
                <div>登録口座はありません。</div>
              </tbody>
            </table>
          </div>
          <div class="post-bank mt-10">
            <div class="text-xl	font-bold text-center p-5">ゆうちょ銀行で申請される方へ</div>
            <div class="divide-x2 mx-5"></div>
            <div class="p-5">
              <div>他の金融機関からの振込み、となります。</div>
              <div class="pl-4">支店名：カタカナ（例 ゼロゼロイチ支店）</div>
              <div class="pl-4">口座番号：7桁</div>
              <div>ゆうちょ銀行公式サイトの<span class="divide-x2 text-primary">他の金融機関からゆうちょ銀行口座へのお振込み方法</span>をご確認ください。</div>
            </div>
          </div>
        </div>
      </PageLayerWhite>
      <PageLayerGray>
        <div id="card2">
          <div class="area1 mb-10">
            <div class="title font-bold text-center mb-10">新規口座登録</div>
            <div class="new-registration">
              <Form>
                <table class="mb-10">
                  <tbody>
                    <tr>
                      <td>銀行名</td>
                      <td>
                        <Field
                          name="bankName"
                          :rules="validateRequest"
                          v-slot="{ handleChange }"
                        >
                          <input
                            v-model="formRegister.bankName"
                            type="text"
                            class="input-style1"
                            @input="handleChange"
                          />
                        </Field>
                        <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="bankName" /></div>
                        <div class="mt-1">以下の銀行は登録できません：楽天銀行、池田泉州銀行、SMBC信託銀行</div>
                      </td>
                    </tr>
                    <tr>
                      <td>支店名</td>
                      <td>
                        <Field
                          name="bankBranchName"
                          :rules="validateRequest"
                          v-slot="{ handleChange }"
                        >
                          <input
                            v-model="formRegister.bankBranchName"
                            type="text"
                            class="input-style1"
                            @input="handleChange"
                          />
                        </Field>
                        <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="bankBranchName" /></div>
                        <div class="mt-1">支店番号（例：001）ではなく、支店名（例：中央支店）をご入力</div>
                      </td>
                    </tr>
                    <tr>
                      <td>口座種別</td>
                      <td>
                        <select v-model="formRegister.accountType" class="input-style1 vector">
                          <option selected>普通</option>
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>口座番号（半角）</td>
                      <td>
                        <Field
                          name="accountNumber"
                          :rules="validateRequest"
                          v-slot="{ handleChange }"
                        >
                          <input
                            v-model="formRegister.accountNumber"
                            type="text"
                            class="input-style1 mb-4"
                            @input="handleChange"
                          />
                        </Field>
                        <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="accountNumber" /></div>
                      </td>
                    </tr>
                    <tr>
                      <td>口座名義</td>
                      <td>
                        <Field
                          name="accountName"
                          :rules="validateRequest"
                          v-slot="{ handleChange }"
                        >
                          <input
                            v-model="formRegister.accountName"
                            type="text"
                            class="input-style1 mb-4"
                            @input="handleChange"
                          />
                        </Field>
                        <div class="error-msg text-red-600 text-xs font-normal"><ErrorMessage name="accountName" /></div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Form>
              <div class="text-center">
                <button
                  type="button"
                  class="btn-style1 block-vector-right px-12 rounded-lg font-bold bg-secondary" 
                  >初めての方へ
                </button>
              </div>
            </div>
          </div>
        </div>
      </PageLayerGray>
    </div>
  </div>
</template>

<script setup lang="ts">
import PageLayerWhite from '../../components/yoxibit/pageLayerWhite.vue';
import PageLayerGray from '../../components/yoxibit/pageLayerGray.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';

import { ref, reactive } from 'vue';

const headers = ref([
  '銀行名',
  '支店名',
  '口座種別',
  '口座番号',
  '口座名義',
  '削除'
]);

const isShowTable = ref(true);

const form = reactive({
  amount: '',
  account1: '三井住友銀行',
  account2: '支店名',
  account3: '口座番号',
  account4: 'ヤマダ　シンイチ',
  bank1: '',
  bank2: '',
  bank3: '',
});

const formRegister = ref({
  bankName: '',
  bankBranchName: '',
  accountType: '普通',
  accountNumber: '',
  accountName: '',
});

const validateRequest = (value: any) => {
  if (!value) {
    return '資料必填';
  }

  return true;
}

</script>
<style lang="scss" scoped>
.yoxibit {
  width: 100%;
	height: auto;
	background-color: #F8F8F8;
	margin-left: auto;
	margin-right: auto;
  font-family: Murecho;

  .first-block {
    width: 100%;
    height: 136px;
  }

  .grid-btn {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  }

  .title {
    font-size: 32px;
  }

  button > img {
    margin-top: 5px;
  }

  .info {
    background: #0064FF;
    color: #FFFFFF;
    padding: 8px;
    letter-spacing: 1.6px;
  }

  .bank-table {
    width: 100%;
    gap: 8px;

    table, th, td {
      width: 100%;
      border: 1px solid #D2D2D2;
      padding: 12px 16px;
    }
    
    th {
      width: 320px;
    }

    td {
      width: 320px;
      background-color:#ffffff;
      color: #1E1E1E;
      height: 48px;
      text-align:center;
    }
  }

  .new-registration {
    width: 100%;
    background-color: #fff;
    padding: 32px;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
    margin-bottom: 80px;

    table, th, td {
      width: 100%;
      border: 1px solid #D2D2D2;
      padding: 12px 16px;
    }

    td {
      width: auto;
      height: 48px;
    }

    td:first-of-type {
      width: 320px;
      font-size: 20px;
      font-weight: 700;
      background-color:#F8F8F8;
    }
  }

  .post-bank {
    border: 1px solid #D2D2D2;
  }
}
</style>
