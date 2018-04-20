<template>
  <header class="nav-container animated" :class="[{'isFixed fadeInDown': isFixed}, 'is'+theme]">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <nuxt-link to="/" class="nav-item is-logo">
            <svg width="150px" viewBox="0 0 667 135" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="#fff"><path d="M656.685 100h10.315l-3.366-54h-13.79l-8.035 21.643c-2.28 6.385-4.235 12.986-5.755 18.83h-.217c-1.412-6.06-3.257-12.445-5.32-18.721l-7.601-21.752h-14.007l-3.909 54h9.881l1.303-21.752c.434-7.359.76-15.908 1.086-23.05h.217c1.52 6.709 3.583 14.068 5.863 20.994l7.709 23.05h8.144l8.469-23.267c2.606-6.818 4.995-14.068 6.841-20.669h.326c-.109 7.251.326 15.691.651 22.725l1.194 21.968.001.001zm-99.286-31.968h-21.889v-13.932h23.189v-8.1h-33.7v54h35v-8.1h-24.489v-15.876h21.889v-7.992zm-103.736 31.968h10.564v-45.684h16.772v-8.316h-44v8.316h16.663l.001 45.684zm-96.985 0v-19.293c0-8.838-.109-15.952-.544-22.958l.217-.108c2.827 6.036 6.742 12.719 10.44 18.647l15.225 23.605h10.983v-53.784h-9.787v18.754c0 8.192.217 15.198.979 22.311h-.217c-2.61-5.82-6.09-12.072-9.896-18.108l-15.007-23.066h-12.071v53.784h9.678v.216zm-71.28-15.336l5.209 15.228h11.394l-18.881-53.892h-13.455l-18.664 54h10.96l4.991-15.228h18.447v-.108h-.001zm-16.711-7.452l4.449-13.284c.977-3.24 1.845-6.912 2.713-10.044h.109c.868 3.132 1.845 6.804 2.93 10.044l4.557 13.284h-14.758zm-86.687 22.788h10.466v-22.896h21.039v-8.1h-21.039v-14.904h22.534v-8.1h-33v54zM101.887 0c20.019 0 36.28 16.262 36.112 36.224 0 20.019-16.262 36.28-36.28 36.28-4.093 0-8.131-.673-11.944-2.019.28-1.794.617-3.701.897-5.607 0-.056.112-.505.224-1.346 4.206.673 16.318 1.85 24.953-4.766 7.458-4.71 12.448-13.009 12.448-22.486 0-14.635-11.944-26.523-26.579-26.523-2.075 0-4.262.28-6.841.897-11.383 2.692-17.439 13.738-17.495 13.85l-.056.168c-6.729 11.72-11.047 40.037-11.103 40.317-4.262 28.093-10.149 43.682-19.626 50.13-.729.505-1.29.785-1.29.785-15.364 7.009-24.504-2.86-28.037-8.075 1.514 1.458 3.308 2.635 5.327 3.421 6.449 2.411 13.57.449 18.953-4.542 5.551-4.149 10.878-15.196 15.14-43.233.224-1.234 4.654-30.336 12.28-43.626.729-1.346 8.523-15.084 23.832-18.673 3.308-.785 6.28-1.178 9.084-1.178l.001.002zm-12.392 37.738l-.112.393c-2.916 6.785-5.607 17.159-8.019 32.803-.168 1.234-4.598 30.392-12.224 43.682-.897 1.626-8.635 15.084-23.775 18.617-3.308.785-6.28 1.178-9.084 1.178-20.019 0-36.28-16.262-36.28-36.28 0-20.019 16.262-36.28 36.28-36.28 4.206 0 8.299.729 12.168 2.131-.336 2.131-.673 4.206-1.009 6.168l-.056.224c-3.645-.673-15.757-1.907-26.411 6.056 0 0-.168.112-.336.28-6.617 4.822-10.878 12.617-10.878 21.42 0 14.691 11.944 26.579 26.579 26.579 2.075 0 4.262-.28 6.841-.897 11.383-2.692 17.439-13.738 17.495-13.85l.056-.168c6.729-11.663 10.991-40.037 11.047-40.317 4.542-29.663 10.878-45.364 21.308-51.14 3.196-1.626 15.476-6.561 26.075 7.794-1.29-1.009-2.748-1.85-4.318-2.467-6.729-2.579-14.355-.224-19.794 5.383-.28.28-.617.617-.897.953-.112.056-.168.168-.28.28-.168.168-.28.336-.393.505-1.626 2.019-2.972 4.318-3.981 6.953h-.002z"/></g></svg>
          </nuxt-link>
        </div>
        <div class="nav-toggle" data-target="navMenu" :class="{'showMenu': isActive}" @click='isActive = !isActive'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="nav-right nav-menu" id="navMenu" :class="{'is-active': isActive}">
          <a v-for="(menu, key) in menus" :key="key" class="nav-item" :href="menu.link" target="_blank">
            <span class="icon">
              <i :class="menu.icon"></i>
            </span>
            <span class="text" v-html="menu.text"></span>
          </a>
        </div>
      </nav>
    </div>
    <div v-show="isActive" class="mobile-list is-hidden-tablet">
      <ul>
        <li v-for="(menu, key) in menus" :key="key">
          <a class="nav-item" :href="menu.link">
            <span class="icon">
              <i :class="menu.icon"></i>
            </span>
            <span class="text" v-html="menu.text"></span>
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>

<style lang="stylus">
.nav-container
  z-index: 3
  position: absolute
  width: 100%
  &.isPositive .nav 
    .nav-item
      color: #000
      svg *
        fill: currentColor
    .nav-toggle span
      background-color: #000
  &.isNegative .nav 
    .nav-item
      color: #fff
    .nav-toggle span
      background-color: #fff
  &.isFixed
    position: fixed
    box-shadow: 0 10px 60px rgba(29,29,31,.07)
    background: #fff
    opacity: .9
    .is-logo
      svg g
        fill: #000
    .nav
      min-height: 3.5rem
      .nav-item
        color: #112843
        svg *
          fill: currentColor
      .nav-toggle span
        background-color: #112843
.fadeInDown
  animation-name: fadeInDown
  @keyframes fadeInDown
    0%
      opacity: 0
      transform: translate3d(0,-100%,0)
    100%
      opacity: 1
      transform: none
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
    position: relative
    display: block
    width: 3.25rem
    height: 3.25rem
    cursor: pointer
    transition: .4s
    &.showMenu
      transform: rotate(90deg)
      span
        &:first-child
          margin-top: 0
          transform: rotate(45deg) translate(0,0)
        &:nth-child(2)
          transform: scaleX(0)
        &:last-child
          margin-top: 0
          transform: rotate(-45deg) translate(0,0)
    @media print, screen and (min-width: 769px)
      display: none
    span
      position: absolute
      display: block
      width: 15px
      height: 1px
      left: 50%
      top: 50%
      margin-left: -7px
      transition: .4s
      &:first-child
        margin-top: -6px
      &:nth-child(2)
        margin-top: -1px
      &:nth-child(3)
        margin-top: 4px
.nav-item
  align-items: center
  display: flex
  flex-grow: 0
  flex-shrink: 0
  font-size: 16px
  justify-content: center
  line-height: 1.5
  padding: .5rem .75rem
  @media screen and (max-width: 768px)
    justify-content: flex-start
  svg
    vertical-align: middle
.mobile-list
  background: hsla(0,0%,100%,.96)
  box-shadow: 0 10px 60px rgba(29,29,31,.07)
  width: 100%
  li
    border-top: 1px solid #ebebeb
    a
      color: #112843
      margin: .5rem
      svg *
        fill: currentColor
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'
export default {
  components: {
    MailChimpForm
  },
  props: {
    theme: {
      type: String,
      default: 'Positive'
    }
  },
  data () {
    return {
      isActive: false,
      isFixed: false,
      menus: [
        {
          icon: 'fa fa-file-text-o',
          text: 'e-catalogue',
          link: '/E-catalogue-2018-02-02.pdf'
        },
        {
          icon: 'fa fa-envelope-o',
          text: '<svg xmlns="http://www.w3.org/2000/svg" height="18" viewBox="0 0 134.5 17.1" enable-background="new 0 0 134.5 17.1"><style type="text/css">.st0{enable-background:new ;} .st1{fill:#FFFFFF;}</style><path class="st1" d="M6.8 7.5h-1.5c-.2-1-.8-1.6-1.8-1.6s-1.4.5-1.4 1.3.7 1.1 1.9 1.4c2 .5 2.9 1.3 2.9 2.7 0 1.6-1.4 2.4-3.2 2.4-1.7 0-3.1-.8-3.3-2.7h1.4c.2 1.2 1 1.7 2 1.7.9 0 1.6-.4 1.6-1.2s-.6-1.2-2-1.6c-1.5-.4-2.7-1-2.7-2.5 0-1.6 1.2-2.5 2.9-2.5 2-.1 3 1 3.2 2.6zm6.4 4.8l-.5.9c-.6.4-1.3.5-2.1.5-1.5 0-2.7-.8-2.7-2.4 0-1.9 1.4-2.9 4.8-2.9h.5v-1.2c-.1-.8-.5-1.3-1.6-1.3-1.2 0-1.7.6-1.8 1.8h-1.5c.1-1.8 1.4-2.8 3.3-2.8 2 0 2.9.8 3 2.2v4.3c0 .6 0 1.2.2 2.2h-1.4l-.2-1.3zm0-2v-.9c-2.3-.2-3.8.3-3.8 1.8 0 1 .7 1.5 1.7 1.5 1.3 0 2.1-.9 2.1-2.4zm5.1.8v.8c0 .5.3.7 1 .6v1l-1 .1c-.8 0-1.4-.3-1.4-1.3v-10.5h1.4v9.3zm9.6-1.4h-6.1c.1 2.2 1.2 3 2.4 3 1.1 0 2-.7 2.2-1.9h1.4c-.3 2-2 3-3.7 3-2.2 0-3.9-1.4-3.9-4.4 0-2.8 1.7-4.5 4-4.5s3.6 1.7 3.6 4.2c.1.1.1.3.1.6zm-6.1-1.1h4.8c-.1-1.8-.9-2.8-2.3-2.8-1.4.1-2.4 1-2.5 2.8zm13.5-1.1h-1.4c-.2-1-.8-1.6-1.8-1.6s-1.4.5-1.4 1.3.7 1.2 1.9 1.5c2 .5 2.9 1.3 2.9 2.7 0 1.6-1.4 2.4-3.2 2.4-1.7 0-3.1-.8-3.3-2.7h1.4c.2 1.2 1 1.7 2 1.7.9 0 1.6-.4 1.6-1.2s-.6-1.2-2-1.6c-1.5-.4-2.7-1-2.7-2.5 0-1.6 1.2-2.5 2.9-2.5 1.9-.2 3 .9 3.1 2.5zm9.8 2.8c0 .2-.1.4-.1.5 0 .3.1.6.6.6 1 0 2-1 2-3.1 0-2.9-1.9-4.4-4.2-4.4-2.7 0-5.6 2.1-5.6 5.8 0 3.1 2 4.6 4.5 4.6 1.3 0 2.8-.4 4-1.3l.4.8c-1.6 1.1-3.2 1.4-4.5 1.4-2.8 0-5.5-1.8-5.5-5.6 0-4.2 3.4-6.7 6.6-6.7 3 0 5.1 2.1 5.1 5.3 0 2.9-1.7 4.1-3.3 4.1-.8 0-1.5-.3-1.6-1.2l-.3.7c-.5.4-1 .6-1.6.6-1 0-2.3-.6-2.3-2.6 0-2.1 1.4-4.1 3.5-4.1.6 0 1.1.2 1.4.5l.1.8.3-1h1.3l-.8 4.3zm-1.1-1.4c.4-1.5-.2-2-1-2-1.3 0-2 1.5-2 2.9 0 1.2.5 1.6 1.1 1.6.9 0 1.6-.9 1.8-1.9l.1-.6zm8.2-4.6v.8h1.7v1.1h-1.7v7.4h-1.4v-7.4h-.9v-1.1h.9v-1.7c.1-1.2 1-1.9 2.2-1.9.4 0 .7 0 1 .1v1.1c-1-.2-1.7 0-1.8.7v.9zm7.9 8l-.5.9c-.6.4-1.3.5-2.1.5-1.5 0-2.7-.8-2.7-2.4 0-1.9 1.4-2.9 4.8-2.9h.5v-1.2c-.1-.8-.5-1.3-1.6-1.3-1.2 0-1.7.6-1.8 1.8h-1.4c.1-1.8 1.4-2.8 3.3-2.8 2 0 2.9.8 3 2.2v4.3c0 .6 0 1.2.2 2.2h-1.4l-.3-1.3zm0-2v-.9c-2.3-.2-3.8.3-3.8 1.8 0 1 .7 1.5 1.7 1.5 1.2 0 2.1-.9 2.1-2.4zm10.9-1.5v4.8h-1.4v-6c-.1-1-.6-1.7-1.9-1.7s-2.4 1-2.4 3.9v3.7h-1.4v-8.5h1.4v1.5l.5-1c.7-.5 1.3-.7 2.2-.7 1.9 0 2.9 1 3 2.5v1.5zM75 11v.7c.1.8.4 1 1.5.9v1c-.4.1-.8.1-1.2.1-1.1 0-1.6-.4-1.7-1.5v-6h-1.1v-1.1h1.1v-2h1.4v2h1.6v1.1h-1.6v4.8zM85.1 9.7h-6.1c.1 2.2 1.2 3 2.4 3 1.1 0 2-.7 2.2-1.9h1.4c-.3 2-2 3-3.7 3-2.2 0-3.9-1.4-3.9-4.4 0-2.8 1.7-4.5 4-4.5s3.6 1.7 3.6 4.2c.1.1.1.3.1.6zm-6.1-1.1h4.8c-.1-1.8-.9-2.8-2.3-2.8-1.4.1-2.4 1-2.5 2.8zm19.3-.3v5.2h-1.4v-4.5c0-.8 0-1.2-.1-1.6-.1-1-.7-1.4-1.7-1.4-1.1 0-1.9.8-1.9 3.4v4.2h-1.4v-4.6c0-.8 0-1.2-.1-1.6-.1-1-.7-1.4-1.7-1.4-1.1 0-1.9.8-1.9 3.4v4.2h-1.4v-8.6h1.4v1.2l.5-1c.4-.4 1-.5 1.8-.5 1.3 0 2.1.7 2.4 1.6l.8-1.1c.4-.4 1-.5 1.8-.5 1.5 0 2.4.9 2.6 2.1.3.5.3.8.3 1.5zm3.8 4.4c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1zm8.9-4.8h-1.4c-.3-1.4-1-2-2.2-2-1.3 0-2.4 1-2.4 3.3 0 2.5 1.1 3.5 2.4 3.5 1.1 0 1.9-.6 2.2-1.9h1.4c-.4 2-1.8 2.9-3.7 2.9-2.1 0-3.8-1.3-3.8-4.4 0-2.9 1.9-4.5 4-4.5 2 0 3.3 1.2 3.5 3.1zm9.3 1.4c0 2.4-1.3 4.5-4.2 4.5s-4.2-2.1-4.2-4.5 1.3-4.5 4.2-4.5 4.2 2.1 4.2 4.5zm-1.5 0c0-2-1-3.4-2.7-3.4s-2.7 1.4-2.7 3.4 1 3.4 2.7 3.4 2.7-1.4 2.7-3.4zm14.6-1v5.2h-1.4v-4.5c0-.8 0-1.2-.1-1.6-.1-1-.7-1.4-1.7-1.4-1.1 0-1.9.8-1.9 3.4v4.2h-1.3v-4.6c0-.8 0-1.2-.1-1.6-.1-1-.7-1.4-1.7-1.4-1.1 0-1.9.8-1.9 3.4v4.2h-1.3v-8.6h1.4v1.2l.5-1c.4-.4 1-.5 1.8-.5 1.3 0 2.1.7 2.4 1.6l.8-1.1c.4-.4 1-.5 1.8-.5 1.5 0 2.4.9 2.6 2.1 0 .5.1.8.1 1.5z"/></svg>'
        }
      ]
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      if (scrollTop > 88) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    })
  }
}
</script>
