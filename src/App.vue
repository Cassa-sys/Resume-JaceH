<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import Particles from '@/Components/Particles.vue'
</script>

<template>
  <Particles class="particles" />

  <div class="flex">
    <div class="container">
      <header>
        <div class="wrapper">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/project">Project</RouterLink>
          </nav>
        </div>
      </header>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.particles {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

* {
  position: relative;
  z-index: 1;
}

.flex {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container {
  width: 80%;
  height: 100vh;
  background-color: white;
}
</style>
