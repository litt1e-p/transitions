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

Vue.use(Transitions)
```

2. or use as vue component

```js
// in your vue file
import { transitions } from '@litt1e-p/transitions'

export default {
  components: {
    transitions
  }
  ...
}
```

3. use in template

> eg. use `zoom` transition effect

```js
<transitions type="zoom">
  <component :is="your componet"></component>
</transitions>
```

if your does not provide any type, it will apply random effect instead

### Configuration

all types of effect

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