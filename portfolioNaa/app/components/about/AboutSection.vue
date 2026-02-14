<script setup>
import { ref, onMounted } from "vue"
import { Code, Database, Globe, GitBranch, Server, Cpu } from "lucide-vue-next"

const aboutText = "Full Stack Developer • Problem Solver • Tech Trainer"
const aboutDisplay = ref("")
let i = 0

onMounted(() => {
  const typing = setInterval(() => {
    aboutDisplay.value += aboutText[i]
    i++
    if (i >= aboutText.length) clearInterval(typing)
  }, 50)
})

const skills = [
  { name: "React", icon: Globe },
  { name: "JavaScript", icon: Code },
  { name: "Vue / Nuxt", icon: Cpu },
  { name: "Node / Express", icon: Server },
  { name: "MySQL", icon: Database },
  { name: "Git and Github", icon: GitBranch },
]

const experiences = [
  {
    date: "Present",
    title: "MERN Stack Developer and Graduated Evangadi",
    company: "Evangadi Tech",
    description: "Graduated as a Full Stack Developer from Evangadi Tech, mastering modern web development technologies and best practices. Building full-stack applications using MongoDB, Express, React, and Node.js.",
    tags: ["MERN Stack", "JavaScript", "React", "Node.js", "MYSQL"],
    imagePlaceholder: true,
    imageAlt: "Evangadi Tech Certificate",
    imageSrc: "../../assets/images/certificate.jpg" ,
  },
  {
    date: "Jan 2024 - Present",
    title: "Software Engineering Trainer",
    company: "Jimma Institute of Technology (JIT)",
    description: "Training students in software engineering principles, algorithms, and system design. Mentoring teams on projects.",
    tags: ["Training", "Mentoring", "Software Engineering"],
    imagePlaceholder: false
  },
  {
    date: "Jun 2025 - Present",
    title: "SPEC Software Development Member",
    company: "SPEC JIT",
    description: "Active member of the SPEC Club at Jimma Institute of Technology (JIT), collaborating on engineering projects, product development with students, and competing in hackathons.",
    tags: ["Software Development", "Teamwork", "Hackathons"],
    imagePlaceholder: false
  }
]
</script>

<template>
  <section class="relative min-h-screen overflow-hidden pt-28 mb-[100px]">

    <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
      <div class="glow glow1"></div>
      <div class="glow glow2"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6">
      <div class="mb-16 animate-fadeUp">
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          About
          <span class="bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p class="text-indigo-300 mt-6 text-xl h-8 font-medium">
          {{ aboutDisplay }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-14 items-center">

        <div class="space-y-6 animate-fadeLeft">
          <p class="text-gray-300 text-lg leading-relaxed">
            I am a trainer in software engineering skills and a passionate full-stack developer.
            I build modern web applications using scalable architectures and clean code principles.
          </p>

          <p class="text-gray-400 leading-relaxed">
            I love solving real-world problems using the right technology stack,
            algorithms, and system design thinking.
          </p>

          <p class="text-gray-500 leading-relaxed">
            My goal is continuous growth, innovation, and building impactful digital solutions.
          </p>
        </div>
        <div class="relative animate-fadeRight">
          <div class="floating-card p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur">
            <p class="text-gray-300 text-lg">
              Addis Ababa, Ethiopia 🇪🇹
              Building real solutions with modern web technologies.
            </p>
          </div>
        </div>

      </div>

 <div class="mt-20">
  <h2 class="text-3xl font-semibold mb-10 text-center">
    Education & Experience
  </h2>

  <div class="relative">
    <div class="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-white/20"></div>
    <div class="md:hidden absolute left-4 top-0 w-0.5 h-full bg-white/20"></div>

    <div
      v-for="(exp, index) in experiences"
      :key="exp.title"
      class="relative mb-10 md:mb-16"
    >
      <div
        class="absolute w-4 h-4 rounded-full bg-indigo-400 
               md:left-1/2 md:-translate-x-1/2
               left-4"
      ></div>

      <div
        class="ml-12 md:ml-0 md:w-5/12 
               md:px-6
               p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur 
               transition-all duration-300 hover:border-indigo-400/60 hover:shadow-lg"
        :class="index % 2 === 0 
          ? 'md:mr-auto md:text-right' 
          : 'md:ml-auto'"
      >

        <span class="text-xs text-indigo-300 bg-indigo-900/40 px-3 py-1 rounded-full">
          {{ exp.date }}
        </span>

        <h3 class="text-lg md:text-xl font-semibold text-gray-200 mt-3">
          {{ exp.title }}
        </h3>

        <p class="text-gray-400 text-sm mb-2">
          {{ exp.company }}
        </p>

        <p class="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
          {{ exp.description }}
        </p>

        <div class="flex flex-wrap gap-2 justify-start md:justify-end">
          <span
            v-for="tag in exp.tags"
            :key="tag"
            class="px-3 py-1 text-xs bg-white/5 rounded-full border border-white/10"
          >
            {{ tag }}
          </span>
        </div>

      </div>

    </div>
  </div>
</div>

      <div class="mt-24">

        <h2 class="text-3xl font-semibold mb-10 animate-fadeUp text-center">
          Technical Skills
        </h2>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <div
            v-for="(skill,index) in skills"
            :key="skill.name"
            class="skill-card p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur"
            :style="{ animationDelay: index * 0.3 + 's' }"
          >
            <component :is="skill.icon" class="w-8 h-8 text-indigo-400 mb-3"/>
            <p class="text-gray-200 text-sm font-medium">{{ skill.name }}</p>
          </div>
        </div>

      </div>

    </div>

  </section>
</template>

<style scoped>
.glow {
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.25;
  animation: floatGlow 14s infinite ease-in-out;
}

.glow1 {
  background: #6366f1;
  top: 10%;
  left: 10%;
}

.glow2 {
  background: #a855f7;
  bottom: 10%;
  right: 10%;
  animation-delay: 4s;
}

@keyframes floatGlow {
  0%,100% { transform: translateY(0px) }
  50% { transform: translateY(-40px) }
}
.floating-card {
  animation: floatCard 3s ease-in-out infinite;
}

@keyframes floatCard {
  0%,100% { transform: translateY(0px) }
  50% { transform: translateY(-15px) }
}

.experience-card {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
  transition: all 0.3s ease;
}

.experience-card:hover {
  transform: translateY(-4px);
  border-color: rgba(99, 102, 241, 0.6);
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.15);
}

.certificate-box {
  transition: all 0.3s ease;
}

.certificate-box:hover {
  transform: scale(1.02);
  border-color: rgba(99, 102, 241, 0.6);
}

.skill-card {
  animation: fadeUp 0.8s ease forwards;
  opacity: 0;
}

.skill-card:hover {
  transform: translateY(-6px) scale(1.03);
  border-color: rgba(99,102,241,0.6);
}

.animate-fadeUp {
  animation: fadeUp 1s ease forwards;
}

.animate-fadeLeft {
  animation: fadeLeft 1s ease forwards;
}

.animate-fadeRight {
  animation: fadeRight 1s ease forwards;
}

@keyframes fadeUp {
  from { opacity:0; transform: translateY(40px); }
  to { opacity:1; transform: translateY(0); }
}

@keyframes fadeLeft {
  from { opacity:0; transform: translateX(-60px); }
  to { opacity:1; transform: translateX(0); }
}

@keyframes fadeRight {
  from { opacity:0; transform: translateX(60px); }
  to { opacity:1; transform: translateX(0); }
}

</style>