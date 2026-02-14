<script setup>
import { ref, onMounted } from 'vue'
const text = "MERN Stack Developer"
const display = ref("")
let i = 0
let interval;
onMounted(() => {
   interval = setInterval(() => {
    display.value += text[i]
    i++
    if (i >= text.length) clearInterval(interval)
  }, 80)
})
</script>

<template>
  <section class="min-h-screen flex items-center pt-24">

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-5 items-center">

      <div class="pl-[40px]">

        <p class="text-gray-400 mb-4 text-lg animate-fadeIn">
          Hello I am
        </p>

        <h1 class="text-5xl md:text-7xl font-bold leading-tight">

          <span class="text-white">Moges</span>

          <br>

          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sisay
          </span>

        </h1>


        <p class="text-indigo-300 mt-6 text-xl h-8">
          {{ display }}
        </p>


        <div class="flex gap-6 mt-10">

          <button class="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition">
            Hire Me
          </button>

          <button class="px-8 py-3 rounded-full border border-indigo-500 hover:bg-indigo-500/20 transition">
            View Work
          </button>

        </div>

      </div>

      <div class="flex justify-center">
        <img
          src="/images/mo5.png"
          class="drop-shadow-[0_20px_80px_rgba(99,102,241,0.4)] hover:scale-105 transition duration-500"
        />
      </div>

    </div>

  </section>
</template>

<style scoped>
.animate-fadeIn {
  animation: fade 1.2s ease forwards;
}

@keyframes fade {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
