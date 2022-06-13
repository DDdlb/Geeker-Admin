<template>
    <div>
        <el-breadcrumb :separator-icon="ArrowRight">

        </el-breadcrumb>
    </div>
</template>

<script setup name="BreadCrumb">
import { ArrowRight } from '@element-plus/icons-vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

console.log(route);

// const matched = computed()
</script>