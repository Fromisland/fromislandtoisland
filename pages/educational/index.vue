<script setup>
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }
</script>
<style>
  .bg-shoes {
    background-image: url('/images-webp/stills/still_1.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.08;
  }
  .label {
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
</style>
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
          Educational Presentation Edition
        </p>
        <p class="font-shippori text-[#999] text-[30px] sm:text-[44px] tracking-[8px]">教育公播</p>
      </div>
      <div class="flex flex-col mt-12 mb-20 gap-y-11 items-center">
        <div
          class="sm:bg-white w-full sm:w-[1075px] h-auto relative flex flex-col items-center sm:mt-72"
        >
          <div class="flex gap-x-5 relative sm:absolute sm:-top-[270px] sm:left-[190px]">
            <img
              src="/images-webp/poster_man.webp"
              alt="poster"
              class="w-[143px] sm:w-[345px] h-[204px] sm:h-[492px]"
            />
            <img
              src="/images-webp/poster_woman.webp"
              alt="poster"
              class="w-[143px] sm:w-[345px] h-[204px] sm:h-[492px]"
            />
          </div>
          <div class="flex flex-col px-10 sm:py-9 sm:pl-[60px] mt-8 sm:mt-64 items-center">
            <p
              class="font-shippori text-[#999] text-[22px] sm:text-[28px] tracking-[4px] text-center"
            >
              《由島至島》<br />
              教育公播版說明
            </p>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              教育公播放映費為 15000 元，
              <span class="sm:hidden"><br /></span>
              含一份防拷 USB 與公播證明書。<br />
              僅提供非營利之教育場合公開播映使用。
            </p>
            <p
              class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] leading-[30px] font-semibold mt-10 text-center"
            >
              欲購買教育公播版，<span class="sm:hidden"><br /></span>請聯繫由島至島 E-mail
            </p>
            <p
              class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] leading-[30px] font-semibold text-center"
            >
              For overseas purchases,<span class="sm:hidden"><br /></span> please contact us.
            </p>
            <div
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              <span class="font-semibold">收件者：</span
              ><span class="sm:hidden"><br /></span> fromislandtoisland2024@gmail.com<br />
              <span class="font-semibold">信件主旨：</span
              ><span class="sm:hidden"><br /></span> 【教育公播】由島至島_單位名稱_縣市
            </div>
            <p
              class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
            >
              信件內容請包涵：<span class="sm:hidden"><br /></span>   1. 單位簡介
              <span class="sm:hidden"><br /></span> 2. 預計播映的時間<span class="sm:hidden"
                ><br
              /></span>
              3. 預計參與播映的人數<br />
              4. 是否需安排導演映後（出席與交通費另計）<span class="sm:hidden"><br /></span>
              5. 其他特別需求。 (若無則免)
            </p>
            <img
              src="/images/usb_1.png"
              alt="usb"
              class="w-full sm:w-[737px] h-auto sm:h-[241px] mt-16"
            />
            <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold mt-10">
              USB 規格說明
            </p>
            <div
              class="w-full sm:w-[737px] font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 sm:mb-[68px] flex flex-col"
            >
              <div class="flex">
                <span class="shrink-0">·</span>
                <span class="flex-1 pl-2"
                  >USB 僅提供電腦讀取，不支援 DVD 播放器或部分電視設備的USB插槽。</span
                >
              </div>
              <div class="flex">
                <span class="shrink-0">·</span>
                <span class="flex-1 pl-2"
                  >為 Type-A 接頭，裝載 4K 中英／日英字幕影片與智慧選單。</span
                >
              </div>
              <div class="flex">
                <span class="shrink-0">·</span>
                <span class="flex-1 pl-2"
                  >影片總長為 4 小時 50 分鐘。分為上集 2 小時 22 分鐘與下集 2 小時 27 分鐘。</span
                >
              </div>
              <div class="flex">
                <span class="shrink-0">·</span>
                <span class="flex-1 pl-2">系統規格要求如下：</span>
              </div>

              <div class="mt-8">
                <p class="font-semibold">播放平台 Windows</p>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">Windows系統 : Win 10 / 11</span>
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">支援高畫質 4K</span>
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">CPU: Intel i5 處理器以上或更高</span>
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">記憶體需求: 8GB 以上（HD畫質以上建議16GB）</span>
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">需已安裝 Net Framework 4.0 以上</span>
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2"
                    >需安裝 Visual C++ 可轉散發套件（會自動偵測與安裝）</span
                  >
                </div>
              </div>

              <div class="mt-8">
                <p class="font-semibold">播放平台 MAC</p>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2"
                    >MAC 系統 : macOS High Sierra 10.15 / macOS Mojave 10.15 / macOS Catalina
                    10.15.7 / macOS Big Sur 11.6.6 / macOS Monterey 12.4 / MacOS Ventura 13.6</span
                  >
                </div>
                <div class="flex">
                  <span class="shrink-0">·</span>
                  <span class="flex-1 pl-2">支援高畫質 4K</span>
                </div>
              </div>

              <p
                class="text-[#D0BC9C] font-semibold mt-10 border-b border-[#D0BC9C] pb-10 sm:border-none"
              >
                USB 內含防盜機制，無法刪除或新增檔案
              </p>
            </div>
          </div>
        </div>
        <div class="w-full px-10 sm:w-[1075px] h-auto flex flex-col items-center sm:mt-14 mb-16">
          <p class="font-shippori text-[#999] text-[22px] sm:text-[28px] tracking-[4px]">
            保固說明
          </p>
          <div class="flex flex-col sm:flex-row gap-5 mt-14">
            <div
              class="bg-white w-full sm:w-[345px] h-auto sm:h-[280px] flex flex-col items-center p-9"
            >
              <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
                七天內
              </p>
              <p
                class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
              >
                若七天內晶片讀取有問題且非人為因素，將免費進行換貨。預購產品不予退貨退款，僅可進行換貨。運費部分：廠商負擔來回運費（只限台灣本島地區）。
              </p>
            </div>
            <div
              class="bg-white w-full sm:w-[345px] h-auto sm:h-[280px] flex flex-col items-center p-9"
            >
              <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
                一年內
              </p>
              <p
                class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
              >
                出貨一年內針對晶片本身非人為因素損壞保固，進行維修換貨處理，外觀損傷則不在保固範圍之中。運費部分：請客戶端自付寄回廠之運費，廠商負擔維修後回件貨運費（只限台灣本島地區）。
              </p>
            </div>
            <div
              class="bg-white w-full sm:w-[345px] h-auto sm:h-[280px] flex flex-col items-center p-9"
            >
              <p class="font-noto text-[20px] font-semibold tracking-[2px] text-[#d0bc9c]">
                超過一年
              </p>
              <p
                class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-7 text-justify"
              >
                如衍生維修費、材料費、雷雕、印刷、運費等，依當下狀況另行報價，再由客戶決定是否維修寄回。運費部分：請客戶端自付寄回廠之運費，若不維修但需寄回，仍需支付廠商回件貨運費。
              </p>
            </div>
          </div>
          <p
            class="font-noto text-[14.5px] text-[#999] tracking-[0.5px] leading-[30px] mt-10 text-center"
          >
            製作單位：蜂鳥影像 & 三穩國際 <br />
            客服專線：02-7722-1799<br />
            電子信箱：sales@3ausb.com
          </p>
        </div>
      </div>
    </div>
    <Footer bgColor="white" textColor="#757575" :opacity="80" />
  </div>
</template>
