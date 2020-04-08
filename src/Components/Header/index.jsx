import React from 'react';
import styles from './styles.module.css';
import Search from '../Search';
// import Cart from '../Cart';
import starSrc from '../../assets/images/starr.png';
import cartIcon from '../../assets/images/cart.png';
import { Link } from 'react-router-dom';

function Header(props) {
	const { itemList, displaySearch } = props;
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
				</Link>
			</div>
		</div>
	);
}
export default Header;
