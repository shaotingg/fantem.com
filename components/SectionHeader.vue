<template>
    <section class="hero is-bold is-header is-large">
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title">
                    FANTEM
                </h1>
                <img class="products" src="@/assets/images/fantem-products.png" alt="fantem products">
                <h2 class="subtitle">
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
            padding: 12% 0 0
        h1.title
            color: #fff
            font-size: 125px
            text-indent: 70px
            letter-spacing: 70px
            font-family: 'aileronbold'
            @media (max-width: 1215px)
                font-size: (@font-size)*.7
                text-indent: (@text-indent)*.7
                letter-spacing: (@letter-spacing)*.7
            @media (max-width: 991px)
                font-size: (@font-size)*.6
                text-indent: (@text-indent)*.6
                letter-spacing: (@letter-spacing)*.6
            @media (max-width: 640px)
                font-size: (@font-size)*.3
                text-indent: (@text-indent)*.3
                letter-spacing: (@letter-spacing)*.3
        .products
            padding-right: 90px
        h2.subtitle
            color: #fff
            opacity: .5
            font-size: 52px
            margin-top: -60px
            margin-bottom: 60px
            @media (max-width: 1215px)
                font-size: (@font-size)*.7
                margin-top: 0
                margin-bottom: (@margin-bottom)*.7
            @media (max-width: 991px)
                font-size: (@font-size)*.6
                margin-top: 0
                margin-bottom: (@margin-bottom)*.6
            @media (max-width: 640px)
                font-size: (@font-size)*.3
                margin-top: 0
                margin-bottom: (@margin-bottom)*.3
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