import React, { useContext, useState } from 'react';
import { SearchFilterSortContext } from 'context';
import searchicon from '../../assets/images/searchicon.png';
import styles from './styles.module.css';

function Search(props) {
	const { search } = props;
	const [searchString, setSearchString] = useState('');
	const [config, setConfig] = useContext(SearchFilterSortContext);
	const searchStr = () => {
		setConfig({
			...config,
			searchStr: searchString
		});
	};
	return (
		<div className={styles.search}>
			<input
				onChange={e => {
					setSearchString(e.target.value);
				}}
				className={styles.input}
				placeholder="Search"
			/>
			<img
				className={styles.searchImage}
				src={searchicon}
				style={{ width: 15, height: 15 }}
				onClick={searchStr}
			/>
			{/* <button onClick={searchStr}> Search</button> */}
		</div>
	);
}

export default Search;
