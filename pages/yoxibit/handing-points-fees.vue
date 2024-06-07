<template>
  <PageLayout :loginStatus="true" :pathTitle="'取扱限度額・手数料'" :pathName="'HANDLING POINTS/FEES'">
    <div class="handing-points-fees">
      <div id="card1" class="w-full bg-white p-8 shadow-ctz1 mb-2">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-10 sm:text-xl">メールアドレス変更</div>
        <div>
          <table class="sm:text-sm">
            <tbody class="color-secondary">
              <tr>
                <td class="w-[560px] font-bold bg-grayF8 sm:min-w-[163px]">下限額</td>
                <td class="w-[560px] sm:min-w-[163px]">なし</td>
              </tr>
              <tr>
                <td class="font-bold bg-grayF8">上限額</td>
                <td>なし</td>
              </tr>
              <tr>
                <td class="font-bold bg-grayF8">手数料</td>
                <td>なし</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="card2" class="w-full bg-white p-8 shadow-ctz1 mb-2">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-10 sm:text-xl">購入</div>
        <div>
          <table class="sm:text-sm">
            <tbody class="color-secondary">
              <tr>
                <td class="w-[560px] font-bold bg-grayF8 sm:min-w-[69px]">下限額</td>
                <td class="w-[560px] sm:min-w-[257px]">2,000円</td>
              </tr>
              <tr>
                <td class="font-bold bg-grayF8">上限額</td>
                <td>1日 500,000円（毎日0時更新）<br>1か月 10,000,000円（毎月1日更新）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="card3" class="w-full bg-white p-8 shadow-ctz1 mb-2">
        <div class="border-l-4 border-primary font-bold text-2xl pl-5 mb-10 sm:text-xl">換金</div>
        <div>
          <table class="sm:text-sm mb-10">
            <tbody class="color-secondary">
              <tr>
                <td class="w-[560px] font-bold bg-grayF8 sm:min-w-[69px]">下限額</td>
                <td class="w-[560px] sm:min-w-[257px]">50ポイント</td>
              </tr>
              <tr>
                <td class="font-bold bg-grayF8">上限額</td>
                <td>なし<br>※1日5万pt以上は要事前連絡</td>
              </tr>
            </tbody>
          </table>
          <div class="border-b border-primary font-bold text-xl mb-5">
            <span class="symbol mr-5"></span>平日</div>
          <table class="sm:text-sm mb-10">
            <tbody class="color-secondary">
              <tr>
                <td class="w-[560px] font-bold bg-grayF8 sm:min-w-[163px]">350pt以上</td>
                <td class="w-[560px] sm:min-w-[163px]">なし</td>
              </tr>
              <tr>
                <td class="font-bold bg-grayF8">350pt未満</td>
                <td>1.3pt</td>
              </tr>
            </tbody>
          </table>
          <div class="border-b border-primary font-bold text-xl mb-5">
            <span class="symbol mr-5"></span>土日祝</div>
          <table class="sm:text-sm">
            <tbody class="color-secondary">
              <tr>
                <td class="w-[560px] font-bold bg-grayF8 sm:min-w-[163px]">900ptごとに</td>
                <td class="w-[560px] sm:min-w-[163px]">2.9pt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
</script>

<style lang="scss" scoped>
.handing-points-fees {

  table, th, td {
    border: 1px solid #D2D2D2;
  }

  td {
    height: 48px;
    padding: 10px;
  }

  .symbol::before {
    content: url("/assets/img/yoxibit/diamond.svg");
  }

}
</style>