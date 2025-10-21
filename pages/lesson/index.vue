<script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const fadeBoxElements = document.querySelectorAll('.fade-box')

    // Setup fade-in effects for boxes with stagger
    fadeBoxElements.forEach((element, index) => {
      gsap.from(element, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: index * 0.1, // Add stagger effect
        scrollTrigger: {
          trigger: element,
          start: 'top 75%',
          toggleActions: 'play none none none',
          once: true,
        },
      })
    })
  })
</script>
<style>
  .bg-shadow {
    background-image: url('/images-webp/bg_shadow.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.05;
  }
  .label {
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
</style>
<template>
  <div class="flex flex-col bg-white w-full h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shadow z-0"></div>
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80 px-10">
      <div
        class="fade-box flex flex-col sm:flex-row w-full sm:px-[184px] sm:pt-[233px] justify-between items-center sm:items-end mt-10"
      >
        <div class="flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-[#757575] tracking-[6px] text-lg sm:text-[28px]">
            LESSON
          </p>
          <p class="font-shippori text-[#757575] text-[36px] sm:text-[44px] tracking-[8px]">
            主題教案
          </p>
        </div>
        <div
          class="flex flex-col w-full sm:w-auto gap-y-3 items-center sm:items-start mt-10 sm:mt-0"
        >
          <p
            class="font-noto font-semibold text-[#757575] text-[20px] tracking-[2px] sm:tracking-[4px]"
          >
            《由島至島》教育推廣計畫
          </p>
          <p class="font-noto text-[#757575] text-[13px] tracking-[1.5px] leading-[30px]">
            從《由島至島》中節選出 5 部主題短片發展搭配教案， 免費開放老師下載作為課程教授素材。
          </p>
        </div>
      </div>
      <div class="flex flex-col my-12 gap-y-11">
        <NuxtLink
          to="/lesson/one"
          class="fade-box w-full sm:w-[1075px] h-auto sm:h-[227px] bg-white rounded-[15px] shadow-md flex flex-col sm:flex-row relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 -right-[1px] label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              1
            </p>
          </div>
          <div class="w-full sm:w-[365px] h-[204px] sm:h-[227px]">
            <img
              src="/images-webp/stills/lesson_1.webp"
              alt="lesson"
              class="w-full sm:w-[365px] h-[204px] sm:h-[227px] object-cover rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-r-[0px]"
            />
          </div>
          <div class="flex flex-col py-9 px-[26px] sm:pl-[60px]">
            <div
              class="flex flex-col sm:flex-row font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]"
            >
              <p>移動與邊界—</p>
              <p>旅外台灣人</p>
            </div>
            <p class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-4">
              探討跨境移動後，國籍與身份對於一個人的影響。
              <span class="hidden sm:inline"><br /></span>
              二戰期間，旅居荷屬印尼、英屬新加坡與馬來亞的台灣人
              <span class="hidden sm:inline"><br /></span>
              被視為敵國（日本）子民，遭遣送至澳洲集中營的經歷。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/two"
          class="fade-box w-full sm:w-[1075px] h-auto sm:h-[227px] bg-white rounded-[15px] shadow-md flex flex-col sm:flex-row relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 -right-[1px] label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              2
            </p>
          </div>
          <div class="w-full sm:w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_2.webp"
              alt="lesson"
              class="w-full sm:w-[365px] h-[204px] sm:h-[227px] object-cover rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-r-[0px]"
            />
          </div>
          <div class="flex flex-col pb-6 sm:py-9 px-[26px] sm:pl-[60px]">
            <div
              class="flex flex-col sm:flex-row font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]"
            >
              <p>加害與被害—</p>
              <p>楊樹木</p>
            </div>
            <p class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-4">
              討論台籍日本兵戰時參與的行動，以及其後代承擔的歷史責任。
              <span class="hidden sm:inline"><br /></span>
              至馬來亞成家立業的台灣人楊樹木被動員參與日軍行動後遭判刑處決，
              <span class="hidden sm:inline"><br /></span>
              而其後代面對親友疏遠與鄰里敵視，努力與父祖輩的罪行和解與共處。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/three"
          class="fade-box w-full sm:w-[1075px] h-auto sm:h-[227px] bg-white rounded-[15px] shadow-md flex flex-col sm:flex-row relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 -right-[1px] label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              3
            </p>
          </div>
          <div class="w-full sm:w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_3.webp"
              alt="lesson"
              class="w-full sm:w-[365px] h-[204px] sm:h-[227px] object-cover rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-r-[0px]"
            />
          </div>
          <div class="flex flex-col pb-6 sm:py-9 px-[26px] sm:pl-[60px]">
            <div
              class="flex flex-col sm:flex-row font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]"
            >
              <p>共犯結構—</p>
              <p>戰爭機器</p>
            </div>
            <p class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-4">
              揭示國家共犯結構如何形塑戰爭機器。
              <span class="hidden sm:inline"><br /></span>
              日本藉宣揚神道教、展示台灣現代化進程與和台日女性成婚機會，
              <span class="hidden sm:inline"><br /></span>
              鼓勵馬來青年赴死，馬來亞內部卻潛藏馬華對日立場分歧的危機。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/four"
          class="fade-box w-full sm:w-[1075px] h-auto sm:h-[227px] bg-white rounded-[15px] shadow-md flex flex-col sm:flex-row relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 -right-[1px] label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              4
            </p>
          </div>
          <div class="w-full sm:w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_4.webp"
              alt="lesson"
              class="w-full sm:w-[365px] h-[204px] sm:h-[227px] object-cover rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-r-[0px]"
            />
          </div>
          <div class="flex flex-col pb-6 sm:py-9 px-[26px] sm:pl-[60px]">
            <div
              class="flex flex-col sm:flex-row font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]"
            >
              <p>克服過去—</p>
              <p>日本和平教育團</p>
            </div>
            <p class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-4">
              思考如何記憶歷史與面對傷痛。
              <span class="hidden sm:inline"><br /></span>
              從戰犯遺書、台籍日本兵的沈默，到高嶋伸欣組織日本和平教育團，
              <span class="hidden sm:inline"><br /></span>
              拜訪雙溪鐳屠殺下華族蒙難墳墓，辯證戰後個人責任與如何克服過去。
            </p>
          </div>
        </NuxtLink>
        <NuxtLink
          to="/lesson/five"
          class="fade-box w-full sm:w-[1075px] h-auto sm:h-[227px] bg-white rounded-[15px] shadow-md flex flex-col sm:flex-row relative hover:shadow-lg"
        >
          <div
            class="absolute top-0 -right-[1px] label bg-[#d0bc9c] w-[91px] h-[91px] rounded-tr-[15px]"
          >
            <p
              class="text-white font-caveat text-[36px] font-semibold absolute -top-[2px] right-5 z-10"
            >
              5
            </p>
          </div>
          <div class="w-full sm:w-[365px] h-[227px]">
            <img
              src="/images-webp/stills/lesson_5.webp"
              alt="lesson"
              class="w-full sm:w-[365px] h-[204px] sm:h-[227px] object-cover rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-r-[0px]"
            />
          </div>
          <div class="flex flex-col pb-6 sm:py-9 px-[26px] sm:pl-[60px]">
            <div
              class="flex flex-col sm:flex-row font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]"
            >
              <p>為什麼要記憶—</p>
              <p>慰安婦</p>
            </div>
            <p class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-4">
              紀錄軍事性奴隸制度下的受害者與其困境。
              <span class="hidden sm:inline"><br /></span>
              藉村落交出女性而從日軍屠殺下倖存之例與戰時慰安婦被視為軍需品，
              <span class="hidden sm:inline"><br /></span>
              論及這段歷史不易納入國家歷史敘事，而受害者亦難以承擔創傷記憶。
            </p>
          </div>
        </NuxtLink>
      </div>
      <div
        class="fade-box w-full sm:w-[1075px] h-auto flex flex-col items-center mt-14"
      >
        <p class="font-shippori text-[#757575] text-[22px] sm:text-[28px] tracking-[4px]">
          免費教材下載
        </p>
        <p
          class="font-noto text-[14.5px] text-[#757575] tracking-[0.5px] leading-[30px] mt-10 text-start sm:text-center"
        >
          開放觀眾免費獲取 5 部主題短片觀影連結 與 數位教材。
          <span class="hidden sm:inline"><br /></span>
          歡迎應用於校園教育推廣、地方藝文空間交流或團體討論分享。 
          <span class="hidden sm:inline"><br /></span>
          若學校欲播映完整紀錄片《由島至島》，請至官網「聯絡資訊」頁面中的「教育公播」專區參考選購。
        </p>
        <a
          href="https://drive.google.com/drive/folders/153vc-Wp9jFxLQGFWTC4VMiNbfct8_Qxo?usp=drive_link"
          target="_blank"
          class="font-wix text-[#757575] px-10 py-3 bg-white border border-[#757575]/70 mt-10 mb-20 hover:bg-[#757575] hover:text-white"
        >
          點此下載教材</a
        >
      </div>
    </div>
    <Footer bgColor="white" textColor="#757575" :opacity="80" />
  </div>
</template>
