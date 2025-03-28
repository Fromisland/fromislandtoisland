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
    <div class="hidden sm:fixed inset-0 bg-reports z-0"></div>
    <NavBar textColor="white" logoSrc="/images/logo.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <img
      src="/images-webp/reports/popbox/popbox_3_1.webp"
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
        src="/images-webp/reports/popbox/popbox_3_1.webp"
        class="hidden sm:block w-full h-auto fade-image"
      />
      <div
        class="w-full flex sm:hidden justify-center py-6 text-white text-center leading-[30px] font-noto tracking-[2px]"
      >
        《由島至島》紀錄片映演計畫—<br />台中場
      </div>
      <div
        class="flex flex-col sm:flex-row items-center border-y sm:border-none border-white/50 w-full sm:w-[841px] py-16 gap-x-12"
      >
        <img
          src="/images-webp/reports/chu.webp"
          alt="tsai"
          class="rounded-full w-[134px] h-[134px] object-cover fade-image"
        />
        <div class="flex sm:hidden flex-col items-center h-full justify-center mt-5">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">朱惠足</div>
          <div
            class="font-noto text-[14px] font-light text-white tracking-[2px] text-center leading-[30px]"
          >
            國立中興大學台灣文學與<br />跨國文化研究所教授
          </div>
          <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-6">
            台中日日新影城（2024.11.30）
          </p>
        </div>
        <div class="hidden sm:flex flex-col h-full justify-center">
          <div class="font-noto font-semibold text-[20px] text-white tracking-[2px]">
            朱惠足<span class="text-[14px] font-light"
              >／國立中興大學台灣文學與跨國文化研究所教授</span
            >
          </div>
          <p class="font-noto text-white font-light text-[13px] tracking-[2px] opacity-60 mt-2">
            台中日日新影城（2024.11.30）
          </p>
        </div>
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="sm:inline-block hidden font-semibold">《由島至島》紀錄片映演計畫——台中場</span
        ><br /><br />
        《由島至島》映演計畫首次來到中部放映，很感謝中興大學台灣文學與跨國文化研究所的朱惠足教授與導演廖克發帶來映後座談。<br /><br />
        <span class="font-semibold">● 以一種沈默方式被遺忘的家族記憶</span><br /><br />
        「阿嬤在爪哇開雜貨店的日子，是她一輩子過得最好的時期。」朱惠足教授分享自己的祖父母1938年前往爪哇島開設雜貨店，家裡聘請傭人、生活條件理想。因為「受日本殖民」的身份，台灣人到了東南亞反而成為「日本人」，得以享有比當地人更優渥的資源與更高的權力，歷史學者稱之為「暫時的殖民者」。直到各國對日戰事升溫，任何旅居荷屬印尼的台灣人一概被視為敵國(日本)子民，才讓一切風雲變色，阿嬤趕在太平洋戰爭爆發前帶著在當地出生的姑姑回台，阿公則被遣送至澳洲集中營。觀看《由島至島》，教授看見自己的家族記憶，長久以來卻以一種沈默的方式被遺忘。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_3_2.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_3_3.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        <span class="font-semibold"> ● 台籍日本兵：受害與加害的身份是並存的</span><br /><br />

        「我開始思考，如果阿公當年不是在爪哇開店，而是被日本徵召擔任軍夫，抑或成為志願兵，他被派至南洋或中國，必須依照日軍指示傷害他人的時候，我會不會覺得這是個污點？還是我會慶幸他活下來了，而有現在的我？」教授從個人家族歷史輻散出台灣集體的歷史記憶，每個人的祖父輩可能曾被捲入戰爭中，彼時台灣人面對著「國家和民族是衝突的」矛盾困境，他們被動員上戰場、成為日軍中最底層的軍夫——某種程度上是受害者，卻也可能因為熟稔福建話，在指認、圍捕、拷問甚至屠殺行動中扮演關鍵的翻譯角色，台籍日本兵便從一個受害者的身份，成為了戰場上的加害者。
      </p>
      <div class="flex gap-x-4 my-12">
        <img
          src="/images-webp/reports/popbox/popbox_3_4.webp"
          class="w-[412px] h-auto fade-image"
        />
        <img
          src="/images-webp/reports/popbox/popbox_3_5.webp"
          class="w-[412px] h-auto hidden sm:block fade-image"
        />
      </div>
      <p
        class="font-noto tracking-[0.5px] sm:tracking-[2px] text-white w-full sm:w-[841px] text-[14px] sm:text-[16px] text-justify leading-[30px] sm:leading-[36px]"
      >
        「紀錄片中聽到受害者的言語或無法言語，讓我深刻感覺到我們對於戰爭的思考與反省實在遠遠不夠。」導演在這些人們生命最後幾年，紀錄下他們的身影與聲音，
        讓觀眾可以回到戰時現場，閉上眼想像自身可能扮演哪一個角色，當以國家之名所動員的暴力與犯罪，我們怎麼樣可以記得這個教訓、這些聲音，創造一個什麼樣的歷史記憶，可以帶領我們邁下一個更好的未來，是台灣人需要持續思考的。
      </p>
      <div
        @click="() => router.back()"
        class="flex sm:hidden justify-center mt-9 font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 cursor-pointer"
      >
        回上頁
      </div>
      <img
        src="/images-webp/reports/popbox/popbox_3_6.webp"
        class="w-screen h-auto mt-12 mb-[97px] fade-image"
      />
    </div>
  </div>
</template>
