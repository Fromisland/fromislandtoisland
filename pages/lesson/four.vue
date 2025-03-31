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
  .bg-shadow {
    background-image: url('/images-webp/bg_shadow.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.05;
  }
</style>
<template>
  <div class="flex flex-col bg-white w-screen h-auto min-h-screen items-center">
    <div class="fixed inset-0 bg-shadow z-0"></div>
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex w-full z-10 opacity-85 justify-center bg-[#d9d9d9]/10">
      <div class="hidden sm:flex mt-[221px] w-[548px]">
        <div class="sticky top-[221px] flex flex-col ml-36 mb-6 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-lg sm:text-[28px]">
              LESSON
            </p>
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">4</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">克服過去—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">日本和平教育團</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Vergangenheitsbewältigung:<br />
            Japanese Peace Education Tour
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
            target="_blank"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 hover:bg-[#999] hover:text-white"
          >
            教案申請表單</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <img
          src="/images-webp/stills/lesson_4.webp"
          class="w-full sm:w-[895px] h-[312px] sm:h-[532px] object-cover"
        />
        <div class="flex sm:hidden flex-col mb-12 ml-10 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-[20px]">LESSON</p>
            <p class="text-[#D0BC9C] font-caveat text-[88px] sm:text-[150px] font-semibold mb-10">
              4
            </p>
          </div>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px] -mt-12">克服過去—</p>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px]">日本和平教育團</p>
          <p class="font-amiri italic text-[#999] text-[20px] tracking-[0.5px] leading-[38px] mt-7">
            Vergangenheitsbewältigung:<br />
            Japanese Peace Education Tour
          </p>
        </div>
        <div class="w-full h-auto bg-white/50 flex justify-center py-6 px-10">
          <div class="w-full sm:w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                影片介紹
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，在日本佔領新加坡和馬來亞長達三年八個月的日子中，軍隊虐殺戰俘、迫使婦女成為軍事性奴隸，並計劃性地屠殺當地華人。然而戰後，遭軍事法庭審判犯下違反和平罪、傳統戰爭罪或違反人道罪而處以死刑的日本軍事犯人，在行刑前寫下的一百六十五封遺書中，僅有一封提及日本軍隊暴行下的受害者。
                <br /><br />
                來自日本的高嶋伸欣先生前往東南亞尋找戰時日本屠殺人民的地點進行調查，並年年籌組日本和平教育團，踏訪受難地點、清掃蒙難者的墳墓，帶著年輕世代與屠殺倖存者面對面對話，多年來重複地拜訪與聆聽。戰時受日本動員前往南洋戰場的台灣人在圍捕和拷問中扮演了關鍵角色。暴行過後，人們如何聆聽加害者、受難者和見證者的沈默，並面對與克服過去？
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <div
                class="font-shippori text-[22px] sm:text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                如何記憶二戰，克服過去<span class="font-shippori tracking-[0.5px] text-[14.5px]"
                  >（Vergangenheitsbewältigung）</span
                >？
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案從中日戰爭、歐戰爆發後日本向東南亞的侵略，與二戰開打後日本對殖民地台灣的志願兵政策導入。藉由紀錄短片與文本，讓學生探究台籍日本兵、軍夫、軍屬在日本軍隊中的遭遇，及其在東南亞戰場與暴行中的角色，並了解當地人民在戰爭期間的經歷。課程引導學生分析、覺察不同史料的差異與重要性，並思考這些檔案如何影響歷史的理解與詮釋，進而反思自身對二戰的認知與認知建構的過程，並發想個人能夠如何記憶戰爭，克服過去。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在學生具備「二戰如何在國家間發生及影響」的理解基礎上，引導學生從人民／個人角度出發，透過史料與文本分析，深入了解南洋戰場上的台灣人及東南亞當地人民在二戰期間的經歷，並比較台灣報導台籍軍夫與馬來亞見證者描述的異同。閱讀不同文本後，學生將分析兩者在呈現台籍戰俘監視員的「事實」與「陳述」上的差異，並透過影片中「見證」性質史料，理解其在歷史詮釋中的特性與重要性。最終，學生將反思課程前後對二戰認知的變化，探討「克服過去」的意涵與方法。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                前往南洋的台籍日本兵是否目睹或甚至參與了日本在東南亞的屠殺與暴行？<br />
                不同的史料如何影響我們對於同一段歷史的理解與詮釋？<br />
                戰後，我們應如何傾聽加害者、受難者和見證者的沉默？又能如何面對、克服過去？
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <div class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                課堂流程<span class="text-[14.5px] tracking-[0.5px] text-[#757575] font-normal"
                  >（高中兩堂課·每堂50分鐘）</span
                >
              </div>
              <div class="flex flex-col sm:flex-row mt-6 items-start sm:items-center">
                <p
                  class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] leading-[30px]"
                >
                  第一節課
                </p>
                <div class="flex gap-x-1 sm:gap-x-3 mt-2 sm:mt-0 sm:ml-9 items-center">
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      課堂導入
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      影片放映❶
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      映後討論
                    </p>
                  </div>
                </div>
              </div>
              <div class="flex flex-col sm:flex-row mt-6 items-start sm:items-center">
                <p
                  class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] leading-[30px]"
                >
                  第二節課
                </p>
                <div
                  class="flex flex-col sm:flex-row gap-x-1 sm:gap-x-3 mt-2 sm:mt-0 sm:ml-9 items-center"
                >
                  <div class="flex gap-x-1 items-center">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        14<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        文本分析
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        12<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        成果分享
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  </div>
                  <div class="flex gap-x-1 items-center mt-4 sm:mt-0 ml-16 sm:ml-0">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        14<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        影片放映❷
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        10<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        映後討論
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                課程關鍵字
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                國家／個人、加害者／被害者、見證、歷史詮釋、克服過去（Vergangenheitsbewältigung）
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案作者
              </p>
              <div class="flex items-center">
                <p
                  class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
                >
                  林于玄
                </p>
                <img
                  src="/images-webp/author_5.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                國立臺灣師範大學社會教育系，作家，著有《換貓上場了》（詩集）、《傷兵不在街頭》（合著）。
                長期關注台灣創傷歷史之書寫、記憶與推廣，曾任台灣共生青年協會「抵抗與敘述：文學選讀與二二八事件創作培育計畫」協同主持、「黎明破曉前：2021
                四六事件紀念系列活動」總籌、「2019 臺灣國際人權影展 x 師大串聯場」總籌、2018
                台北電影節青少年觀摩獎評審團等。「永別的記憶／記憶：張亦絢《永別書：在我不在的時代》中的歷史書寫、創傷敘事與記憶政治」獲
                110 年度科技部大專生研究補助。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案共備者
              </p>
              <div class="flex items-center">
                <p
                  class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
                >
                  陳一隆
                </p>
                <img
                  src="/images-webp/author_2.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                心理學博士，目前任教於臺中一中，擔任歷史科教師。學術取徑為文化研究與批判教育學，關注「東南亞社會與文化」、「原住民族轉型正義與認同」及「族群關係與當代性」等議題，近年積極組織教師專業社群，學習以轉化型知識份子的教育主體位置，思索「歷史記憶」生產與再生產與面相大眾的「公共史學」於基層歷史教學現場的可能性，推動跨系統的教育工作與民主對話作為行動研究的實踐之路。
              </p>
            </div>
            <div class="flex flex-col py-8">
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-6 leading-[30px]"
              >
                欲申請短片與教案，歡迎填寫《由島至島》申請表單。本教案提供自：台灣。
              </p>
              <div class="flex flex-col items-center sm:items-start py-8">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex sm:hidden justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white"
                >
                  教案申請表單</a
                >
                <a
                  href="https://www.canva.com/design/DAGhUD9cqkg/m4USosdU-BAiq9TlHIUwMg/view?utm_content=DAGhUD9cqkg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6e722e3d7e"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20 hover:bg-[#999] hover:text-white"
                >
                  台灣教案預覽</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer bgColor="white" textColor="#757575" :opacity="80" />
  </div>
</template>
