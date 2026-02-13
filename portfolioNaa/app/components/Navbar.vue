<script setup>
import { ref } from 'vue';
import ThemeToggle from './ThemeToggle.vue';
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold tracking-wide">
        <span class="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
          MOGES
        </span>
      </h1>
      <ul class="hidden md:flex gap-10 text-gray-300 font-medium">
        <li class="navLink">Home</li>
        <li class="navLink">About</li>
        <li class="navLink">Projects</li>
        <li class="navLink">Contact</li>
      </ul>
      <div class="flex items-center gap-4">
        <ThemeToggle />
        <button 
          @click="toggleMenu"
          class="md:hidden flex flex-col gap-1.5 focus:outline-none"
        >
          <span 
            :class="['bar', isOpen ? 'rotate-top' : '']">
          </span>
          <span 
            :class="['bar', isOpen ? 'opacity-0' : '']">
          </span>
          <span 
            :class="['bar', isOpen ? 'rotate-bottom' : '']">
          </span>
        </button>

      </div>
    </div>
    <transition name="slide">
      <div v-if="isOpen" 
           class="md:hidden bg-gray backdrop-blur-xl border-t border-white/10">
        <ul class="flex flex-col items-center py-6 gap-6 text-gray-300 font-medium">
          <li class="mobileLink" @click="toggleMenu">Home</li>
          <li class="mobileLink" @click="toggleMenu">About</li>
          <li class="mobileLink" @click="toggleMenu">Projects</li>
          <li class="mobileLink" @click="toggleMenu">Contact</li>
        </ul>
      </div>
    </transition>

  </nav>
</template>

<style scoped>
.navLink {
  position: relative;
  cursor: pointer;
  transition: color .3s;
}

.navLink:hover {
  color: white;
}

.navLink::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 0%;
  height: 2px;
  background: linear-gradient(to right, #6366f1, #a855f7);
  transition: width .3s;
}

.navLink:hover::after {
  width: 100%;
}

/* Mobile Hamburger */
.bar {
  width: 28px;
  height: 3px;
  background: rgb(17, 172, 203);
  transition: all .8s ease;
}

.rotate-top {
  transform: rotate(45deg) translateY(12px);
}

.rotate-bottom {
  transform: rotate(-45deg) translateY(-12px);
}

/* Mobile Links */
.mobileLink {
  cursor: pointer;
}

.mobileLink:hover {
  color: white;
}

/* Dropdown Animation */
.slide-enter-active,
.slide-leave-active {
  transition: all .5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
