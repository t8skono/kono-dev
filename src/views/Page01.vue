<script setup lang="ts">
import { Starport } from "vue-starport";
import IconUrl from "@/assets/images/color_palette.svg?component";
</script>

<template>
  <div class="img">
    <Starport port="my-id">
      <IconUrl />
    </Starport>
  </div>
</template>

<style lang="scss" scoped>
.img {
  width: 50%;
  height: 50%;
}
[data-starport-craft] {
  width: 100%;
  height: 100%;
}
// [data-starport-proxy]:not([data-starport-landed]) {

// }
</style>
