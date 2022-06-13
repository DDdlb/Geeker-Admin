<template>
    <div class="header-container">
        <div class="left">
            <el-icon size="28px"><Fold /></el-icon>
            <p>首页</p>
            <BreadCrumb />
        </div>
        <div class="right">
            Geeker
        </div>
    </div>
</template>

<script setup name="Header">
import BreadCrumb from './components/BreadCrumb.vue';

</script>

<style lang="scss">
.header-container{
    display: flex;
    justify-content: space-between;
    font-size: 100%;
    /* line-height: 28px;
    height: 28px; */
    height: 55px;
    .left{
        display: flex;
        justify-content: start;
        height: 28px;
        margin-top: 13.5px;
    }
}

</style>