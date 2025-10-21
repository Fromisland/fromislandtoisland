<template>
  <div
    class="fixed top-0 right-0 h-full w-full sm:w-[710px] bg-black/90 transform translate-x-full z-30 flex flex-col justify-center"
    ref="menuRef"
  >
    <div class="absolute top-12 right-10">
      <div class="cursor-pointer w-8 sm:w-10" @click="emit('close')">
        <img src="/public/images/xmark.svg" />
      </div>
    </div>
    <div class="flex flex-col items-end p-12 text-white">
      <nav class="flex flex-col items-end space-y-12 sm:space-y-20 w-full">
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]">
              由島至島
            </p>
            <p
              class="font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"
            >
              FILM
            </p>
          </div>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/film"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >電影介紹</NuxtLink
            >
            <NuxtLink
              to="/reports"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >座談與報導</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]">
              主題教案
            </p>
            <p
              class="font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"
            >
              LESSON
            </p>
          </div>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/lesson"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >教案介紹</NuxtLink
            >
            <NuxtLink
              to="/lesson/one"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >移動與邊界</NuxtLink
            >
            <NuxtLink
              to="/lesson/two"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >加害與被害</NuxtLink
            >
            <NuxtLink
              to="/lesson/three"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >共犯結構</NuxtLink
            >
            <NuxtLink
              to="/lesson/four"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >克服過去</NuxtLink
            >
            <NuxtLink
              to="/lesson/five"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >為什麼要記憶</NuxtLink
            >
          </div>
        </div>
        <div class="flex justify-between w-full items-center">
          <div class="flex flex-col items-center w-1/2 ml-1">
            <p class="font-shippori text-[22px] sm:text-[24px] tracking-[8px] sm:tracking-[12px]">
              聯絡資訊
            </p>
            <p
              class="font-amiri italic text-[13px] sm:text-[17px] tracking-[3px] sm:tracking-[4px] mt-2"
            >
              CONTACT
            </p>
          </div>
          <div class="flex flex-col items-start space-y-6 w-1/2 ml-8">
            <NuxtLink
              to="/educational"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >教育公播</NuxtLink
            >
            <NuxtLink
              to="/booking"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >個人收藏</NuxtLink
            >
            <NuxtLink
              to="/contact"
              class="font-noto text-[15px] sm:text-[17px] tracking-[3px] hover:opacity-50"
              >聯絡我們</NuxtLink
            >
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
  const menuRef = ref(null)
  const { $gsap: gsap } = useNuxtApp()
  
  // 點選外部區域關閉選單
  const emit = defineEmits(['close'])

  const show = () => {
    gsap.to(menuRef.value, {
      x: 0,
      duration: 0.5,
      ease: 'power2.out',
    })
    // 確保動畫完成後才開始監聽點選外部區域
    setTimeout(() => {
      document.addEventListener('click', handleOutsideClick)
    }, 500)
  }

  const hide = () => {
    gsap.to(menuRef.value, {
      x: '100%',
      duration: 0.5,
      ease: 'power2.in',
    })
    document.removeEventListener('click', handleOutsideClick)
  }

  const handleOutsideClick = (event) => {
    // 檢查點擊的目標是否在選單外部
    if (menuRef.value && !menuRef.value.contains(event.target)) {
      emit('close')
    }
  }

  // 清理事件監聽
  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
  })

  defineExpose({ show, hide })
</script>
