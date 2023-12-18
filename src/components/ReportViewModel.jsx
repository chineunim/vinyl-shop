import { observable, when } from 'mobx';
import axios from 'axios';
import SaleModel from './SaleModel';
import ExceptionHandler from '../exceptionHandler.js';
import createLocalStorageDataFactory from '../Factory/LocalStorageDataFactory';

const dataFactory = createLocalStorageDataFactory();
const exceptionHandler = new ExceptionHandler();

function createReportViewModel() {
  const store = observable({
    sales: dataFactory.loadData(),

		async loadSales() {
			try {
        const response = await axios.get('http://localhost:3001/api/sales');
        const salesData = response.data;

        store.sales = salesData.map(sale => SaleModel(sale.id, sale.artist, sale.album, sale.cover, sale.amount));
        dataFactory.saveData(store.sales);
    } catch (error) {
				console.error("Error loading sales", error);
    }
		},

		updateAmount(saleId, newAmount) {
			const updatedSales = store.sales.map(sale => {
				if (sale.id === saleId) {
					return { ...sale, amount: newAmount };
				}
				return sale;
			});
		
			store.sales = updatedSales;
			dataFactory.saveData(store.sales);
		},
  });

	when(
		() => !localStorage.getItem('salesData'),
		() => {
			store.sales = [];
		}
	);

  return store;
}

export const reportViewModel = createReportViewModel();

