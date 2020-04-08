import React, { useState, useContext } from 'react';
import styles from './styles.module.css';
import Header from '../Header';
import ShoppingList from '../ShoppingList';
import Filter from '../Filter';
import { ItemDataContext, SearchFilterSortContext } from 'context';
import Sort from 'Components/Sort';
import sortICon from 'assets/images/Sorticon.png';
import Popup from 'reactjs-popup';
import Content from 'Components/ShoppingList/content.js';
import { useEffect } from 'react';
import data from 'data';

function Home() {
	const [items, setItems] = useContext(ItemDataContext);
	const [width, setWidth] = useState(window.screen.width);
	const sortOnBasis = criteria => {
		let newShopList = [];
		if (criteria === 'HighLow') {
			newShopList = items.sort((a, b) => b.price - a.price);
		} else if (criteria === 'LowHigh') {
			newShopList = items.sort((a, b) => a.price - b.price);
		} else {
			newShopList = items.sort((a, b) => b.discount - a.discount);
		}
	};
	const reportWindowSize = e => {
		setWidth(window.screen.width);
	};
	window.addEventListener('resize', reportWindowSize);
	useEffect(() => {
		//	const { setItems } = items;
		setItems(data);
	}, []);
	return (
		<React.Fragment>
			<Header displaySearch={true} />

			{width > 600 ? (
				<div className={styles.section}>
					<Filter />
					<div className={styles.wrapper}>
						<Sort />
						<ShoppingList items={items} />
					</div>
				</div>
			) : (
				<div className={styles.mobSection}>
					<div className={styles.mobFilterSortWrapper}>
						<Popup
							modal
							trigger={
								<div className={styles.sortButton}>
									<img src={sortICon} style={{ height: 20, width: 20 }}></img>
									<span className={styles.filterSortFont}>Sort</span>
								</div>
							}
						>
							{close => <Content close={close} filter={false} />}
						</Popup>
						<Popup
							modal
							trigger={
								<div className={styles.filterButton}>
									<img src={sortICon} style={{ height: 20, width: 20 }}></img>
									<span className={styles.filterSortFont}>Filter</span>
								</div>
							}
						>
							{close => <Content close={close} filter={true} />}
						</Popup>
					</div>

					<ShoppingList items={items} />
				</div>
			)}
		</React.Fragment>
	);
}
export default Home;
