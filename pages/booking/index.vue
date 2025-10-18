<script setup>
  const menuRef = ref(null)
  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  const formData = reactive({
    email: '',
    name: '',
    phone: '',
    delivery: '',
    address: '',
    receiver_name: '',
    receiver_phone: '',
    quantity: '',
    total_amount: '',
    account_last_five_digits: '',
    payment_date: '',
    invoice_info: '',
    check_again: ''
  })

  const isSubmitting = ref(false)
  const submitStatus = ref('')

  async function submitForm() {
    // if (
    //   !formData.name ||
    //   !formData.email ||
    //   !formData.phone ||
    //   !formData.delivery
    // ) {
    //   alert('請填寫所有必填欄位')
    //   return
    // }

    isSubmitting.value = true
    submitStatus.value = ''

    try {
      // 使用預填URL的方式打開Google表單
      // 解析日期格式 (YYYY-MM-DD) 為年、月、日
      const parseDate = (dateString) => {
        if (!dateString) return { year: '', month: '', day: '' }
        const date = new Date(dateString)
        return {
          year: date.getFullYear().toString(),
          month: (date.getMonth() + 1).toString().padStart(2, '0'),
          day: date.getDate().toString().padStart(2, '0')
        }
      }
      
      const { year, month, day } = parseDate(formData.payment_date)
      
      const formUrl = `https://docs.google.com/forms/d/e/1FAIpQLSfI8QjhkgVyOMRjche4Qy1eyrZRVO5XkQG9fCPcLVMnIVRC8Q/viewform?usp=pp_url&emailAddress=${encodeURIComponent(formData.email)}&entry.506578022=${encodeURIComponent(formData.name)}&entry.1876921518=${encodeURIComponent(formData.phone)}&entry.6343927=${encodeURIComponent(formData.delivery)}&entry.413057570=${encodeURIComponent(formData.address)}&entry.440336493=${encodeURIComponent(formData.receiver_name)}&entry.958192304=${encodeURIComponent(formData.receiver_phone)}&entry.1618430672=${encodeURIComponent(formData.quantity)}&entry.1661916275=${encodeURIComponent(formData.total_amount)}&entry.1558590140=${encodeURIComponent(formData.account_last_five_digits)}&entry.252083826=${encodeURIComponent(formData.invoice_info)}&entry.121805833_year=${encodeURIComponent(year)}&entry.121805833_month=${encodeURIComponent(month)}&entry.121805833_day=${encodeURIComponent(day)}&entry.1102680287=${encodeURIComponent(formData.check_again === 'true' ? '確認' : '否')}`

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
          class="font-amiri italic text-[#757575] tracking-[1px] sm:tracking-[2px] text-[20px] sm:text-[28px]"
        >
          Personal Collection USB Order
        </p>
        <p class="font-shippori text-[#757575] text-[36px] sm:text-[44px] tracking-[8px]">個人收藏</p>
      </div>
      <img
        src="/images-webp/booking.webp"
        alt="booking"
        class="w-full sm:w-[650px] h-auto sm:h-[440px] mt-12"
      />
      <p
        class="w-full sm:w-[676px] text-[#757575] text-[14.5px] tracking-[0.5px] leading-[30px] mt-8 sm:mt-16 border-b border-[#D0BC9C] pb-8 sm:border-none"
      >
        🌊《由島至島》個人收藏版 USB 🌊<br />
        定價台幣 1800 元（含台灣本島郵資）。<br />
        訂購確認後將批次寄出。<br />
        如需寄往離島與海外，請聯繫我們，將個別為您服務。<br /><br />

        🌊 From Island to Island Home Edition USB 🌊<br />
        Price | 60 USD<br />
        For overseas purchase, please contact us.<br />
        𝕖𝕞𝕒𝕚𝕝 - fromislandtoisland2024@gmail.com<br /><br />

        💡 請注意 💡 請匯款後再填寫表單。<br /><br />

        ☀️ 匯款資訊 ☀️<br />
        銀行：007第一銀行 中崙分行<br />
        帳號：142-10-095138<br />
        戶名：蜂鳥影像有限公司<br />
        對帳成功將以Email通知確認。<br /><br />
      </p>
      <form
        @submit.prevent="submitForm"
        class="flex flex-col mb-20 gap-y-10 w-full sm:max-w-[676px]"
      >
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q1: 電子郵件
          </p>
          <input
            v-model="formData.email"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q2: 購買人姓名<br />
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
            Q3: 購買人電話
          </p>
          <input
            v-model="formData.phone"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q4: 郵寄方式
          </p>
          <div
            class="grid grid-cols-1 gap-y-6 w-full text-[#757575] text-[14.5px] tracking-[0.5px] leading-[30px]"
          >
            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.delivery"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="中華郵政，請於下欄填寫郵寄地址（含郵遞區號）"
              />
              <label for="legal">中華郵政，請於下欄填寫郵寄地址（含郵遞區號）</label>
            </div>
            <div class="flex gap-x-2 items-center">
              <input
                v-model="formData.delivery"
                type="radio"
                name="demo_radio"
                class="w-5 h-5 accent-[#a48b61]"
                value="7-11店到店，請於下欄填寫7-11店號與店名"
              />
              <label for="legal">7-11 店到店，請於下欄填寫 7-11 店號與店名</label>
            </div>
          </div>
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q5: 郵寄地址或 7-11 店號與店名

          </p>
          <input
            v-model="formData.address"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>

        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q6: 收件人姓名
          </p>
          <input
            v-model="formData.receiver_name"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q7: 收件人電話
          </p>
          <input
            v-model="formData.receiver_phone"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q8: 購買數量
          </p>
          <input
            v-model="formData.quantity"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="number"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q9: 匯款總金額
          </p>
          <input
            v-model="formData.total_amount"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="number"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q10: 匯款帳號後五碼
          </p>
          <input
            v-model="formData.account_last_five_digits"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q11: 匯款日期
          </p>
          <input
            v-model="formData.payment_date"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="date"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q12: 發票資訊（個人請提供姓名，法人請提供統編與抬頭）或留言不指定捐贈
          </p>
          <input
            v-model="formData.invoice_info"
            class="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#D0BC9C]"
            type="text"
            required
          />
        </div>
        <div class="flex flex-col w-full gap-y-4 items-start">
          <p
            class="font-noto text-[17px] text-[#D0BC9C] font-semibold tracking-[2px] leading-[36px]"
          >
            Q13: 請再檢查一次填寫資料
          </p>
          <div class="flex gap-x-2 items-center text-[#757575] text-[14.5px] tracking-[0.5px] leading-[30px]">
            <input
              v-model="formData.check_again"
              class="w-5 h-5 accent-[#a48b61]"
              type="checkbox"
              required
            />
            <label for="check_again">確認</label>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button
            type="submit"
            :disabled="isSubmitting"
            class="font-wix w-[162px] text-[#757575] flex justify-center py-3 bg-white border border-[#757575]/70 hover:bg-[#757575] hover:text-white mt-12"
          >
            {{ isSubmitting ? '提交中...' : '確認訂購' }}
          </button>
        </div>
        <div
          class="flex flex-col w-full sm:w-[676px] text-[#757575] text-[14.5px] tracking-[0.5px] leading-[30px] mt-8"
        >
          ✹ 規格說明 ✹<br /><br />
          ※ USB僅提供電腦讀取，不支援DVD播放器或部分電視設備的USB插槽。<br />
          ※ 為Type-A接頭，裝載4K中英／日英字幕影片與智慧選單。<br />
          ※ 影片總長為4小時50分鐘。分為上集2小時22分鐘與下集2小時27分鐘。<br /><br />

          <div class="flex"><span class="font-semibold">Windows系統：</span> Win 10 / 11<br /></div>
          支援高畫質 4K<br />
          CPU: Intel i5 處理器以上或更高<br />
          記憶體需求: 8GB 以上（HD畫質以上建議16GB）<br />
          需已安裝 Net Framework 4.0 以上<br />
          需安裝 Visual C++ 可轉散發套件（會自動偵測與安裝）<br /><br />

          <span class="font-semibold">MAC系統：</span> macOS High Sierra 10.15 / macOS Mojave 10.15 / macOS Catalina 10.15.7 / macOS Big Sur 11.6.6 / macOS Monterey 12.4 / MacOS Ventura 13.6<br />
          支援高畫質 4K<br />
          <br />
          ※ USB內含防盜機制，無法刪除或新增檔案<br />
          ※ 播放時所有電腦通訊軟體需關閉<br />
          <div class="flex">※ 商品以實物為準，若有問題請洽<a href="https://www.facebook.com/fromislandtoisland" target="_blank" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">由島至島 FB 粉絲頁</a></div>
          ※ 個人收藏版為個人使用，不可作為公播或公家單位收藏版本<br /><br />
          <div class="flex">如有需求請洽<a href="mailto:fromislandtoisland2024@gmail.com" class="inline-block font-semibold text-[#d0bc9c] hover:opacity-80 cursor-pointer">由島至島信箱</a></div>
        </div>
      </form>
    </div>
  </div>
  <Footer bgColor="white" textColor="#757575" :opacity="80" />
</template>
