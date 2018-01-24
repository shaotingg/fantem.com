<template>
  <footer class="footer">
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <ul>
            <li>Site map</li>
            <li><a href="/" class="nuxt-link-exact-active nuxt-link-active">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Legal</a></li>
          </ul>
        </div>
        <div class="column is-one-third">
          <ul>
            <li>Social networks </li>
            <li><a href="/" target="_blank">Twitter</a></li>
            <li><a href="/" target="_blank">Linkedin</a></li>
            <li><a href="/" target="_blank">Facebook</a></li>
          </ul>
        </div>
        <div class="column is-one-third">
          <ul>
            <li>Contact</li>
            <li>0755-26616688</li>
            <li><a href="mailto:support@fantem.com">support@fantem.com</a></li>
            <li>5th Floor, Yingtang Building South 5th rd, High Technology Park, Nanshan District</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container has-text-centered">
      <p>
        &copy; Copyright 2011-{{currentYear}} Fantem All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<style lang="stylus">
.footer
  .column
    ul
      line-height: 1.7
      li
        font-weight: 300
        &:first-child
          margin-bottom: 1rem
          font-weight: 600
        a
          color: #112843
          &:hover
            font-weight: bold
</style>

<script>
  export default {
    data () {
      return {
        currentYear: new Date().getFullYear()
      }
    }
  }
</script>
