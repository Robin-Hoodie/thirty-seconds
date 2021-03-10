<template>
  <button
    ref="elButton"
    class="base-button base-button--primary"
    @mouseenter="onMouseenter"
    @mouseleave="onMouseleave"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { gsap } from "gsap";

const getAnimationMouseenter = (elButton: HTMLButtonElement) => {
  return gsap
    .timeline({
      paused: true,
      defaults: {
        duration: 0.2,
      },
    })
    .to(elButton, {
      outlineOffset: "-=0.5em",
    });
};

export default defineComponent({
  name: "BaseButton",
  setup() {
    const elButton = ref<HTMLButtonElement | null>(null);
    const elButtonRipple = ref<HTMLDivElement | null>(null);
    let animationMouseenter: GSAPTimeline;

    onMounted(() => {
      animationMouseenter = getAnimationMouseenter(
        elButton.value as HTMLButtonElement
      );
    });

    return {
      elButton,
      elButtonRipple,
      onMouseenter: () => animationMouseenter.play(),
      onMouseleave: () => animationMouseenter.reverse(),
    };
  },
});
</script>

<style lang="scss">
@mixin outline() {
  outline: 4px solid white;
}

.base-button {
  padding: 1em 2em;
  border: none;
  background-color: var(--color-primary);
  @include outline();
  margin: 0.5rem;
  cursor: pointer;

  &:focus,
  &:hover {
    @include outline();
  }

  &--primary {
    color: var(--color-gray--dark);
  }
}

.base-button__ripple-circle {
  width: 5rem;
  border-radius: 100%;
  height: 5rem;
  background-color: white;
}
</style>
