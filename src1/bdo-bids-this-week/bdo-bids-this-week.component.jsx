import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bdo-bids-this-week.style.scss';

class BDOBidsThisWeek extends React.Component {
	render() {
		return (
			<div className={`bdo-bids-this-week ${this.props.orientation === 'horisontal' ? 'bdo-bids-this-week--horisontal' : 'bdo-bids-this-week--vertical'}`}>
				<div className='bdo-bids-this-week__field'>
					<div className='bdo-bids-this-week__label'>
						Fofecast
					</div>
					<form className='bdo-bids-this-week__form'>
						<input type='text' className='bdo-bids-this-week__input' />
						<div className='bdo-bids-this-week__button'>+</div>
					</form>
				</div>
				<div className='bdo-bids-this-week__field' >
					<div className='bdo-bids-this-week__label'>
						Submitted
					</div>
					<form className='bdo-bids-this-week__form'>
						<input type='text' className='bdo-bids-this-week__input' />
					</form>
				</div>
			</div>
		);
	}
}

export default BDOBidsThisWeek;
