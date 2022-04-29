<template>
  <div>
    <input type='text' v-model='battletag' class='input-field' @input="$emit('update:modelValue', $event.target.value)"/>
    <q-btn @click='handleClick' class='submit-button q-ml-xl'>Get Your Stats</q-btn>
  </div>
</template>

<script>
  export default {
    methods: {
      handleClick() {
        console.log('emitting', this.battletag)
        this.$emit('updateInput', this.battletag)
      }
    }
  }
</script>

<style lang="scss" scoped>
.input-field {
  height: 40px;
}

.submit-button {
  background-color: white;
  color: black;
  height: 30px;
  border: 1px solid black;
}
</style>