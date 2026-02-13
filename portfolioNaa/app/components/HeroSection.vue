<template>
  <section class="relative min-h-screen flex items-center overflow-hidden">

    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10">
      <div class="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full animate-float1"></div>
      <div class="absolute right-0 bottom-0 w-[400px] h-[400px] bg-indigo-600/30 blur-[120px] rounded-full animate-float2"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

      <!-- Left Content -->
      <div>
        <p class="text-gray-400 mb-4 text-lg">Hello!</p>

        <h1 class="text-5xl md:text-6xl font-bold text-white leading-tight">
          This is
          <span class="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
            Moges Sisay
          </span>
        </h1>

        <p class="text-gray-400 mt-6 text-xl">
          Creative Developer
        </p>

        <!-- Buttons -->
        <div class="flex gap-6 mt-10">

          <button class="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:scale-105 transition">
            Hire me
          </button>

          <button class="px-8 py-3 rounded-full border border-purple-500 hover:bg-purple-500/20 transition">
            My works
          </button>

        </div>
      </div>

      <!-- Right Image -->
      <div class="flex justify-center">
        <img
          src="/images/profile.png"
          class="w-[380px] drop-shadow-2xl"
        />
      </div>

    </div>

  </section>
</template>
