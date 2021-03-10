<template>
  <TheContainer>
    <Card :words="words" :time-ran-out="timeRanOut" @animation-completed="onAnimationCompleted" />
    <BaseButton type="button" @click="refreshRandomWords">
      Next Card!
    </BaseButton>
    <Timer :start-timer="startTimer" @time-ran-out="onTimeRanOut" />
  </TheContainer>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Card from "./components/Card.vue";
import TheContainer from "./components/TheContainer.vue";
import Timer from "./components/Timer.vue";
import { getBatchOfWordsRandom } from "./words";
import BaseButton from "./components/BaseButton.vue";

export default defineComponent({
  name: "App",
  components: {
    BaseButton,
    TheContainer,
    Card,
    Timer
  },
  setup () {
    const startTimer = ref(false);
    const timeRanOut = ref(false);
    const words = ref(getBatchOfWordsRandom());
    const refreshRandomWords = () => {
      words.value = getBatchOfWordsRandom();
    }
    return {
      startTimer,
      timeRanOut,
      words,
      onAnimationCompleted: () => (startTimer.value = true),
      onTimeRanOut: () => (timeRanOut.value = true),
      refreshRandomWords
    }
  }
});
</script>

<style lang="scss">
@use "styles/functions";
@import "~/normalize.css";

:root {
  /* Split complementary at https://www.sessions.edu/color-calculator/ */
  --color-primary: #f7d539;
  --color-accent: #5036AA;
  --color-gray--dark: #46453f;
  --color-gray--light: #fafafa;
  --color-white: #fff;
  color: var(--color-gray--dark);
  background-color: var(--color-gray--light);
}
</style>


