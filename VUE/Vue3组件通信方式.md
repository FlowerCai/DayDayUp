# Vue3组件通信方式

## 回答思路
> 1. 总的通信方式
> 2. 按照组件间相互关系回答通信方式
> 3. 这些通信方式具体的实现[代码传送阵]()
> 4. 对比Vue2所做的改变

## 总的通信方式
> 组件间的通信方式有8种:props emits v-model ref provide inject eventbus vuex

## 组件间关系回答
> 组件间的通信方式与组件之间的关系有关，一般分为父子组件通信、爷孙组件通信、兄弟组件通信、全局组件通信 
> 
> 父子组件通信指的是B组件引入到A组件渲染，A是B的父级，这时父组件向子组件传递信息的通信方式有props、v-model、ref、provide、eventbus、vuex，子组件向父组件传递信息的方式有emits、inject、eventbus、vuex
> 
> 爷孙组件通信就是比父子组件通信要更深层次的引用关系，爷组件向孙组件传递信息用provide eventbus vuex,孙组件向爷组件传递信息用inject eventbus的emit/on vuex
> 
> 兄弟组件通信是指两个组件都挂载在同一个父组件下，但是两个组件没有什么直接的关系，既然没有什么直接关联，其实也没有专属他们的通信方式，如果要交流，一种是把数据传给父组件，在通过父子组件通信的方式交流，另一种是借助全局组件通信的方案才能达到目的
> 
> 全局组件通信是指任意的两个组件，不论是否有关联，都可以直接通信，常用方式有eventbus、vuex
