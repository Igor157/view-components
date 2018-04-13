import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cl-withdrawn.style.scss';

class CLWithdrawn extends React.Component {
	render() {
		const data = this.props.data;
		const headInfo = `CL Withdrawn ($${data.length})`;
		function getComponiesList(data) {
			return data.map((item, index) => {
				let colorModify;
				if (item.color === 'red') {
					colorModify = 'cl-withdrawn-row--red';
				}
				else if (item.color === 'purple') {
					colorModify = 'cl-withdrawn-row--purple'
				}
				else {
					colorModify = 'cl-withdrawn-row--light-grey'
				}
				return (
					<div key={index} className={`cl-withdrawn-row ${colorModify}`}>
						<div className='cl-withdrawn__ico'> <i className="far fa-file-alt fa-sm"></i></div>
						<div className={`cl-withdrawn__company-name`}>{item.company}</div>
						<select className='cl-withdrawn__drop-down'></select>
					</div>
				)
			});
		}
		let componiesList = getComponiesList(data);
		return (
			<div className='cl-withdrawn dashboard-content__cl-withdrawn'>
				<div className="cl-withdrawn__head">
					{headInfo}
				</div>
				<div className="cl-withdrawn__list">{componiesList}</div>
			</div>
		);
	}
}

export default CLWithdrawn;



