<template>
  <div id="app">
    <div class="vue-icon">
      <Triangle
        class="vue-icon__triangle"
        height="4.375rem"
        width="5rem"
        direction="down"
        color="#41b883"
      />
      <Triangle
        class="vue-icon__triangle"
        height="2.625rem"
        width="3rem"
        direction="down"
        color="#354951"
      />
      <Triangle
        class="vue-icon__triangle"
        height="0.875rem"
        width="1rem"
        direction="down"
        color="#ffffff"
      />
    </div>
  </div>
</template>

<script>
import Triangle from './components/Triangle.vue'

export default {
  name: 'app',
  components: {
    Triangle
  },
  data() {
    return {
      height: '1rem',
      width: '1rem',
      direction: 'up',
      color: 'black'
    };
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.vue-icon {
  display: flex;
  justify-content: center;
}

.vue-icon__triangle {
  position: absolute;
}
</style>
