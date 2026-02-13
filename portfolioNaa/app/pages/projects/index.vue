<script setup>
import ParallaxBackground from "~/components/ParallaxBackground.vue"
import { projects } from "../../assets/data/projects.js"
import { useRouter } from "vue-router";

const router = useRouter()

const goToProject = (id) => {
  router.push(`/projects/${id}`)
}
</script>
<template>
    <ParallaxBackground/>
  <section class="min-h-screen pt-28 relative overflow-hidden mb-[50px]">
    <div class="glow glow1"></div>
    <div class="glow glow2"></div>

    <div class="max-w-7xl mx-auto px-6">

      <h1 class="text-5xl font-bold mb-6 animate-fadeUp text-center text-white">
        Featured
        <span class="gradient-text ">Projects</span>
      </h1>
<p class="text-center mb-10 gradient-text"> 
      Showcasing my best work with modern technologies and clean code

</p>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        <div
          v-for="(project,index) in projects"
          :key="project.id"
          @click="goToProject(project.id)"
          class="project-card cursor-pointer p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur"
          :style="{ animationDelay: index * 0.3 + 's' }"
        >
          <img
            :src="project.image"
            class="rounded-xl mb-5 h-44 w-full object-cover"
          />

          <h3 class="text-xl font-semibold text-white">
            {{ project.title }}
          </h3>
          <p class="text-gray-400 mt-2 text-sm">
            {{ project.short }}
          </p>

        </div>

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

.project-card{
  animation: fadeUp .8s ease forwards;
  opacity:0;
  transition: all .4s ease;
}

.project-card:hover{
  transform: translateY(-10px) scale(1.02);
  border-color: rgba(99,102,241,.5);
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

@keyframes fadeUp{
  from{opacity:0; transform:translateY(40px)}
  to{opacity:1; transform:translateY(0)}
}

</style>
