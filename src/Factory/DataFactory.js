const createDataFactory = () => {
	const loadData = () => {
		throw new Error('Abstract method not implemented');
	}

	const saveData = (data) => {
		throw new Error('Abstract method not implemented');
	}

	return {
		loadData,
		saveData
	};
};

export default createDataFactory;
