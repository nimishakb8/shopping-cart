import React, { useState, useContext } from 'react';
import styles from './styles.module.css';
import { SearchFilterSortContext } from 'context';

function Filter() {
	const [filterValue, setFilterValue] = useState(100);
	const [config, setConfig] = useContext(SearchFilterSortContext);
	const getValue = e => {
		console.log(e.target.value);
		setFilterValue(Number.parseInt(e.target.value));
	};
	const apply = () => {
		setConfig({
			...config,
			filterKey: { min: 100, max: filterValue }
		});
	};
	return (
		<div className={styles.filter}>
			<div className={styles.rangevalue}>
				<span className={styles.rangefirstvalue}> 100</span>
				<span> 10000</span>
			</div>
			<>
				<input
					type="range"
					// id="filter"
					name="filterrange"
					min={'100'}
					max={'10000'}
					step={'100'}
					onChange={getValue}
					// style={{ margin: '.4rem' }}
				/>
			</>

			<p>Range : Rs.100 to {`Rs ${filterValue}`}</p>

			<button className={styles.apply} onClick={apply}>
				Apply
			</button>
		</div>
	);
}
export default Filter;
