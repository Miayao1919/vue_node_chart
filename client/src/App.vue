<template>
  <div ref="app" class="d-flex flex-column root h-100 w-100">
    <top-menu />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    TopMenu,
    Footer
  },
}
</script>

<style lang="scss">
$font: 'Avenir, Helvetica, Arial, sans-serif';

#app {
  font-family: $font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.main-container {
  flex: 1;
  min-height: 0;
}

.root {
  position: absolute;
}

.bg-analytics {
  background-color: #e3f2fd;
}
</style>
