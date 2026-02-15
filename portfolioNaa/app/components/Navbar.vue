<script setup>
import { ref } from 'vue';
import { Github } from "lucide-vue-next"
const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
}
</script>
<template>
  <nav class="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
    <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold tracking-wide font-heading text-5xl">
        <span class="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent name">
          <NuxtLink to="/"> MOGES</NuxtLink>
        </span>
      </h1>
    <ul class="hidden md:flex gap-10 text-gray-300 font-medium">

  <li>
    <NuxtLink to="/" class="navLink">Home</NuxtLink>
  </li>

  <li>
    <NuxtLink to="/about" class="navLink">About</NuxtLink>
  </li>

  <li>
    <NuxtLink to="/projects" class="navLink">Projects</NuxtLink>
  </li>

  <li>
    <NuxtLink to="/contact" class="navLink">Contact</NuxtLink>
  </li>

</ul>
    <a
          href="https://github.com/Moges741"
          target="_blank"
          class="social-icon"
        >
          <Github class="w-5 h-5 text-white hover:text-indigo-400 transition-colors" />
        </a>
      <div class="flex items-center gap-4">
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
          <li >
            <NuxtLink to="/" class="mobileLink" @click="toggleMenu">Home</NuxtLink>
          </li>
          <li >
            <NuxtLink to="/about" class="mobileLink" @click="toggleMenu">About</NuxtLink>
          </li>
          <li >
            <NuxtLink to="projects" class="mobileLink" @click="toggleMenu">Projects</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="mobileLink" @click="toggleMenu">Contact</NuxtLink>
          </li>
        </ul>
      </div>
    </transition>

  </nav>
</template>

<style scoped>
.name{
  font-family: "Playwrite AT", cursive;
  font-size: 1.8rem;
  font-weight: bold;
}
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

.bar {
  width: 22px;
  height: 2.5px;
  background: rgb(17, 172, 203);
  transition: all .8s ease;
}

.rotate-top {
  transform: rotate(45deg) translateY(12px);
}

.rotate-bottom {
  transform: rotate(-45deg) translateY(-12px);
}


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
