<template>
  <header class="nav-container animated isNegative" :class="{'isFixed fadeInDown': isFixed}">
    <div class="container">
      <nav class="nav">
        <div class="nav-left">
          <a href="/" class="nav-item is-logo">
            <svg width="150px" viewBox="0 0 667 135" xmlns="http://www.w3.org/2000/svg"><g fill-rule="nonzero" fill="#fff"><path d="M656.685 100h10.315l-3.366-54h-13.79l-8.035 21.643c-2.28 6.385-4.235 12.986-5.755 18.83h-.217c-1.412-6.06-3.257-12.445-5.32-18.721l-7.601-21.752h-14.007l-3.909 54h9.881l1.303-21.752c.434-7.359.76-15.908 1.086-23.05h.217c1.52 6.709 3.583 14.068 5.863 20.994l7.709 23.05h8.144l8.469-23.267c2.606-6.818 4.995-14.068 6.841-20.669h.326c-.109 7.251.326 15.691.651 22.725l1.194 21.968.001.001zm-99.286-31.968h-21.889v-13.932h23.189v-8.1h-33.7v54h35v-8.1h-24.489v-15.876h21.889v-7.992zm-103.736 31.968h10.564v-45.684h16.772v-8.316h-44v8.316h16.663l.001 45.684zm-96.985 0v-19.293c0-8.838-.109-15.952-.544-22.958l.217-.108c2.827 6.036 6.742 12.719 10.44 18.647l15.225 23.605h10.983v-53.784h-9.787v18.754c0 8.192.217 15.198.979 22.311h-.217c-2.61-5.82-6.09-12.072-9.896-18.108l-15.007-23.066h-12.071v53.784h9.678v.216zm-71.28-15.336l5.209 15.228h11.394l-18.881-53.892h-13.455l-18.664 54h10.96l4.991-15.228h18.447v-.108h-.001zm-16.711-7.452l4.449-13.284c.977-3.24 1.845-6.912 2.713-10.044h.109c.868 3.132 1.845 6.804 2.93 10.044l4.557 13.284h-14.758zm-86.687 22.788h10.466v-22.896h21.039v-8.1h-21.039v-14.904h22.534v-8.1h-33v54zM101.887 0c20.019 0 36.28 16.262 36.112 36.224 0 20.019-16.262 36.28-36.28 36.28-4.093 0-8.131-.673-11.944-2.019.28-1.794.617-3.701.897-5.607 0-.056.112-.505.224-1.346 4.206.673 16.318 1.85 24.953-4.766 7.458-4.71 12.448-13.009 12.448-22.486 0-14.635-11.944-26.523-26.579-26.523-2.075 0-4.262.28-6.841.897-11.383 2.692-17.439 13.738-17.495 13.85l-.056.168c-6.729 11.72-11.047 40.037-11.103 40.317-4.262 28.093-10.149 43.682-19.626 50.13-.729.505-1.29.785-1.29.785-15.364 7.009-24.504-2.86-28.037-8.075 1.514 1.458 3.308 2.635 5.327 3.421 6.449 2.411 13.57.449 18.953-4.542 5.551-4.149 10.878-15.196 15.14-43.233.224-1.234 4.654-30.336 12.28-43.626.729-1.346 8.523-15.084 23.832-18.673 3.308-.785 6.28-1.178 9.084-1.178l.001.002zm-12.392 37.738l-.112.393c-2.916 6.785-5.607 17.159-8.019 32.803-.168 1.234-4.598 30.392-12.224 43.682-.897 1.626-8.635 15.084-23.775 18.617-3.308.785-6.28 1.178-9.084 1.178-20.019 0-36.28-16.262-36.28-36.28 0-20.019 16.262-36.28 36.28-36.28 4.206 0 8.299.729 12.168 2.131-.336 2.131-.673 4.206-1.009 6.168l-.056.224c-3.645-.673-15.757-1.907-26.411 6.056 0 0-.168.112-.336.28-6.617 4.822-10.878 12.617-10.878 21.42 0 14.691 11.944 26.579 26.579 26.579 2.075 0 4.262-.28 6.841-.897 11.383-2.692 17.439-13.738 17.495-13.85l.056-.168c6.729-11.663 10.991-40.037 11.047-40.317 4.542-29.663 10.878-45.364 21.308-51.14 3.196-1.626 15.476-6.561 26.075 7.794-1.29-1.009-2.748-1.85-4.318-2.467-6.729-2.579-14.355-.224-19.794 5.383-.28.28-.617.617-.897.953-.112.056-.168.168-.28.28-.168.168-.28.336-.393.505-1.626 2.019-2.972 4.318-3.981 6.953h-.002z"/></g></svg>
          </a>
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
            {{menu.text}}
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
            {{menu.text}}
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
  &.isNegative .nav .nav-item
    color: #fff
    &.nuxt-link-active
      font-weight: 600
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
      background-color: #fff
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
.mobile-list
  background: hsla(0,0%,100%,.96)
  box-shadow: 0 10px 60px rgba(29,29,31,.07)
  width: 100%
  li
    border-top: 1px solid #ebebeb
    a
      color: #112843
      margin: .5rem
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
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
          text: 'sales1@fantem.com',
          link: 'mailto:sales@fantem.com'
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
