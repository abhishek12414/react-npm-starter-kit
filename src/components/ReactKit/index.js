import React from 'react';
import style from './index.module.css';

import ReactLogo from '../../assets/logo512.png';

export default function ReactKit() {
	return (
		<div className={style.reactkit}>
			<h1 className={style.title}>React NPM Starter Kit</h1>
			<img className={style.img} src={ReactLogo} alt="react-logo" />
		</div>
	);
}
