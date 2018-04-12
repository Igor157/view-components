import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cl-recorded.style.scss';

class CLRecorded extends React.Component {
	render() {
		const data = this.props.data;
		const headInfo = `CL Rec'd ($${data.length})`;
		function getComponiesList(data) {
			return data.map((item, index) => {
				let colorModify;
				if (item.color === 'red') {
					colorModify = 'cl-recorded-row--red';
				}
				else if (item.color === 'purple') {
					colorModify = 'cl-recorded-row--purple'
				}
				else {
					colorModify = 'cl-recorded-row--light-grey'
				}
				return (
					<div key={index} className={`cl-recorded-row ${colorModify}`}>
						<div className='cl-recorded__ico'> <i className="far fa-file-alt fa-sm"></i></div>
						<div className={`cl-recorded__company-name`}>{item.company}</div>
						<select className='cl-recorded__drop-down'></select>
					</div>
				)
			});
		}
		let componiesList = getComponiesList(data);
		return (
			<div className='cl-recorded'>
				<div className="cl-recorded__head">
					{headInfo}
				</div>
				<div className="cl-recorded__list">{componiesList}</div>
			</div>
		);
	}
}

export default CLRecorded;



