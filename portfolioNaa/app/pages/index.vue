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
  "REST API",
  "C++",
  "Python",
  "Typescript",
  "Java",
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
<div class="grid grid-cols-1 md:grid-cols-2 gap-14">

    <div
      class="transition-all duration-1000"
      :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
    >

      <h2 class="text-4xl md:text-5xl  pl-6 font-bold mb-6">
        <span class="gradient-text">Tools & Technologies</span>
      </h2>

      <p class="text-gray-300 text-lg leading-relaxed mb-6 max-w-md md:max-w-2xl pl-6 lg:max-w-3xl ">
        My arsenal of tools and technologies I've mastered to build amazing things.
      </p>

      <p class="text-gray-400 leading-relaxed max-w-md md:max-w-2xl pl-6 lg:max-w-3xl">
        I carefully choose the right technology for each project whether it's building
        dynamic user interfaces, scalable backend systems, or high-performance applications.
        I constantly learn and adapt to modern development trends.
      </p>
    <div class="marquee-wrapper mt-8">
  <div class="marquee-track">
    <div
      v-for="(tool,index) in [...tools, ...tools]"
      :key="index"
      class="tool-slide"
    >
      {{ tool }}
    </div>
  </div>
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
  background-clip:text;
  color:transparent;
}

.marquee-wrapper{
  overflow:hidden;
  position:relative;
  width:100%;
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}

.marquee-track{
  display:flex;
  gap:24px;
  width:max-content;
  animation: scroll 20s linear infinite;
}

.marquee-wrapper:hover .marquee-track{
  animation-play-state: paused;
}

.tool-slide{
  font-family: 'Courier New', Courier, monospace;
  padding:12px 24px;
  font-weight:bold;
  font-size: 20px;
  white-space:nowrap;
  color: #06f9fd;
  box-shadow: 0 10px 30px rgba(99,102,241,0.15);
}

.tool-slide:hover{
  transform: translateY(-6px) scale(1.05);
  background: linear-gradient(90deg,#6366f1,#a855f7);
  border-radius: 10px;
  box-shadow: 0 15px 40px rgba(99,102,241,0.3);
  color:white;
  cursor: pointer;
}



@keyframes scroll{
  from{
    transform: translateX(0);
  }
  to{
    transform: translateX(-50%);
  }
}


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
