import React from 'react';
import ReactDOM from 'react-dom';
import styles from './cl-list.style.scss';

class ClList extends React.Component {
	render() {
		const type = this.props.type;
		const data = this.props.data;
		const headInfo = `${type} (${data.length})`;
		function getComponiesList(data) {
			return data.map((item, index) => (
				<div key={index} className='cl-row'>
					<div className='cl-row__ico'>ICO</div>
					<div className='cl-row__company-name'>{item.company}</div>
					<select className='cl-row__drop-down'></select>
				</div>
			));
		}
		let componiesArr = type === 'Post Closing' ?
			data.filter((item) => item.status === 'closing') :
			data.filter((item) => item.status === 'pending');
		let componiesList = getComponiesList(componiesArr);
		return (
			<div className={`cl-list ${type === 'Post Closing' ? 'cl-list--blue' : 'cl-list--light-grey'}`}>
				<div className="cl-list__head">
					{headInfo}
				</div>
				<div className="cl-list__list">{componiesList}</div>
			</div>
		);
	}
}

export default ClList;

