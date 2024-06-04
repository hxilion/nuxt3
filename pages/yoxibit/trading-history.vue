<template>
  <PageLayout :loginStatus="true">
    <div class="trading-history">
      <Form class="mb-5">
        <div class="flex items-center justify-center flex-wrap gap-y-2.5 sm:block">
          <div class="mr-4 sm:mr-0 sm:mb-3">
            <select v-model="searchform.date" class="w-60 h-14 px-4 py-2 border border-grayD2 box-border vector sm:w-full">
              <option selected>年月で絞り込み</option>
            </select>
          </div>
          <div class="mr-4 sm:mr-0 sm:mb-3">
            <select v-model="searchform.store" class="w-60 h-14 px-4 py-2 border border-grayD2 box-border vector sm:w-full">
              <option selected>加盟店で絞り込み</option>
            </select>
          </div>
          <div class="text-center mr-4 sm:mr-0 sm:mb-3">
            <button
            type="submit"
            class="w-[130px] h-14 block-vector-right px-12 rounded-lg font-bold bg-primary sm:w-full" 
            >検索
            </button>
          </div>
          <div class="text-center sm:mb-3">
            <button
              type="button"
              class="w-[130px] h-14 white-vector-right px-12 rounded-lg font-bold text-white bg-secondary sm:w-full" 
              @click="downloadPDF"
              >PDF
            </button>
          </div>
        </div>
      </Form>
      <div>
        <table id="table-list" class="px-3 py-4 gap-2 sm:block sm:overflow-x-auto">
          <thead>
            <tr>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-56">申請日付</th>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32">申請内容</th>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32">状態</th>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32">取引額(pt)</th>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-32">残高(pt)</th>
              <th class="font-bold py-4 px-3 bg-secondary text-white h-12 min-w-56">詳細</th>
            </tr>
            <!-- <tr>
              <th v-for="header in headers" class="font-bold py-8 px-3 bg-secondary text-white h-12"> {{ header }} </th>
            </tr> -->
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
import PageLayout from '@/components/yoxibit/pageLayout.vue';
import { Form } from 'vee-validate';
import { reactive, ref } from 'vue';

const { $html2pdf } = useNuxtApp()

function downloadPDF() {
  if (document) {
    const element = document.getElementById('table-list')!
    const clonedElement = element.cloneNode(true) as HTMLElement
    clonedElement.classList.remove('hidden')
    clonedElement.classList.add('block')
    document.body.appendChild(clonedElement)

    $html2pdf(clonedElement, {
      filename: 'filename.pdf',
      image: { type: 'png' },
      enableLinks: true
    })
    clonedElement.remove()
  }  
}

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

  table, th, td {
    border: 1px solid #D2D2D2;
  }

  td {
    background-color:#ffffff;
    width: 480px;
    height: 48px;
    text-align:center;
  }  
}
</style>
