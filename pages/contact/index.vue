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
            自 3 月起，我們將安排全台院線映演，每月更新放映場次，詳細資訊請參見
            <p
              @click="togglePopup"
              class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer"
              :style="{ color: textColor }"
            >
              最新場次
            </p>
            。目前已成功舉辦超過十場滿座放映，期待您持續關注並支持！
          </div>
        </div>
        <div class="w-full sm:w-[676px] flex flex-col">
          <div
            class="w-full h-auto py-2 flex items-center px-3 sm:px-6 bg-[#d0bc9c] text-white text-[15px] sm:text-[17px] font-noto font-semibold tracking-[2px]"
          >
            Q: 如果想包場，有什麼條件呢？
          </div>
          <div
            class="w-full py-5 px-4 sm:px-6 bg-white text-[#999] text-[14.5px] font-noto tracking-[0.5px] leading-[30px] text-justify"
          >
            若您有意包場，請填寫
            <NuxtLink
              href="/booking"
              class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer"
            >
              包場申請表單
            </NuxtLink>
            ，我們的包場專員將儘快與您聯繫並提供更多詳情。
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
            >。如有興趣將本片應用於教學現場，請參考我們提供的<NuxtLink
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
            我們預計於 6 月起推出《由島至島》個人收藏版
            USB，敬請期待並支持！更多資訊將在即將公布的預購資訊中提供。歡迎追蹤我們的粉絲專頁，得到最新消息。
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
            您可以透過以下方式支持我們：<br /><br />
            走入電影院觀影，並幫忙推薦給親朋好友，持續關注我們的院線映演消息。<br />
            若您有意收藏電影 USB，請來信或私訊我們，我們將第一時間提供預購訊息。<br />
            若您有相關經驗或故事，並希望分享與「由島至島」的連結，歡迎來信或私訊我們。<br /><br />
            再次感謝所有支持《由島至島》的觀眾
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
