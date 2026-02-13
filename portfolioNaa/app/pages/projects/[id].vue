<script setup>
import ParallaxBackground from "~/components/ParallaxBackground.vue"
import { projects } from "../../assets/data/projects.js" 
import { useRoute } from "vue-router"

const route = useRoute()
const id = Number(route.params.id)

const project = projects.find(p => p.id === id)
</script>

<template>
    <ParallaxBackground/>
  <section v-if="project" class="min-h-screen pt-28 relative overflow-hidden mb-[100px]">

    <div class="glow glow1"></div>
    <div class="glow glow2"></div>

    <div class="max-w-5xl mx-auto px-6">

      <img
        :src="project.image"
        class="rounded-3xl mb-10 w-full shadow-2xl animate-fadeUp"
      />

      <h1 class="text-4xl font-bold mb-6 gradient-text animate-fadeUp">
        {{ project.title }}
      </h1>
      <p class="text-gray-300 text-lg leading-relaxed mb-10 animate-fadeUp">
        {{ project.description }}
      </p>

      <div class="flex gap-6 animate-fadeUp">

        <a
          :href="project.live_link"
          target="_blank"
          class="btn-primary"
        >
          Live Demo
        </a>

        <a
          :href="project.github_link"
          target="_blank"
          class="btn-outline text-white"
        >
          GitHub
        </a>

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

.btn-primary{
  padding:12px 28px;
  border-radius:999px;
  background:linear-gradient(90deg,#6366f1,#a855f7);
  transition:.3s;
}

.btn-primary:hover{
  transform:scale(1.05);
}

.btn-outline{
  padding:12px 28px;
  border-radius:999px;
  border:1px solid #6366f1;
}

.glow{
  position:absolute;
  width:500px;
  height:500px;
  filter:blur(120px);
  opacity:.25;
  border-radius:50%;
}

.glow1{
  background:#6366f1;
  top:10%;
  left:5%;
}

.glow2{
  background:#a855f7;
  bottom:10%;
  right:5%;
}

.animate-fadeUp{
  animation: fadeUp 1s ease forwards;
}

@keyframes fadeUp{
  from{opacity:0; transform:translateY(40px)}
  to{opacity:1; transform:translateY(0)}
}

</style>
