<template>
  <PageLayout
    :loginStatus="true"
    :pathTitle="'購入事前申請'"
    :pathName="'DEPOSIT'"
  >
    <main class="w-full flex-1 flex-grow overflow-x-hidden">
      <section id="deposit" class="undefined bg-[#f6f6f6] px-4 py-10 sm:py-0">
        <div class="max-w-screen-xl mx-auto">
          <div id="con_form" style="display: block">
            <div class="">
              <div class="shadow-vglow w-full bg-white p-8 sm:px-4 sm:py-6">
                <div>
                  <div class="mb-8 flex w-full">
                    <div
                      class="align-center justerfy-center flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 text-xl font-bold sm:p-3 sm:text-start sm:text-sm"
                    >
                      入金予定額
                    </div>
                    <div class="flex-1 border border-grayD2 p-4 sm:p-3">
                      <div class="m-w-10 flex flex-row items-center space-x-2 sm:text-sm">
                        <input
                          id="amount"
                          name="job_amount"
                          class="text-grey-darker w-64 max-w-[400px] flex-grow appearance-none border border-gray-300 p-3 text-xl font-black sm:w-1/3 sm:text-base"
                          value=""
                          type="number"
                          step="1"
                          placeholder="日本円で入力"
                          min="2000"
                          max="500000"
                          data-sharkid="__0"
                        />
                        <span>円</span>
                      </div>
                      <div class="hidden">(3,100円以上7,711,900円以下をご入力下さい。)</div>
                    </div>
                  </div>
                  <div class="hidden">
                    <h2 class="u_line"></h2>
                    <p>
                      サービスとセキュリティ性の向上のため、入金受付口座は今後も変更になることがあります。
                    </p>
                    <p>
                      次のページで表示されます入金口座情報をご確認いただきますようお願いいたします。
                    </p>
                  </div>
                  <div class="mb-8 sm:text-sm">
                    <ul class="list-inside list-disc">
                      <li>1日の限度額　2,000円～500,000円</li>
                      <li>
                        ポイントへの換金レートは、当社にて手続きを行う時点のリアルタイムレート
                        <br />（大手銀行の店舗両替レート（CASH.S）と同水準）が適用されます
                      </li>
                    </ul>
                  </div>
                  <div class="mb-4 text-base sm:text-sm">
                    <div class="mb-4 flex items-center border-b border-primary px-2 py-1 sm:px-0">
                      <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16" />
                      <h5 class="px-4 text-xl font-bold sm:px-2 sm:text-base">
                        YOXIBITの着金が遅延することがあります
                      </h5>
                    </div>
                    <p>
                      お客さまの送金がベガに
                      <span class="font-bold">《着金後》</span>
                      にポイント残高が反映されます。夜間休日を中心に、銀行送金が遅延することがあります。夜間に送金したものが、翌営業日のお昼前に着金するようなケースもあります。特に日曜夜中〜月曜朝は、ほぼ遅延します。これは銀行間の処理時間の問題であり、ベガではどうしようもありません。
                    </p>
                    <p class="font-bold">
                      着金するまで反映はできず、キャンセル、返金、補填等にはお応えできませんことを、ご承知置きください。
                    </p>
                  </div>
                  <div class="mb-4 text-base sm:text-sm">
                    <div class="mb-4 flex items-center border-b border-primary px-2 py-1">
                      <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16" />
                      <h5 class="px-4 text-xl font-bold sm:px-2 sm:text-base">
                        《着金後》の手続き時間
                      </h5>
                    </div>
                    <p class="font-bold">振込人名義が正確に入力されている場合</p>
                    <p>自動反映／10～20分</p>
                    <p class="font-bold">振込人名義が正確ではない場合</p>
                    <p>手動反映／半日～１日程度</p>
                  </div>
                  <div class="mb-4 text-base sm:text-sm">
                    <div class="mb-4 flex items-center border-b border-primary px-2 py-1">
                      <img src="/assets/img/yoxibit/pixel-diamond.svg" width="16" height="16" />
                      <h5 class="px-4 text-xl font-bold sm:px-2 sm:text-base">
                        詐欺、窃盗、他人の金…即、通報します
                      </h5>
                    </div>
                    <p>
                      万が一あなたに権限が無い資金（他人の金）、詐欺や窃盗によって得た資金を当社に送金された場合、YOXIBITは
                    </p>
                    <p class="font-bold">
                      各国警察を始め関係省庁に当該ユーザーの情報開示や捜査協力を行います。
                    </p>
                  </div>
                  <div class="mb-4 text-center">
                    <p>着金遅延を了承の上で、</p>
                  </div>
                  <div
                    class="mb-4 flex items-center justify-center space-x-4 text-lg font-bold sm:flex-col sm:space-x-0 sm:space-y-4 sm:text-base"
                  >
                    <a
                      class="arrow-right-black arrow-left-white block w-full max-w-80 rounded-lg bg-secondary p-1 py-4 text-center tracking-widest text-white duration-300 hover:opacity-50"
                      href="/yoxibit/home"
                    >
                      <span>トップに戻る</span>
                    </a>
                    <button
                      type="button"
                      name="ok"
                      @click="DepositSubmit"
                      class="arrow-right-black mb-0 block w-full max-w-80 rounded-lg bg-primary p-1 py-4 text-center tracking-widest text-secondary duration-300 hover:opacity-50"
                    >
                      <span id="okname">申請を確定する</span>
                    </button>
                  </div>
                  <input id="step" name="postback" value="1" type="hidden" />
                  <input id="partnerid" name="job_partnerid" value="R001" type="hidden" />
                  <input
                    id="referenceNo"
                    name="job_referenceNo"
                    value="U00043720240529185338"
                    type="hidden"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </PageLayout>
</template>

<script setup lang="ts">
import PageLayout from '@/components/yoxibit/pageLayout.vue';
import { useRouter } from 'vue-router';
const router = useRouter();
const DepositSubmit = () => {
  router.push('/yoxibit/deposit-finish');
};
</script>

<style scoped></style>
