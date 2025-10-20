<script setup>
  import { ref } from 'vue'

  const isLoading = ref(true)

  const checkImagesLoaded = () => {
    const images = [
      '/images-webp/first_bg.webp',
      '/images-webp/first_photo5.webp',
      '/images-webp/first_photo4.webp',
      '/images-webp/first_photo3.webp',
      '/images-webp/first_photo2.webp',
      '/images-webp/first_photo1.webp',
    ]

    return Promise.all(
      images.map(src => {
        return new Promise(resolve => {
          const img = new Image()
          img.src = src
          img.onload = () => resolve()
          img.onerror = () => resolve() // Continue even if image fails to load
        })
      })
    )
  }

  const { $gsap: gsap, $ScrollTrigger: ScrollTrigger } = useNuxtApp()

  // 延遲載入 YouTube 相關資源
  const loadYouTubeEmbed = async () => {
    await import('lite-youtube-embed/src/lite-yt-embed.css')
    await import('lite-youtube-embed')
  }
  const menuRef = ref(null)

  const toggleMenu = () => {
    menuRef.value.show()
  }

  const closeMenu = () => {
    menuRef.value.hide()
  }

  onMounted(() => {
    const minDuration = 2000
    const maxWaitTime = 3000
    const imagesPromise = checkImagesLoaded()
    const minTimer = new Promise(resolve => setTimeout(resolve, minDuration))
    const maxTimer = new Promise(resolve => setTimeout(() => resolve('timeout'), maxWaitTime))

    // Ensure loader stays for at least minDuration, but not more than maxWaitTime
    Promise.race([Promise.all([imagesPromise, minTimer]), maxTimer]).then(result => {
      if (result === 'timeout') {
        console.log('Loading timed out, proceeding with the rest of the code.')
      } else {
        console.log('Images loaded and minimum duration elapsed.')
      }
      isLoading.value = false
    })

    // 延遲載入 YouTube 組件
    setTimeout(loadYouTubeEmbed, 2000)

    // Listen for window resize
    const allImages = Array.from(document.querySelectorAll('.image-box img'))
    const textElements = document.querySelectorAll('.still p')
    const stills2Image = document.querySelector('.stills2')
    const titleSections = document.querySelectorAll('.title-text-section, .vertical-text-section')
    const lessonTopic = document.querySelectorAll('.lessonTopic p')
    const filmTitleElement = document.querySelector('.filmText > div')
    const filmTextElement = document.querySelector('.filmText > p')
    const filmContentElements = document.querySelectorAll(
      '.filmContent > div:nth-child(2), .filmContent > div:nth-child(3)'
    )

    // Wait for loading to complete before starting animations
    watch(isLoading, newValue => {
      if (newValue === false) {
        initializeAnimations()
      }
    })

    const initializeAnimations = () => {
      // Set initial state for film sections
      gsap.set([filmTitleElement, filmTextElement, ...filmContentElements], {
        opacity: 0,
        y: 30,
        filter: 'blur(5px)',
      })

      gsap.set(titleSections, {
        opacity: 0,
        filter: 'blur(15px)',
      })

      // Animate title sections
      gsap.to(titleSections, {
        opacity: 1,
        filter: 'blur(0px)',
        duration: 2,
        delay: 0.5,
        ease: 'power2.out',
      })

      // Initialize all images as hidden
      allImages.forEach((img, index) => {
        gsap.set(img, {
          opacity: 0,
          y: 5,
          filter: 'blur(3px)',
          zIndex: index + 1, // photo5 (index 0) gets z-index 1, photo1 (index 4) gets z-index 5
        })
      })

      // Create sequential animation for images
      const tl = gsap.timeline({ delay: 0.1 })
      allImages.forEach((img, index) => {
        tl.to(
          img,
          {
            opacity: 0.4,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.5,
            ease: 'power1.inOut',
          },
          index * 0.8
        ) // Stagger the animations
      })

      // Text animations
      textElements.forEach(text => {
        gsap.set(text, {
          opacity: 0,
          y: 30,
          filter: 'blur(5px)',
        })
      })

      ScrollTrigger.create({
        trigger: '.still',
        start: 'top center',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress

          textElements.forEach((text, index) => {
            const delay = index * 0.6 // Original order when scrolling down

            gsap.to(text, {
              opacity: progress * 1.5,
              y: progress * -30,
              filter: 'blur(0px)',
              duration: 2.5,
              delay: delay,
              ease: 'power2.out',
            })
          })
        },
      })

      gsap.set(stills2Image, {
        opacity: 0,
        maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%)',
      })

      // Create ScrollTrigger for both images
      ScrollTrigger.create({
        trigger: stills2Image,
        start: 'top bottom',
        end: 'bottom bottom',

        scrub: true,
        onUpdate: self => {
          const progress = self.progress

          gsap.to(stills2Image, {
            opacity: progress < 0.5 ? 0 : (progress - 0.5) * 2,
            duration: 0.2,
            maskImage: `linear-gradient(to top, rgba(0, 0, 0, 1) ${20 + progress * 50}%, rgba(0, 0, 0, 0) 100%)`,
            ease: 'power1.out',
          })
        },
      })

      gsap.set(['.filmContent', 'lessonContent'], { opacity: 0, y: 30, filter: 'blur(5px)' })
      ScrollTrigger.create({
        trigger: '.film',
        start: 'top bottom',
        end: 'top 25%',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress
          gsap.to('.film', {
            y: progress * -100,
            duration: 0.2,
            ease: 'power1.out',
          })
          gsap.to('.filmContent', {
            opacity: progress,
            y: (1 - progress) * 30,
            filter: `blur(${(1 - progress) * 5}px)`,
            duration: 0.2,
            ease: 'power1.out',
          })
        },
      })

      ScrollTrigger.create({
        trigger: '.lesson',
        start: 'top bottom',
        end: 'top 25%',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress
          gsap.to('.lesson', {
            y: progress * -100,
            duration: 0.2,
            ease: 'power1.out',
          })
          gsap.to('.lessonContent', {
            opacity: progress,
            y: (1 - progress) * 30,
            filter: `blur(${(1 - progress) * 5}px)`,
            duration: 0.2,
            ease: 'power1.out',
          })
        },
      })

      ScrollTrigger.create({
        trigger: '.film',
        start: 'top 75%',
        end: 'top 25%',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress

          // Animate title first
          gsap.to(filmTitleElement, {
            opacity: progress,
            y: (1 - progress) * 30,
            filter: 'blur(0px)',
            duration: 1.5,
            delay: 0, // No delay for title
            ease: 'power2.out',
          })

          // Animate text with delay
          gsap.to(filmTextElement, {
            opacity: progress,
            y: (1 - progress) * 30,
            filter: 'blur(0px)',
            duration: 1.5,
            delay: 0.3, // Consistent delay
            ease: 'power2.out',
          })

          // Animate other content elements
          filmContentElements.forEach((element, index) => {
            const delay = (index + 2) * 0.3 // Start delay after text (index + 2)

            gsap.to(element, {
              opacity: progress,
              y: (1 - progress) * 30,
              filter: 'blur(0px)',
              duration: 1.5,
              delay: delay,
              ease: 'power2.out',
            })
          })
        },
      })

      // Set initial state for lessonTopic
      lessonTopic.forEach(text => {
        gsap.set(text, {
          opacity: 0,
          filter: 'blur(5px)',
        })
      })

      ScrollTrigger.create({
        trigger: '.lesson',
        start: 'top 75%',
        end: 'top 25%',
        scrub: true,
        onUpdate: self => {
          const progress = self.progress
          const totalElements = lessonTopic.length

          lessonTopic.forEach((text, index) => {
            // Calculate delay based on odd/even index
            const isOdd = index % 2 !== 0
            const adjustedIndex = isOdd
              ? Math.floor(totalElements / 2) + Math.floor(index / 2)
              : Math.floor(index / 2)

            const delay = adjustedIndex * 0.3 // Consistent delay for odd indices first

            gsap.to(text, {
              opacity: progress,
              filter: 'blur(0px)',
              duration: 2.5,
              delay: delay,
              ease: 'power2.out',
            })
          })
        },
      })

      // Cleanup
      onUnmounted(() => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill())
      })
    }
  })
</script>

<style>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  lite-youtube {
    background-color: #000;
    position: relative;
    display: block;
    contain: content;
    background-position: center center;
    background-size: cover;
    cursor: pointer;
  }

  .ripple-effect {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images-webp/first_bg.webp');
  }
  .third-bg {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-image: url('/images-webp/third_bg.webp');
  }
  .forth-bg {
    background-size: cover;
    background-position: center top;
    background-repeat: no-repeat;
    background-image: url('/images-webp/fourth_bg.webp');
  }
  .rotateText {
    writing-mode: vertical-rl;
  }
  .mask-leathers {
    mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);
    -webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 100%, rgba(0, 0, 0, 0) 100%);
  }
  .ocean-bg {
    background-image: url('/images-webp/ocean.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .ocean-loader {
    background-image: url('/images-webp/logo.webp');
    width: 80px;
    height: 120px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: ocean-loader 2s infinite ease-in-out;
  }
  .loader-text {
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
  }
  .loader-letter {
    display: inline-block;
    transform: translateY(16px);
    opacity: 0;
    animation: riseIn 0.6s ease forwards;
    animation-delay: calc(var(--i) * 80ms);
  }
  .loader-space {
    display: inline-block;
    width: 10px;
  }
  @keyframes riseIn {
    0% {
      transform: translateY(16px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 0.9;
    }
  }
  @keyframes ocean-loader {
    0% {
      transform: translateY(0);
      opacity: 0.4;
    }
    25% {
      transform: translateY(-5px);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-7px);
      opacity: 0.6;
    }
    75% {
      transform: translateY(-4px);
      opacity: 0.7;
    }
    100% {
      transform: translateY(0);
      opacity: 0.7;
    }
  }
</style>

<template>
  <Transition name="fade">
    <div
      v-show="isLoading"
      class="fixed inset-0 z-30 flex items-center justify-center ocean-bg"
    >
      <div class="flex flex-col items-center">
        <div class="ocean-loader"></div>
        <div class="loader-text mt-6 font-amiri italic text-white text-[18px] tracking-[1px] opacity-60">
          <span class="loader-letter" style="--i:0">F</span>
          <span class="loader-letter" style="--i:1">r</span>
          <span class="loader-letter" style="--i:2">o</span>
          <span class="loader-letter" style="--i:3">m</span>
          <span class="loader-space"></span>
          <span class="loader-letter" style="--i:4">I</span>
          <span class="loader-letter" style="--i:5">s</span>
          <span class="loader-letter" style="--i:6">l</span>
          <span class="loader-letter" style="--i:7">a</span>
          <span class="loader-letter" style="--i:8">n</span>
          <span class="loader-letter" style="--i:9">d</span>
          <span class="loader-space"></span>
          <span class="loader-letter" style="--i:10">t</span>
          <span class="loader-letter" style="--i:11">o</span>
          <span class="loader-space"></span>
          <span class="loader-letter" style="--i:12">I</span>
          <span class="loader-letter" style="--i:13">s</span>
          <span class="loader-letter" style="--i:14">l</span>
          <span class="loader-letter" style="--i:15">a</span>
          <span class="loader-letter" style="--i:16">n</span>
          <span class="loader-letter" style="--i:17">d</span>
        </div>
      </div>
    </div>
  </Transition>
  <div class="relative overflow-x-hidden h-[270vh] w-full">
    <SideMenu ref="menuRef" @close="closeMenu" />
    <div class="fixed right-10 sm:right-12 top-6 sm:top-10 cursor-pointer z-20">
      <img src="/images/menu.svg" alt="menu" class="w-8 sm:w-10 h-8" @click="toggleMenu" />
    </div>
    <div class="ripple-effect absolute flex flex-col items-center w-full h-full overflow-x-hidden">
      <div class="title w-full min-h-screen relative flex items-center">
        <div class="sm:hidden absolute left-10 z-10 top-[55px]">
          <img src="/images-webp/title.webp" alt="title" class="w-[140px] h-[81px]" />
        </div>

        <div class="flex sm:px-[162px] justify-center relative w-full h-auto">
          <div
            class="title-text-section flex flex-col absolute top-[480px] sm:top-[447px] left-[60px] sm:left-[162px]"
          >
            <p
              class="font-shippori text-white text-[32px] sm:text-[50px] tracking-[8px] sm:tracking-[10px]"
            >
              由島至島
            </p>
            <p
              class="font-shippori text-white text-[32px] sm:text-[50px] tracking-[8px] sm:tracking-[10px]"
            >
              記憶與對話
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[1.5px] mt-7 pb-1"
            >
              From Island
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[1.5px] pb-1"
            >
              to Island
            </p>
            <p
              class="font-amiri italic text-xl sm:text-[25px] text-white tracking-[1px] sm:tracking-[1.5px]"
            >
              Memory and Dialogue
            </p>
          </div>
          <div
            class="image-box mt-16 sm:mt-[100px] relative flex justify-center w-screen overflow-hidden"
          >
            <img
              src="/images-webp/first_photo5.webp"
              alt="photo5"
              class="opacity-40 h-[380px] w-[447px] min-w-[447px] sm:h-[709px] sm:w-[834px] sm:min-w-[834px]"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
            <img
              src="/images-webp/first_photo4.webp"
              alt="photo4"
              class="opacity-40 h-[380px] w-[447px] min-w-[447px] sm:h-[709px] sm:w-[834px] sm:min-w-[834px] absolute top-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
            <img
              src="/images-webp/first_photo3.webp"
              alt="photo3"
              class="opacity-40 h-[380px] w-[447px] min-w-[447px] sm:h-[709px] sm:w-[834px] sm:min-w-[834px] absolute top-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
            <img
              src="/images-webp/first_photo2.webp"
              alt="photo2"
              class="opacity-40 h-[380px] w-[447px] min-w-[447px] sm:h-[709px] sm:w-[834px] sm:min-w-[834px] absolute top-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
            <img
              src="/images-webp/first_photo1.webp"
              alt="photo1"
              class="opacity-40 h-[380px] w-[447px] min-w-[447px] sm:h-[709px] sm:w-[834px] sm:min-w-[834px] absolute top-0"
              fetchpriority="high"
              loading="eager"
              decoding="async"
            />
          </div>
          <div
            class="vertical-text-section hidden absolute top-[106px] right-[162px] sm:flex flex-col z-10"
          >
            <img src="/images-webp/title.webp" alt="title" class="w-[276px] h-[160px]" />
            <div class="mt-24 -translate-x-2 flex">
              <NuxtLink
                to="/lesson/five"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                為什麼要記憶
              </NuxtLink>
              <NuxtLink
                to="/lesson/four"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                克服過去
              </NuxtLink>
              <NuxtLink
                to="/lesson/three"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                共犯結構
              </NuxtLink>
              <NuxtLink
                to="/lesson/two"
                class="font-shippori text-white text-xl tracking-[8px] rotateText mr-8 hover:opacity-50"
              >
                加害與被害
              </NuxtLink>
              <NuxtLink
                to="/lesson/one"
                class="font-shippori text-white text-xl tracking-[8px] rotateText hover:opacity-50"
                >移動與邊界</NuxtLink
              >
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col w-full min-h-[70vh] items-center justify-center still relative">
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[6px] mt-[250px] sm:mt-20"
        >
          記憶像水一樣流動
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[6px] mt-12"
        >
          我們可以選擇如何記憶
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[6px] mt-12"
        >
          也是在重塑我們
        </p>
        <p
          class="font-shippori text-white text-[17px] sm:text-[22px] tracking-[5px] sm:tracking-[6px] mt-12"
        >
          作為人的意義
        </p>
      </div>
      <div class="flex w-full h-screen translate-y-[var(--parallax-y)] mask-leathers">
        <img
          src="/images-webp/still_3.webp"
          alt="stills2"
          class="stills2 size-full origin-center object-cover object-[37%_center] sm:object-center"
        />
      </div>
    </div>
  </div>
  <div class="min-h-max sm:h-screnn flex third-bg justify-center items-center film z-0">
    <div
      class="sm:max-w-[1200px] w-screen h-full min-h-screen flex flex-col items-center justify-center sm:flex-row sm:gap-x-[142px] sm:mb-24 filmContent pt-12 pb-[150px] sm:pb-0 px-10"
    >
      <div class="flex flex-col gap-y-6 sm:gap-y-14 items-center sm:items-start filmText">
        <div class="flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">FILM</p>
          <p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[6px]">由島至島</p>
        </div>
        <p
          class="hidden sm:flex font-noto text-white tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px]"
        >
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <NuxtLink
          to="/film"
          class="hidden sm:flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </NuxtLink>
      </div>
      <div class="flex flex-col">
        <lite-youtube
          videoid="YkEfOmfF5FM"
          class="w-full sm:w-[568px] h-[220px] sm:h-[362px] mt-10 sm:mt-24 shadow-md"
          playlabel="由島至島 From Island to Island"
        ></lite-youtube>
        <img
          src="/images-webp/forth_logo.webp"
          alt="forth_logo"
          class="mt-6 sm:mt-20 w-[568px] h-auto"
        />
      </div>
      <div class="flex flex-col mt-9 sm:hidden items-center">
        <p
          class="font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[412px] leading-[36px] text-sm sm:text-[16px] text-justify"
        >
          台灣在二戰期間是日本帝國的一部分。本片以此為主題，努力挖掘和重新整理台灣在二戰期間的隱藏記憶，探索在日本帝國內的台灣士兵、醫生與生活在東南亞的海外台灣人之經歷。全片從兒子對父親的提問開場，透過跨世代的對話、家書、日記和家庭成員之間的影片，探討台灣歷史記憶的複雜性，以及這一時期存在的各種身分。
        </p>
        <NuxtLink
          to="/film"
          class="flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500 mt-8"
        >
          View more
        </NuxtLink>
      </div>
    </div>
  </div>
  <div
    class="min-h-max sm:h-screen w-full flex forth-bg justify-center items-center lesson -mt-[100px] z-0"
  >
    <div
      class="max-w-[1600px] flex flex-col items-center sm:flex-row my-[100px] sm:my-[224px] lessonContent"
    >
      <div class="flex sm:hidden flex-col items-center sm:items-start">
        <p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">LESSON</p>
        <p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]">主題教案</p>
      </div>
      <div
        class="flex w-full sm:w-auto opacity-20 sm:mr-[112px] lessonTopic justify-center mt-12 sm:mt-0 mb-6 sm:mb-0 px-4 sm:px-0 overflow-x-auto"
      >
        <p
          class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[22px] sm:tracking-[36px] rotateText mr-4 sm:mr-7 whitespace-nowrap blur"
        >
          為什麼要記憶
        </p>
        <p
          class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[22px] sm:tracking-[36px] rotateText mr-4 sm:mr-7 mt-9 sm:mt-12 whitespace-nowrap blur"
        >
          克服過去
        </p>
        <p
          class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[22px] sm:tracking-[36px] rotateText mr-4 sm:mr-7 whitespace-nowrap blur"
        >
          共犯結構
        </p>
        <p
          class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[22px] sm:tracking-[36px] rotateText mr-4 sm:mr-7 mt-9 sm:mt-12 whitespace-nowrap blur"
        >
          加害與被害
        </p>
        <p
          class="font-shippori text-white text-[30px] sm:text-[59px] tracking-[22px] sm:tracking-[36px] rotateText whitespace-nowrap blur"
        >
          移動與邊界
        </p>
      </div>
      <div class="flex flex-col items-center sm:items-start gap-y-6 sm:gap-y-14 px-10 sm:px-0">
        <div class="hidden sm:flex flex-col items-center sm:items-start">
          <p class="font-amiri italic text-white tracking-[6px] text-lg sm:text-[28px]">LESSON</p>
          <p class="font-shippori text-white text-[36px] sm:text-[44px] tracking-[8px]">主題教案</p>
        </div>
        <p
          class="font-noto text-white tracking-[1px] sm:tracking-[2px] w-full sm:w-[440px] leading-[36px] text-[14px] sm:text-[16px] text-justify"
        >
          《由島至島》教育推廣規劃，從本片中節選出５個主題的片段，發展搭配教案，免費開放老師申請作為課程教授素材。五大主題為：移動與邊界、加害與被害、共犯結構－日本擴張行動、克服過去、為什麼要記憶，各有台灣、日本及馬來西亞教案可下載。
        </p>
        <NuxtLink
          to="/lesson"
          class="flex justify-center font-wix text-white text-lg border border-white py-4 w-[162px] hover:bg-white hover:text-[#aaa] transition-all duration-500"
        >
          View more
        </NuxtLink>
      </div>
    </div>
  </div>
  <div
    class="w-full h-[190px] sm:h-[146px] bg-black -mt-[100px] flex sm:px-20 items-center justify-center z-10"
  >
    <div class="max-w-[1440px] w-full flex flex-col sm:flex-row items-center justify-between">
      <div class="flex gap-x-16 sm:gap-x-[77px]">
        <a
          href="https://www.facebook.com/fromislandtoisland"
          target="_blank"
          class="font-shippori text-[18px] text-white/80 tracking-[10px] hover:text-white"
          >由島至島</a
        >
      </div>
      <div class="flex flex-col-reverse items-center sm:flex-row gap-x-[30px]">
        <a
          href="https://siddharam.com/"
          target="_blank"
          class="font-noto text-[12px] text-white/80 tracking-[1px] mt-1 sm:mt-0"
        >
          網站製作｜西打藍好內容有限公司
        </a>
        <p class="font-wix text-[13px] text-white/80 mt-8 sm:mt-0">
          Copyright © HUMMINGBIRD Production
        </p>
      </div>
    </div>
  </div>
</template>
