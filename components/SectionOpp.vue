<template>
  <section class="is-opp" id="section-opp">
    <div class="columns">
      <div class="column is-half">
        <div class="item-img has-text-right">
          <img :src="require('@/assets/images/Distributor-web.png')">
        </div>
      </div>
      <div class="column is-half">
        <div class="item-title">
          <p class="item-head">Become an Oomi <br/><strong>Distributor</strong></p>
          <p class="item-desc">
            Global opportunities for you.<br/>
            Register in your language.
          </p>
        </div>
        <div class="columns is-multiline">
          <div class="column item-link">
            <a href="//stage-partner.oomi.com" target="_blank">English</a>
          </div>
          <div class="column item-link">
            <a href="//stage-partner.oomi.com" target="_blank">中文</a>
          </div>
          <div class="column item-link">
            <a href="//stage-partner.oomi.com" target="_blank">Português</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
$primary = #3f444a
.is-opp
  background: #ecf4f9
  @media (max-width: 768px)
    padding: 40px 0
  >.columns
    >.column
      &:nth-child(2)
        display: flex
        flex-direction: column
        justify-content: space-around
        .item-title
          .item-head
            color: $primary
            font-size: 23px
            strong
              color: $primary
              font-size: 38.5px
              line-height: 0
              font-weight: normal
              text-transform: uppercase
              font-family: 'aileronlight'
          .item-desc
              color: #4d4d4d
              font-size: 20px
              line-height: 24px
              margin-top: 20px
              text-shadow: 0px 0px
              font-family: 'aileronlight'
        .item-link
          @media (max-width: 768px)
            text-align: left
          a
            display: inline-block
            color: #000
            width: 224px
            height: 44px
            background: none
            text-align: center
            font: 15px/44px 'aileronbold'
            border: 1px solid $primary
            transition: all .3s
            &:hover
              color: #fff
              border: 1px solid #f26f21
              background: #f26f21
              transition: all .3s
    @media (max-width: 768px)
      position: relative
      >.column
        &:nth-child(1)
          position: absolute
          top: 50%
          right: 50%
          margin-left: -50%
          transform: translateY(-50%)
        &:nth-child(2)
          margin-left: 45%
          .item-title
            .item-head
              font-size: 18px
              strong
                font-size: 24px
            .item-desc
              font-size: 14px
          .item-link a
            width: 75%
            height: 30px
            font: 12px\/@height 'aileronbold'
</style>