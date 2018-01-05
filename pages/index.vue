<template>
  <div>
    <page-header></page-header>
    <section-header></section-header>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '~/components/Header.vue'
import SectionHeader from '~/components/SectionHeader.vue'
import PageFooter from '~/components/Footer.vue'

export default {
  components: {
    PageHeader,
    SectionHeader,
    PageFooter
  }
}
</script>
