<template>
    <section class="hero is-bold is-header is-large">
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title is-3 has-text-weight-light">
                    FANTEM
                </h1>
                <h2 class="title is-5 has-text-weight-light is-light" style="margin-bottom:2em">
                    Simple but Smart Products
                </h2>
                <mail-chimp-form :hasShadow="true"></mail-chimp-form>
                <p class="email-why">to try Jubiwee for free</p>
            </div>
        </div>
        <section class="clients">
            <div class="container">
                <div class="columns is-gapless">
                    <div class="column has-text-centered">
                        <img :src="require('@/assets/images/logo1.svg')" height="90px" alt="" class="logo">
                        <img :src="require('@/assets/images/logo3.svg')" height="90px" class="logo">
                        <img :src="require('@/assets/images/logo4.svg')" height="90px" class="logo">
                        <img :src="require('@/assets/images/logo2.svg')" height="90px" class="logo">
                        <img :src="require('@/assets/images/logo5.svg')" height="90px" class="logo">
                    </div>
                </div>
            </div>
            <p class="clients-details">More than 10 000 clients use Fantem every week</p>
        </section>
    </section>
</template>

<style lang="stylus">
    .hero.is-header
        background: linear-gradient(90deg,#8e54e9,#4776e6)
        position: relative
        .hero-body
            padding: 14rem 0 11rem
        h1.title.is-3
            margin-bottom: .3em
        .title
            color: #fff
            &.is-light
                color: #d3d3d3
    p.email-why
        margin-top: 7px
        font-size: .8em
        color: #fff
    .clients
        background: hsla(0,0%,100%,.1)
        padding: 10px 0
        text-align: center
        position: relative
        p.clients-details
            color: #fff
            position: absolute
            top: -30px
            margin: 0 auto
            left: 0
            right: 0
            font-size: .8rem
        img.logo
            margin-bottom: 0
            height: 90px
</style>

<script>
import MailChimpForm from '~/components/MailChimpForm.vue'

export default {
  components: {
    MailChimpForm
  }
}
</script>