<template>
  <PageLayout>
    <div class="trading-history" >
      <Form>
        <div class="container-flex1 justify-center">
          <div class="mr-4">
            <select v-model="searchform.date" class="select vector text-secondary">
              <option selected>年月で絞り込み</option>
            </select>
          </div>
          <div class="mr-4">
            <select v-model="searchform.store" class="select vector text-secondary">
              <option selected>加盟店で絞り込み</option>
            </select>
          </div>
          <div class="text-center mr-4">
            <button
            type="submit"
            class="btn px-12 rounded-lg font-bold bg-primary" 
            >検索
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
            </button>
          </div>
          <div class="text-center">
            <button
              type="submit"
              class="btn px-12 rounded-lg font-bold text-white bg-secondary" 
            >PDF
              <img class="float-right clear-right" src="/assets/img/yoxibit/vector-right.png" alt="">
            </button>
          </div>
        </div>
      </Form>
      <div class="history-table">
        <table>
          <thead>
            <tr>
              <th v-for="header in headers" class="font-bold py-8 px-3 bg-secondary text-white h-12"> {{ header }} </th>
            </tr>
          </thead>
          <tbody class="color-secondary">
            <tr v-for="item in list">
              <td>{{ item.date }}</td>
              <td>{{ item.content}}</td>
              <td>{{ item.statue}}</td>
              <td>{{ item.transactionAmount}}</td>
              <td>{{ item.balance}}</td>
              <td>{{ item.detail}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </PageLayout>
</template>
  
<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
import { Form } from 'vee-validate';
import { reactive, ref } from 'vue';

const searchform = reactive ({
  date: '年月で絞り込み',
  store: '加盟店で絞り込み',
});

const headers = ref([
  '申請日付',
  '申請内容',
  '状態',
  '取引額(pt)',
  '残高(pt)',
  '詳細'
]);

const list = ref([
  {
    date: '2024/01/01 00:00:00',
    content: '送付/TRF',
    statue: '処理済み',
    transactionAmount: '100.00',
    balance: '0',
    detail: 'NO DATA AVAILABLE'
  },
  {
    date: '2024/01/01 00:00:00',
    content: '送付/TRF',
    statue: '処理済み',
    transactionAmount: '100.00',
    balance: '100',
    detail: 'NO DATA AVAILABLE'
  },
  {
    date: '2024/01/01 00:00:00',
    content: '送付/TRF',
    statue: '処理済み',
    transactionAmount: '100.00',
    balance: '200',
    detail: 'NO DATA AVAILABLE'
  },
  {
    date: '2024/01/01 00:00:00',
    content: '送付/TRF',
    statue: '処理済み',
    transactionAmount: '100.00',
    balance: '300',
    detail: 'NO DATA AVAILABLE'
  },
  {
    date: '2024/01/01 00:00:00',
    content: '送付/TRF',
    statue: '処理済み',
    transactionAmount: '100.00',
    balance: '400',
    detail: 'NO DATA AVAILABLE'
  },
])
</script>

<style lang="scss" scoped>
.trading-history {

  .select {
    width: 220px;
    height: 56px;
    padding: 8px 16px;
    border: 1px solid #D2D2D2;
    box-sizing: border-box;
  }

  .btn {
    width: 100%;
    height: 56px;
  }

  button > img {
    margin-top: 5px;
    margin-left: 40px
  }

  li {
    list-style-type: disc;
  }

  .history-table {
    overflow:hidden;
    border-radius:10px 10px 0px 0px;
    padding: 12px 16px;
    gap: 8px;
  }

  table, th, td {
    border: 1px solid #D2D2D2;
  }

  td{
    background-color:#ffffff;
    color: #1E1E1E;
    width: 480px;
    height: 48px;
    text-align:center;
  }  
}
</style>