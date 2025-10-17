<script setup>
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  import { ref } from 'vue'

  const showPopup = ref(false)

  const togglePopup = () => {
    showPopup.value = !showPopup.value
  }
</script>
<template>
  <div class="flex flex-col bg-[#f6f6f6] w-screen h-auto min-h-screen items-center">
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80">
      <div class="flex flex-col items-center w-full mt-12 sm:mt-[233px]">
        <p
          class="font-amiri italic text-[#999] tracking-[1px] sm:tracking-[2px] text-[20px] sm:text-[28px]"
        >
          Contact Us
        </p>
        <p class="font-shippori text-[#999] text-[30px] sm:text-[44px] tracking-[8px]">聯絡我們</p>
      </div>
      <img
        src="/images/stills/still_16.png"
        alt="booking"
        class="w-full sm:w-[676px] h-auto sm:h-[389px] mt-12"
      />
      <div class="flex flex-col px-10 py-9 items-center gap-y-8">
        <p class="font-shippori text-[#999] text-[22px] sm:text-[28px] tracking-[4px] text-center">
          《由島至島》<span class="sm:hidden"><br /></span>常見問答
        </p>
        <div class="w-full sm:w-[676px] flex flex-col">
          <div
            class="w-full h-auto py-2 flex items-center px-3 sm:px-6 bg-[#d0bc9c] text-white text-[15px] sm:text-[17px] font-noto font-semibold tracking-[2px]"
          >
            Q: 是否還有電影院放映場次？
          </div>
          <div
            class="w-full py-5 px-4 sm:px-6 bg-white text-[#999] text-[14.5px] font-noto tracking-[0.5px] leading-[30px] text-justify"
          >
          正式電影院上映已告一段落，如有未來有任何公開放映消息，將於
            <a
              class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer"
              href="https://www.facebook.com/fromislandtoisland"
              target="_blank"
            >
              由島至島 Facebook 粉絲專頁
            </a>
              宣布，歡迎追蹤按讚。
          </div>
        </div>
        <div class="w-full sm:w-[676px] flex flex-col">
          <div
            class="w-full h-auto py-2 flex items-center px-3 sm:px-6 bg-[#d0bc9c] text-white text-[15px] sm:text-[17px] font-noto font-semibold tracking-[2px]"
          >
            Q: 我是老師，可否邀請到校放映與演講？
          </div>
          <div
            class="w-full py-5 px-4 sm:px-6 bg-white text-[#999] text-[14.5px] font-noto tracking-[0.5px] leading-[30px] text-justify"
          >
            若您希望在校園內舉行放映活動，請參閱
            <NuxtLink
              href="/educational"
              class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer"
              >教育公播版購買資訊</NuxtLink
            >。如有興趣將本片應用於教學現場，請參考我們提供的 <NuxtLink
              href="/lesson"
              class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer"
              >教育推廣計畫</NuxtLink
            >。
          </div>
        </div>
        <div class="w-full sm:w-[676px] flex flex-col">
          <div
            class="w-full h-auto py-2 flex items-center px-3 sm:px-6 bg-[#d0bc9c] text-white text-[15px] sm:text-[17px] font-noto font-semibold tracking-[2px]"
          >
            Q: 如果想收藏電影，會發售嗎？
          </div>
          <div
            class="w-full py-5 px-4 sm:px-6 bg-white text-[#999] text-[14.5px] font-noto tracking-[0.5px] leading-[30px]"
          >
            由島至島個人收藏版 USB 已經上市，台灣地區欲購買請填寫
            <a href="https://forms.gle/qGV7da6gXPUdfS2w6" target="_blank" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">購買表單</a>
            ，離島或國外購買請來
            <a href="mailto:fromislandtoisland2024@gmail.com" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">信</a>
            ，將為您個別服務。
          </div>
        </div>
        <div class="w-full sm:w-[676px] flex flex-col">
          <div
            class="w-full h-auto py-2 flex items-center px-4 sm:px-6 bg-[#d0bc9c] text-white text-[15px] sm:text-[17px] font-noto font-semibold tracking-[2px]"
          >
            Q: 如果想支持導演或蜂鳥影像，可以怎麼做呢？
          </div>
          <div
            class="w-full py-5 px-4 sm:px-6 bg-white text-[#999] text-[14.5px] font-noto tracking-[0.5px] leading-[30px]"
          >
            可以收藏電影USB、或線上付費觀影。<br />
            若您有相關經驗或故事，並希望分享與「由島至島」的連結，歡迎來信或私訊我們。<br /><br />
            追蹤按讚
            <a href="https://www.facebook.com/fromislandtoisland" target="_blank" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">由島至島 FB 粉絲專頁</a>
            、
            <a href="https://www.facebook.com/hummingbirdproductiontaiwan" target="_blank" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">蜂鳥影像 FB 粉絲專頁</a>
            ，獲得最新作品訊息。
          </div>
        </div>
      </div>
      <div
        class="w-full sm:w-[676px] flex justify-center gap-x-9 mt-6 sm:mt-20 mb-16 sm:mb-[118px]"
      >
        <a href="https://www.facebook.com/fromislandtoisland" target="_blank"
          ><img src="/images/fb.svg" alt="facebook" class="w-13 h-13 hover:opacity-80"
        /></a>
        <a href="https://www.instagram.com/from_island_to_island_2024/"
          ><img src="/images/ig.svg" alt="instagram" class="w-13 h-13 hover:opacity-80"
        /></a>
        <a href="mailto:fromislandtoisland2024@gmail.com">
          <img src="/images/email.svg" alt="email" class="w-13 h-13 hover:opacity-80" />
        </a>
      </div>
    </div>
  </div>
  <Footer bgColor="white" textColor="#757575" :opacity="80" />
</template>
