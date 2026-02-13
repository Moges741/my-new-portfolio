<script setup>
import AboutSection from '~/components/about/AboutSection.vue';
import HeroSection from '~/components/HeroSection.vue'
import ParallaxBackground from '~/components/ParallaxBackground.vue'
import Projects from '../pages/projects/index.vue';

import { ref, onMounted } from "vue"
const show = ref(false)
onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 300)
})
const tools = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Vue",
  "Nuxt",
  "Node.js",
  "Express",
  "MySQL",
  "Git",
  "REST API"
]

</script>

<template>
  <div class="text-white min-h-screen">
    <ParallaxBackground />
    <HeroSection />
    <AboutSection/>
    <Projects/>

  </div>

<section class="min-h-screen flex items-center pt-8 relative overflow-hidden">
  <div class="glow glow-tools-1"></div>
  <div class="glow glow-tools-2"></div>

  <div class="max-w-7xl mx-auto px-2 grid md:grid-cols-2 gap-14 items-center">
    <div
      class="transition-all duration-1000"
      :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
    >

      <h2 class="text-4xl md:text-5xl font-bold mb-6">
        <span class="gradient-text">Tools & Technologies</span>
      </h2>

      <p class="text-gray-300 text-lg leading-relaxed mb-6">
        My arsenal of tools and technologies I've mastered to build amazing things.
      </p>

      <p class="text-gray-400 leading-relaxed">
        I carefully choose the right technology for each project — whether it's building
        dynamic user interfaces, scalable backend systems, or high-performance applications.
        I constantly learn and adapt to modern development trends.
      </p>
      <div class="flex flex-wrap gap-3 mt-8">
        <span v-for="tool in tools" :key="tool" class="tool-pill">
          {{ tool }}
        </span>
      </div>

    </div>
    <div
      class="flex justify-center transition-all duration-2000 delay-100"
      :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
    >
      <img
        src="../assets/images/tools.png"
        class="w-[450px] drop-shadow-[0_20px_80px_rgba(99,102,241,0.35)] floating"
      />
    </div>

  </div>

</section>

</template>
<style scoped>

.gradient-text{
  background: linear-gradient(90deg,#6366f1,#a855f7,#3b82f6);
  -webkit-background-clip:text;
  color:transparent;
}

.tool-pill{
  padding:8px 16px;
  border-radius:999px;
  background: rgba(99,102,241,.15);
  border:1px solid rgba(99,102,241,.3);
  font-size:14px;
  transition:.3s;
  color: rgb(149, 145, 145);
}

.tool-pill:hover{
  background: rgba(168,85,247,.2);
  transform: translateY(-3px);
}

/* Floating Image Animation */
.floating{
  animation: float 6s ease-in-out infinite;
}

@keyframes float{
  0%{ transform: translateY(0px) }
  50%{ transform: translateY(-15px) }
  100%{ transform: translateY(0px) }
}
.glow{
  position:absolute;
  width:500px;
  height:500px;
  filter:blur(140px);
  opacity:.2;
  border-radius:50%;
}

.glow-tools-1{
  background:#6366f1;
  top:20%;
  left:-10%;
}

.glow-tools-2{
  background:#a855f7;
  bottom:10%;
  right:-10%;
}

</style>
