import React from 'react';
import ReactDOM from 'react-dom';
import styles from './sidebar.style.scss';
import ProductionChart from '../production-chart/production-chart.component.jsx';
import BidsPanel from '../bids-panel/bids-panel.component.jsx';
import InterestRates from '../interest-rates/interest-rates.component.jsx';
import Logo from '../logo/logo.component.jsx'

class Sidebar extends React.Component {
	render() {
		const date = this.props.date;
		return (
			<div className="sidebar">
				{date}
				<div className="sidebar__info">
					Production Year to Date
					<ProductionChart />
					BDO Bids This Week
					<BidsPanel />
					Interest Rates
					<InterestRates
						baseRate='4.58'
						primeRate='4.50'
						debentureRate='4.32'
					/>
					<Logo />
				</div>
			</div>
		);
	}
}

export default Sidebar;
