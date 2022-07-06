<template>
    <template v-for="subItem in menuList" :key="subItem.id">
        <el-sub-menu v-if="subItem.children" :index="subItem.path">
            <template>
                <el-icon>
                    <component :is="subItem.icon"></component>
                </el-icon>
                <span>{{ subItem.title }}</span>
            </template>
        </el-sub-menu>

        <el-menu-item v-else :index="subItem.path">
            <el-icon>
                <component :is="subItem.icon"></component>
            </el-icon>
        </el-menu-item>
    </template>
</template>

<script setup name="SubItem">
// console.log(menuList);
const props = defineProps({
    menuList: Array
})
// console.log("submenu",props.menuList);
</script>