<script setup lang="ts">
import { useRouter } from "vue-router";
import ColorPalette from "@/assets/images/color_palette.svg?component";
import Header from "@/components/HeaderComponents.vue";

const router = useRouter();
const clickButton = (num: Number) => {
  if (num) {
    router.push("/page" + num);
  }
};
</script>

<template>
  <Header />
  <div class="main">
    <ul>
      <li class="list_contents" @click="clickButton(1)">
        <Starport class="starport" port="1">
          <ColorPalette />
        </Starport>
      </li>
      <li class="list_contents" @click="clickButton(2)">
        <Starport class="starport" port="2">
          <img src="@/assets/images/marbling_half.png" />
        </Starport>
      </li>
      <!-- <li class="list_contents" @click="clickButton(3)">
        <Starport class="starport" port="3">
          <img src="@/assets/images/marbling.png" />
        </Starport>
      </li> -->
    </ul>
  </div>
</template>
<style lang="scss" scoped>
.main {
  .list_contents {
    width: 100%;
    height: 100px;
    overflow: hidden;
    .starport {
      height: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
[data-starport-proxy]:not([data-starport-landed]) {
  transition-duration: 800ms;
}

.transition-all,
[transition-all=""] {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
</style>
