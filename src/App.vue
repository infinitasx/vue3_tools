<template>
  <ul class="ui-repeart">
    <li class="repeart-item" v-for="(item, index) in lists" :key="index">{{ item.name }}</li>
  </ul>
  <img :src="img" />
</template>
<script>
import { ref } from '@vue/reactivity';
import { onBeforeMount } from 'vue';
import { getMock, postMock } from './api';
export default {
  setup() {
    let img = ref(null);
    let lists = ref([]);
    onBeforeMount(() => {
      getMock().then(res => {
        if (res.code === 200) {
          const { data } = res;
          lists.value = data;
        }
      });
      postMock().then(res => {
        if (res.code === 200) {
          const { image } = res.data;
          img.value = image;
        }
      });
    });
    return { img, lists };
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
li {
  list-style: none;
}
</style>
