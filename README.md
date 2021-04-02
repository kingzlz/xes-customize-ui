# xes-customize-ui

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

```sh
# Yarn
yarn add xes-customize-ui

# Npm
npm install xes-customize-ui --save
```
## Attribute

| 参数                  | 说明                                                 | 类型            | 默认值 |
| --------------------- | ---------------------------------------------------- | --------------- | ------ |
| v-model               | 显示隐藏                                             | boolean         | false  |
| img-list              | 图片数据列表['url'] 或[{url: 'url', title: 'title'}] | array           | -      |
| z-index               | css 层级                                             | number          | 2000   |
| close-on-click-mask   | 是否可以通过点击遮罩关闭 ImageViewer                 | boolean         | true  |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 ImageViewer                | boolean         | true   |
| current-image-index         | 默认打开的图片索引                                   | number          | 0      |
| on-switch             | 切换回调                                             | function(index) | -      |
| showPreNextBar        | 是否展示上下一页按钮                      | boolean | false      |
| spaceAction           | 按空格键是否恢复图片原始大小                      | boolean | false      |
## Keyboard Operation

| Keyboard               | 说明                       |
| ---------------------- | -------------------------- |
| SPACE(空格键)          | 切换原图大小或屏幕缩放大小 |
| LEFT_ARROW(左方向键)   | 切换到上一张图片          |
| RIGHT_ARROW (右方向键) | 切换到下一张图片          |
| UP_ARROW(上方向键)     | 放大图片                 |
| DOWN_ARROW(下方向键)   | 缩小图片                 |

## 示例

```vue
<template>
  <div>
    <button @click="showViewer = true">预览图片</button>
    <xes-imgs-viewer
      v-model="showViewer"
      :current-image-index="imageIndex"
      :show-pre-next-bar="false"
      :close-on-press-escape="false"
      :img-list="imgList"
    />
  </div>
</template>

<script>
import { xesImageViewer } from 'xes-customize-ui';
import 'xes-customize-ui/lib/index.css';
export default {
  components: {
      xesImageViewer
  },
  data() {

    return {
      showViewer: false,
      imageIndex: 0,
      imgList: [
        {
          url: '图片地址',
          title: '图片名称', //可以没有
        },
        {
          url: '图片地址',
          title: '图片名称', //可以没有
        },
      ],
    }
  },
  methods: {},
}
</script>

<style></style>
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
