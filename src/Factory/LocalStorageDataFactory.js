import createDataFactory from "./DataFactory";

const createLocalStorageDataFactory = () => {
	const { loadData, saveData } = createDataFactory();

	const load = () => {
		const data = localStorage.getItem('salesData');
		return data ? JSON.parse(data) : [];
	}

	const save = (data) => {
		localStorage.setItem('salesData', JSON.stringify(data));
	}

	const exportToJSON = (filteredData) => {
		const data = filteredData.map(sale => ({
			...sale,
			amount: sale.amount,
		}));
		const fileName = 'sales_report.json'
		const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
		const link = document.createElement('a');
		link.href = window.URL.createObjectURL(blob);
		link.download = fileName;
		link.click();
	};

	return {
		loadData: load,
		saveData: save,
		exportToJSON,
	};
}; 

export default createLocalStorageDataFactory;