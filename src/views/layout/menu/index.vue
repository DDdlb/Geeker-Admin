<template>
    <div class="menu-title" :style="{width: menuStore.isCollapse?'50px':'200px'}">
        <img src="@/assets/logo.png" alt="" @click="jumpHome">
        <h1 v-show="!menuStore.isCollapse">Geeker Admin</h1>
    </div>
</template>

<script setup name="menu">
import { useRouter } from 'vue-router';
import { useMenuStore } from '../../../store/modules/usMenuStore';
const router = useRouter()
const menuStore = useMenuStore()

const jumpHome = ()=>{
    router.push('/home/index')
}
</script>

<style lang="scss">
.menu-title{
    /* width: 200px; */
    display: flex;
    justify-content: center;
    margin-top: 10px;
    /* transition: all 0.3s ease; */

    img{
        width: 30px;
        margin-right: 10px;
        cursor: pointer;
    }

    h1{
        color: #fff;
        font-size: larger;
        font-weight: bolder;
        height: 30px;
        line-height: 30px;
    }
}
</style>