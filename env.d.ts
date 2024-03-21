/// <reference types="vite/client" />

// 解决main.ts中引用报错问题【找不到模块“./App.vue”或其相应的类型声明。ts(2307)】
declare module '*.vue' {
  // 引入vue模块中ts的方法
  import type { DefineComponent } from 'vue'
  // 定义vue组件以及类型注解
  const component: DefineComponent<{}, {}>
  export default component
}
