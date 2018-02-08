<template>
  <section class="is-learn">
    <div class="container">
      <p class="title">
        Learn About
      </p>
      <div class="columns">
        <div class="column">
          <div class="line"></div>
          <a href="#section-oomi" @click.stop.prevent="goToAnchor('oomi')">
            <div class="item-title">Smart Home System</div>
            <div class="item-desc">Oomi. Smart. Simple. Home.</div>
          </a>
        </div>
        <div class="column">
          <div class="line"></div>
          <a href="#section-opp" @click.stop.prevent="goToAnchor('opp')">
            <div class="item-title">Partner Portal</div>
            <div class="item-desc">Distribution Opportunities.</div>
          </a>
        </div>
        <div class="column">
          <div class="line"></div>
          <a href="#section-fantem" @click.stop.prevent="goToAnchor('fantem')">
            <div class="item-title">Fantem OEM / ODM</div>
            <div class="item-desc">Tell us, we make it.</div>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.is-learn
  padding: 67px 0
  background: url('../assets/images/Learn-web.jpg') no-repeat fixed center/cover
  background-image: image-set(url('../assets/images/Learn-web.jpg') 1x,url('../assets/images/Learn-mobile.jpg') 2x)
  .container
    @media (max-width: 768px)
      width: 230px
  .title
    color: rgba(255, 255, 255, .5)
    font-size: 38.5px
    text-transform: uppercase
    font-family: 'aileronbold'
    margin-bottom: 42px
  .columns .column
    .line
      background-color: #fff
      border: none
      display: block
      height: 1px
      width: 90%
    .item-title
      color: #fff
      font-size: 38.5px
      font-family: 'aileronbold'
      margin-bottom: 40px
    .item-desc
      color: #fff
      font-size: 23px
</style>

<script>
  export default {
    methods: {
      goToAnchor (name) {
        let timer = null
        let step = 50
        let anchorTop = document.getElementById(`section-${name}`).offsetTop - 56
        cancelAnimationFrame(timer)
        timer = requestAnimationFrame(function fn () {
          let oTop = document.documentElement.scrollTop
          if (oTop < anchorTop) {
            document.documentElement.scrollTop = oTop + step <= anchorTop ? oTop + step : anchorTop
            timer = requestAnimationFrame(fn)
          } else {
            cancelAnimationFrame(timer)
          }
        })
      }
    }
  }
</script>