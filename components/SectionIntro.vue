<template>
  <section class="is-intro">
    <div class="columns is-multiline is-centered">
      <div class="column is-7">
        <div class="columns company">
          <div class="column is-7 company-intro">
            <p class="title">fantem</p>
            <p class="detail">
              Fantem Technologies Ltd. was founded in 2011. This joint venture between Aeon Labs and Yitoa Intelligent Control Co., Ltd. combines the advanced technologies from an American Silicon Valley firm with the advantages of a Chinese public company. For over a decade we’ve specialized in the research and development, production and sales of smart home products for the global market.
            </p>
            <p class="detail">
              Now with over 100 patents and an annual output of more than one million smart home product sets, we are a versatile manufacturer in the smart home space. Our products carry UL, CE, FCC, ROHS and RCM certifications.
            </p>
          </div>
          <div class="column is-5 company-flag">
            <img :src="require('@/assets/images/flags.png')">
          </div>
        </div>
      </div>
      <div class="column is-1"></div>
      <div class="column is-4 subscribe">
        <img :src="require('@/assets/images/subscribe.png')">
        <div class="contents">
          <p class="title is-spaced">Stay in the know</p>
          <p class="subtitle">subscribe</p>
          <p class="description">Stay up-to-date and get important reminders on what's is store for Fantem.</p>
          <MailChimpForm></MailChimpForm>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="stylus">
$purple = #512DA8
.is-intro
  .column
    @media (max-width: 768px)
      padding: 0
  .company
    flex-direction: row-reverse
    &-flag
      display: flex
      align-items: flex-end
      @media (max-width: 1600px)
        align-items: center
      @media (max-width: 768px)
        width: 75%
        padding-left: 24px
    &-intro
      display: flex
      flex-direction: column
      justify-content: space-between
      padding: 56px 0 107px
      @media (max-width: 768px)
        padding: 56px 56px 0
    .title
      color: $purple
      font-size: 38.5px
      text-transform: uppercase
      font-family: 'aileronbold'
    .detail
      color: #4d4d4d
      font-size: 20px
      line-height: 27px
      &+.detail
        margin-top: 30px
  .subscribe
    position: relative
    img
      position: absolute
      left: 0
      top: 50%
      transform: translate(-50%,-50%)
      height: 80%
      @media (max-width: 1440px)
        height: 65%
      @media (max-width: 1220px)
        height: 40%
      @media (max-width: 960px)
        height: 30%
      @media (max-width: 768px)
        left: 100%
        height: 80%
        transform: translate(-100%,-50%)
    .contents
      display: flex
      flex-direction: column
      justify-content: center
      background: #f3f3f3
      height: 100%
      padding: 57px 14% 45px
      @media (max-width: 600px)
        text-align: right
        padding: 57px 35% 45px 0
      .title
        color: $purple
        font-size: 23px
        font-weight: normal
        margin-bottom: 0
      .subtitle
        color: $purple
        font-size: 38.5px
        text-transform: uppercase
        font-family: 'aileronbold'
      .description
        color: #4d4d4d
        font-size: 20px
        margin-bottom: 20%
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
  },
  data () {
    return {
    }
  }
}
</script>