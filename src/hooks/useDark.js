import { computed, onBeforeMount } from "vue";
import { useGlobalStore } from "../store";

/**
 * @description 切换暗黑模式
 * */
export const useDark = () => {
	const globalStore = useGlobalStore();
	const themeConfig = computed(() => globalStore.themeConfig);

	const switchTheme = () => {
		const body = document.documentElement;
		if (themeConfig.value.isDark) body.setAttribute("class", "dark");
		else body.setAttribute("class", "");
	};

	onBeforeMount(() => {
		switchTheme();
	});

	return {
		switchTheme
	};
};
