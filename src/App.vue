<template>
  <div id="app">
    <navigation class="potato-navigation" />
    <sidebar class="potato-sidebar" />
    <p-footer class="pototo-footer" />
    <router-view class="potato-editor" />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'
import PFooter from '@/components/Footer'

export default {
  name: 'PotatoApp',
  components: {
    Navigation,
    Sidebar,
    PFooter
  }
}
</script>

<style lang="scss">
html,
body {
  margin: 0;
  height: 100vh;
  width: 100vw;
}

#app {
  height: 100%;
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--blue-700);
  display: grid;
  grid-template-areas: 
    'nav      nav'
    'sidebar  editor' 
    'footer   footer' 
  ;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 50px 1fr 30px;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.potato-navigation {
  grid-area: nav;
}

.potato-sidebar {
  grid-area: sidebar;
}

.potato-editor {
  grid-area: editor;
}

.pototo-footer {
  grid-area: footer;
}
</style>
