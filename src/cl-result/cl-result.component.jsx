import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cl-result.style.scss';

class ClResult extends React.Component {
	render() {
		const type = this.props.type;
		const data = this.props.data;
		const totalProfit = data
			.reduce((sum, current) => {
				return sum + current;
			}, 0);
		console.log
		const headInfo = `${type} (${totalProfit ? totalProfit : 0})`;
		function getProfitList(data) {
			return data.map((item, index) => (
				<div key={index} className='cl-result-row'>
				</div>
			));
		}
		let profitList = getProfitList(data);
		return (
			<div className='cl-result' >
				<div className="cl-result__head">
					{headInfo}
				</div>
				<div className="cl-result__list">{profitList}</div>
			</div>
		);
	}
}

export default ClResult;

