<template>
  <div>
    <Nav />
    <div class="manual text-secondary">
      <div class="bg-gray96 py-6 sm:py-4">
        <div class="max-w-[1184px] mx-auto px-4 py-4 sm:w-full flex justify-center">
          <div class="flex sm:flex-col justify-center max-auto w-full">
            <button
              type="button"
              class="vector mr-2 h-14 rounded-lg bg-white px-12 font-bold sm:my-2 flex-1 hover:opacity-50 sm:rounded sm:py-5 sm:mr-0"
            >
              YOXIBITの仕組み？
            </button>
            <button
              type="button"
              class="vector h-14 rounded-lg bg-white px-12 font-bold sm:my-2 flex-1 hover:opacity-50 sm:rounded sm:py-5"
            >
              YOXIBITの上手な使い方
            </button>
          </div>
        </div>
      </div>
      <PageLayerWhite>
        <div
          class="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 sm:w-full my-10 sm:my-0 sm:px-0"
        >
          <div class="title text-center font-bold text-[32px]">YOXIBITの仕組み</div>
          <div class="my-10 h-80 w-full bg-grayD2 sm:h-24"></div>
          <div class="w-full font-normal sm:text-sm">
            YOXIBITは、ユーザーと加盟店間の資金（ポイント）の購入・受取・送付・換金ができるサービスです。
          </div>
        </div>
      </PageLayerWhite>
      <PageLayerGray>
        <div class="max-w-screen-xl mx-auto sm:w-full my-10 sm:my-0">
          <div class="mb-10">
            <h3 class="undefined text-center text-[32px] font-bold tracking-widest sm:text-2xl">
              <span class="block">YOXIBITの上手な使い方</span>
            </h3>
          </div>
          <div class="mb-10">
            <div class="mb-6">
              <h3 class="mb-4 border-l-4 border-primary py-1 pl-4 text-2xl font-bold sm:text-xl">
                YOXIBITは『速くておトク』なサービスです！
              </h3>
            </div>
            <div class="mb-8 flex flex-col justify-center space-y-8 sm:space-y-6">
              <ManualOutline
                title="ITEM TITLE"
                text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualOutline
                title="ITEM TITLE"
                text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualOutline
                title="ITEM TITLE"
                text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualOutline
                title="ITEM TITLE"
                text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
            </div>
          </div>
          <div class="mb-10">
            <div class="mb-6">
              <div class="mb-4">
                <h3 class="mb-4 border-l-4 border-primary py-1 pl-4 text-2xl font-bold sm:text-xl">
                  YOXIBITの機能
                </h3>
              </div>
            </div>
            <div class="flex-col space-y-6">
              <ManualFeature
                title="ITEM TITLE"
                content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualFeature
                title="ITEM TITLE"
                content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualFeature
                title="ITEM TITLE"
                content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualFeature
                title="ITEM TITLE"
                content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
              <ManualFeature
                title="ITEM TITLE"
                content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."
              />
            </div>
          </div>
        </div>
      </PageLayerGray>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Nav from '@/components/yoxibit/nav.vue';
import Footer from '@/components/yoxibit/footer.vue';
import PageLayerWhite from '@/components/yoxibit/pageLayerWhite.vue';
import PageLayerGray from '@/components/yoxibit/pageLayerGray.vue';
import ManualOutline from '@/components/yoxibit/manualOutline.vue';
import ManualFeature from '@/components/yoxibit/manualFeature.vue';
</script>

<style lang="scss" scoped></style>
