<template>
  <div class="about" @click="handler">
    <h1>This is an about page</h1>
    {{a}}
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    a: {
      default: ''
    }
  },
  methods: {
    handler() {
      this.$emit('click')
    }
  }
}
</script>
