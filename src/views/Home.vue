<script setup lang="ts">
import { useRouter } from 'vue-router'
import IconUrl from '../assets/images/color_palette.svg?component'

const router = useRouter()
const clickButton = () => {
  router.push("/page01");
}
</script>

<template>
    <p @click="clickButton">Page1へ遷移</p>
<div class="img">
    <Starport port="my-id">
        <IconUrl :prop="value"/>
    </Starport>
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
</div>
</template>

<style lang="scss" scoped>
    .img {
                  position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;


        svg {
            // transition: transform 5s;
            // position: absolute;
        }
    }

    //    [data-starport-craft] {
    //         // background: #0805;
    //         //  position: relative;
    //         top: 0;
    //         left: 0;
    //         width: 100%;
    //         height: 100%;
    //     }
    //     [data-starport-proxy]:not([data-starport-landed]) {
    //         // background: #8005;
    //         // position: relative;
    //         top: 0;
    //         left: 0;
    //         width: 50%;
    //         height: 50%;
    //     }
</style>