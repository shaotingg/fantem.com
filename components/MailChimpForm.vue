<template>
  <form action="https://formsubmit.io/send/4be8a03e-7fbb-4f21-9e65-f815b91b8524" class="getMail" method="POST">
    <div class="field">
      <p class="control">
        <input type="email" class="input" name="email" placeholder="Enter email" required>
      </p>
      <p class="control">
        <input type="hidden" name="_redirect" id="name" value="//www.fantem.com/en#thanks">
        <input type="submit" class="button is-primary" value="Subscribe">
      </p>
    </div>
  </form>
</template>

<style lang="stylus">
$purple = #512DA8
.getMail
  display: block
  .control
    text-align: inherit
    input[type='email']
      width: 80%
      box-shadow: none
      border: none
      border-radius: 0
      padding: 0
      text-align: inherit
      background: transparent
      border-bottom: 1px solid $purple
    input[type='submit']
      width: 80%
      height: 45px
      color: #000
      font-weight: bold
      border-radius: 0
      transition: all .8s
      background: transparent
      border: 1px solid $purple
      &:hover
        color: #fff
        background: $purple
        transition: all .8s
    &+.control
      margin-top: 20px
</style>
