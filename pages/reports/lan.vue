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
      <img src="/images/menu.svg" alt="menu" class="w-6 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <img
      src="/images-webp/reports/popbox/popbox_4_1.webp"
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
        src="/images-webp/reports/popbox/popbox_4_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />台北場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16 gap-x-12"
      >
        <img
          src="/images-webp/reports/lan.webp"
          alt="tsai"
          class="rounded-full w-[134px] h-[134px] object-cover fade-image"
        />
        <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">藍適齊</div>
          <div class="font-noto text-[14px] text-white tracking-[2px] text-center leading-[30px]">
            國立政治大學歷史系副教授、<br />《由島至島》歷史顧問
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60 mt-6">
            台北欣欣秀泰影城（2024.10.27）
          </p>
        </div>
        <div class="hidden sm:flex flex-col h-full justify-center">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
            藍適齊<span class="text-[14px]">／國立政治大學歷史系副教授、《由島至島》歷史顧問</span>
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60 mt-2">
            台北欣欣秀泰影城（2024.10.27）
          </p>
        </div>
      </div>

      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold"> 《由島至島》紀錄片映演計畫——台北場</span
        ><br /><br />
        映演計畫第三場抵達台北，很感謝《由島至島》歷史顧問、國立政治大學歷史學系藍適齊副教授與導演廖克發帶來映後座談。<br /><br />
        「當克發導演讀過我的研究，說有興趣把這些比較沒有人知道的歷史拍成紀錄片的時候，大概真的是我自己做歷史研究最開心的一個時刻。」適齊老師分享，閱讀文字與觀看動態影像，對於情感的攪動與觸發全然不同，藉由影像這個媒介，除了易於進入大眾視野，更重要是當觀眾走過紀錄片五小時片長，感受到在那個歷史現場的人，不管是台灣人、還是在馬來亞的華人、日本士兵，或者是戰後繼續在討論這些戰爭歷史的人，他們到底在當下感受到什麼？面對鏡頭時，受訪者可能談得更多，講出過去可能沒有意識到的某些感受或想法，這部片珍貴地紀錄下來，讓觀眾體認到當事人的情感。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_4_2.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_4_3.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        很多年前適齊老師在新加坡教書時，和一位做新加坡與馬來西亞社會歷史研究的澳洲同事閒聊，同事提到二戰日軍佔領馬來半島、新加坡幾件事情，「可是他知道我是台灣來的，突然講了一句話，開啟我過去十年的研究。『日軍很壞，但台灣人也很壞/甚至更壞。』這是當地老一輩華人告訴他的，將近二十年前的事情。」那時才意識到原來台灣在二戰期間，因為人的流動、送去擔任軍屬與執行各種軍事工作，與東南亞有非常密切的關係。片名《由島至島》，可以看見台灣跟外界的連結
        ，過去所熟知的經貿關係與文化交流之外，不要忘記我們在歷史上有一些比較痛苦的時刻。戰爭其實也讓台灣跟世界連結在一起。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_4_4.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_4_5.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「我越學歷史越體會到，特別從這個紀錄片中——我們其實都是在一個群體當中。」不只是台灣這個群體，包含我們所到之地：東南亞各地、日本、太平洋戰爭的各個戰場，跟這些人們或許良善、對立、甚至互相傷害的互動，都是歷史的一部分，克發導演帶觀眾看到另一個面向，其他人在戰爭中經歷了什麼、他們如何面對與記得這段歷史，這也許啟動我們想要知道得更多。
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_4_6.webp"
        class="w-screen h-auto mt-12 mb-[97px] fade-image"
      />
    </div>
  </div>
</template>
