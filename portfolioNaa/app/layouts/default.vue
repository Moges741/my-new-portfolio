<script setup lang="ts">
import Footer from '~/components/Footer.vue';
import Navbar from '~/components/Navbar.vue';
import about from '../pages/about.vue'

</script>

<template>
    <Navbar/>
    <slot/>
    <Footer/>
</template>