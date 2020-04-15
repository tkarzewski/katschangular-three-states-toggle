# Katschangular Three States Toggle

Simple Angular Toggle Switch with three states: `true`, `false`, and `null`/`undefined`.

See the [demo](https://tkarzewski.github.io/katschangular-three-states-toggle/)

## What is this
This is a simple Angular Component which supports next to the states `true` or `false` a thirs state that is `null`/`undefined`.
It is based on [Angular Material](https://material.angular.io/)


## Quick start
```
<katschangular-three-states-toggle
  color="accent"
  [label]="label"
  [disabled]="disabled"
  [(value)]="value">
</katschangular-three-states-toggle>
```


## Detailed instructions

1. A recommended way to install ***katschangular-three-states-toggle*** is through [npm](https://www.npmjs.com/search?q=three-states-toggle)
   package manager using the following command:

   `npm i -S katschangular-three-states-toggle`

2. Import `KatschangularThreeStatesToggleModule` into the module that declares the component using ***katschangular-three-states-toggle***:
   <br>```import { KatschangularThreeStatesToggleModule } from 'katschangular-three-states-toggle';```

3. Add it to `[imports]` under `@NgModule`:
   <br>```imports: [ ... KatschangularThreeStatesToggleModule, ... ]```

4. Use the component in your Template:
   ```
   <katschangular-three-states-toggle
    color="accent"
    [label]="label"
    [disabled]="disabled"
    [(value)]="value">
   </katschangular-three-states-toggle>
   ```
