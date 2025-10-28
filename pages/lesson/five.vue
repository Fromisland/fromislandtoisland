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
            <p class="text-[#D0BC9C] font-caveat text-[150px] font-semibold mb-10">5</p>
          </div>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px] -mt-12">為什麼要記憶—</p>
          <p class="font-shippori text-[#999] text-[44px] tracking-[4px]">慰安婦</p>
          <p class="font-amiri italic text-[#999] text-[24px] tracking-[2px] leading-[38px] mt-10">
            Why should we remember:<br />
            Comfort Women
          </p>
          <a
            href="https://drive.google.com/file/d/1Z56hqcVwGV8zJHTKeWXhf32RezY66JVA/view"
            target="_blank"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 hover:bg-[#999] hover:text-white"
          >
            台灣教案下載</a
          >
        </div>
      </div>
      <div class="flex flex-col">
        <img
          src="/images-webp/stills/lesson_5.webp"
          class="w-full sm:w-[895px] h-[312px] sm:h-[532px] object-cover"
        />
        <div class="flex sm:hidden flex-col mb-12 ml-10 h-fit">
          <div class="flex items-center">
            <p class="font-amiri italic text-[#D0BC9C] tracking-[6px] text-[20px]">LESSON</p>
            <p class="text-[#D0BC9C] font-caveat text-[88px] sm:text-[150px] font-semibold mb-10">
              5
            </p>
          </div>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px] -mt-12">為什麼要記憶—</p>
          <p class="font-shippori text-[#999] text-[30px] tracking-[10px]">慰安婦</p>
          <p class="font-amiri italic text-[#999] text-[20px] tracking-[1px] leading-[38px] mt-7">
            Why should we remember:<br />
            Comfort Women
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
                二戰期間，日軍侵略馬來半島。當時年幼的林俊田先生，因父親為維持會成員，與村中孩童攜帶物資，熱切迎接進駐的日軍。然而翌日，他們聽聞鄰村遭遇大屠殺，卻未察覺自身村莊的短暫安寧，是以數名女性的犧牲換來的。在個人記憶與口述歷史中，這些女性的身份與背景存有分歧的詮釋與爭議。
                <br /><br />
                慰安婦不僅是日軍暴行下的受害者，更深陷於戰時軍需產業鏈，成為日本與在地資本家共構的剝削體制的一環。多年後，她們的經歷仍未能獲得國家與社會的正視，歷史記憶的重建與遲來的傷痛修復依舊困難重重。
              </p>
              <div class="mt-6 w-full flex flex-col items-center">
                <iframe 
                  src="https://player.vimeo.com/video/1050013858" 
                  width="100%" 
                  height="200" 
                  class="h-[200px] sm:h-[400px]"
                  frameborder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowfullscreen>
                </iframe>
                <a
                  href="https://vimeo.com/1112615113"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 mt-10 hover:bg-[#999] hover:text-white"
                >
                  日本語字幕版</a
                >
              </div>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                教案名稱與設計理念
              </p>
              <div
                class="font-shippori text-[23px] sm:text-[28px] tracking-[4px] leading-[40px] text-[#757575] mt-7"
              >
                被噤聲的傷痛——<span class="sm:hidden"><br /></span>記憶慰安婦
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                本教案透過文本分析、角色扮演與議題關鍵字討論，幫助學生系統性學習慰安婦的歷史，深入了解日本軍事性奴隸制度下受害者的處境，與台灣慰安婦募集動員系統所牽涉的關鍵人物與途徑。透過角色代入回答系列問題，引導學生思考不同身份與立場如何成為共犯結構中的一部分。最終，藉由台灣、日本與韓國慰安婦爭議事件的搜尋，了解慰安婦倖存者戰後面臨的困境，進而反思記憶這段歷史的重要性。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                學習目標
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                在認識二戰日本軍事性奴隸制度的歷史後，引導學生理解慰安婦的困境是國家暴力與共犯結構交織下的結果。透過解析慰安婦動員系統中的各個角色，並查找不同國家對慰安婦議題的爭議與論述，探討受害者的傷痛與經歷為何難以被國家與社會記憶與討論，進而反思自己可以怎麼記憶這段歷史。
              </p>
            </div>
            <div class="flex flex-col border-b border-[#D0BC9C] py-12">
              <p class="font-noto text-[17px] tracking-[2px] text-[#D0BC9C] font-semibold">
                核心問題
              </p>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                二戰期間，日本的軍事性奴隸制度是如何構成的？<br />
                慰安婦的經歷與傷痛可以如何被大眾所記憶與討論？
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
                        課程引導
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
                        10<span class="text-[16px] ml-[2px]">min</span>
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
                        20<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        文本分析
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
                        10<span class="text-[16px] ml-[2px]">min</span>
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
                        20<span class="text-[16px] ml-[2px]">min</span>
                      </div>
                      <p
                        class="font-noto text-[#757575] text-[12px] sm:text-[13px] font-semibold tracking-[2px] mb-2 sm:mb-0"
                      >
                        議題分析
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
                        成果分享
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
                軍事性奴隸、國家暴力、共犯結構、慰安婦、記憶、創傷
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
                  鄭治綺
                </p>
                <img
                  src="/images-webp/author_6.webp"
                  class="w-[145px] sm:w-[166px] h-[145px] sm:h-[166px] ml-9"
                />
              </div>
              <p
                class="font-noto text-[14.5px] tracking-[0.5px] text-justify text-[#757575] mt-9 leading-[30px]"
              >
                來自屏東，畢業於國立政治大學外交系，曾擔任學生媒體逆思新聞編輯，透過舉辦系列活動讓學生從各角度探討媒體與社會的關係，推動學生媒體識讀與思辨能力；也曾任藝文前台經理，並協助影展策展。現任職於國會辦公室，多關心農業、青少年與女性議題。
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
                  href="https://drive.google.com/file/d/1Z56hqcVwGV8zJHTKeWXhf32RezY66JVA/view"
                  target="_blank"
                  class="font-wix w-[162px] text-[#999] flex sm:hidden justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white"
                >
                  台灣教案下載</a
                >
                <a
                  href="https://www.canva.com/design/DAGhUFrqqjk/R9SJqF5_8kEXWm_RYUqnCg/view?utm_content=DAGhUFrqqjk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h3f9dcd5c88"
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
