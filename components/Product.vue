<template>
  <section class="container product">
    <div class="product__pin"></div>
    <div class="product__pin-text">
      <span>Product</span>
    </div>
    <div class="product__pin-icon">
      <svg width="11" height="22" viewBox="0 0 11 22" xmlns="http://www.w3.org/2000/svg"><path d="M10.499 15.676c-.007-.114-.084-.212-.193-.247-.11-.034-.229.002-.301.091l-4.233 4.941v-19.659c-.014-.204-.15-.316-.304-.302-.153.014-.266.149-.252.302v19.659l-4.224-4.941c-.101-.117-.277-.13-.395-.03-.117.1-.131.276-.03.392l4.719 5.518c.053.062.131.098.213.098.082 0 .16-.036.213-.098l4.719-5.518c.051-.057.076-.131.069-.207z" stroke="#fff" fill="#fff"/></svg>
    </div>
    <div class="columns is-multiline">
      <div v-for="(item, key) in items" :key="key" class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen is-one-fifth-fullhd">
        <div class="inner-box">
          <img :src="item.img">
          <div class="icons columns is-mobile is-gapless">
            <img class="column" v-for="(icon, key) in item.icons" :key="key" :src="icon.src">
          </div>
          <div class="info">
            <p class="title">{{item.title}}</p>
            <p class="subtitle">{{item.subtitle}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.product
  position: relative
  margin-top: 6rem
  &__pin
    position: absolute
    width: 0
    height: 0
    top: -110px
    left: 50%
    transform: translateX(-50%)
    border: 55px solid transparent
    border-bottom-color: #ed3331
    &:after
      content: ''
      position: absolute
      top: 55px
      left: -55px
      width: 0
      height: 0
      border: 55px solid transparent
      border-top-color: #ed3331
      @media (min-width: 992px)
        border-width: 62px
        top: 62px
        left: -62px
    @media (min-width: 992px)
      border-width: 62px
      top: -124px
    &-text
      position: absolute
      top: -20px
      left: 50%
      width: 55px
      transform: translateX(-50%)
      font-size: 15px
      font-weight: 700
      line-height: 17px
      text-align: center
      text-transform: uppercase
      color: #fff
      @media (min-width: 992px)
        width: 110px
        top: -8px
    &-icon
      position: absolute
      top: 15px
      left: 50%
      transform: translateX(-50%)
  .columns
    padding-top: 5rem
    .column .inner-box
      box-shadow: 3px 3px 10px 2px rgba(0, 0, 0, 0.1)
      .icons img
        height: 50px
      .info
        .title
          font-size: 16px
          color: #D0A13A
        .subtitle
          font-size: 13px
          color: #191110
</style>

<script>
  export default {
    data () {
      return {
        items: [
          {
            img: 'https://picsum.photos/800/600/?random=1',
            icons: [
              {src: require('~/assets/images/bell.svg')},
              {src: require('~/assets/images/camera.svg')},
              {src: require('~/assets/images/green.svg')},
              {src: require('~/assets/images/water.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=2',
            icons: [
              {src: require('~/assets/images/bell.svg')},
              {src: require('~/assets/images/camera.svg')},
              {src: require('~/assets/images/green.svg')},
              {src: require('~/assets/images/water.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=3',
            icons: [
              {src: require('~/assets/images/bell.svg')},
              {src: require('~/assets/images/camera.svg')},
              {src: require('~/assets/images/green.svg')},
              {src: require('~/assets/images/water.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=4',
            icons: [
              {src: require('~/assets/images/bell.svg')},
              {src: require('~/assets/images/camera.svg')},
              {src: require('~/assets/images/green.svg')},
              {src: require('~/assets/images/water.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=5',
            icons: [
              {src: require('~/assets/images/bell.svg')},
              {src: require('~/assets/images/camera.svg')},
              {src: require('~/assets/images/green.svg')},
              {src: require('~/assets/images/water.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          }
        ]
      }
    }
  }
</script>
