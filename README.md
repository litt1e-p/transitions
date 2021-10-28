# transitions

the animation kits for vue components transition

> [vue 3.x supports](https://github.com/litt1e-p/transitions/tree/next)

#### Installation

```js
npm i @litt1e-p/transitions
```

#### Usage

1. global registration

```js
// in main.js
import Transitions from '@litt1e-p/transitions'
import '@litt1e-p/transitions/dist/transitions.css'


createApp(App).use(Transitions).mount('#app')
```

2. or use as vue component

```js
// in your vue file
import { Transitions, defineComponent } from '@litt1e-p/transitions'

export default defineComponent({
  components: {
    Transitions
  }
  ...
})
```

3. use in template

> eg. use `zoom` transition effect

```js
<transitions type="zoom" duration="0.25">
  <component :is="your componet"></component>
</transitions>
```

if your does not provide any type, it will apply random effect instead

### Configuration

#### type

all types of effect, default is random effect

- collapseHorizonal

![](./screenshots/collapseHorizonal.gif)  

- collapseVertical

![](./screenshots/collapseVertical.gif) 

- slideBottom

![](./screenshots/slideBottom.gif) 

- slideTop

![](./screenshots/slideTop.gif) 

- slideLeading

![](./screenshots/slideLeading.gif) 

- slideTrailing

![](./screenshots/slideTrailing.gif) 

- fade

![](./screenshots/fade.gif) 

- zoom

![](./screenshots/zoom.gif) 


#### duration

animation duration, default duration(seconds):

```js
slideLeading: {
  duration: 0.5
},
slideTrailing: {
  duration: 0.5
},
slideTop: {
  duration: 0.5
},
slideBottom: {
  duration: 0.5
},
collapseVertical: {
  duration: 0.5
},
collapseHorizonal: {
  duration: 0.5
},
zoom: {
  duration: 0.5
},
fade: {
  duration: 0.25
}
```