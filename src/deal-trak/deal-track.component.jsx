import React from 'react';
import ReactDOM from 'react-dom';
import styles from './deal-track.style.scss';

class DealTrack extends React.Component {
	render() {
		const type = this.props.type;
		const employeeCount = this.props.dealsData.length;
		const dealsCount = this.props.dealsData
			.map((item) =>
				item.deals.length
			)
			.reduce((sum, current) => {
				return sum + current;
			}, 0);
		const profitArr = this.props.dealsData
			.map((item) =>
				item.deals
			)
			.reduce((result, current) => {
				return result.concat(current);
			}, [])
		const allDealsProfit = profitArr
			.map((item) =>
				item.profit
			)
			.reduce((sum, current) => {
				return sum + current;
			}, 0);
		// everything above will be in service
		const headInfo = `${type} (${employeeCount} ${type === 'Credit' || type == 'MTD Deals to Committee'
			? 'UW'
			: 'Closers'}, ${dealsCount} Deals, $${allDealsProfit})`;
		function getAchivementDataRow(item) {
			return item.deals.map(()=><button className='employees-achivement__button'></button>)
		}

		let employeesAchivement = this.props.dealsData.map((item, index) => (
			<div key={index} className="employees-achivement__row">
				<div className="employees-achivement__name">{item.fullName}</div>
				<div className="employees-achivement__deals-vizualization">{getAchivementDataRow(item)}</div>
			</div>
		));
		return (
			<div className="deal-track">
				<div className="deal-track__head">
					{headInfo}
				</div>
				<div className="employees-achivement">{employeesAchivement}</div>
			</div>
		);
	}
}

export default DealTrack;
