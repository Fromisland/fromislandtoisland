<script setup>
  import { gsap } from 'gsap'
  import { ScrollTrigger } from 'gsap/ScrollTrigger'
  gsap.registerPlugin(ScrollTrigger)

  const router = useRouter()
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const images = document.querySelectorAll('.fade-image')
    const textElements = document.querySelectorAll('p.font-noto, div.font-noto')

    // Check if each image is loaded
    const imagePromises = Array.from(images).map(img => {
      if (img.complete) {
        return Promise.resolve()
      } else {
        return new Promise(resolve => {
          img.onload = resolve
        })
      }
    })

    // Initialize animations after all images are loaded
    Promise.all(imagePromises).then(() => {
      // Setup image fade-in effects
      images.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })

      // Setup text fade-in effects
      textElements.forEach(element => {
        gsap.from(element, {
          opacity: 0,
          y: 30,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none none',
            once: true,
          },
        })
      })
    })
  })
</script>
<template>
  <div class="flex flex-col bg-black w-screen h-auto min-h-screen items-center">
    <div class="hidden sm:flex fixed inset-0 bg-reports z-0"></div>
    <NavBar textColor="white" logoSrc="/images/logo.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <img
      src="/images-webp/reports/popbox/popbox_6_1.webp"
      class="sm:hidden w-full h-auto fade-image"
    />
    <div class="w-full sm:w-[1116px] relative flex flex-col items-center px-10">
      <div
        @click="() => router.back()"
        class="hidden sm:block fixed top-12 right-56 cursor-pointer z-10"
      >
        <img src="/images/xmark.svg" />
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_6_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />桃園場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16 gap-x-12"
      >
        <img
          src="/images-webp/reports/cheng.webp"
          alt="tsai"
          class="rounded-full w-[134px] h-[134px] object-cover fade-image"
        />
        <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">鄭政誠</div>
          <div class="font-noto text-[14px] text-white tracking-[2px] text-center leading-[30px]">
            國立中央大學歷史研究所特聘教授
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60 mt-6">
            台北欣欣秀泰影城（2024.10.27）
          </p>
        </div>
        <div class="hidden sm:flex flex-col h-full justify-center">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
            鄭政誠<span class="text-[14px]">／國立中央大學歷史研究所特聘教授</span>
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60 mt-2">
            桃園光影文化館（2024.10.6）
          </p>
        </div>
      </div>

      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold">《由島至島》紀錄片映演計畫——桃園場</span
        ><br /><br />
        《由島至島》紀錄片巡演計畫首站抵達桃園光影文化館，由中央大學歷史研究所特聘教授鄭政誠與導演廖克發帶來映後座談。<br /><br />
        <span class="font-semibold"> ● 從沒有資格當兵的台灣人到成為台籍日本兵</span><br /><br />
        鄭政誠教授從台籍日本兵的歷史脈絡談起，1895年日本接收台灣，卻擔心「台灣人」從軍有損日本軍隊的榮耀，因而沒有設定服兵役的義務。然而，1937年中日戰爭爆發，日軍大量人力消耗，又為防範軍武與機密外洩，台灣人只得成為軍屬或軍夫，處理勤務、運輸彈藥、種植蔬菜來儲備戰力與物資，若將軍中階級由上至下排開來看：軍人－軍馬－軍犬－軍鴿，接著才是台灣人所在的軍屬－軍夫，不被視為正規軍人，地位連犬馬也不如。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_6_2.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_6_3.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「1942年，日本才開始在台招募「陸軍特別志願兵」，第一期招募只錄取1020人，卻高達四五十萬人報名（事實上人民也不敢不去），第二期報名者更突破六十萬，幾乎所有青壯年男性都報名參與，後續應募陸軍、海軍，直到1945年才正式在台灣施行徵兵制度。因此直至日本戰敗，台灣約有二十多萬人被動員至日本部隊中，或派遣至中國或至南洋戰場，五萬多人喪命，對台灣而言是沈重的歷史記憶。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_6_4.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_6_5.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        鄭政誠教授笑說「這部片很長，但就歷史觀點來看，它似乎也還不夠長。」
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_6_6.webp"
        class="w-screen h-auto mt-12 mb-[97px] fade-image"
      />
    </div>
  </div>
</template>
