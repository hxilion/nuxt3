<template>
  <PageLayout
    :loginStatus="true"
    :pathTitle="'購入事前申請'"
    :pathName="'DEPOSIT'"
  >
    <main class="flex-1 flex-grow overflow-x-hidden">
      <section class="bg-white" id="title">
        <div class="max-w-screen-xl relative mx-auto px-4 py-16">
          <div class="block w-full overflow-x-scroll sm:hidden">
            <nav
              class="bg-grey-light absolute left-4 top-0 ml-4 ml-5 mt-5 w-full w-full rounded-md sm:ml-0 sm:mt-2"
            >
              <ol class="flex items-center justify-start space-x-2 text-sm">
                <li class="whitespace-nowrap">
                  <a class="text-secondary underline" href="/yoxibit/home">ホーム</a>
                </li>
                <li>&gt;</li>
                <li class="whitespace-nowrap">購入事前申請</li>
              </ol>
            </nav>
          </div>
          <div class="text-center">
            <h2 class="mb-1 text-4xl font-bold tracking-widest sm:text-2xl">購入事前申請</h2>
            <p class="font-bold tracking-widest text-primary">DEPOSIT</p>
          </div>
        </div>
      </section>
      <section class="bg-grayF8 px-4 py-20 tracking-widest sm:px-0">
        <div class="max-w-screen-xl mx-auto">
          <div class="shadow-vglow bg-white p-8 sm:p-4">
            <div class="wrap clearfix">
              <div class="mb-8">
                <p class="mb-4 mb-4 text-center text-2xl font-bold sm:text-xl">
                  <span>購入の事前申請が完了しました。</span>
                  <span>下記の通りお振込ください。</span>
                </p>
                <div class="mb-4 inline-flex w-full flex-col text-center sm:text-sm">
                  <p>ご注意1:振込先は毎回変更になります</p>
                  <p>ご注意2:お名前の前に購入ワンタイムコードをご入力ください</p>
                </div>
                <div class="w-full text-center sm:text-sm">
                  <span>今回の購入ワンタイムコード：</span>
                  <span class="font-bold text-[#0064FF]">N90ML587BD12</span>
                </div>
              </div>
              <div class="mb-8 flex flex-col space-y-1">
                <div class="text-2xl font-bold">振込人名義</div>
                <div>N90ML587BD12 山田孝之</div>
              </div>
              <div class="mb-8 flex flex-col">
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    振込金額
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    15,000円
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    銀行名
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    銀行名
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    支店名
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    支店名
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    支店番号
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    支店番号
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    口座種別
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    口座種別
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    口座番号
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    口座番号
                  </div>
                </div>
                <div class="flex w-full">
                  <div
                    class="flex w-1/4 items-center border border-grayD2 bg-grayF8 p-4 font-bold sm:w-1/3 sm:p-3"
                  >
                    口座名義
                  </div>
                  <div class="flex w-3/4 items-center border border-grayD2 p-4 sm:w-2/3 sm:p-3">
                    カ)エス.ビー.エー
                  </div>
                </div>
              </div>
              <div class="mb-8 text-left">
                <p class="mb-6">振込先は収納代行サービス会社名となります</p>
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
</script>

<style scoped></style>
