import React from 'react';
import styles from './contentStyles.module.css';
import Filter from 'Components/Filter';
import Sort from 'Components/Sort';

export default ({ close, filter }) => (
	<div className={styles.modal}>
		<a className={styles.close} onClick={close}>
			&times;
		</a>
		{filter ? <Filter /> : <Sort onClick={close} isFromPopUp={true} />}
	</div>
);
