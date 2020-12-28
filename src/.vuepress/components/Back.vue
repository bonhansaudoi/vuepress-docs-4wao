<template>
  <span class="back">
      <button @click="back">Back</button>
   </span>
</template>

<script>
export default {
   methods: {
      back () {
        this.$router.go(-1);
      },
   }
}
</script>

<style lang="stylus">
.back 
   background green
   color white
</style>