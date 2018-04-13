import React from 'react';
import ReactDOM from 'react-dom';
import styles from './dashboard-content.style.scss';
import Credit from '../credit/credit.component.jsx';
import MTDDealsToCommittee from '../mtd-deals-to-commitee/mtd-deals-to-commitee.component.jsx';
import CLPending from '../cl-pending/cl-pending.component.jsx';
import CLRecorded from '../cl-recorded/cl-recorded.component.jsx';
import CLWithdrawn from '../cl-withdrawn/cl-withdrawn.component.jsx';
import Closing from '../closing/closing.component.jsx';
import MTDClosing from '../mtd-closing/mtd-closing.component.jsx';
import PostClosing from '../post-closing/post-closing.component.jsx';


class DashboardContent extends React.Component {
	render() {
		const date = this.props.date;
		return (
			<div className="dashboard-content">
				<div className='dashboard-content__credit-column'>
					<Credit
						dealsData={this.props.dealsData}
					/>
					<MTDDealsToCommittee
						dealsData={this.props.MTDDealsToCommetteeData}
					/>
				</div>
				<div className='dashboard-content__cl-column'>
					<CLPending
						data={this.props.CLPendingData}
					/>
					<CLRecorded
						data={this.props.CLRecordedData}
					/>
					<CLWithdrawn
						data={this.props.CLWithdrawnData}
					/>
				</div>
				<div className='dashboard-content__closing-column'>
					<Closing
						dealsData={this.props.closingData}
					/>
					<MTDClosing
						dealsData={this.props.MTDclosingData}
					/>
				</div>
				<div className='dashboard-content__post-closing-column'>
					<PostClosing
						data={this.props.postClosingData}
					/>
				</div>
			</div>
		);
	}
}

export default DashboardContent;

