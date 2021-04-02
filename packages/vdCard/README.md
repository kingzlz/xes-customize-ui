## vd-card

### 引入

```js
import { vdCard } from 'votre-dieu'
import 'votre-dieu/lib/votre-dieu.css'
Vue.use(vdCard)
```

### 简单使用
```html
<vd-card style="width:400px;" type="primary">
    <div slot="header">
         安墨对我说
    </div>
    <p>当你低着头只是一个劲地努力着，行走着，进行着，忽然抬头，发现自己已经站在曾经想要站着的位置了</p>
</vd-card>
```

### 说明

`header` ：具名插槽

`body` ： 默认插槽

### 参数

| 参数      | 必填 | 可选            | 类型   | 默认    | 说明           |
| --------- | ---- | --------------- | ------ | ------- | -------------- |
| type      | 否   | primary/default | String | default | header颜色     |
| bodyStyle | 否   |                 | Object |         | body自定义样式 |
