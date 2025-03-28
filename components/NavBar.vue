<script setup>
  import { useRuntimeConfig } from '#app'

  const config = useRuntimeConfig()
  const baseUrl = config.app?.baseURL || '/'

  defineProps({
    textColor: {
      type: String,
      default: '#999', // Default gray color
    },
    logoSrc: {
      type: String,
      default: 'images/logo_gray.png', // Default gray logo, without leading slash
    },
  })

  // Compute the full image path with the base URL
  const getImagePath = path => {
    // Remove leading slash if present to avoid double slashes
    const cleanPath = path.startsWith('/') ? path.substring(1) : path
    return `${baseUrl}${cleanPath}`
  }
</script>

<template>
  <div
    :class="[
      'sticky sm:fixed top-0 sm:top-11 left-12 w-full sm:w-10 h-[78px] sm:h-[61px] flex flex-col justify-center sm:items-start sm:justify-start z-20',
      textColor === 'white' ? 'bg-black/50' : 'bg-white/50',
      'sm:bg-transparent',
    ]"
  >
    <NuxtLink to="/" class="w-[22px] sm:w-10 hover:opacity-50"
      ><img
        :src="getImagePath(logoSrc)"
        class="w-[22px] sm:w-10 h-[34px] sm:h-[61px] ml-10 sm:ml-0"
    /></NuxtLink>
    <NuxtLink
      to="/film"
      class="hidden sm:flex font-wix tracking-[4px] text-xs mt-7 hover:opacity-50"
      :style="{ color: textColor }"
    >
      FILM
    </NuxtLink>
    <NuxtLink
      to="/lesson"
      class="hidden sm:flex font-wix tracking-[4px] text-xs mt-5 hover:opacity-50"
      :style="{ color: textColor }"
    >
      LESSON
    </NuxtLink>
    <NuxtLink
      to="/contact"
      class="hidden sm:flex font-wix tracking-[4px] text-xs mt-5 hover:opacity-50"
      :style="{ color: textColor }"
    >
      CONTACT
    </NuxtLink>
  </div>
</template>
