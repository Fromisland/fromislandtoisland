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
    <div class="flex w-full z-10 opacity-85 justify-center bg-[#d9d9d9]/30">
      <div class="hidden sm:flex mt-[221px] w-[548px]">
        <div class="sticky top-[221px] flex flex-col ml-36 mb-6 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-lg sm:text-[28px]">
              LESSON
            </p>
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">3</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">共犯結構—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">戰爭機器</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Structures of Complicity:<br />
            War Machine
          </p>
          <a
            href="https://drive.google.com/drive/folders/153vc-Wp9jFxLQGFWTC4VMiNbfct8_Qxo?usp=drive_link"
            target="_blank"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 hover:bg-[#999] hover:text-white"
          >
            教案下載連結</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <img
          src="/images-webp/stills/lesson_3.webp"
          lass="w-full sm:w-[895px] h-[312px] sm:h-[532px] object-cover"
        />
        <div class="flex sm:hidden flex-col mb-12 ml-10 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-[20px]">LESSON</p>
            <p class="text-[#D0BC9C] font-caveat text-[88px] sm:text-[150px] font-semibold mb-10">
              3
            </p>
          </div>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px] -mt-12">共犯結構—</p>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px]">戰爭機器</p>
          <p class="font-amiri italic text-[#999] text-[20px] tracking-[1px] leading-[38px] mt-7">
            Structures of Complicity:<br />
            War Machine
          </p>
        </div>
        <div class="w-full h-auto bg-white/50 flex justify-center py-6 px-10">
          <div class="w-full sm:w-[651px] flex flex-col">
            <div class="mt-6 w-full">
              <iframe 
                src="https://player.vimeo.com/video/1050017024" 
                width="100%" 
                height="200" 
                class="h-[200px] sm:h-[400px]"
                frameborder="0" 
                allow="autoplay; fullscreen; picture-in-picture" 
                allowfullscreen>
              </iframe>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                影片介紹
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，日軍佔領馬來亞，利用馬來人對獨立的渴望，與馬來青年同盟*（KMM）合作秘密搜集情報，扶持當地勢力組建維持會，以鞏固統治、維持治安，並鎮壓抗日勢力。<br /><br />
                日本透過宗教、文化、經濟與教育等層面積極宣揚日本精神，以「大東亞共榮圈」作為口號，拉攏馬來社群，加劇其與支持抗日的華人之間的對立。台灣成為日本展示現代化進程與培訓「文化戰士」的基地，人民更被動員製作慰問袋以鼓舞馬來人，甚至隨軍進入南洋戰場，成為殘酷戰爭機器的一部分。
                <br />
                <br />
                ＊馬來青年同盟：Kesatuan Melayu Muda（KMM），又譯「馬來青年協會」。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[22px] sm:text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                理所不當然：<br />如何看見歷史事件背後不同角色的選擇？
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案透過角色扮演和核心問答，讓學生了解二戰期間日本在馬來亞與台灣的軍事動員過程。藉由置換不同身份立場進行討論與分享，讓學生同理在戰爭期間，人們如何因應外在環境、利益交換等因素，互相為謀或彼此對立，以達成各自的目標。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在了解台灣人在二戰中的多重身份後，學生能夠體認到台灣人並非僅是戰爭底下的受害者，還是日本軍事動員的一環，並反思戰爭責任的分配。透過與歷史情境相呼應的活動體驗，幫助學生理解接收資訊時，資訊傳遞者的立場、表達方式以及資訊接收者所處環境，如何影響資訊產生的效果，進而體會歷史事件的複雜性，並應用於對社會議題的理解與思考之中。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在複雜的歷史情境中，我們如何理解不同個體的行動選擇及其背景？
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
                <div
                  class="flex flex-col sm:flex-row gap-x-1 sm:gap-x-3 mt-2 sm:mt-0 sm:ml-9 items-center"
                >
                  <div class="flex gap-x-1 items-center">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        15<span class="text-[16px] ml-[2px]">min</span>
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
                        5<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        映前引導
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  </div>
                  <div class="flex gap-x-1 items-center mt-4 sm:mt-0 ml-16 sm:ml-0">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        20<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        影片放映
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
                        活動體驗❶
                      </p>
                    </div>
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
                      10<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      成果分享
                    </p>
                  </div>
                  <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  <div
                    class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                  >
                    <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                      30<span class="text-[16px] ml-[2px]">min</span>
                    </div>
                    <p
                      class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                    >
                      活動體驗❷
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
                共犯結構、軍事動員、戰爭責任、資訊環境、能動性
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
                  崔家瑋
                </p>
                <img
                  src="/images-webp/author_4.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                國立臺灣大學法律系畢業，曾經參與舉辦「臺大法律學術工作坊」，於舉辦「臺大法律巡迴講座」期間巡迴全臺19縣市舉辦法普講座與引導討論。亦曾在臺大校內舉辦四六事件相關展覽。目前擔任法律白話文運動撰稿編輯。
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
                本教案提供來自：台灣。
              </p>
              <div class="flex flex-col items-center sm:items-start py-8">
                <a
                  href="https://drive.google.com/drive/folders/153vc-Wp9jFxLQGFWTC4VMiNbfct8_Qxo?usp=drive_link"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex sm:hidden justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white"
                >
                  教案下載連結</a
                >
                <a
                  href="https://drive.google.com/file/d/15GdVjILQ02N1QXebgCLmh6gHfv7Tc1Bd/view?usp=drive_link"
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
