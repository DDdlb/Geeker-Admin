<template>
    <div class="layout-container">
        <div class="layout-aside"></div>
        <div class="layout-right">
            <div class="layout-header">
                <Header></Header>
            </div>
            <div class="layout-tabs"></div>
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <div class="layout-footer">
                <p>2022 &copy; Geeker Admin by DLB</p>
            </div>
        </div>
    </div>
</template>

<script setup name="Layout">
import Header from './header/index.vue';

</script>

<style lang="scss">
.layout-container{
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #dddee0;

    .layout-aside{
        width: 100px;
        background-color: #191a20;
    }

    .layout-right{
        width: 100%;

        .layout-header{
            height: 55px;
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #e8e8e8;
        }
        .layout-tabs{
            height: 40px;
            width: 100%;
            background-color: #fff;
        }

        .layout-main{
            width: calc(100% - 20px);
            height: calc(100vh - 55px - 40px - 20px - 25px);
            margin: 10px;
            background-color: #fff;
        }

        .layout-footer{
            height: 25px;
            width: 100%;
            background-color: #fff;
            text-align: center;
            color: rgb(126, 126, 126);
            margin: 0px;
            font-size: smaller;

            p{
                height: 25px;
                line-height: 25px;
            }
        }
    }

}
</style>