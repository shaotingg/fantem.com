<template>
  <section class="hero is-bold is-header is-large">
    <div class="hero-body has-text-centered">
      <div class="container">
          <h1 class="title">
              FANTEM
          </h1>
          <img class="products" :src="productsImg" alt="fantem products">
      </div>
    </div>
    <section class="clients" :class="animationName">
      <div class="animation-overlay"></div>
      <div class="container" :class="animationName">
        <div class="columns is-gapless">
          <div class="column has-text-centered">
            <img v-for="i in 13" :key="i.id" :src="require(`@/assets/images/cert${i}.svg`)" class="logo">
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<style lang="stylus">
    .hero.is-header
        background: url('../assets/images/background-dark.jpg') no-repeat
        background-size: cover
        position: relative
        overflow: hidden
        .hero-body
            padding: 100px 0 0
        h1.title
            color: #fff
            font-size: 125px
            text-indent: 70px
            letter-spacing: 70px
            font-family: 'aileronbold'
            @media (max-width: 1215px)
                font-size: (@font-size)*.7
                text-indent: (@text-indent)*.7
                letter-spacing: (@letter-spacing)*.7
            @media (max-width: 991px)
                font-size: (@font-size)*.6
                text-indent: (@text-indent)*.6
                letter-spacing: (@letter-spacing)*.6
            @media (max-width: 640px)
                font-size: (@font-size)*.3
                text-indent: (@text-indent)*.3
                letter-spacing: (@letter-spacing)*.3
        .products
          @media (max-width: 600px)
            padding: 0 20px
        h2.subtitle
            color: #fff
            opacity: .5
            font-size: 52px
            margin-top: -60px
            margin-bottom: 60px
            @media (max-width: 1215px)
                font-size: (@font-size)*.7
                margin-top: 0
                margin-bottom: (@margin-bottom)*.7
            @media (max-width: 991px)
                font-size: (@font-size)*.6
                margin-top: 0
                margin-bottom: (@margin-bottom)*.6
            @media (max-width: 640px)
                font-size: (@font-size)*.3
                margin-top: 0
                margin-bottom: (@margin-bottom)*.3
    .clients
        background: rgba(255,255,255,0)
        transition: background 2s 0s
        padding: 10px 30px
        text-align: center
        position: relative
        &.slideUp
          background: rgba(255,255,255,.1)
          transition: background 2s 0s
        img.logo
            margin-bottom: 0
            height: 24px
            vertical-align: bottom
            &+img.logo
                margin-left: 15px
            @media (max-width: 600px)
                height: 16px
        .animation-overlay
          width: 756px
          margin: 0 auto
          height: 24px
          @media (max-width: 770px)
            height: 48px
        .container
          position: absolute
          opacity: 0
          bottom: -24px
          transition: all 2s 0s
          width: 100%
          left: 50%
          transform: translateX(-50%)
          &.slideUp
            transition: all 2s 0s
            opacity: 1
            bottom: 10px
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
  },
  data () {
    return {
      productsImg: require('@/assets/images/fantem-family-black.png'),
      animationName: '',
      timer: 0
    }
  },
  methods: {
    onResize () {
      if (document.documentElement.clientWidth < 600) {
        this.productsImg = require('@/assets/images/fantem-family-black-mobile.png')
      } else {
        this.productsImg = require('@/assets/images/fantem-family-black.png')
      }
    },
    onScroll () {
      clearTimeout(this.timer)
      this.animationName = 'slideUp'
      this.timer = setTimeout(() => {
        this.animationName = 'slideDown'
      }, 20 * 60 * 1000)
    }
  },
  mounted () {
    this.onResize()
    this.timer = setTimeout(() => {
      this.animationName = 'slideUp'
    }, 5000)
    window.addEventListener('resize', this.onResize)
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
    window.removeEventListener('scroll', this.onScroll)
  }
}
</script>