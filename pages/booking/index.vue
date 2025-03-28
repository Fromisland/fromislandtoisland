<script setup>
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  const formData = reactive({
    location: '',
    time: '',
    people: '',
    name: '',
    email: '',
    phone: '',
  })

  const isSubmitting = ref(false)
  const submitStatus = ref('')

  async function submitForm() {
    if (
      !formData.location ||
      !formData.time ||
      !formData.people ||
      !formData.name ||
      !formData.email ||
      !formData.phone
    ) {
      alert('請填寫所有必填欄位')
      return
    }

    isSubmitting.value = true
    submitStatus.value = ''

    try {
      // 使用預填URL的方式打開Google表單
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSdUBqW9ebF2o4clwwIuTFQI1No-lWtzTbGXDbLobmAHiTOgjA/viewform?usp=pp_url&entry.111359557=${encodeURIComponent(formData.location)}&entry.645334492=${encodeURIComponent(formData.time)}&entry.1078785357=${encodeURIComponent(formData.people)}&entry.1481564022=${encodeURIComponent(formData.name)}&entry.1199051465=${encodeURIComponent(formData.email)}&entry.44633490=${encodeURIComponent(formData.phone)}`

      // 在新窗口中打開預填好的表單
      window.open(formUrl, '_blank')

      submitStatus.value = 'success'
      // 清空表單
      formData.location = ''
      formData.time = ''
      formData.people = ''
      formData.name = ''
      formData.email = ''
      formData.phone = ''
    } catch (error) {
      console.error('提交表單時發生錯誤:', error)
      submitStatus.value = 'error'
    } finally {
      isSubmitting.value = false
    }
  }
</script>
<template>
  <div class="flex flex-col bg-[#f6f6f6] w-screen h-auto min-h-screen items-center">
    <NavBar textColor="#999" logoSrc="/images/logo_gray.png" />
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu_gray.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="flex flex-col w-full z-10 items-center opacity-80 px-10">
      <div class="flex flex-col items-center w-full mt-12 sm:mt-[233px]">
        <p
          class="font-amiri italic text-[#999] tracking-[1px] sm:tracking-[2px] text-[20px] sm:text-[28px]"
        >
          Private Screening Booking
        </p>
        <p class="font-shippori text-[#999] text-[36px] sm:text-[44px] tracking-[8px]">包場申請</p>
      </div>
      <img
        src="/images-webp/booking.webp"
        alt="booking"
        class="w-full sm:w-[650px] h-auto sm:h-[440px] mt-12"
      />
      <p
        class="w-full sm:w-[676px] text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] mt-8 sm:mt-20 border-b border-[#D0BC9C] pb-10 sm:border-none"
      >
        若您有興趣包場觀賞電影，請撥冗填寫本表單，將會有專人與您聯繫。<br />
        更多關於電影《由島至島》的訊息，請密切關注臉書公告。<br /><br />
        《由島至島》From Island to Island<br />
        ★ 第61屆金馬獎最佳紀錄片、最佳音效<br />
        ★ 第26屆台北電影獎 百萬首獎得主<br /><br />
        電影片長：4時50分17秒<br />
        電影分級：保護級（未滿六歲不得觀賞）<br />
        電影字幕：中英文字幕
      </p>
      <form
        @submit.prevent="submitForm"
        class="flex flex-col mt-10 mb-20 gap-y-10 w-full sm:max-w-[676px]"
      >
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q1: 預計包場的縣市？
          </p>
          <input
            v-model="formData.location"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q2: 預計包場的日期 / 時段？<br />
          </p>
          <textarea
            v-model="formData.time"
            class="px-3 py-2 placeholder:text-[#ccc] focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            placeholder="請預抓一小時的開演區間，如 3/1（六）18:00-19:00 區間開演"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q3: 預計包場人數？
          </p>
          <div
            class="grid grid-cols-1 sm:grid-cols-4 gap-x-12 gap-y-6 w-full text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px]"
          >
            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                value="50人以下"
                class="w-5 h-5 accent-[#a48b61]"
                required
              />
              <label for="male">50人以下</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="51-100人"
              />
              <label for="female">51-100人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="101-150人"
              />
              <label for="legal">101-150人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="151-200人"
              />
              <label for="legal">151-200人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="201-250人"
              />
              <label for="legal">201-250人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="251-300人"
              />
              <label for="legal">251-300人</label>
            </div>

            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.people"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="301人以上"
              />
              <label for="legal">301人以上</label>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q4: 您的姓名
          </p>
          <input
            v-model="formData.name"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q5: 您的E-mail
          </p>
          <input
            v-model="formData.email"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="email"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q6: 您的聯絡電話
          </p>
          <input
            v-model="formData.phone"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="font-wix w-[162px] text-[#999] flex justify-center py-3 bg-white border border-[#999]/70 hover:bg-[#999] hover:text-white mt-12"
          >
            {{ isSubmitting ? '提交中...' : '包場申請' }}
          </button>
        </div>
        <div
          class="flex flex-col w-full sm:w-[676px] text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] mt-8"
        >
          包場詳細規則如下：<br /><br />

          <div class="flex">
            <span class="shrink-0">1. </span>
            <span class="flex-1 pl-2"
              >電影片長：290分鐘，分上下集播映。保護級，未滿6歲禁止入場</span
            >
          </div>
          <div class="flex">
            <span class="shrink-0">2. </span>
            <span class="flex-1 pl-2"
              >收到包場需求後，我們將會盡快遵照您的需求，為您提供戲院選項</span
            >
          </div>
          <div class="flex">
            <span class="shrink-0">3. </span>
            <span class="flex-1 pl-2"
              >費用的部分，因本片片長較長，將會依照您的需求由我們向戲院詢問，會一併進行回覆</span
            >
          </div>
          <div class="flex">
            <span class="shrink-0">4. </span>
            <span class="flex-1 pl-2"
              >影人可以參與與否我們會提前註記盡量安排，惟因行程無法完全配合，若影人無法到場敬請見諒</span
            >
          </div>
        </div>
        <p
          class="text-[#999] text-[14.5px] tracking-[0.5px] leading-[30px] w-full sm:w-[676px] mb-10"
        >
          若您尚有其他問題，歡迎聯繫：<br />
          distribution.mars@gmail.com<br />
          0987-068-689 林先生
        </p>
      </form>
    </div>
  </div>
  <Footer bgColor="white" textColor="#757575" :opacity="80" />
</template>
