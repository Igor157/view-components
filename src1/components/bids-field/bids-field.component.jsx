import React from 'react';
import ReactDOM from 'react-dom';
import styles from './bids-field.style.scss';

class BidsField extends React.Component {
	render() {
		return (
			<div className={`bids-field ${this.props.orientation === 'horisontal' ? 'bids-field--horisontal' : 'bids-field--vertical'}`}>
				<div className='bids-field__field'>
					<div className='bids-field__label'>
						Fofecast
					</div>
					<form className='bids-field__form'>
						<input type='text' className='bids-field__input' />
						<div className='bids-field__button'>+</div>
					</form>
				</div>
				<div className='bids-field__field' >
					<div className='bids-field__label'>
						Submitted
					</div>
					<form className='bids-field__form'>
						<input type='text' className='bids-field__input' />
					</form>
				</div>
			</div>
		);
	}
}

export default BidsField;
