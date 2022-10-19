<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div class="scroll-item" v-for="(item, index) in emojis" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import BScroll from '@better-scroll/core'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const scroll = ref(null)
const slider = ref(null)
const emojis = [
  '👉🏼 😁 😂 🤣 👈🏼',
  '😄 😅 😆 😉 😊',
  '😫 😴 😌 😛 😜',
  '👆🏻 😒 😓 😔 👇🏻',
  '😑 😶 🙄 😏 😣',
  '😞 😟 😤 😢 😭',
  '🤑 😲 ☹️ 🙁 😖',
  '👍 👎 👊 ✊ 🤛',
  '☝️ ✋ 🤚 🖐 🖖',
  '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
  '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
  '🌖 🌗 🌘 🌑 🌒'
]
onMounted(() => {
  init()
})

onBeforeUnmount(() => {
  slider.value.destroy()
})

const init = () => {
  const sliderVal = new BScroll(scroll.value, {
    scrollX: true,
    probeType: 3 // listening scroll event
  })
  sliderVal.on('scrollStart', () => {
    console.log('scrollStart-')
  })
  sliderVal.on('scroll', ({ y }) => {
    console.log('scrolling-')
  })
  sliderVal.on('scrollEnd', () => {
    console.log('scrollingEnd')
  })
  slider.value = sliderVal
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

.horizontal-container
  .scroll-wrapper
    position relative
    width 90%
    margin 80px auto
    white-space nowrap
    border 3px solid #42b983
    border-radius 5px
    overflow hidden
    .scroll-content
      display inline-block
    .scroll-item
      height 50px
      line-height 50px
      font-size 24px
      display inline-block
      text-align center
      padding 0 10px
</style>
