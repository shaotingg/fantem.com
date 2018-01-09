<template>
    <form action="https://formsubmit.io/send/4be8a03e-7fbb-4f21-9e65-f815b91b8524" class="getMail" :class="{'has-shadow': hasShadow}" method="POST">
        <div class="field has-addons">
            <p class="control">
                <input type="email" class="input" :class="{'is-small': isSmall}" name="email" placeholder="Enter your e-mail" required>
            </p>
            <p class="control">
                <input type="hidden" name="_redirect" id="name" value="//www.fantem.com/en#thanks">
                <input type="submit" class="button is-primary" :class="{'is-small': isSmall}" value="Start now">
            </p>
        </div>
    </form>
</template>

<style lang="stylus">
.getMail
    display: inline-block
.has-shadow
    border-bottom: 1px solid rgba(0,0,0,.2)
    box-shadow: 0 1px 5px rgba(0,0,0,.1)
</style>

<script>
  export default {
    props: {
      hasShadow: Boolean,
      isSmall: Boolean
    }
  }
</script>
