<template>
  <Nav :isLoggedIn="true" :pathTitle="'口座情報'" :pathName="'ACCOUNT INFORMATION'"/>
  <div class="account-info">
    <div class="w-full h-34 bg-gray96 py-8 px-4 sm:h-48">
      <div class="max-w-[1184px] mx-auto">
        <div class="grid grid-cols-2 gap-x-2.5 gap-y-2.5 sm:grid-cols-1">
          <a href="#card1">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold hover:opacity-50" 
            >登録済み口座情報
            </button>
          </a>
          <a href="#card2">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold hover:opacity-50" 
            >新規口座登録
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <PageLayerWhite>
    <div id="card1">
      <div class="text-[32px] font-bold text-center mb-10 sm:text-2xl">登録済み口座情報</div>
      <div class="bank-table">
        <table id="table-list" class="block overflow-x-auto">
          <thead>
            <tr>
              <th v-for="header in headers" class="min-w-[180px] font-bold py-4 px-3 bg-secondary text-white h-12"> {{ header }} </th>
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
                  class="w-[66px] h-8 bg-redDC px-4 text-white hover:bg-redED" 
                  >削除
                </button>
              </td>
            </tr>
          </tbody>
          <tbody v-else>
            <div class="sm:text-sm">登録口座はありません。</div>
          </tbody>
        </table>
      </div>
      <div class="border border-grayD2 mt-10">
        <div class="text-xl	font-bold text-center p-5 sm:text-base">ゆうちょ銀行で申請される方へ</div>
        <div class="border border-primary mx-5"></div>
        <div class="p-5 sm:text-sm">
          <div>他の金融機関からの振込み、となります。</div>
          <div class="pl-4">支店名：カタカナ（例 ゼロゼロイチ支店）</div>
          <div class="pl-4">口座番号：7桁</div>
          <div>ゆうちょ銀行公式サイトの<span class="border-b border-primary text-primary">他の金融機関からゆうちょ銀行口座へのお振込み方法</span>をご確認ください。</div>
        </div>
      </div>
    </div>
  </PageLayerWhite>
  <PageLayerGray>
    <div id="card2">
      <div class="text-[32px] font-bold text-center mb-10 sm:text-2xl">新規口座登録</div>
      <div class="new-registration w-full bg-white p-4 shadow-ctz1">
        <Form>
          <table class="w-full mb-10">
            <tbody>
              <tr>
                <td class="w-[320px] text-xl font-bold sm:text-sm sm:w-[63px]">銀行名</td>
                <td class="">
                  <Field
                    name="bankName"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="formRegister.bankName"
                      type="text"
                      class="w-full h-14 py-2 px-4 box-border border border-grayD2 sm:min-w-[220px]"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-left text-red-600 text-xs font-normal"><ErrorMessage name="bankName" /></div>
                  <div class="mt-1 sm:text-sm">以下の銀行は登録できません：楽天銀行、池田泉州銀行、SMBC信託銀行</div>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold sm:text-sm">支店名</td>
                <td>
                  <Field
                    name="bankBranchName"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="formRegister.bankBranchName"
                      type="text"
                      class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-left text-red-600 text-xs font-normal"><ErrorMessage name="bankBranchName" /></div>
                  <div class="mt-1 sm:text-sm">支店番号（例：001）ではなく、支店名（例：中央支店）をご入力</div>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold sm:text-sm">口座種別</td>
                <td>
                  <select v-model="formRegister.accountType" class="w-full h-14 py-2 px-4 box-border border border-grayD2 vector">
                    <option selected>普通</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold sm:text-sm">口座番号（半角）</td>
                <td>
                  <Field
                    name="accountNumber"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="formRegister.accountNumber"
                      type="text"
                      class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-left text-red-600 text-xs font-normal"><ErrorMessage name="accountNumber" /></div>
                </td>
              </tr>
              <tr>
                <td class="text-xl font-bold sm:text-sm">口座名義</td>
                <td>
                  <Field
                    name="accountName"
                    :rules="validateRequest"
                    v-slot="{ handleChange }"
                  >
                    <input
                      v-model="formRegister.accountName"
                      type="text"
                      class="w-full h-14 py-2 px-4 box-border border border-grayD2"
                      @input="handleChange"
                    />
                  </Field>
                  <div class="text-left text-red-600 text-xs font-normal"><ErrorMessage name="accountName" /></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-center">
            <button
              type="submit"
              class="w-80 h-14 bg-primary black-vector-right px-12 rounded-lg font-bold hover:bg-primaryVariant sm:w-[311px]" 
              >初めての方へ
            </button>
          </div>
        </Form>
      </div>
    </div>
  </PageLayerGray>
  <Footer />
</template>

<script setup lang="ts">
import PageLayerWhite from '@/components/yoxibit/pageLayerWhite.vue';
import PageLayerGray from '@/components/yoxibit/pageLayerGray.vue';
import Nav from '@/components/yoxibit/nav.vue';
import Footer from '@/components/yoxibit/footer.vue';
import { Field, Form, ErrorMessage } from 'vee-validate';
import { ref } from 'vue';

const headers = ref([
  '銀行名',
  '支店名',
  '口座種別',
  '口座番号',
  '口座名義',
  '削除'
]);

const isShowTable = ref(true);

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

.bank-table {
  table, th, td {
    border: 1px solid #D2D2D2;
  }

  th {
    width: 320px;
  }
  
  td {
    width: 320px;
    background-color:#ffffff;
    height: 48px;
    text-align:center;
  }
}

.new-registration {
  table, th, td {
    border: 1px solid #D2D2D2;
    padding: 12px;
  }

  td {
    height: 48px;
  }

  td:first-of-type {
    background-color:#F8F8F8;
  }
}
</style>
