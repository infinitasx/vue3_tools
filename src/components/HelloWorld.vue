<template>
  <p></p>
  <p>{{ msg }}</p>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  setup(props, { attrs, slots, emit }) {
    console.log(props, attrs, slots, emit);
  },
};
</script>
