<template>
  <div id="app">
    <cbl />
    <router-view />
  </div>
</template>

<script>
import cbl from './components/cbl'
export default {
  name: 'App',
  components:{
    cbl: cbl
  }
}
</script>
