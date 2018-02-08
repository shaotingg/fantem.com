<template>
  <section class="is-fantem" id="section-fantem">
    <div class="columns">
      <div class="column is-half">
        <div class="item-img"></div>
      </div>
      <div class="column is-half">
        <div class="item-title">
          <p class="item-head">Fantem<br/><strong>Manufacturing</strong></p>
          <p class="item-desc">
            Tell us what you want <br/>
            and our team of experts <br/>
            will make it for you.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
$purple = #512DA8
.is-fantem
  >.columns
    flex-direction: row-reverse
    >.column
      &:nth-child(1)
        padding: 0
        .item-img
          height: 360px
          line-height: 0
          background-repeat: no-repeat
          background-position: center
          background-image: url('../assets/images/OEM-web.jpg')
          background-image: image-set(url('../assets/images/OEM-web.jpg') 1x,url('../assets/images/OEM-mobile.jpg') 2x)
      &:nth-child(2)
        display: flex
        flex-direction: column
        justify-content: space-around
        text-align: right
        @media (max-width: 768px)
          text-align: center
        .item-title
          margin-right: 146px
          @media (max-width: 768px)
            margin-right: 0
          .item-head
            color: $purple
            font-size: 23px
            margin-bottom: 30px
            strong
              color: $purple
              font-size: 38.5px
              line-height: 0
              text-transform: uppercase
              font-family: 'aileronbold'
          .item-desc
              color: #4d4d4d
              font-size: 20px
              line-height: 24px
              text-shadow: 0px 0px
              font-family: 'aileronlight'
</style>