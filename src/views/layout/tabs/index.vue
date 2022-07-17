<template>
    <el-tabs v-model="tabStore.tabsMenuValue" @tab-click="tabClick" @tab-remove="removeTab">
        <el-tab-pane
            v-for="item in tabStore.tabsMenuList"
            :key="item.path"
            :name="item.path"
            :closable="item.close"
        >
            <template #label>
                <el-icon>
                    <component :is="item.icon"></component>
                </el-icon>
                {{item.title}}
            </template>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup name="Tabs">
import { useTabStore } from '../../../store/modules/useTabStore';
import { useRoute, useRouter } from "vue-router";

const tabStore = useTabStore();

const route = useRoute();
const router = useRouter();

const tabClick = (tabItem)=>{
    let path = tabItem.props.name
    router.push(path)
}

const removeTab = (tabName)=>{
    console.log(tabName);
}

</script>