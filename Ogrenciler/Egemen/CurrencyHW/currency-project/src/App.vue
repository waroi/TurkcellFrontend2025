<script setup>
import Home from "./components/Home.vue";
</script>

<template>
  <main>
    <Home />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://retroschool.ru/wp-content/uploads/2022/12/2022sh.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
