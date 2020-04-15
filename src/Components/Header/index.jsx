import React, { useState } from 'react';
import styles from './styles.module.css';
import Search from '../Search';
// import Cart from '../Cart';
import starSrc from '../../assets/images/starr.png';
import cartIcon from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';
import { CartContext } from 'context';
import { useContext } from 'react';

function Header(props) {
	const { itemList, displaySearch } = props;
	const [cartItems, setCartItems] = useContext(CartContext);

	const getCartItems = () => {
		let count = 0;
		cartItems.forEach(item => {
			count = count + item.qty;
		});
		return count;
	};
	return (
		<div className={styles.header}>
			<div className={styles.star}>
				<Link to="/">
					<img src={starSrc} style={{ height: 40, width: 40 }}></img>
				</Link>
			</div>
			{displaySearch ? <Search /> : ''}

			<div className={styles.cart}>
				<Link to="/cart">
					<img src={cartIcon} style={{ height: 50, width: 50 }} />
					{cartItems.length > 0 ? (
						<span className={styles.badge}>{getCartItems()}</span>
					) : (
						''
					)}
				</Link>
			</div>
		</div>
	);
}
export default Header;
