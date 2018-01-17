<template>
  <section class="product">
    <div class="product__pin"></div>
    <div class="product__pin-text">
      <span>Our Products</span>
    </div>
    <div class="product-item flex" v-for="(item, index) in items" :key="item.id">
      <div class="left">
        <div class="inner">
          <div class="textContent" v-if="index%2 == 0">
            <p class="title">{{item.title}}</p>
            <p class="subtitle">{{item.subtitle}}</p>
            <p class="desc">{{item.description}}</p>
            <div class="icons" v-if="item.icons">
              <div v-for="icon in item.icons" :key="icon.id">
                <img :src="require(`@/assets/images/${icon.toLowerCase()}.svg`)">
                <span>{{icon}}</span>
              </div>
            </div>
            <p class="highlights">Product Highlights:</p>
            <ul>
              <li v-for="highlight in item.productHighlights" :key="highlight.id">
                {{highlight}}  
              </li>
            </ul>
            <a class="learnMore" :href="item.learnMore">Learn More</a>
          </div>
        </div>
      </div>
      <div class="center">
        <img :src="require(`@/assets/images/product${index+1}.png`)">
      </div>
      <div class="right">
        <div class="inner">
          <div class="textContent" v-if="index%2 == 1">
            <p class="title">{{item.title}}</p>
            <p class="subtitle">{{item.subtitle}}</p>
            <p class="desc">{{item.description}}</p>
            <div class="icons" v-if="item.icons">
              <div v-for="icon in item.icons" :key="icon.id">
                <img :src="require(`@/assets/images/${icon.toLowerCase()}.svg`)">
                <span>{{icon}}</span>
              </div>
            </div>
            <p class="highlights">Product Highlights:</p>
            <ul>
              <li v-for="highlight in item.productHighlights" :key="highlight.id">
                {{highlight}}  
              </li>
            </ul>
            <a class="learnMore" :href="item.learnMore">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.product
  position: relative
  margin-top: 10rem
  &__pin
    position: absolute
    z-index: 1
    width: 0
    height: 0
    top: -260px
    left: 50%
    transform: translateX(-50%)
    border: 130px solid transparent
    border-bottom-color: #4d4d4d
    &:after
      content: ''
      position: absolute
      top: 130px
      left: -130px
      width: 0
      height: 0
      border: 130px solid transparent
      border-top-color: #4d4d4d
      @media (min-width: 992px)
        border-width: 62px
        top: 62px
        left: -62px
    @media (min-width: 992px)
      border-width: 62px
      top: -124px
    &-text
      position: absolute
      z-index: 2
      top: -18px
      left: 50%
      width: 110px
      transform: translateX(-50%)
      font-size: 15px
      font-weight: 700
      line-height: 17px
      text-align: center
      text-transform: uppercase
      color: #fff
  &-item
    position: relative
    height: 800px
    &.flex
      display: flex
      .title
        color: #512da8
        font-size: 27px
      .subtitle
        color: #512da8
        font-size: 20px
      .desc
        color: #4d4d4d
      .icons
        margin: 4rem 0 3.25rem
        display: flex
        flex-wrap: wrap
        width: 257px
        justify-content: space-between
        &>div
          margin-bottom: .75rem
        img
          display: inherit
          margin: 0 auto
      .highlights
        color: #512da8
        font-size: 22px
        &+ul
          color: #4d4d4d
          margin-bottom: 2rem
          padding-left: 1.2rem
          list-style-type: disc
      .learnMore
        color: #000
        font-family: 'aileronbold'
        text-transform: uppercase
    &:nth-child(odd)
      .left
        flex: 9
        height: @height
        background: #f1f1f1
        .inner
          display: table
          height: 100%
          .textContent
            display: table-cell
            vertical-align: middle
            padding: 15% 20%
      .center
        position: absolute
        left: 60%
        top: 50%
        transform: translate(-50%, -50%)
      .right
        flex: 7
        display: flex
        height: @height
        background-image: linear-gradient(128deg, #B88EF1 0%, #AE87EE 16%, #9273E7 43%, #6553DA 78%, #463DD2 100%)
        .inner
          border-width: 0 0 @height 90px
          border-style: solid
          border-color: transparent transparent transparent #f1f1f1
    &:nth-child(even)
      .left
        flex: 7
        height: @height
        background-image: linear-gradient(128deg, #B88EF1 0%, #AE87EE 16%, #9273E7 43%, #6553DA 78%, #463DD2 100%)
        .inner
          border-width: 0 90px @height 0
          border-style: solid
          border-color: transparent #fff transparent transparent
      .center
        position: absolute
        left: 40%
        top: 50%
        transform: translate(-50%, -50%)
      .right
        flex: 9
        height: @height
        background: #fff
        .inner
          display: table
          height: 100%
          .textContent
            display: table-cell
            vertical-align: middle
            padding: 0 100px 0 200px
</style>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Multi Sensor (6-in-1)',
          subtitle: 'Six sensor in one',
          description: 'Multi Sensor 6-in-1 has six sensors built into a small unit. Motion, temperature, humidity, ambient light, UV light, and vibration. It can feedback data in real time to your Z-Wave hub. Sits nicely in the corner of any room.',
          icons: [
            'Motion',
            'Temperature',
            'Light',
            'Humidity',
            'Vibration',
            'UV'
          ],
          productHighlights: [
            'Anti-dismantle',
            'Tamper protection',
            'Long battery life - 2 years',
            'Easy installation',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Multi Sensor (6-in-1)',
          subtitle: 'Six sensor in one',
          description: 'Motion Sensor is three sensors in one: motion, temperature and ambient light. It can report the monitored data to in real time. It also has anti-dismantle protection with a built-in vibration sensor.',
          icons: [
            'Motion',
            'Temperature',
            'Light'
          ],
          productHighlights: [
            'Anti-dismantle',
            'Tamper protection',
            'Long battery life - 2 years',
            'Easy installation',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Multi Sensor (6-in-1)',
          subtitle: 'Six sensor in one',
          description: 'Multi Sensor 6-in-1 has six sensors built into a small unit. Motion, temperature, humidity, ambient light, UV light, and vibration. It can feedback data in real time to your Z-Wave hub. Sits nicely in the corner of any room.',
          icons: [],
          productHighlights: [
            'Anti-dismantle',
            'Tamper protection',
            'Long battery life - 2 years',
            'Easy installation',
            'Secure communication - AES 128'
          ],
          learnMore: '//1688.com'
        },
        {
          title: 'Recessor',
          subtitle: 'Elegantly hide MultiSensor on any surface',
          description: 'Multi Sensor Recessor is used in conjuction with the Multi Sensor 6-in-1/ 3-in-1 as a mounting accessory. Secure your Multi Sensor to a ceiling or flat wall.',
          icons: [],
          productHighlights: [
            '1.2cm protrusion',
            'Easily installed and removed',
            'Ceiling and Wall',
            '30º adjustable angle'
          ],
          learnMore: '//1688.com'
        }
      ]
    }
  }
}
</script>
