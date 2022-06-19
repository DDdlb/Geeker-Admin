<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight" class="header-breadcrumb">
            <el-breadcrumb-item :to="{ path: '/home/index' }" key="/home">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="item in matched" :key="item.path" :to="{path: item.path}" >
                {{item.meta.title}}
            </el-breadcrumb-item>

        </el-breadcrumb>
    </div>
</template>

<script setup name="BreadCrumb">
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route);

const matched = computed(()=>route.matched.filter(item=>item.meta && item.meta.title && item.meta.title !== "首页"))
console.log(matched);
</script>

<style lang="scss">
.header-breadcrumb{
    height: 55px;

    span{
        line-height: 28px;
    }
}
</style>