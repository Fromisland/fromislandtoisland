<script setup>
  import { ref } from 'vue'

  const showPopup = ref(false)

  const togglePopup = () => {
    showPopup.value = !showPopup.value
  }

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
      <div class="flex gap-x-16 sm:gap-x-[77px]">
        <a
          href="https://www.facebook.com/fromislandtoisland"
          target="_blank"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 transition-opacity duration-300"
          :style="{ color: textColor }"
        >
          由島至島
        </a>
        <div
          @click="togglePopup"
          class="font-shippori text-[18px] tracking-[10px] opacity-80 hover:opacity-100 cursor-pointer"
          :style="{ color: textColor }"
        >
          最新場次
        </div>
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

  <!-- Popup -->
  <div
    v-if="showPopup"
    class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    @click="togglePopup"
  >
    <div class="relative max-w-[90%] max-h-[90vh]">
      <img
        src="https://res.cloudinary.com/daznz2uvo/image/upload/v1740982012/3%E6%9C%88%E7%AC%AC%E4%B8%80%E6%B3%A2%E5%9C%96%E6%96%87_epboly.png"
        alt="最新場次"
        class="max-w-full max-h-[90vh] object-contain"
      />
      <button
        @click.stop="togglePopup"
        class="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-70"
      >
        ✕
      </button>
    </div>
  </div>
</template>
