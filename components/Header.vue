<template>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-burger burger" data-target="navMenu" @click='isActive = !isActive'>
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        <div class="navbar-menu" id="navMenu" :class="{'is-active': isActive}">
          <div class="navbar-start">
            <a v-for="(menu, key) in menus" :key="key" class="navbar-item" :href="menu.link" v-text="menu.text"></a>
          </div>
        </div>
    </nav>
</template>

<script>
  export default {
    data () {
      return {
        isActive: false,
        menus: [
          {
            text: 'sales@fantem.com',
            link: 'mailto:sales@fantem.com'
          },
          {
            text: 'Catlog',
            link: ''
          }
        ]
      }
    }
  }
</script>
