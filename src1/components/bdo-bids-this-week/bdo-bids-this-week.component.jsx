import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bdo-bids-this-week.style.scss';
import BidsField from '../bids-field/bids-field.component.jsx';

class BDOBidsThisWeek extends React.Component {
	render() {
		return (
			<div className='bdo-bids-this-week'>
				<div className='bdo-bids-this-week__lable'>
					BDO Bids This Week
				</div>
				<div className='bdo-bids-this-week__content'>
					<BidsField orientation='vertical'/>
				</div>
			</div>
		);
	}
}

export default BDOBidsThisWeek;
