<template>
  <div class="nav-container animated isNegative">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a href="/" class="nav-item is-logo">
            <img :src="require('~/assets/images/fantem-logo.svg')" width="150px" alt="Fantem logo">
          </a>
        </div>
        <div class="nav-toggle" data-target="navMenu" @click='isActive = !isActive'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="nav-right nav-menu" id="navMenu" :class="{'is-active': isActive}">
          <nuxt-link v-for="(menu, key) in menus" :key="key" class="nav-item" :to="menu.link" v-text="menu.text">
          </nuxt-link>
          <span class="nav-item">
            <form action="https://formsubmit.io/send/4be8a03e-7fbb-4f21-9e65-f815b91b8524" class="getMail" data-v-1af4e821="" data-v-501ce8f0="" method="POST"><div class="field has-addons" data-v-501ce8f0=""><p class="control" data-v-501ce8f0=""><input data-v-501ce8f0="" type="email" class="input is-small" name="email" placeholder="Enter your e-mail" required=""></p><p class="control" data-v-501ce8f0=""><input data-v-501ce8f0="" type="hidden" name="_redirect" id="name" value="https://jubiwee.com/en#thanks"><input data-v-501ce8f0="" type="submit" class="button is-primary is-small" value="Start now"></p></div></form>            
          </span>
        </div>
      </nav>
    </div>
    <div v-if="isActive" class="mobile-list is-hidden-tablet">
      <ul>
        <li v-for="(menu, key) in menus" :key="key">
          <nuxt-link  class="nav-item" :to="menu.link">
            <span v-text="menu.text"></span>
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="stylus">
.nav-container
  z-index: 3
  position: absolute
  width: 100%
  &.isNegative .nav .nav-item
    color: #fff
.animated
  animation-duration: 1s
  animation-fill-mode: both
.nav
  background: none
  font-weight: 300
  align-items: stretch
  display: flex
  height: 3.25rem
  position: relative
  text-align: center
  z-index: 10
  @media print, screen and (min-width: 769px)
    min-height: 5.5rem
  &-left
    justify-content: flex-start
    white-space: nowrap
    align-items: stretch
    display: flex
    flex-grow: 1
    flex-shrink: 0
    max-width: 100%
    overflow: auto
  .nav-item
    align-items: center
    display: flex
    flex-grow: 0
    flex-shrink: 0
    font-size: 16px
    justify-content: center
    line-height: 1.5
    padding: .5rem .75rem
  &-right
    overflow: hidden
    justify-content: flex-end
    align-items: stretch
    display: flex
    flex-grow: 1
    flex-shrink: 0
    max-width: 100%
    &>a.nav-item
      padding: .5rem 1rem
    @media screen and (max-width: 768px)
      background: #fff
      box-shadow: 0 4px 7px hsla(0,0%,4%,.1)
      left: 0
      display: none
      right: 0
      top: 100%
      position: absolute
  .nav-toggle
    cursor: pointer
    display: block
    height: 3.25rem
    position: relative
    width: 3.25rem
    @media print, screen and (min-width: 769px)
      display: none
    span
      background-color: #fff
      display: block
      height: 1px
      left: 50%
      margin-left: -7px
      position: absolute
      top: 50%
      transition: none 86ms ease-out
      transition-property: background,left,opacity,transform
      width: 15px
      &:first-child
        margin-top: -6px
      &:nth-child(2)
        margin-top: -1px
      &:nth-child(3)
        margin-top: 4px
</style>

<script>
  export default {
    data () {
      return {
        isActive: false,
        menus: [
          {
            text: 'sales@fantem.com',
            link: 'mailto:sales@fantem.com'
          },
          {
            text: 'Catlog',
            link: ''
          }
        ]
      }
    }
  }
</script>
