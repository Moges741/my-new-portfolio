<script setup>
const toggleTheme = () => {
  document.documentElement.classList.toggle('light')
}
</script>

<template>
  <button
    @click="toggleTheme"
    class="px-4 py-2 rounded-lg border border-white/10 hover:border-indigo-400 transition"
  >
    Theme
  </button>
</template>
