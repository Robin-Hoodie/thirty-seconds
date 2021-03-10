<template>
  <div v-if="noTimeLeft">
    Time's up!
  </div>
  <div v-else>
    {{ timeLeft }} seconds left!
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  name: "Timer",
  props: {
    startTimer: {
      type: Boolean,
      required: true
    }
  },
  emits: ["timeRanOut"],
  setup (props, { emit }) {
    const timeLeft = ref(2);
    let intervalId: number;
    const noTimeLeft = computed(() => timeLeft.value === 0);
    watch(() => props.startTimer, (startTimer) => {
      if (startTimer) {
        intervalId = setInterval(() => {
          if (timeLeft.value > 0) {
            timeLeft.value--;
          } else {
            clearInterval(intervalId);
            emit("timeRanOut");
          }
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
    });
    return {
      timeLeft,
      noTimeLeft
    };
  }
});
</script>
