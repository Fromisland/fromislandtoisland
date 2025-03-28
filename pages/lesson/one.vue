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
    opacity: 0.2;
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
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">1</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">移動與邊界—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">旅外台灣人</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Movement and Boundaries: <br />
            Overseas Taiwanese
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
          src="/images-webp/stills/lesson_1.webp"
          class="w-full sm:w-[895px] h-[312px] sm:h-[532px] object-cover"
        />
        <div class="flex sm:hidden flex-col mb-12 ml-10 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-[20px]">LESSON</p>
            <p class="text-[#D0BC9C] font-caveat text-[88px] sm:text-[150px] font-semibold mb-10">
              1
            </p>
          </div>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px] -mt-12">移動與邊界—</p>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px]">旅外台灣人</p>
          <p class="font-amiri italic text-[#999] text-[20px] tracking-[0.5px] leading-[38px] mt-7">
            Movement and Boundaries: <br />
            Overseas Taiwanese
          </p>
        </div>
        <div class="w-full h-auto bg-white/50 flex justify-center py-6 px-10">
          <div class="w-full sm:w-[651px] flex flex-col">
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                片段大綱
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，梁盈秋女士的父親因參與抗日而遠赴荷屬印尼。然而，隨著對日戰事升溫，旅居印尼的台灣籍民*一概被視為敵國日本的子民，一家因而遭到荷蘭殖民政府逮捕、送往澳洲集中營。梁女士回憶，乘船長達二十八天的日子裡滿懷忐忑，上陸後看見澳洲軍人手中的巧克力，脫口而出了第一句英文：「Give
                me, sir.」 她在集中營度過童年，在營裡孩子能讀書、拿零用錢，甚至野餐。
                <br /><br />
                出生於澳洲集中營的江秀蓮女士，卻在營中與父親生死別離。荷蘭士兵強行沒收財物，將男性雙手上銬、押至澳洲，父親因病客死異鄉。多年後，江女士憑藉書信找到家人照片，終於一睹父親的模樣，既是追憶，也是對家族情感的深刻連結。
                <br /><br />
                ＊台灣籍民：隸屬台灣殖民地籍的日本國民，尤指旅居中國及東南亞等地的台灣人。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                過去到現在，<br />那些「離開與歸來」的人們
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案透過分組討論、情境模擬與新聞報導閱讀等活動，引導學生探討不同時代中人們「離開家鄉」的歷程。藉由了解過去與現在的遷徙故事，促使學生思考每一次離開背後的抉擇與困難，並意識到並非所有人都能選擇歸來，進而反思如何在日常中保有同理心支持與接納那些離開家鄉的人。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在了解旅外臺灣人遣送至澳洲集中營的困境後，藉由未來輪想像來模擬生命故事，讓學生同理「離開家鄉」的挑戰，對於紀錄片被攝者之經歷產生情感共鳴，進而反思如何於生活中透過個人行動支持離開家鄉的人們。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，旅居南洋的台灣人為何被迫離開家園？<br />
                遭遣送至澳洲集中營的台灣籍民，在不同生活環境下精神層面與物質生活面臨哪些挑戰？
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <div class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                活動流程<span class="text-[14.5px] tracking-[0.5px] text-[#757575] font-normal"
                  >（國中兩堂課·每堂45分鐘）</span
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
                      5<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
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
                      20<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      活動體驗
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      影片放映
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
                <div class="flex gap-x-1 sm:gap-x-3 mt-2 sm:mt-0 sm:ml-9 items-center">
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      10<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      映後討論
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      20<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      議題分析
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      15<span class="text-[12px] sm:text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      延伸討論
                    </p>
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
                澳洲集中營、台灣籍民、移動、邊界、離開、歸來
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
                  林宗洧
                </p>
                <img
                  src="/images-webp/author_1.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                出生於彰化的越南新二代，目前就讀於國立臺灣大學台灣文學研究所，大學畢業於臺大社會學系。文章曾多次獲得臺大文學獎，並曾獲選臺北電影節青少年評審團，撰寫影評並主責訪問影人。曾於課審會擔任國中組審查委員，並擔任國小及高中組跨組委員。目前研究領域為酷兒跨媒介再現。
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
                心理學博士，目前任教於台中一中，擔任歷史科教師。學術取徑為文化研究與批判教育學，關注「東南亞社會與文化」、「原住民族轉型正義與認同」及「族群關係與當代性」等議題，近年積極組織教師專業社群，學習以轉化型知識份子的教育主體位置，思索「歷史記憶」生產與再生產與面相大眾的「公共史學」於基層歷史教學現場的可能性，推動跨系統的教育工作與民主對話作為行動研究的實踐之路。
              </p>
            </div>
            <div class="flex flex-col py-8">
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-6 leading-[30px]"
              >
                欲申請短片與教案，歡迎填寫《由島至島》申請表單。本教案提供自：台灣。
              </p>
            </div>
            <div class="flex flex-col items-center sm:items-start py-8">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
                target="_blank"
                class="font-wix w-[162px] text-[#999] flex sm:hidden justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white"
              >
                教案申請表單</a
              >
              <a
                href="https://www.canva.com/design/DAGhToo-kU0/poeS5ThYTpTrZ07Sei_Y6Q/view?utm_content=DAGhToo-kU0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h1db9b0e3da"
                target="_blank"
                class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-4 mb-20 hover:bg-[#999] hover:text-white"
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
</template>
