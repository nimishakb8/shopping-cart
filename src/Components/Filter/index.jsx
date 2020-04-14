import React, { useState, useContext, useEffect } from 'react';
import styles from './styles.module.css';
import { SearchFilterSortContext } from 'context';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

function Filter(props) {
	const [filterValue, setFilterValue] = useState(100);
	const [inputVal, setInputVal] = useState({
		min: 100,
		max: 10000
	});
	const [config, setConfig] = useContext(SearchFilterSortContext);
	const getValue = e => {
		console.log(e.target.value);
		setFilterValue(Number.parseInt(e.target.value));
	};
	const apply = () => {
		const { isFromPopUp } = props;

		setConfig({
			...config,
			filterKey: inputVal
		});
		if (isFromPopUp) {
			props.onClick();
		}
	};
	useEffect(() => {
		console.log(inputVal);
	}, [inputVal, setInputVal]);
	return (
		<div className={styles.filter}>
			<InputRange
				minValue={100}
				maxValue={10000}
				step={10}
				value={inputVal}
				onChange={value => setInputVal(value)}
			/>

			<button className={styles.apply} onClick={apply}>
				Apply
			</button>
		</div>
	);
}
export default Filter;

/* <input
type="range"
// id="filter"
name="filterrange"
min={'100'}
max={'10000'}
step={'100'}
onChange={getValue}
// style={{ margin: '.4rem' }}
/> */
