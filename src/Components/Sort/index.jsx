import React, { useContext } from 'react';
import { SearchFilterSortContext } from 'context';
import styles from './styles.module.css';

function Sort(props) {
	const [config, setConfig] = useContext(SearchFilterSortContext);
	const setSortCriteria = criteria => {
		const { isFromPopUp } = props;
		if (isFromPopUp) {
			props.onClick();
		}

		setConfig({ ...config, sortKey: criteria });
	};
	return (
		<div className={styles.sort}>
			<label>Sort By</label>
			<button
				className={
					config.sortKey === 'HIGH_LOW' ? styles.selected : styles.sortButton
				}
				onClick={() => setSortCriteria('HIGH_LOW')}
			>
				Price -- High Low
			</button>
			<button
				className={
					config.sortKey === 'LOW_HIGH' ? styles.selected : styles.sortButton
				}
				onClick={() => setSortCriteria('LOW_HIGH')}
			>
				Price -- Low High
			</button>
			<button
				className={
					config.sortKey === 'DISCOUNT' ? styles.selected : styles.sortButton
				}
				onClick={() => setSortCriteria('DISCOUNT')}
			>
				Discount
			</button>
		</div>
	);
}
export default Sort;
