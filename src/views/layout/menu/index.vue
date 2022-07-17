<template>
    <div class="menu-title" :style="{width: menuStore.isCollapse?'50px':'200px'}">
        <img src="@/assets/logo.png" alt="" @click="jumpHome">
        <h1 v-show="!menuStore.isCollapse">Geeker Admin</h1>
    </div>
    <el-scrollbar>
        <el-menu
          background-color="#191a20"
          text-color="#bdbdc0"
          active-text-color="#fff"
          :unique-opened="true"
          :router="true"
          class="slide-menu"
        >
            <SubItem :menuList="menuList"></SubItem>
        </el-menu>
        
    </el-scrollbar>
    
</template>

<script setup name="menu">
import { ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
import { useRouter } from 'vue-router';
import { useGlobalStore } from '../../../store';
import { useMenuStore } from '../../../store/modules/usMenuStore';
import { getMenuList } from '../../../utils/api';
import SubItem from './SubItem.vue';
const router = useRouter()
const menuStore = useMenuStore()
const globalStore = useGlobalStore()
const menuList = ref([])

onMounted( async ()=>{
    console.log('mounted');
    const isAdmin = globalStore.userInfo.isAdmin
    const res = await getMenuList(isAdmin)
    console.log(res);
    menuList.value = res.data
})


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
.slide-menu{
    a{
        color: #bdbdc0;
        text-decoration: none;
    }
}
</style>