<template>
  <div class="wrapper">
    <page-header :theme="'Positive'"></page-header>
    <div class="header-bg"></div>
    <div class="tile is-parent">
      <article class="tile is-child">
        <div class="content">
          <p class="title">Fantem</p>
          <p class="subtitle">The Simple Smart Home</p>
          <div class="content">
            Fantem Technologies Ltd. was founded in 2011. This joint venture between Aeon Labs and Yitoa Intelligent Control Co., Ltd. combines the advanced technologies from an American Silicon Valley firm with the advantages of a Chinese public company. For over a decade we’ve specialized in the research and development, production and sales of smart home products for the global market.<br/>
            Now with over 100 patents and an annual output of more than one million smart home product sets, we are a versatile manufacturer in the smart home space. Our products carry UL, CE, FCC, ROHS and RCM certifications.
          </div>
        </div>
      </article>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<style lang="stylus">
.header-bg
  background: url('~/assets/images/about-bg.jpg') no-repeat center
  background-size: cover
  overflow: hidden
  min-height: 540px
</style>

<script>
import PageHeader from '~/components/Header.vue'
import PageFooter from '~/components/Footer.vue'

export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>
