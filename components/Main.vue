<template>
  <main class="main">
    <section-header></section-header>
    <section-intro></section-intro>
    <section-learn></section-learn>
    <section-oomi></section-oomi>
    <section-opp></section-opp>
    <section-fantem></section-fantem>
    <section-products></section-products>
  </main>
</template>

<style lang="stylus">
section
  &.is-intro
  &.is-oomi
  &.is-opp
  &.is-fantem
    overflow: hidden
    @media (max-width: 768px)
      padding: 40px 0
</style>

<script>
import SectionHeader from '~/components/SectionHeader.vue'
import SectionIntro from '~/components/SectionIntro.vue'
import SectionLearn from '~/components/SectionLearn.vue'
import SectionOomi from '~/components/SectionOomi.vue'
import SectionOpp from '~/components/SectionOpp.vue'
import SectionFantem from '~/components/SectionFantem.vue'
import SectionProducts from '~/components/SectionProducts.vue'

export default {
  components: {
    SectionHeader,
    SectionIntro,
    SectionLearn,
    SectionOomi,
    SectionOpp,
    SectionFantem,
    SectionProducts
  }
}
</script>