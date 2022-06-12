<template>
	<el-switch
		v-model="themeConfig.isDark"
		@change="onAddDarkChange"
		inline-prompt
		active-color="#0a0a0a"
		inactive-color="#dcdfe6"
		:active-icon="Sunny"
		:inactive-icon="Moon"
	/>
</template>

<script setup name="switchDark">
import { computed } from "vue";
import { useGlobalStore } from "../../store";
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useDark } from "../../hooks/useDark";

const globalStore = useGlobalStore();

const { switchTheme } = useDark();

const themeConfig = computed(() => globalStore.themeConfig);

const onAddDarkChange = (value) => {
	globalStore.setThemeConfig({
		...themeConfig.value,
		isDark: value
	});
    // globalStore.setToken('aaa')
	switchTheme();
};
</script>
