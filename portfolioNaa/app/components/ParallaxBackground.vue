<script setup>
import { ref, onMounted } from 'vue'

const x = ref(0)
const y = ref(0)

onMounted(() => {
  window.addEventListener('mousemove', (e) => {
    x.value = e.clientX
    y.value = e.clientY
  })
})
</script>

<template>
  <div class="fixed inset-0 -z-10 overflow-hidden bg-[#050508]">

    <div
      class="pointer-events-none absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-40 transition-transform duration-300"
      :style="{
        left: x - 400 + 'px',
        top: y - 300 + 'px',
        background: 'radial-gradient(circle, rgba(222, 222, 251, 0.6), transparent 60%)'
      }"
    />

    <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 blur-[140px] rounded-full" />

  </div>
</template>
