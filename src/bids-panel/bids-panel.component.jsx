import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bids-panel.style.scss';

class BidsPanel extends React.Component {
	render() {
		return (
			<div className="bids-panel">
				<div className="bids-panel__forecast">
					Fofecast
				<input type="text" />
					<button>+</button>
				</div>
				<div className="bids-panel__submitted">
					Submitted
				 <input type="text" />
				</div>
			</div>
		);
	}
}

export default BidsPanel;
