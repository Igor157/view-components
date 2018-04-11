import React from 'react';
import ReactDOM from 'react-dom';
import styles from './interest-rates.style.scss';

class InterestRates extends React.Component {
	render() {
		return (
			<div className='interest-rates'>
				<div className='interest-rates__item'>
					SBA LIBOR Base Rate
					<div className='interest-rates__value'>
						{this.props.baseRate}
					</div>
				</div>
				<div className='interest-rates__item'>
					Prime Rate
					<div className='interest-rates__value'>
						{this.props.primeRate}
					</div>
				</div>
				<div className='interest-rates__item'>
					SBA Debenture Rate
					<div className='interest-rates__value'>
						{this.props.debentureRate}
					</div>
				</div>
			</div>
		);
	}
}

export default InterestRates;
