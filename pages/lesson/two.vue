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
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">2</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">加害與被害—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">楊樹木</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Perpetration and Victimization:<br />
            Yeow Chew Bok
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
          src="/images-webp/stills/lesson_2.webp"
          class="w-full sm:w-[895px] h-[312px] sm:h-[532px] object-cover"
        />
        <div class="flex sm:hidden flex-col mb-12 ml-10 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-[20px]">LESSON</p>
            <p class="text-[#D0BC9C] font-caveat text-[88px] sm:text-[150px] font-semibold mb-10">
              2
            </p>
          </div>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px] -mt-12">加害與被害—</p>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px]">楊樹木</p>
          <p class="font-amiri italic text-[#999] text-[20px] tracking-[1px] leading-[38px] mt-7">
            Perpetration and Victimization:<br />
            Yeow Chew Bok
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
                楊樹木先生在1930年代自台灣移居檳城，二戰期間在當地受日本占領軍徵用擔任憲兵隊通譯；戰爭結束之後遭到英軍逮捕。英國軍事法庭將楊樹木以加害當地人的戰爭犯罪罪名起訴，於1946年將他定罪判處死刑、而後處決。楊樹木死後，他的妻子和後代都繼續居住於檳城。<br />
                <br />
                楊炳煒先生作為第三代戰爭遺族和第三代海外台灣人，其祖父楊樹木卻成了家族中的禁忌。後來，楊炳煒先生在曾發生屠殺事件的鍾靈中學任教，隨著史料和審判記錄的逐步揭示，開啟他對於這段歷史記憶的追尋與探究。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <p
                class="font-shippori text-[22px] sm:text-[28px] tracking-[0.5px] sm:tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                歷史記憶的重量——<br />台籍日本兵與世代責任
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案透過紀錄短片，引導學生思考台籍日本兵的多重困境，並藉由角色案例，探討戰後遺族如何承接世代責任，進一步討論歷史記憶對自我認同的影響。課程結合文本分析、小組討論與角色扮演，讓學生學習在歷史脈絡中辨析個體選擇的侷限性及複雜性，反思加害與被害的交錯關係，體認歷史記憶對當代社會的影響。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在認識台籍日本兵的歷史背景後，引導學生思考個人在戰爭中的責任。透過文本中第三代戰爭遺族面對戰爭遺緒的經歷，理解世代責任的承擔與歷史記憶對自我認同的影響。進一步探討如何與家族及國族的過往傷痛和解，並將這些理解轉化為對當代社會的反思與行動。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                台籍日本兵在戰爭中參與了哪些行動？如何理解他們的戰爭經歷與責任？<br />
                如果發現家族曾參與爭議性的歷史事件，我們可以如何面對與回應？<br />
                為什麼需要討論過去？歷史記憶如何影響身份認同與群體關係？
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
                        5<span class="text-[16px] ml-[2px]">min</span>
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
                        22<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        影片放映
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                  </div>
                  <div class="flex gap-x-1 items-center mt-4 sm:mt-0 ml-16 sm:ml-0">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        8<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        小組討論
                      </p>
                    </div>
                    <img src="/images/right.svg" class="w-[10px] h-[12px]" />
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        15<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        映後導讀
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
                <div
                  class="flex flex-col sm:flex-row gap-x-1 sm:gap-x-3 mt-2 sm:mt-0 sm:ml-9 items-center"
                >
                  <div class="flex gap-x-1 items-center">
                    <div
                      class="bg-white w-[88px] sm:w-[115px] h-[88px] sm:h-[115px] rounded-full flex flex-col items-center justify-center opacity-100"
                    >
                      <div class="font-wix text-[28px] sm:text-[36px] text-[#D0BC9C] font-semibold">
                        20<span class="text-[16px] ml-[2px]">min</span>
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
                        10<span class="text-[16px] ml-[2px]">min</span>
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
                        10<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        文本閱讀
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
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                課程關鍵字
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                台籍日本兵、戰爭責任、歷史記憶、加害與被害、遺族、認同
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
                  黃詩婷
                </p>
                <img
                  src="/images-webp/author_3.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                現就讀國立臺灣藝術大學電影研究所，投入影像創作、影像教育與影展執行，曾於客家電視台新聞部攝影組、國家影視聽中心教育推廣組、台北電影節節目組等實習，曾任青少年影像教育講師、《電影ê鋩鋩角角》系列教學點子書等影像教案作者與臺灣國際人權影展聚落串聯執行等。擔任《由島至島》國藝會巡演計畫與教育推廣計畫總籌。
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
              <div class="flex flex-col sm:flex-row items-center sm:items-start py-8 gap-x-4">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScQxiV58k1T7PDf_2NiOaQOrz2sjgu5JQr9PD2jYEAIZef_dQ/viewform"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex sm:hidden justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white"
                >
                  教案申請表單</a
                >
                <a
                  href="https://www.canva.com/design/DAGhT50LL8A/HEuanGxGJSRYacgVoLDJQA/view?utm_content=DAGhT50LL8A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h61bc89a809"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 sm:mb-20 hover:bg-[#999] hover:text-white"
                >
                  台灣教案預覽</a
                >
                <a
                  href="https://www.canva.com/design/DAGhT2jpkPA/Dv2ZNiUEPF8rkfy4RZiQ3g/view?utm_content=DAGhT2jpkPA&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5ca1dc2870"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-6 mb-20 hover:bg-[#999] hover:text-white"
                >
                  馬來西亞教案預覽</a
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
