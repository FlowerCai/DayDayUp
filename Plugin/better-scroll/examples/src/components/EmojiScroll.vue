<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scrollRef">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in emojis" :key="index" @click="clickHandler(item)">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BScroll from '@better-scroll/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const scrollRef = ref(null)
const slider = ref(null)
const emojis = [
  'đ đ đ đ€Ł đ',
  'đ đ đ đ đ',
  'đ« đŽ đ đ đ',
  'đđ» đ đ đ đđ»',
  'đ đ¶ đ đ đŁ',
  'đ đ đ€ đą đ­',
  'đ€ đČ đ đ đ',
  'đ đ đ â đ€',
  'đ â đ€ đ đ',
  'đđŒ đđŒ đđŒ âđŒ đ€đŒ',
  'âđœ âđœ đ€đœ đđœ đđœ',
  'đ đ đ đ đ',
  'đ« đ„ đą đŠ đ§',
  'đ  đ đŹ đł đ',
  'đŹ đ đ đŻ đ¶',
  'đ đ đ đ đ”',
  'đ„ đŁ đ đ đ€',
  'đȘ âš đ â â',
  'đ đ đ đ đ',
  'đ đ đ đ đ',
  'đđŒ đđŒ đđŒ âđŒ đ€đŒ',
  'âđœ âđœ đ€đœ đđœ đđœ',
  'đ đ đ đ đ',
  'đ« đ„ đą đŠ đ§',
  'đ  đ đŹ đł đ',
  'đŹ đ đ đŻ đ¶',
  'đ đ đ đ đ”',
  'đ„ đŁ đ đ đ€',
  'đȘ âš đ â â',
  'đ đ đ đ đ',
  'đ đ đ đ đ'
]

onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  console.log('test')
  slider.value.destroy()
})

const init = () => {
  // const sliderVal = new BScroll('.scroll-wrapper', {
  //   probeType: 3,
  //   click: true
  // })
// éçšćŒçš
  // const sliderVal = new BScroll(scrollRef, {
  //   probeType: 3,
  //   click: true
  // })

  const sliderVal = new BScroll(scrollRef.value, {
    probeType: 3,
    click: true
  })

  slider.value = sliderVal

  sliderVal.on('scrollStart', () => {
    console.log('scrollStart-')
  })
  sliderVal.on('scroll', ({ y }) => {
    console.log('scrolling-')
  })
  sliderVal.on('scrollEnd', (pos) => {
    console.log(pos)
  })
}

const clickHandler = (item) => {
  window.alert(item)
}

</script>

<script>
export default {
  name: 'EmojiScroll'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.core-container
  .scroll-wrapper
    height 400px
    position relative
    overflow hidden
    .scroll-item
      height 50px
      line-height 50px
      font-size 24px
      font-weight bold
      border-bottom 1px solid #eee
      text-align center
      &:nth-child(2n)
        background-color #f3f5f7
      &:nth-child(2n+1)
        background-color #42b983
</style>
