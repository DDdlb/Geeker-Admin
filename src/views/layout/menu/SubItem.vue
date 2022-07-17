<template>
    <template v-for="subItem in menuList" :key="subItem.id">
        <el-sub-menu v-if="subItem.children" :index="subItem.path">
            <template #title>
                <el-icon>
                    <component :is="subItem.icon"></component>
                </el-icon>
                <span>{{ subItem.title }}</span>
            </template>
            <SubItem :menuList="subItem.children"></SubItem>
        </el-sub-menu>

        <el-menu-item v-else :index="subItem.path">
            <el-icon>
                <component :is="subItem.icon"></component>
            </el-icon>
            <template v-if="!subItem.isLink" #title>
                <span>{{ subItem.title }}</span>
            </template>
            <template v-else #title>
                <a :href="subItem.path">{{ subItem.title }}</a>
            </template>
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