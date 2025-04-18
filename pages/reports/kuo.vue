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
      src="/images-webp/reports/popbox/popbox_2_1.webp"
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
        src="/images-webp/reports/popbox/popbox_2_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />屏東場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center gap-x-12 relative border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16"
      >
        <div class="relative w-32 h-[140px]">
          <img
            src="/images-webp/reports/kuo.webp"
            alt="kuo"
            class="absolute top-0 left-0 rounded-full w-[89px] h-[89px] object-cover fade-image"
          />
          <img
            src="/images-webp/reports/chung.webp"
            alt="chung"
            class="absolute top-10 left-14 rounded-full w-[89px] h-[89px] object-cover fade-image"
          />
        </div>
        <div class="relative flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">郭力昕</div>
          <div class="font-noto text-[14px] text-white tracking-[2px] text-center leading-[30px]">
            影像文化評論者
          </div>
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px] mt-4">
            鍾適芳
          </div>
          <div class="font-noto text-[14px] text-white tracking-[2px] text-center leading-[30px]">
            音樂與影像展演製作人／策展人
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60 mt-6">
            屏東中影影城（2024.11.17）
          </p>
        </div>
        <div class="hidden sm:flex flex-col h-full justify-center gap-y-2">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
            郭力昕<span class="text-[14px]">／影像文化評論者</span>
          </div>
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
            鍾適芳<span class="text-[14px]">／音樂與影像展演製作人／策展人</span>
          </div>
          <p class="font-noto text-white text-[13px] tracking-[2px] opacity-60">
            屏東中影影城（2024.11.17）
          </p>
        </div>
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold">《由島至島》紀錄片映演計畫——屏東場</span
        ><br /><br />
        《由島至島》映演計畫屏東場次，邀請音樂與影像展演製作人／策展人 鍾適芳老師、影像文化評論者
        郭力昕老師與廖克發導演帶來映後座談。<br /><br />

        「《不即不離》、《還有一些樹》像是一種回望歷史動態的一種速寫，但《由島至島》超越了回望，以一種更逼近、甚至更為逼迫的視角，對於觀眾來說激進地、殘酷地把隱匿的事實一點一點挖開來，進而提問、尋找答案。」適芳老師點出導演作品經由重訪歷史，提出一種不同於教科書、不同於國家記憶的非主流敘事，以紀錄片來顯影這些被隱匿的歷史或禁忌題材。「正是透過這些歷史的見證，進行批判性地反省與反思，在歷史經驗裡思考人性與寬容。」力昕老師回應，並分享克發導演幾天前於政大講座的觀點：說故事的權力不應該只是國家的，每個人都應該有權力說故事。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_2_2.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_2_3.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        《由島至島》中，導演口白不時與孩子對話，每當訴說「孩子」便讓人心頭一震，「因為我知道我們也是那個孩子——導演欲對話的對象。」適芳老師思考人們如何從孩子成長成一個殺戮者，在戰爭當中的人性為了存活，如何成爲壓迫者、又何者才是被壓迫者，這些問題不斷迴旋，提醒著不可遺忘。然而，在經歷五小時的觀影、見證這些口述與影像檔案後，我們無法再像孩子那樣，假裝純真或無知。於是，導演更殘酷地問了觀眾要怎麼選擇？從鏡頭逼近這些受訪者的回憶，同時藉由紀錄片本身來逼近我們，這種急切地提問是殘酷的，「但是我要說的是這種『殘酷的必要』、『沉重的必要』。」不可以只當作一個旁聽者跟旁觀者，我們必須回答。力昕老師補充「紀錄片不論是拍攝受訪者，讓其面對鏡頭、面對導演提問，或挖掘歷史本身都非常殘酷，但這也是華人社會中非常缺乏——
        一種不近人情的冷酷提問。」是我們社會裡長期不太重視歷史，是戒嚴時期慣以銷毀資料所遺留下的特性，但不應該只是遺忘，而是應留下記憶。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_2_4.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_2_5.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「一個人的多重身份有時交疊、有時互斥，逐步形成國族認同與邊界的複雜性。如同台籍日本兵在紀錄片中有數種不同的身份描述，是說福建話的日本兵、在英國人的檔案裡是
        Formosan，Hokkien，Chinese……他們到底是誰？這樣的身份流動，從片頭口白對應到廖克發導演身上——來自馬來西亞、移民台灣，讓紀錄片的思考與辯證更為深刻。又戰場上的殺戮者回到日本的身份也是好父親、好丈夫，雙重的道德標準，讓力昕老師提及漢娜．鄂蘭「平庸的邪惡」概念，行刑的劊子手戰犯並沒有自身的意志，他僅是聽命行事的軍官，那些台籍日本兵到東南亞屠殺馬來西亞與新加波華人，在彼時是否也是一個口令一個動作，那人性終究要如何判斷？
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_2_6.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_2_7.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        適芳老師最後選以黃仁宇《緬北之戰》中〈拉班追擊戰〉篇章作結，作者看到一具日本大尉的屍體倒臥在橋墩下，這位敵軍的頭顱浸在水中，身旁樹枝掛著地圖和英日辭典，文字平實寫下「無需多久我就發現死者和我有許多共同點，我們屬於同樣的年齡層、有類似的教育背景。在死前一天他還努力溫習他的英文，誰敢說他不是大學學生？脫下黑色的學生裝、換上卡其軍裝，想想看要養大及教育他得花多少心力？接受軍事訓練得花多長時間？然後他在長崎或神戶上船經過香港、新加坡、仰光長途跋涉，還要搭上火車、汽車、行軍
        ，最後達到他在地圖上標示著拉班的這個地方，千里迢迢赴死，喉嚨中彈，以殘餘的本能，企圖用手護著喉嚨。」。
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_2_8.webp"
        class="w-screen h-auto mt-12 mb-[97px] fade-image"
      />
    </div>
  </div>
</template>
