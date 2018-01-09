<template>
  <section class="container product">
    <div class="columns is-mobile is-multiline">
      <div v-for="(item, key) in items" :key="key" class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="inner-box">
          <img :src="item.img">
          <div class="icons columns is-mobile">
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
  padding: 6rem 0
  .columns
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
              {src: require('~/assets/images/icon1.svg')},
              {src: require('~/assets/images/icon2.svg')},
              {src: require('~/assets/images/icon3.svg')},
              {src: require('~/assets/images/icon4.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=2',
            icons: [
              {src: require('~/assets/images/icon1.svg')},
              {src: require('~/assets/images/icon2.svg')},
              {src: require('~/assets/images/icon3.svg')},
              {src: require('~/assets/images/icon4.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=3',
            icons: [
              {src: require('~/assets/images/icon1.svg')},
              {src: require('~/assets/images/icon2.svg')},
              {src: require('~/assets/images/icon3.svg')},
              {src: require('~/assets/images/icon4.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          },
          {
            img: 'https://picsum.photos/800/600/?random=4',
            icons: [
              {src: require('~/assets/images/icon1.svg')},
              {src: require('~/assets/images/icon2.svg')},
              {src: require('~/assets/images/icon3.svg')},
              {src: require('~/assets/images/icon4.svg')}
            ],
            title: 'MultiSensor (6-in-1)',
            subtitle: 'Six sensor in one.'
          }
        ]
      }
    }
  }
</script>
