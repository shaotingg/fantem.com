<template>
  <section class="is-oomi" id="section-oomi">
    <div class="columns">
      <div class="column">
        <div class="oomi-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="165.792" height="55.173" viewBox="0 0 165.792 55.173"><g fill="#EF7622"><path d="M160.294.16h5.497v55.013h-5.497zM147.141.16h-5.501l-15.73 46.843-15.728-46.843h-5.603000000000001l-7.768 55.013h5.499l6.17-43.706 14.678 43.706h5.508l14.678-43.706 6.17 43.706h5.498l-7.767-55.013zM65.372.252c-6.992.751-13.06 4.086-17.426 8.922-5.697-6.365-14.265-9.998-23.407-9.014-15.087 1.619-26.001 15.163-24.379 30.247 1.62 15.088 15.163 26.001 30.251 24.379 6.988-.749 13.057-4.085 17.422-8.921 5.7 6.365 14.266 9.999 23.41 9.017 15.084-1.621 25.999-15.165 24.378-30.251-1.622-15.085-15.165-26-30.249-24.379zm5.31 49.433c-8.364.9-16.163-2.986-20.655-9.447-1.325-1.903-2.356-4.031-3.038-6.325-.265-.89-.481-1.803-.635-2.739-.065-.407-.122-.814-.168-1.229-.213-2.006-.148-3.978.154-5.882-.487-4.105-2.441-7.715-3.065-7.809-1.768 3.9-2.649 8.255-2.401 12.788.026.487.065.974.117 1.46.376 3.498 1.397 6.764 2.925 9.709.233.448.506.869.762 1.301-3.571 4.38-8.775 7.43-14.826 8.081-12.195 1.308-23.186-7.549-24.497-19.743-1.312-12.199 7.545-23.184 19.743-24.495 8.363-.9 16.159 2.984 20.657 9.447 1.321 1.903 2.354 4.03 3.034 6.323.289.961.513 1.947.668 2.962.052.335.098.67.135 1.009.209 1.953.155 3.876-.128 5.734.461 4.137 2.143 7.6 3.019 8.007 1.831-4.017 2.712-8.52 2.395-13.205-.024-.363-.05-.729-.089-1.096-.377-3.495-1.397-6.762-2.927-9.705-.232-.449-.506-.869-.761-1.302 3.573-4.381 8.777-7.433 14.827-8.082 12.196-1.31 23.184 7.546 24.496 19.743 1.312 12.195-7.544 23.186-19.742 24.495z"/></g></svg>
        </div>
        <div class="item-img">
          <img :src="require('@/assets/images/smart-home-cube.png')">
        </div>
      </div>
      <div class="column">
        <div class="item-title has-text-centered">Simple. <span style="color:#fff">Smart.</span> Home.</div>
        <div class="item-img has-text-centered">
          <img :src="require('@/assets/images/smart-home-plug.png')">
        </div>
      </div>
      <div class="column">
        <div class="item-title">Visit us</div>
        <div class="item-link">
          <a href="//oomi.com" target="_blank">Oomi.com</a>
        </div>
        <div class="item-link">
          <a href="//fantem.cn" target="_blank">Fantem.cn</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
.is-oomi
  >.columns
    >.column
      &:nth-child(1)
        display: flex
        flex-direction: column
        justify-content: space-around
        align-content: flex-end
        padding-right: 27px
        text-align: right
        background-image: linear-gradient(#fff, #c7c9c8)
        .oomi-logo
          margin-top: 30px
          padding-right: 53px
          @media (max-width: 768px)
            margin-top: 0
            padding-right: 0
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
          color: #000
          font-size: 47px
          margin-top: 30px
          text-transform: uppercase
          font-family: 'aileronlight'
          @media (max-width: 768px)
            font-size: @font-size*.75
      &:nth-child(3)
        display: flex
        flex-direction: column
        justify-content: flex-end
        align-content: flex-end
        padding: 0 0 40px 30px
        background-size: 620px 720px
        background-position: -310px 360px
        background-image: radial-gradient(#545861, #1d1e22)
        @media (max-width: 768px)
          padding: 30px 0
        .item-title
          width: 224px
          color: #fff
          font-size: 23px
          text-align: center
          margin-bottom: 30px
          @media (max-width: 768px)
            width: 100%
        .item-link
          &+.item-link
            margin-top: 30px
          @media (max-width: 768px)
            text-align: center
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