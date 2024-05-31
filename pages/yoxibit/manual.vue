<template>
  <div>
    <Nav />
    <div class="manual">
      <div class="bg-gray96 py-4">
        <div class="max-w-screen-xl mx-auto px-4 py-4">
          <div class="flex">
            <button
              type="button"
              class="btn-style2 px-12 rounded-lg font-bold mr-2 arrow-down"
            >YOXIBITの仕組み？
            </button>
            <button
              type="button"
              class="btn-style2 px-12 rounded-lg font-bold arrow-down" 
            >YOXIBITの上手な使い方
            </button>
          </div>
        </div>
      </div>
      <PageLayerWhite>
        <div class="flex flex-col justify-center items-center max-w-screen-xl mx-auto px-4">
            <div class="title font-bold text-center">YOXIBITの仕組み</div>
            <div class="w-full h-80 bg-grayD2 my-10"></div>
            <div class="w-full font-normal">YOXIBITは、ユーザーと加盟店間の資金（ポイント）の購入・受取・送付・換金ができるサービスです。</div>
        </div>
      </PageLayerWhite>
      <PageLayerGray>
        <div class="max-w-screen-xl mx-auto">
            <div class="mb-6 md:mb-10">
            <h3 class="text-center font-bold tracking-widest undefined text-2xl md:text-3xl"> <span class="block">YOXIBITの上手な使い方</span>
            </h3>
            </div>
            <div class="mb-8">
                <div class="mb-8">
                    <h3 class="font-bold mb-4 border-l-4 border-primary pl-4 text-xl md:text-2xl py-1">YOXIBITは『速くておトク』なサービスです！
                    </h3>
                </div>
                <div class="mb-8 flex flex-col space-y-4 justify-center">
                    <ManualOutline title="ITEM TITLE" text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualOutline title="ITEM TITLE" text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualOutline title="ITEM TITLE" text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualOutline title="ITEM TITLE" text="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                </div>
            </div>
            <div class="mb-8">
                <div class="mb-8">
                    <div class="mb-4">
                    <h3 class="font-bold mb-4 border-l-4 border-primary pl-4 text-xl md:text-2xl py-1">YOXIBITの機能</h3>
                    </div>
                </div>
                <div class="flex-col space-y-8">
                    <ManualFeature  title="ITEM TITLE" content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualFeature  title="ITEM TITLE" content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualFeature  title="ITEM TITLE" content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualFeature  title="ITEM TITLE" content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                    <ManualFeature  title="ITEM TITLE" content="Duis felis ante, varius in neque eu, tempor suscipit sem. Maecenas ullamcorper gravida sem sit amet cursus. Etiam pulvinar purus vitae justo pharetra consequat. Mauris id mi ut arcu feugiat maximus. Mauris consequat tellus id tempus aliquet."/>
                </div>
            </div>
        </div>
      </PageLayerGray>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Nav from '../../components/yoxibit/nav.vue';
import Footer from '../../components/yoxibit/footer.vue';
import PageLayerWhite from '../../components/yoxibit/pageLayerWhite.vue';
import PageLayerGray from '../../components/yoxibit/pageLayerGray.vue';
import ManualOutline from '../../components/yoxibit/manualOutline.vue';
import ManualFeature from '../../components/yoxibit/manualFeature.vue';
</script>

<style lang="scss" scoped>

</style>