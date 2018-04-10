import React from 'react';
import ReactDOM from 'react-dom';
import styles from './production-chart.style.scss';

class ProductionChart extends React.Component {
	render() {
		const data = this.props.data;
		return <div className="production-chart">Some charts</div>;
	}
}

export default ProductionChart;
