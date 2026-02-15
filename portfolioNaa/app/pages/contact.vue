<script setup>

import { MapPin, Mail, Phone, Send , Briefcase} from "lucide-vue-next"
import { ref, onMounted } from "vue"
import ParallaxBackground from "~/components/ParallaxBackground.vue"

const show = ref(false)

onMounted(() => {
  setTimeout(() => {
    show.value = true
  }, 200)
})

const contacts = [
  {
    title: "Address Point",
    value: "currently Jimma, 🇪thiopia",
    icon: MapPin,
    link: null
  },
  {
    title: "Mail Me",
    value: "mogesse741@gmail.com",
    icon: Mail,
    link: "mailto:mogesse741@gmail.com"
  },
  {
    title: "Call Me",
    value: "+251924433166",
    icon: Phone,
    link: "tel:+251924433166"
  },
  {
    title: "Telegram",
    value: "@moges741",
    icon: Send,
    link: "https://t.me/moges741"
  }
]
</script>

<template>
  <parallax-background/>
  <section class="relative min-h-screen pt-28 pb-20 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="glow glow1"></div>
      <div class="glow glow2"></div>
    </div>

    <div class="max-w-5xl mx-auto px-6">


      <div
        class="text-center mb-16 transition-all duration-1000"
        :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'"
      >
        <h1 class="font-heading text-5xl text-4xl md:text-6xl font-bold text-white">
          Get In
          <span class="gradient-text"> Touch</span>
        </h1>


          <div class="mt-8 text-center">
    <div class="inline-flex items-center gap-3 px-6 py-3
                rounded-full border border-emerald-400/30
                bg-emerald-500/10 backdrop-blur-md
                shadow-lg shadow-emerald-500/10
                animate-fadeIn">

      <span class="relative flex h-3 w-3">
        <span class="animate-ping absolute inline-flex h-full w-full 
                     rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full 
                     h-3 w-3 bg-emerald-500"></span>
      </span>

      <Briefcase class="w-4 h-4 text-emerald-400" />

      <span class="text-emerald-300 font-medium tracking-wide text-sm md:text-base">
        Open to Work || MERN Stack Developer
      </span>
    </div>

  </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <a
          v-for="(item, index) in contacts"
          :key="item.title"
          :href="item.link || '#'"
          target="_blank"
          class="group block transition-all duration-700"
          :class="show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'"
          :style="{ transitionDelay: index * 150 + 'ms' }"
        >
          <div
            class="flex items-center gap-6 p-6 md:p-8 rounded-2xl
                   bg-white/5 border border-white/10 backdrop-blur
                   hover:border-indigo-400/60
                   hover:shadow-[0_0_40px_rgba(99,102,241,0.2)]
                   transition-all duration-300"
          >

            <div
              class="w-14 h-14 flex items-center justify-center
                     rounded-xl bg-indigo-500/20
                     group-hover:scale-110
                     transition-all duration-300"
            >
              <component
                :is="item.icon"
                class="w-6 h-6 text-indigo-400"
              />
            </div>

            <div>
              <p class="text-xs uppercase tracking-widest text-indigo-400">
                {{ item.title }}
              </p>
              <p class="text-gray-200 text-sm md:text-base mt-1">
                {{ item.value }}
              </p>
            </div>

          </div>
        </a>

      </div>

    </div>

  </section>
</template>

<style scoped>

.glow{
  position:absolute;
  width:500px;
  height:500px;
  border-radius:50%;
  filter:blur(140px);
  opacity:.25;
  animation: floatGlow 12s infinite ease-in-out;
}

.glow1{
  background:#6366f1;
  top:10%;
  left:10%;
}

.glow2{
  background:#a855f7;
  bottom:10%;
  right:10%;
  animation-delay:3s;
}

@keyframes floatGlow{
  0%,100%{ transform:translateY(0px); }
  50%{ transform:translateY(-30px); }
}


.gradient-text{
  background: linear-gradient(90deg,#6366f1,#a855f7,#3b82f6);
  -webkit-background-clip:text;
  background-clip:text;
  color:transparent;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn .6s ease forwards;
}

</style>
