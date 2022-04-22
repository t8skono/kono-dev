<script setup lang="ts">
import { useRouter } from "vue-router";
import IconUrl from "@/assets/images/color_palette.svg?component";

const router = useRouter();
const clickButton = () => {
  router.push("/page01");
};
</script>

<template>
  <p @click="clickButton">Page01へ遷移</p>
  <div class="img">
    <Starport port="my-id">
      <IconUrl />
    </Starport>
  </div>
</template>

<style lang="scss" scoped></style>
