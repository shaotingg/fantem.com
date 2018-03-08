<template>
  <div class="wrapper">
    <page-header :theme="'Negative'"></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import axios from 'axios'
import PageHeader from '~/components/Header.vue'
import PageMain from '~/components/Main.vue'
import PageFooter from '~/components/Footer.vue'

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  },
  mounted () {
    this.getCountryCode()
  },
  methods: {
    getCountryCode () {
      axios.get('//freegeoip.net/json/').then(function (response) {
        if (response.data.country_code === 'CN') {
          window.location.href = '//www.fantem.cn'
        }
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
