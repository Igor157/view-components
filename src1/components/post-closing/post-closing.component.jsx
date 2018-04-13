import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post-closing.style.scss';

class PostClosing extends React.Component {
	render() {
		const data = this.props.data;
		const headInfo = `Post Closing (${data.length})`;
		function getComponiesList(data) {
			return data.map((item, index) => {
				let colorModify;
				if (item.color === 'red') {
					colorModify = 'post-closing-row--red';
				}
				else if (item.color === 'purple') {
					colorModify = 'post-closing-row--purple'
				}
				else {
					colorModify = 'post-closing-row--light-grey'
				}
				return (
					<div key={index} className={`post-closing-row ${colorModify}`}>
						<div className='post-closing__ico'> <i className="far fa-file-alt fa-sm"></i></div>
						<div className={`post-closing__company-name`}>{item.company}</div>
						<select className='post-closing__drop-down'></select>
					</div>
				)
			});
		}
		let componiesList = getComponiesList(data);
		return (
			<div className='post-closing'>
				<div className="post-closing__head">
					{headInfo}
				</div>
				<div className="post-closing__list">{componiesList}</div>
			</div>
		);
	}
}

export default PostClosing;



