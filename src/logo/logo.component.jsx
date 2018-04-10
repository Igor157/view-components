import React from 'react';
import ReactDOM from 'react-dom';
import styles from './logo.style.scss';

class Logo extends React.Component {
	render() {
		const data = this.props.data;
		return <div className="logo">Some logo</div>;
	}
}

export default Logo;
