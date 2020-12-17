<template>
  <div id="nav"></div>
  <transition mode="in-out" name="mode-fade">
    <p v-if="show">demo</p>
    <p v-else>hide</p>
  </transition>

  <button @click="changeShow">显示demo</button>
</template>
<script>
import { ref } from '@vue/reactivity';
export default {
  setup() {
    let show = ref(true);
    let showA = ref('a');
    function changeShow() {
      show.value = !show.value;
      console.log(show.value);
    }
    return {
      show,
      changeShow,
      showA,
    };
  },
  components: {},
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.mode-fade-enter-active,
.mode-fade-leave-active {
  transition: opacity 0.5s ease;
}

.mode-fade-enter-from,
.mode-fade-leave-to {
  opacity: 0;
}
</style>
