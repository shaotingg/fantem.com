<template>
  <div class="container is-fullhd">
    <page-header></page-header>
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
