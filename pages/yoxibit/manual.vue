<template>
  <div>
    <Nav />
    <div class="manual">
      <div class="bg-gray96 py-4">
        <div class="max-w-screen-xl mx-auto w-3/4 px-4 py-4 sm:w-full">
          <div class="flex sm:flex-col">
            <button
              type="button"
              class="arrow-down mr-2 h-14 w-full rounded-lg bg-white px-12 font-bold sm:my-2"
            >
              YOXIBITの仕組み？
            </button>
            <button
              type="button"
              class="arrow-down h-14 w-full rounded-lg bg-white px-12 font-bold sm:my-2"
            >
              YOXIBITの上手な使い方
            </button>
          </div>
        </div>
      </div>
      <PageLayerWhite>
        <div
          class="max-w-screen-xl mx-auto flex w-3/4 flex-col items-center justify-center px-4 sm:w-full"
        >
          <div class="title text-center font-bold">YOXIBITの仕組み</div>
          <div class="my-10 h-80 w-full bg-grayD2 sm:h-24"></div>
          <div class="w-full font-normal sm:text-sm">
            YOXIBITは、ユーザーと加盟店間の資金（ポイント）の購入・受取・送付・換金ができるサービスです。
          </div>
        </div>
      </PageLayerWhite>
      <PageLayerGray>
        <div class="max-w-screen-xl mx-auto w-3/4 sm:w-full">
          <div class="mb-10">
            <h3 class="undefined text-center text-3xl font-bold tracking-widest sm:text-2xl">
              <span class="block">YOXIBITの上手な使い方</span>
            </h3>
          </div>
          <div class="mb-8">
            <div class="mb-8">
              <h3 class="mb-4 border-l-4 border-primary py-1 pl-4 text-2xl font-bold sm:text-xl">
                YOXIBITは『速くておトク』なサービスです！
              </h3>
            </div>
            <div class="mb-8 flex flex-col justify-center space-y-4">
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
          <div class="mb-8">
            <div class="mb-8">
              <div class="mb-4">
                <h3 class="mb-4 border-l-4 border-primary py-1 pl-4 text-2xl font-bold sm:text-xl">
                  YOXIBITの機能
                </h3>
              </div>
            </div>
            <div class="flex-col space-y-8">
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
