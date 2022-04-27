<script setup lang="ts">
import { Starport } from "vue-starport";
</script>

<template>
  <div class="img">
    <Starport port="3">
      <img src="@/assets/images/marbling.png" />
    </Starport>
  </div>
</template>

<style lang="scss" scoped>
// .img_contents {
//   width: 50%;
//   height: 50%;
// }
[data-starport-craft] {
  width: 100%;
  height: 100%;
}
// [data-starport-proxy]:not([data-starport-landed]) {

// }
</style>
