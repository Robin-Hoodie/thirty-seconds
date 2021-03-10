<template>
  <main class="the-container">
    <slot />
  </main>
</template>

<script>
export default {
  name: "TheContainer"
}
</script>

<style>
.the-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: min(50rem, 90%);
  margin: 2rem auto;
}
</style>
