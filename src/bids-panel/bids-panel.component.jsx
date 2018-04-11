import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bids-panel.style.scss';

class BidsPanel extends React.Component {
	render() {
		return (
			<div className={`bids-panel ${this.props.orientation === 'horisontal' ? 'bids-panel--horisontal' : 'bids-panel--vertical'}`}>
				<div className='bids-panel__field'>
					Fofecast
					<form className='bids-panel__form'>
						<input type='text' className='bids-panel__input' />
						<div className='bids-panel__button'>+</div>
					</form>
				</div>
				<div className='bids-panel__field' >
					Submitted
					<form className='bids-panel__form'>
						<input type='text' className='bids-panel__input' />
					</form>
				</div>
			</div>
		);
	}
}

export default BidsPanel;
