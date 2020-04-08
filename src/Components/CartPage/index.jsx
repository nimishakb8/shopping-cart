import React, { useContext, useState } from 'react';
import { CartContext } from 'context';
import carSrc from '../../assets/images/Car.jpg';
import Header from '../Header';

import styles from './styles.module.css';
import { findByLabelText } from '@testing-library/react';

function CartPage() {
	const [cartItems, setCartItems] = useContext(CartContext);

	const [qty, setQty] = useState(0);

	const modifyQty = (item, op) => {
		let newCartItems = cartItems.map(x => {
			if (x.id === item.id) {
				op === '+' ? (x.qty = x.qty + 1) : (x.qty = x.qty - 1);
			}
			return x;
		});
		setCartItems(newCartItems);
	};

	const getPriceDisplay = () => {
		let total = 0;
		cartItems.forEach(x => {
			total = total + x.price * x.qty;
		});
		return (
			<div className={styles.priceContainer}>
				<span className={styles.priceFont}>PRICE DETAILS</span>
				<span className={styles.priceFont}> Price (items): {total}</span>
				<span className={styles.priceFont}>Total : {`Rs ${total}`}</span>
			</div>
		);
	};
	const getItems = () => {
		return cartItems.map(x => {
			return (
				<div className={styles.item}>
					<img src={carSrc} style={{ height: 150, width: 150 }}></img>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							width: 200
						}}
					>
						<span style={{ margin: 5, fontSize: 20 }}>{x.name}</span>

						<div style={{ display: 'flex' }}>
							<span
								style={{ width: 40, margin: 5, fontSize: 15 }}
							>{`Rs${x.price}`}</span>
							<span
								style={{ margin: 5, fontSize: 15, color: 'green' }}
							>{`${x.discount}% off`}</span>
						</div>
					</div>
					<div className={styles.counter}>
						<button
							className={styles.counterButton}
							onClick={e => {
								modifyQty(x, '-');
							}}
							disabled={x.qty === 0}
						>
							-
						</button>
						<span>{x.qty}</span>
						<button
							className={styles.counterButton}
							onClick={e => {
								modifyQty(x, '+');
							}}
						>
							+
						</button>
					</div>
				</div>
			);
		});
	};
	return (
		<React.Fragment>
			<Header displaySearch={false} />
			<div className={styles.cart}>
				<div className={styles.itemList}>{getItems()}</div>
				<div className={styles.priceDisplay}>{getPriceDisplay()}</div>
			</div>
		</React.Fragment>
	);
}
export default CartPage;
