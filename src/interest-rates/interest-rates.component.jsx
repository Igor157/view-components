import React from 'react';
import ReactDOM from 'react-dom';
import styles from './interest-rates.style.scss';

class InterestRates extends React.Component {
	render() {
		return (
			<div className="interest-rates">
				<div className="interest-rates__item">
					SBA LIBOR Base Rate {this.props.baseRate}
				</div>
				<div className="interest-rates__item">
					Prime Rate {this.props.primeRate}
				</div>
				<div className="interest-rates__item">
					SBA Debenture Rate {this.props.debentureRate}
				</div>
			</div>
		);
	}
}

export default InterestRates;
