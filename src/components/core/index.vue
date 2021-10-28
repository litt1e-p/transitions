<template>
  <div class="lp-ts__wrapper">
    <transition :name="effect">
      <slot></slot>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'transitions',
  props: {
    type: {
      type: String,
      default: () => String.prototype.constructor()
    }
  },
  data () {
    return {
      conf: {
        slideLeading: 'slide-leading',
        slideTrailing: 'slide-trailing',
        slideTop: 'slide-top',
        slideBottom: 'slide-bottom',
        collapseVertical: 'collapse-vertical',
        collapseHorizonal: 'collapse-horizonal',
        zoom: 'zoom',
        fade: 'fade'
      }
    }
  },
  computed: {
    effect: {
      cache: false,
      get () {
        let ks = Object.keys(this.conf)
        if (this.type && ks.includes(this.type)) {
          return this.conf[this.type]
        } else {
          let r = this.conf[ks[Math.floor(Math.random() * ks.length)]]
          return r
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>
.slide-leading-enter-active {
  transition: all 0.5s ease;
}
.slide-leading-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-leading-enter, .slide-leading-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.slide-trailing-enter-active {
  transition: all 0.5s ease;
}
.slide-trailing-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-trailing-enter, .slide-trailing-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.slide-top-enter-active {
  transition: all 0.5s ease;
}
.slide-top-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-top-enter, .slide-top-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.slide-bottom-enter-active {
  transition: all 0.5s ease;
}
.slide-bottom-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.slide-bottom-enter, .slide-bottom-leave-to {
  transform: translateY(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease-out;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.collapse-vertical-enter-active {
  transition: all 0.5s ease;
}
.collapse-vertical-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.collapse-vertical-enter, .collapse-vertical-leave-to {
  transform: scaleY(0);
  opacity: 0;
}

.zoom-enter-active {
  transition: all 0.5s ease;
}
.zoom-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.zoom-enter, .zoom-leave-to {
  transform: scale3d(.3, .3, .3);
  opacity: 0;
}

.collapse-horizonal-enter-active {
  transition: all 0.5s ease;
}
.collapse-horizonal-leave-active {
  transition: all 0.05s cubic-bezier(0, 1, 0.5, 1);
}
.collapse-horizonal-enter, .collapse-horizonal-leave-to {
  transform: scaleX(0);
  opacity: 0;
}
</style>
