// pinia持久化参数配置
const piniaPersistConfig = (key) => {
	const persist = {
		enabled: true,
		strategies: [
			{
				key,
				storage: localStorage
				// storage: sessionStorage
			}
		]
	};
	return persist;
};

export default piniaPersistConfig;
