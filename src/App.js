import React, { useState, useEffect } from 'react';
import './App.css';
import AppRoutes from 'routes';
import { ItemDataContext, SearchFilterSortContext, CartContext } from 'context';

import data from './data/index.js';
function App() {
	const [items, setItems] = useState([]);
	const [operations, setOperation] = useState({
		sortKey: '',
		filterKey: {
			min: 100,
			max: 100000
		},
		searchStr: ''
	});
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		setItems(data);
		/* API not working issue hence commenting this code */
		// fetch('https://api.myjson.com/bins/qzuzi')
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		setItems(res);
		// 	})
		// 	.catch(() => {
		// 		setItems(data);
		// 	});
	}, []);

	return (
		<ItemDataContext.Provider value={[items, setItems]}>
			<SearchFilterSortContext.Provider value={[operations, setOperation]}>
				<CartContext.Provider value={[cartItems, setCartItems]}>
					<AppRoutes />
				</CartContext.Provider>
			</SearchFilterSortContext.Provider>
		</ItemDataContext.Provider>
	);
}

export default App;
