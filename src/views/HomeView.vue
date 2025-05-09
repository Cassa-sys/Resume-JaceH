<script setup lang="tsx">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const carouselConfig = {
  itemsToShow: 3,
  wrapAround: true,
}

import image1 from '@/assets/images/image1.png';
import image2 from '@/assets/images/image2.png';
import image3 from '@/assets/images/image3.png';

const images = [image1, image2, image3]

</script>

<template>
  <main>
    <h1 class="title">Resume - Jace Higdon</h1>
    <h2 class="pad-left-5">Why you Should Hire Me</h2>
    <div class="padded">
      <span>
        You're on a mission to build exceptional tech teams—and I'm here to make it easier for you.
        As a passionate junior developer, I bring fresh ideas, problem-solving skills, automation,
        and a commitment to delivering results. Let's work together to turn your challenges into
        opportunities, and ensure your team thrives.
      </span>
    </div>
    <hr />
    <h2 class="pad-left-5">My Previous Work</h2>
    <Carousel v-bind="carouselConfig" class="padded">
      <Slide v-for="image in images" :key="image">
        <img :src="image" alt="image"></img>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
    <div style="text-align: center; padding-top: 5px">
      <nav>
        <RouterLink to="/project">View my Other Projects</RouterLink>
      </nav>
    </div>
    <hr />
    <h2 class="pad-left-5">Contact Me</h2>

  </main>
</template>

<style lang="css" scoped>
.title {
  text-align: center;
}

.padded {
  padding: 30px;
  padding-top: 0px;
  padding-bottom: 0px;
}

.pad-left-5 {
  padding-left: 5px;
}

.carousel {
  --vc-pgn-background-color: rgba(255, 255, 255, 0.7);
  --vc-pgn-active-color: rgba(255, 255, 255, 1);
  --vc-nav-background: rgba(255, 255, 255, 0.7);
  --vc-nav-border-radius: 100%;
}

img {
  border-radius: 8px;
  width: 100%;
  height: 100%;
  background: no-repeat center center;
  background-size: 100%;
  object-fit: cover;
  user-select: none;
}

</style>
