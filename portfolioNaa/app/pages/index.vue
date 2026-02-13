<script setup>
import AboutSection from '~/components/about/AboutSection.vue';
import HeroSection from '~/components/HeroSection.vue'
import ParallaxBackground from '~/components/ParallaxBackground.vue'
</script>

<template>
  <div class="text-white min-h-screen">
    <ParallaxBackground />
    <HeroSection />
    <AboutSection/>
  </div>
</template>
