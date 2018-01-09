<template>
  <main class="main">
    <section-header></section-header>
    <product></product>
  </main>
</template>

<script>
import SectionHeader from '~/components/SectionHeader.vue'
import Product from '~/components/Product.vue'

export default {
  components: {
    SectionHeader,
    Product
  }
}
</script>
