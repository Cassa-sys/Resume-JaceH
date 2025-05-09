<script setup lang="ts">
const Projects = [
  {
    name: 'Project 1',
    description: 'This is the description text',
    time: new Date(),
  },
  {
    name: 'Project 2',
    description: 'This is the description text',
    time: new Date(),
  },
]
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
  </nav>
  <div class="about">
    <h1>Projects</h1>

    <div>
      <div v-for="project in Projects">
        <h2>{{ project.name }}</h2>
        <span>{{ project.description }}</span>
        <span>{{ project.time }}</span>
      </div>
    </div>
  </div>
</template>
