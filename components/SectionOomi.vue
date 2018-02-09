<template>
  <section class="is-oomi" id="section-oomi">
    <div class="columns">
      <div class="column">
        <div class="item-title">Simple.</div>
        <div class="item-img">
          <img :src="require('@/assets/images/smart-home-cube.png')">
        </div>
      </div>
      <div class="column">
        <div class="item-title has-text-centered">Smart.</div>
        <div class="item-img has-text-centered">
          <img :src="require('@/assets/images/smart-home-plug.png')">
        </div>
      </div>
      <div class="column">
        <div class="item-title has-text-centered">Home.</div>
        <div class="item-img has-text-centered">
          <img :src="require('@/assets/images/smart-home-dock.png')">
        </div>
      </div>
    </div>
    <div class="columns is-centered links">
        <div class="column item-link">
          <a href="//oomi.com" target="_blank">Oomi.com</a>
        </div>
        <div class="column item-link">
          <a href="//fantem.cn" target="_blank">Fantem.cn</a>
        </div>
    </div>
  </section>
</template>

<style lang="stylus">
.is-oomi
  >.columns:nth-child(1)
    >.column
      &:nth-child(1)
        display: flex
        flex-direction: column
        justify-content: space-around
        align-content: flex-end
        padding-right: 27px
        text-align: right
        background-image: linear-gradient(#fff, #c7c9c8)
        .item-title
          color: #000
          font-size: 47px
          text-align: right
          margin-top: 30px
          padding-right: 53px
          text-transform: uppercase
          font-family: 'aileronlight'
          @media (max-width: 768px)
            padding-right: 0
            text-align: center
        .item-img
          line-height: 0
        @media (max-width: 768px)
          padding-right: 0
          text-align: center
      &:nth-child(2)
        background: #F07024
        display: flex
        flex-direction: column
        justify-content: space-around
        .item-title
          color: #fff
          font-size: 47px
          margin-top: 30px
          text-transform: uppercase
          font-family: 'aileronlight'
      &:nth-child(3)
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-content: flex-end
        background: url('../assets/images/Dark-BG3.jpg') center no-repeat
        .item-title
          color: #fff
          font-size: 47px
          margin-top: 30px
          text-transform: uppercase
          font-family: 'aileronlight'
  .links
    margin-bottom: 0
    background:#000
    .item-link
      &:nth-child(1)
        text-align: right
      &:nth-child(2)
        text-align: left
      @media (max-width: 768px)
        text-align: center !important
      a
        display: inline-block
        color: #fff
        width: 224px
        height: 44px
        background: none
        text-align: center
        font: 15px/44px 'aileronbold'
        border: 1px solid #fff
        transition: all .3s
        &:hover
          color: #000
          background: #fff
          transition: all .3s
</style>