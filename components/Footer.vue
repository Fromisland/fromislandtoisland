<script setup>
  defineProps({
    textColor: {
      type: String,
      default: 'white', // Default text color
    },
    bgColor: {
      type: String,
      default: 'black', // Default background color
    },
    opacity: {
      type: Number,
      default: 100, // Default opacity (100%)
    },
    marginTop: {
      type: String,
      default: '0', // Default margin top
    },
    hoverTextColor: {
      type: String,
      default: '#aaa', // Default hover text color
    },
  })
</script>

<template>
  <div
    class="w-full h-[190px] sm:h-[146px] flex sm:px-20 items-center justify-center z-0"
    :style="{
      backgroundColor: bgColor,
      opacity: opacity / 100,
      marginTop: marginTop,
    }"
  >
    <div class="max-w-[1440px] w-full flex flex-col sm:flex-row items-center justify-between">
      <div class="flex gap-x-6 sm:gap-x-[24px]">
        <a
          href="https://www.facebook.com/fromislandtoisland"
          target="_blank"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          由島至島
        </a>
        <a
          href="https://www.ptsplus.tv/zh/programs/4e04d1ab-6464-4fca-bb65-c28dc51c4aee"
          target="_blank"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          公視＋
        </a>
        <a
          href="https://giloo.ist/zh-TW/episodes/2417/"
          target="_blank"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          Giloo
        </a>
      </div>
      <div class="flex flex-col-reverse items-center sm:flex-row gap-x-[30px]">
        <a
          href="https://siddharam.com/"
          target="_blank"
          class="text-[12px] tracking-[1px] opacity-80 mt-1 sm:mt-0"
          :style="{ color: textColor }"
        >
          網站製作｜西打藍好內容有限公司
        </a>
        <div class="font-wix text-[13px] opacity-80 mt-8 sm:mt-0" :style="{ color: textColor }">
          Copyright © HUMMINGBIRD Production
        </div>
      </div>
    </div>
  </div>
</template>
