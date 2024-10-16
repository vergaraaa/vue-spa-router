<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/features">Features</RouterLink>
    <RouterLink to="/pricing">Pricing</RouterLink>
    <RouterLink to="/contact">Contact</RouterLink>
  </nav>

  <main class="bg-slate-100">
    <RouterView />
  </main>
</template>
