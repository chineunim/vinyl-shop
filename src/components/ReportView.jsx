import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { Observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { reportViewModel } from "./ReportViewModel";
import createLocalStorageDataFactory from "../Factory/LocalStorageDataFactory"
import { Wrapper, Header, Title, Input, Button, Filter, Vinyl, VinylList, Cover, Text, InputAmount,Album } from "./styled";


const ReportView = observer(() => {
  const { sales, loadSales, updateAmount } = reportViewModel;
  const dataFactory = createLocalStorageDataFactory();

  const [filteredSales, setFilteredSales] = useState(sales);
	const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadSales();
  }, [loadSales]);

  useEffect(() => {
    setFilteredSales(toJS(reportViewModel.sales));
  }, [reportViewModel.sales]);

	useEffect(() => {
    const fetchData = async () => {
      try {
        await loadSales();
        setLoading(false);
      } catch (error) {
        console.error("Error loading sales", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [loadSales]);


  const handleFilterChange = (event) => {
    const searchText = event.target.value.toLowerCase();
    const filtered = sales.filter(
      (sale) =>
        sale.artist.toLowerCase().includes(searchText) || sale.album.toLowerCase().includes(searchText)
    );
    setFilteredSales(filtered);
  };

	const handleUpdateAmount = (saleId, newAmount) => {
		reportViewModel.updateAmount(saleId, newAmount);
	};

	const handleExportToJSON = () => {
		dataFactory.exportToJSON(filteredSales);
	};

  return (
    <Wrapper>
      <Header>
        <Title>VINYL SHOP</Title>
        <Filter>
          <Input type="text" placeholder="Filter by product name" onChange={handleFilterChange} />
          <Button onClick={handleExportToJSON}>Export to JSON</Button>
        </Filter>
      </Header>
      <Observer>
        {() => (
          <VinylList>
            {filteredSales.map((sale) => (
              <Vinyl key={sale.id}>
                <Cover src={sale.cover} alt="" />
                <Album margin="10px" weight="500" isLongText={sale.album && sale.album.length > 20}>
                  {sale.album}
                </Album>
                <Text weight="500">{sale.artist}</Text>
                <InputAmount 
								type="number" 
								value={sale.amount} 
								onChange={(e) => handleUpdateAmount(sale.id, parseInt(e.target.value, 10))}
								onBlur={(e) => handleUpdateAmount(sale.id, parseInt(e.target.value, 10))}
								/>
              </Vinyl>
            ))}
          </VinylList>
        )}
      </Observer>
    </Wrapper>
  );
});

export default ReportView;

