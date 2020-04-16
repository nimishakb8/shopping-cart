import React from 'react';
import Sort from '../Sort';
import styles from './styles.module.css';
import { SearchFilterSortContext, CartContext } from 'context';
import Popup from 'reactjs-popup';
import Content from './content.js';
import carSrc from '../../assets/images/Car.jpg';

class ShoppingCart extends React.Component {
	state = {
		shoppingList: [],
	};

	showItemAdded(id) {
		var x = document.getElementById(id);
		x.className = styles.showItemAdded.show;
		setTimeout(function () {
			x.className = styles.showItemAdded;
		}, 1000);
	}

	setCart(item, cartVal) {
		const [cartItems, setCartItems] = cartVal;
		let flag = false;
		cartItems.forEach((x) => {
			if (x.id === item.id) {
				x.qty ? (x.qty = x.qty + 1) : (x.qty = 1);
				flag = true;
			}
		});
		if (!flag) {
			item.qty = 1;
			setCartItems([...cartItems, item]);
		} else {
			setCartItems([...cartItems]);
		}
	}

	getListOfItems(config, cartVal) {
		const [cartItems, setCartItems] = cartVal;
		const { items } = this.props;

		if (items.length === 0) {
			return (
				<div className={styles.error}>
					<span className={styles.error}>Error in service</span>
				</div>
			);
		} else {
			let data = [];
			if (config.searchStr.trim().length > 0) {
				data = items.filter(
					(x) =>
						x.name.toLowerCase().search(config.searchStr.toLowerCase()) !== -1
				);
			} else {
				data = items;
			}

			data = data.sort((a, b) => {
				if (config.sortKey === 'DISCOUNT') {
					return b.discount - a.discount;
				} else if (config.sortKey === 'LOW_HIGH') {
					return a.price - b.price;
				} else if (config.sortKey === 'HIGH_LOW') {
					return b.price - a.price;
				}
			});

			data = data.filter(
				(item) =>
					item.price >= config.filterKey.min &&
					item.price <= config.filterKey.max
			);

			// const { shoppingList } = this.state;
			return data.map((item) => {
				return (
					<div className={styles.shopping}>
						<img src={carSrc} style={{ width: '100px', height: '120px' }} />
						<div className={styles.item}> {item.name}</div>

						<div className={styles.priceContainer}>
							<span className={styles.price}>{`Rs ${item.price}\u00A0 `}</span>
							<strike className={styles.actual}>{`Rs ${item.actual} `}</strike>
							<span
								className={styles.discount}
							>{`\u00A0${item.discount}% off`}</span>
						</div>
						<button
							onClick={(e) => {
								this.setCart(item, cartVal);
								this.showItemAdded(item.id);
							}}
							className={styles.addToCart}
						>
							Add to Cart
						</button>
						<div id={item.id} className={styles.showItemAdded}>
							Item Added To Cart!
						</div>
					</div>
				);
			});
		}
	}

	render() {
		return (
			<div className={styles.itemWrapper}>
				<CartContext.Consumer>
					{(cartVal) => (
						<SearchFilterSortContext.Consumer>
							{(config) => this.getListOfItems(config[0], cartVal)}
						</SearchFilterSortContext.Consumer>
					)}
				</CartContext.Consumer>
			</div>
		);
	}
}

//ShoppingCart.contextType = ItemDataContext;
// ShoppingCart.contextType = SearchFilterSortContext;
export default ShoppingCart;
