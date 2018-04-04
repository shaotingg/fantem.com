<template>
  <div class="wrapper">
    <page-header :theme="'Negative'"></page-header>
    <page-main></page-main>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '~/components/Header.vue'
import PageMain from '~/components/Main.vue'
import PageFooter from '~/components/Footer.vue'

export default {
  components: {
    PageHeader,
    PageMain,
    PageFooter
  }
}
</script>
