import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cl-pending.style.scss';

class CLPending extends React.Component {
	render() {
		const data = this.props.data;
		const headInfo = `CL Pending (${data.length})`;
		function getComponiesList(data) {
			return data.map((item, index) => {
				let colorModify;
				if (item.color === 'red') {
					colorModify = 'cl-pending-row--red';
				}
				else if (item.color === 'purple') {
					colorModify = 'cl-pending-row--purple'
				}
				else {
					colorModify = 'cl-pending-row--light-grey'
				}
				return (
					<div key={index} className={`cl-pending-row ${colorModify}`}>
						<div className='cl-pending__ico'> <i className="far fa-file-alt fa-sm"></i></div>
						<div className={`cl-pending__company-name`}>{item.company}</div>
						<select className='cl-pending__drop-down'></select>
					</div>
				)
			});
		}
		let componiesList = getComponiesList(data);
		return (
			<div className='cl-pending dashboard-content__cl-pending'>
				<div className="cl-pending__head">
					{headInfo}
				</div>
				<div className="cl-pending__list">{componiesList}</div>
			</div>
		);
	}
}

export default CLPending;



