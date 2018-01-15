<template>
    <section class="hero is-bold is-header is-large">
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title is-3 has-text-weight-light">
                    FANTEM
                </h1>
                <img class="products" src="@/assets/images/fantem-products.png" alt="fantem products">
                <h2 class="subtitle is-5 has-text-weight-light is-light">
                    Simple but Smart Products
                </h2>
            </div>
        </div>
        <section class="clients">
            <div class="container">
                <div class="columns is-gapless">
                    <div class="column has-text-centered">
                        <img v-for="i in 13" :key="i.id" :src="require(`@/assets/images/cert${i}.svg`)" height="90px" class="logo">
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style lang="stylus">
    .hero.is-header
        background: url('../assets/images/background-purple.jpg') no-repeat
        background-size: cover
        position: relative
        .hero-body
            padding: 9rem 0 0
        h1.title
            color: #fff
            font-size: 125px
            letter-spacing: 70px
            font-family: 'aileronbold'
        .products
            padding-right: 170px
        h2.subtitle
            color: #fff
            opacity: .5
            font-size: 52px
            margin-top: -60px
            margin-bottom: 60px
    p.email-why
        margin-top: 7px
        font-size: .8em
        color: #fff
    .clients
        background: hsla(0,0%,100%,.1)
        padding: 10px 0
        text-align: center
        position: relative
        img.logo
            margin-bottom: 0
            height: 24px
            &+img.logo
                margin-left: 15px
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
  }
}
</script>