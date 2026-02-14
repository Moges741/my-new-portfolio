<script setup>
import { Github, Linkedin, Send, Mail, ArrowUp } from "lucide-vue-next"

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

const year = new Date().getFullYear()
</script>

<template>
  <footer class="relative pt-20 pb-10 overflow-hidden">

    <div class="absolute inset-0 pointer-events-none">
      <div class="glow glow1"></div>
      <div class="glow glow2"></div>
    </div>

    <div class="max-w-6xl mx-auto px-6 text-center relative z-10">
      <div class="flex justify-center mb-10">
        <button
          @click="scrollTop"
          class="group w-14 h-14 flex items-center justify-center
                 rounded-full bg-indigo-500/20 border border-indigo-400/40
                 hover:bg-indigo-500/40 hover:scale-110
                 transition-all duration-300 shadow-lg"
        >
          <ArrowUp class="w-8 h-10 text-indigo-400 group-hover:-translate-y-1 transition" />
        </button>
      </div>
      <div class="flex justify-center gap-6 mb-10">

        <a
          href="https://github.com/Moges741"
          target="_blank"
          class="social-icon"
        >
          <Github class="w-5 h-5" />
        </a>

        <a
          href="https://www.linkedin.com/in/moges741"
          target="_blank"
          class="social-icon"
        >
          <Linkedin class="w-5 h-5" />
        </a>

        <a
          href="https://t.me/moges741"
          target="_blank"
          class="social-icon"
        >
          <Send class="w-5 h-5" />
        </a>

        <a
          href="mailto:mogesse741@gmail.com"
          class="social-icon"
        >
          <Mail class="w-5 h-5" />
        </a>

      </div>
      <div class="flex flex-wrap justify-center gap-8 text-gray-400 mb-8">

        <NuxtLink to="/" class="footer-link">Home</NuxtLink>
        <NuxtLink to="/about" class="footer-link">About</NuxtLink>
        <NuxtLink to="/projects" class="footer-link">Projects</NuxtLink>
        <NuxtLink to="/contact" class="footer-link">Contact</NuxtLink>

      </div>
      <div class="w-full h-px bg-white/10 mb-6"></div>
      <p class="text-gray-500 text-sm mb-2">
        Designed & Built by Moges Sisay
      </p>

      <p class="text-gray-600 text-xs">
        © {{ year }} Moges Sisay. All rights reserved.
      </p>

    </div>

  </footer>
</template>

<style scoped>


.glow{
  position:absolute;
  width:400px;
  height:400px;
  border-radius:50%;
  filter:blur(120px);
  opacity:.2;
  animation: floatGlow 12s infinite ease-in-out;
}

.glow1{
  background:#6366f1;
  top:-10%;
  left:20%;
}

.glow2{
  background:#a855f7;
  bottom:-10%;
  right:20%;
  animation-delay:3s;
}

@keyframes floatGlow{
  0%,100%{ transform:translateY(0px); }
  50%{ transform:translateY(-25px); }
}


.social-icon{
  width:44px;
  height:44px;
  display:flex;
  align-items:center;
  justify-content:center;
  border-radius:50%;
  border:1px solid rgba(99,102,241,0.3);
  background:rgba(99,102,241,0.1);
  color:#cbd5e1;
  transition:all .3s ease;
}

.social-icon:hover{
  background:rgba(99,102,241,0.3);
  transform:translateY(-4px) scale(1.05);
  color:white;
  box-shadow:0 0 20px rgba(99,102,241,0.4);
}


.footer-link{
  position:relative;
  transition:all .3s ease;
}

.footer-link:hover{
  color:white;
}

.footer-link::after{
  content:"";
  position:absolute;
  left:0;
  bottom:-4px;
  width:0%;
  height:2px;
  background:linear-gradient(to right,#6366f1,#a855f7);
  transition:.3s;
}

.footer-link:hover::after{
  width:100%;
}

</style>
