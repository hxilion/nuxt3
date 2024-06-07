<template>
  <Nav :isLoggedIn="true"/>
  <div class="point-back">
    <div class="w-full bg-gray96 py-8 sm:h-[336px]">
      <div class="max-w-[1184px] mx-auto px-4">
        <div class="grid grid-cols-2 gap-x-2.5 gap-y-2.5 sm:grid-cols-1">
          <a href="#card1">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold" 
            >ポイントバックとは？
            </button>
          </a>
          <a href="#card2">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold" 
            >ポイントバック率
            </button>
          </a>
          <a href="#card3">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold" 
            >ポイント送付活用方法
            </button>
          </a>
          <a href="#card4">
            <button
              type="button"
              class="w-full h-14 bg-white vector px-12 rounded-lg font-bold" 
            >適正利用のお願い
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  <PageLayerWhite>
    <div id="card1" class="px-8 tracking-widest sm:py-6 sm:px-4 sm:text-sm">
      <div class="text-[32px] font-bold text-center mb-10 sm:text-2xl">ポイントバックとは？</div>
      <div>YOXIBITでは業界最大級のポイントバックがもらえます。</div>
      <div>加盟店から資金を受取るだけでポイントバック。加盟店へ送付をすればもっと大きなポイントバックが手に入ります。</div>
      <div>何の手続きも要りません。</div>
    </div>
  </PageLayerWhite>
  <PageLayerGray>
    <div id="card2" class="px-8 tracking-widest sm:py-6 sm:px-4">
      <div class="area1 mb-10 sm:text-sm">
        <div class="text-[32px] font-bold text-center mb-10 sm:text-2xl">ポイントバック率</div>
        <div class="border-l-4 border-primary pl-4 mb-4 text-2xl font-bold sm:text-xl">ポイントバック率</div>
        <div>受取額の0.2%</div>
        <div>送付額の0.6%</div>
        <div class="my-5">合計<span class="text-redDC font-bold text-2xl sm:text-base">0.8%</span></div>
        <div class="bg-[#0064FF] text-white p-2 tracking-widest">例）1,000ptを加盟店から受取り、同額を加盟店へ送付すれば、受取2pt+送付6ptで合計8ptのポイントバックが得られます。</div>
        <div class="mt-5">1,000pt → <span class="text-redDC font-bold text-2xl sm:text-xl"> 8ptバック！</span></div>
        <div class="mt-5">50,000pt → <span class="text-redDC font-bold text-2xl sm:text-xl"> 400ptバック！</span></div>
        <div class="mt-5">500,000pt → <span class="text-redDC font-bold text-2xl sm:text-xl"> 4,000ptバック！</span></div>
      </div>
      <div class="area2 mb-10">
        <div class="border-l-4 border-primary pl-4 mb-4 text-2xl font-bold sm:text-xl">ポイントバック月間上限額</div>
        <div class="text-redDC font-bold text-2xl sm:text-sm">20,000pt</div>
      </div>
      <div class="area3 mb-10">
        <div class="border-l-4 border-primary pl-4 mb-4 text-2xl font-bold sm:text-xl">集計期間と進呈日</div>
        <div class="sm:text-sm">集計期間：毎月1日〜月末</div>
        <div class="sm:text-sm">進呈日：翌月10日頃</div>
      </div>
    </div>
  </PageLayerGray>
  <PageLayerWhite>
    <div id="card3" class="px-8 tracking-widest sm:py-6 sm:px-4">
      <div class="text-[32px] font-bold text-center mb-10 sm:text-xl">ポイント送付活用方法</div>
      <div class="sm:text-sm">加盟店からの出金するとき、現金化してまた入会すると、手数料や処理時間がもったいないです。</div>
      <div class="sm:text-sm">加盟店から出金した後、YOXIBITから加盟店へ送付すれば「完全無料」で「即時に完了」し、さらに使う程に「ポイントが貯まります」。</div>
      <div class="sm:text-sm">きっと、こんなお得なペイメントサービスは、世界中でYOXIBITだけでしょう！</div>
      <div class="sm:text-sm">ぜひ「ポイント送付」を活用して「世界一のお得さ」を実感してください。</div>
      <div class="text-center my-16">
        <button
          type="submit"
          class="w-80 h-14 bg-primary block-vector-right px-12 rounded-lg font-bold sm:w-[311px]" 
        >初めての方へ
        </button>
      </div>
    </div>
  </PageLayerWhite>
  <PageLayerGray>
    <div id="card4" class="px-8 tracking-widest sm:py-6 sm:px-4">
      <div class="text-[32px] font-bold text-center mb-10">適正利用のお願い</div>
      <div>ポイントバックは、YOXIBITと加盟店様のサービスの利用促進を目的として提供されています。</div>
      <div class="mb-10">ポイントバック獲得自体で利益を得ることを主目的にして、加盟店様のサービスを最低限しか利用しないようなことは、目的外利用としてお断りいたしますのでご承知おきください。</div>
      <div>加盟店様での、入金額に対するプレイ額の平均値は8-10倍以上です。（100ドル入金なら800〜1,000ドル程度のプレイ。加盟店でもらえるボーナスを受け取ってのプレイも含む「長期的な平均」です。平均ですのでそれより少ないときもあると思います）</div>
      <div class="mb-10">「等倍ベット」や「ローリング」と言われる行為を繰り返すと、通常のサービス利用目的では無いと判断され口座凍結等の対象となる可能性があります。この問題はプレイ額を増やすことによって防げます。</div>
      <div>私たちYOXIBITは、お客さまと長年に渡ってお付き合いさせていただきたいと、心から願っております。サービスの適正利用にご理解、ご協力をお願いします。</div>
      <div>引き続きサービス向上に努めてまいります。今後とも、どうぞよろしくお願いします。</div>
    </div>
  </PageLayerGray>
  <Footer />
</template>

<script setup lang="ts">
import PageLayerWhite from '@/components/yoxibit/pageLayerWhite.vue';
import PageLayerGray from '@/components/yoxibit/pageLayerGray.vue';
import Nav from '@/components/yoxibit/nav.vue';
import Footer from '@/components/yoxibit/footer.vue';
</script>
