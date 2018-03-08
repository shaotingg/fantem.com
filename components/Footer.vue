<template>
  <footer class="footer">
    <div class="container">
      <div class="columns is-mobile" style="flex-wrap: wrap">
        <div class="column is-one-third-tablet is-half-mobile">
          <ul>
            <li>Site map</li>
            <li>
              <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/about">About</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="column is-one-third-tablet is-half-mobile">
          <ul>
            <li>Social networks </li>
            <li>
              <i class="icon fa fa-twitter"></i>
              <a href="//twitter.com/OomiHome" target="_blank">Twitter</a>
            </li>
            <li>
              <i class="icon fa fa-facebook-square"></i>
              <a href="//www.facebook.com/pages/Oomi-Home/857955797561983?fref=ts" target="_blank">Facebook</a>
            </li>
          </ul>
        </div>
        <div class="column is-one-third-tablet is-full-mobile">
          <ul>
            <li>Contact</li>
            <li>
              <i class="icon fa fa-fax"></i>
              <a href="tel:0755-26616688">0755-26616688</a>
            </li>
            <li>
              <i class="icon fa fa-envelope"></i>
              <a href="mailto:support@fantem.com">support@fantem.com</a>
            </li>
            <li>
              <i class="icon fa fa-map-marker"></i>
              5th Floor, Yingtang Building South 5th rd, High Technology Park, Nanshan District
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <p>
        &copy; Copyright 2011-{{currentYear}} Fantem All Rights Reserved.
      </p>
    </div>
    <div class="go2top" v-show="isDisplay2Top">
      <i class="icon fa fa-2x fa-arrow-up" @click="go2top"></i>
    </div>
  </footer>
</template>

<style lang="stylus">
.footer
  .column
    ul
      line-height: 1.7
      li
        font-weight: 300
        &:first-child
          margin-bottom: 1rem
          font-weight: 600
        a
          color: #112843
          &:hover
            font-weight: bold
  .go2top
    position: fixed
    right: 20px
    bottom: 20px
    i
      background-color: gray
      padding: 20px
      border-radius: 50%
      color: #fff
      &:hover
        cursor: pointer
</style>

<script>
  export default {
    data () {
      return {
        timer: null,
        isDisplay2Top: false,
        currentYear: new Date().getFullYear()
      }
    },
    methods: {
      go2top () {
        let timer = setInterval(() => {
          let oTop = document.documentElement.scrollTop || document.body.scrollTop
          let speed = Math.floor(-oTop / 10)
          document.documentElement.scrollTop = document.body.scrollTop = oTop + speed
          if (oTop === 0) {
            clearInterval(timer)
          }
        }, 30)
      }
    },
    mounted () {
      window.addEventListener('scroll', () => {
        let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
        let clientHeight = document.documentElement.clientHeight
        if (scrollTop > clientHeight) {
          this.isDisplay2Top = true
        } else {
          this.isDisplay2Top = false
        }
      })
    }
  }
</script>
