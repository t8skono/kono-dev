<script setup lang="ts">
    import { Starport } from 'vue-starport'
    import IconUrl from '../assets/images/color_palette.svg?component'
</script>

<template>
    <div class="img">
        <Starport port="my-id">
            <IconUrl :prop="value"/>
        </Starport>
    </div>
</template>

<style lang="scss" scoped>
.img {
            position: relative;
            top: 0;
            left: 0;
            width: 50%;
            height: 50%;
}
       [data-starport-craft] {
            // background: #0805;
            //  position: relative;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        // [data-starport-proxy]:not([data-starport-landed]) {
        //     // background: #8005;
        //     position: relative;
        //     top: 0;
        //     left: 0;
        //     width: 50%;
        //     height: 50%;
        // }
</style>