import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sidebar.style.scss';
import ProductionYearToDate from '../production-year-to-date/production-year-to-date.component.jsx';
import BDOBidsThisWeek from '../bdo-bids-this-week/bdo-bids-this-week.component.jsx';
import InterestRates from '../interest-rates/interest-rates.component.jsx';

class Sidebar extends React.Component {
	render() {
		const date = this.props.date;
		return (
			<div className="sidebar">
				<div className="sidebar__head">
					{date}
				</div>
				<div className="sidebar__content">
					<ProductionYearToDate data={this.props.chartData} />
					<BDOBidsThisWeek />
					<InterestRates
						baseRate={this.props.baseRate}
						primeRate={this.props.primeRate}
						debentureRate={this.props.primeRate}
					/>
				</div>
			</div>
		);
	}
}

export default Sidebar;
