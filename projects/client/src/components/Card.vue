<template>
  <section ref="card" class="card">
    <ul class="card__word-list">
      <li v-for="word in wordsUpperCased" class="card__word">{{ word }}</li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref, PropType, watch } from "vue";
import { gsap } from "gsap";

const setupTl = (card: SVGElement, emit: (event: "animationCompleted") => void) => {
  return gsap.timeline({ defaults: { duration: 1 } })
    .from(card, { autoAlpha: 0, onComplete: () => emit("animationCompleted") })
    .addPause()
    .to(card, { autoAlpha: 1 });
};

export default defineComponent({
  props: {
    words: {
      type: Array as PropType<string[]>,
      required: true
    },
    timeRanOut: {
      type: Boolean,
      required: true
    }
  },
  emits: ["animationCompleted"],
  setup (props, { emit }) {
    const card = ref<SVGElement | null>(null);

    onMounted(() => {
      const tl = setupTl(card.value as SVGElement, emit);
      watch(() => props.timeRanOut, (timeRanOut) => {
        if (timeRanOut) {
          tl.resume();
        }
      });
    });

    return {
      card,
      wordsUpperCased: computed(() => props.words.map(word => word.toUpperCase()))
    };
  }
});
</script>

<style scoped>
.card {
  border: 0.25em solid var(--color-primary);
}

.card__word-list {
  height: 100%;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.card__word {
  padding: 1em;
}
</style>
