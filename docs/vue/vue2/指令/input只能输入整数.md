::: code-group

```javascript
const integer = {
  // 当绑定元素插入到 DOM 中时

  inserted(el) {
    // 自定义获取input元素
    const input = el.querySelector("input");

    input.addEventListener("input", function () {
      // 只保留整数部分

      input.value = input.value.replace(/[^0-9]/g, "");
    });
  },
};

Vue.directive("integer", integer);
```

:::
