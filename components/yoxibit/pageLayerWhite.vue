<template>
  <div class="layer-white flex flex-col">
    <div class="flex-grow flex-1 overflow-x-hidden">
      <div class="bg-white font-['Murecho'] px-4 py-20 sm:py-10">
        <div class="max-w-[1184px] mx-auto">
          <slot>
            <router-view/>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>
