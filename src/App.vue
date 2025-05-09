<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { ref, type Ref } from 'vue'
import Particles from '@/Components/Particles.vue'

var isDarkMode: Ref<boolean, boolean> = ref(false)
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
}
</script>

<template>
  <Particles class="particles" />

  <div class="flex">
    <div class="container" :class="{ dark: isDarkMode }">
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
  <button @click="toggleDarkMode()" class="toggleColor" :class="{ dark: isDarkMode }">
    {{ isDarkMode ? '☀️' : '🌙' }}
  </button>
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
}

.toggleColor {
  position: absolute;
  right: 2.5vh;
  bottom: 2.5vh;

  margin: auto;

  font-size: 3vh;
}
</style>
