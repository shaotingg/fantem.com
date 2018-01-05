<template>
    <section class="hero is-bold is-header is-large">
        <div class="hero-body has-text-centered">
            <div class="container">
                <h1 class="title is-3 has-text-weight-light">
                    The best companies are employee-centric
                </h1>
                <h2 class="title is-5 has-text-weight-light is-light" style="margin-bottom:2em">
                    We help improve your coworkers' experience
                </h2>
                <form action="https://formsubmit.io/send/4be8a03e-7fbb-4f21-9e65-f815b91b8524" class="getMail has-shadow" method="POST" data-v-501ce8f0="" data-v-4e1d24b9=""><div class="field has-addons" data-v-501ce8f0=""><p class="control" data-v-501ce8f0=""><input data-v-501ce8f0="" type="email" class="input" name="email" placeholder="Enter your e-mail" required=""></p><p class="control" data-v-501ce8f0=""><input data-v-501ce8f0="" type="hidden" name="_redirect" id="name" value="https://www.jubiwee.com/en#thanks"><input data-v-501ce8f0="" type="submit" class="button is-primary" value="Start now"></p></div></form>
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
            <p class="clients-details">More than 10 000 employees use Jubiwee every week</p>
        </section>
    </section>
</template>

<style lang="stylus">
    .hero.is-header
        background: linear-gradient(90deg,#8e54e9,#4776e6)
        position: relative
        h1.title.is-3
            margin-bottom: .3em
        .title
            color: #fff
            &.is-light
                color: #d3d3d3
    .getMail
        display: inline-block
    .has-shadow
        border-bottom: 1px solid rgba(0,0,0,.2)
        box-shadow: 0 1px 5px rgba(0,0,0,.1)
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

