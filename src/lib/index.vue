<template>
  <div class="lp-ts__wrapper">
    <transition :name="effectName" @after-enter="transitionComplete">
      <slot :effect="state.effect"></slot>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'transitions'
}

</script>

<script setup>

import { reactive, computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: String.prototype.constructor()
  },
  duration: {
    type: [Number, String],
    default: 0.25
  }
})

const state = reactive({
  conf: {
    slideLeading: {
      className: 'slide-leading',
      duration: 0.5
    },
    slideTrailing: {
      className: 'slide-trailing',
      duration: 0.5
    },
    slideTop: {
      className: 'slide-top',
      duration: 0.5
    },
    slideBottom: {
      className: 'slide-bottom',
      duration: 0.5
    },
    collapseVertical: {
      className: 'collapse-vertical',
      duration: 0.5
    },
    collapseHorizonal: {
      className: 'collapse-horizonal',
      duration: 0.5
    },
    zoom: {
      className: 'zoom',
      duration: 0.5
    },
    fade: {
      className: 'fade',
      duration: 0.25
    }
  },
  effect: void 0
})

const effectName = computed({
  get () {
    return state?.effect?.className
  }
})

const _duration = computed({
  get () {
    return (parseFloat(props.duration) || state.effect.duration) + 's'
  }
})

const transitionComplete = () => {
  state.effect = effectClosure()
}

const effectClosure = () => {
  const ks = Object.keys(state.conf)
  if (props.type && ks.includes(props.type)) {
    return state.conf[props.type]
  } else {
    return state.conf[ks[Math.floor(Math.random() * ks.length)]]
  }
}

</script>

<style lang="scss" scoped>
.slide-leading-enter-active {
  transition: all v-bind(_duration) ease;
  
}
.slide-leading-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-leading-enter-from, .slide-leading-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-trailing-enter-active {
  transition: all v-bind(_duration) ease;
}
.slide-trailing-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-trailing-enter-from, .slide-trailing-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-top-enter-active {
  transition: all v-bind(_duration) ease;
}
.slide-top-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-top-enter-from, .slide-top-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-bottom-enter-active {
  transition: all v-bind(_duration) ease;
}
.slide-bottom-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-bottom-enter-from, .slide-bottom-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-to-active {
  transition: opacity v-bind(_duration) ease-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.collapse-vertical-enter-active {
  transition: all v-bind(_duration) ease;
}
.collapse-vertical-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.collapse-vertical-enter-from, .collapse-vertical-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.zoom-enter-active {
  transition: all v-bind(_duration) ease;
}
.zoom-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.zoom-enter-from, .zoom-leave-to {
  transform: scale3d(.3, .3, .3);
  opacity: 0;
}

.collapse-horizonal-enter-active {
  transition: all v-bind(_duration) ease;
}
.collapse-horizonal-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.collapse-horizonal-enter-from, .collapse-horizonal-leave-to {
  transform: scaleX(0);
  opacity: 0;
}
</style>
