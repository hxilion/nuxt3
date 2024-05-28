<template>
  <PageLayout>
    <div class="handing-points-fees">
      <div id="card1" class="card">
        <div class="divide-y font-bold text-2xl pl-5 mb-10">メールアドレス変更</div>
        <div class="history-table">
          <table>
            <tbody class="color-secondary">
              <tr>
                <td>下限額</td>
                <td>なし</td>
              </tr>
              <tr>
                <td>上限額</td>
                <td>なし</td>
              </tr>
              <tr>
                <td>手数料</td>
                <td>なし</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="card2" class="card">
        <div class="divide-y font-bold text-2xl pl-5 mb-10">購入</div>
        <div class="history-table">
          <table>
            <tbody class="color-secondary">
              <tr>
                <td>下限額</td>
                <td>2,000円</td>
              </tr>
              <tr>
                <td>上限額</td>
                <td>1日 500,000円（毎日0時更新）<br>1か月 10,000,000円（毎月1日更新）</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div id="card3" class="card">
        <div class="divide-y font-bold text-2xl pl-5 mb-10">換金</div>
        <div class="history-table">
          <table class="mb-10">
            <tbody class="color-secondary">
              <tr>
                <td>下限額</td>
                <td>50ポイント</td>
              </tr>
              <tr>
                <td>上限額</td>
                <td>なし<br>※1日5万pt以上は要事前連絡</td>
              </tr>
            </tbody>
          </table>
          <div class="divide-x2 font-bold text-xl mb-5">
            <span class="symbol mr-5"></span>平日</div>
          <table class="mb-10">
            <tbody class="color-secondary">
              <tr>
                <td>350pt以上</td>
                <td>なし</td>
              </tr>
              <tr>
                <td>350pt未満</td>
                <td>1.3pt</td>
              </tr>
            </tbody>
          </table>
          <div class="divide-x2 font-bold text-xl mb-5">
            <span class="symbol mr-5"></span>土日祝</div>
          <table>
            <tbody class="color-secondary">
              <tr>
                <td>900ptごとに</td>
                <td>2.9pt</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '../../components/yoxibit/pageLayout.vue';
</script>

<style lang="scss" scoped>
.handing-points-fees {
  .card {
    width: 100%;
    background-color: #fff;
    padding: 32px;
    box-shadow: 0px 8px 24px 0px #1E1E1E1A;
    margin-bottom: 80px;
  }

  table, th, td {
    border: 1px solid #D2D2D2;
  }

  td {
    background-color:#ffffff;
    color: #1E1E1E;
    width: 480px;
    height: 48px;
    padding: 10px;
  }

  td:first-of-type {
    font-weight: 700;
    background-color:#F8F8F8;
  }

  .symbol::before {
    content: url(/assets/img/yoxibit/diamond.png);
  }

}
</style>