<template>
    <div class="layout-container">
        <div class="layout-aside"></div>
        <div class="layout-right">
            <div class="layout-header">
            </div>
            <div class="layout-tabs"></div>
            <div class="layout-main">
                <router-view></router-view>
            </div>
            <div class="layout-footer">

            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
.layout-container{
    width: 100%;
    height: 100vh;
    display: flex;

    .layout-aside{
        width: 100px;
        background-color: #191a20;
    }

}
</style>