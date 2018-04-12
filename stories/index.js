import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductionChart from '../src/production-chart/production-chart.component.jsx';
import BidsPanel from '../src/bids-panel/bids-panel.component.jsx';
import Logo from '../src/logo/logo.component.jsx';
import Sidebar from '../src/sidebar/sidebar.component.jsx';
import DealTrack from '../src/deal-trak/deal-track.component.jsx';
import ClList from '../src/cl-list/cl-list.component.jsx';
import ClResult from '../src/cl-result/cl-result.component.jsx';
import Credit from '../src1/credit/credit.component.jsx';
import Closing from '../src1/closing/closing.component.jsx';
import BDOBidsThisWeek from '../src1/bdo-bids-this-week/bdo-bids-this-week.component.jsx';
import MTDDealsToCommettee from '../src1/mtd-deals-to-commitee/mtd-deals-to-commitee.component.jsx';
import MTDClosing from '../src1/mtd-closing/mtd-closing.component.jsx';
import PostClosing from '../src1/post-closing/post-closing.component.jsx';
import CLPending from '../src1/cl-pending/cl-pending.component.jsx';
import CLRecorded from '../src1/cl-recorded/cl-recorded.component.jsx';
import CLWithdrawn from '../src1/cl-withdrawn/cl-withdrawn.component.jsx';
import ProductionYearToDate from '../src1/production-year-to-date/production-year-to-date.component.jsx';
import InterestRates from '../src1/interest-rates/interest-rates.component.jsx';
// let dealsData = [
// 	{ fullName: 'Alex Grina', deals: [] },
// 	{ fullName: 'Marie Serra', deals: [{ profit: 10000 }, { profit: 5000 }, { profit: 20000 }] },
// 	{ fullName: 'Alex Grina', deals: [{ profit: 50000 }, { profit: 8000 }, { profit: 78000 }, { profit: 77000 }] }
// ];

let dealsData = [
	{ fullName: 'Alex Grina', deals: [] },
	{ fullName: 'Marie Serra', deals: [{ color: 'green' }, { color: 'green' }] },
	{ fullName: 'Melanie Snyder', deals: [] },
	{ fullName: 'Mark Williamson', deals: [{ color: 'green' }] },
	{ fullName: 'Suzan Korojed', deals: [{ color: 'green' }, { color: 'green' }, { color: 'green' }] },
	{ fullName: 'Tricia Threlkeld', deals: [{ color: 'green' }, { color: 'green' }] },
	{ totalProfit: '12,823,900' }
];
let closingData = [
	{ fullName: 'Autumn Johnson', deals: [{ color: 'purple' }, { color: 'green' }, { color: 'purple' }, { color: 'purple' }, { color: 'purple' }, { color: 'purple' }, { color: 'purple' }] },
	{ fullName: 'Amanda Montgomery', deals: [{ color: 'purple' }, { color: 'green' }, { color: 'purple' }, { color: 'purple' }, { color: 'purple' }] },
	{ fullName: 'Liza Castillo', deals: [{ color: 'purple' }, { color: 'purple' }, { color: 'purple' }, { color: 'green' }, { color: 'green' }, { color: 'purple' }, { color: 'purple' }, { color: 'green' }] },
	{ fullName: 'Nicole Chambers', deals: [{ color: 'purple' }, { color: 'green' }, { color: 'purple' }, { color: 'purple' }, { color: 'green' }, { color: 'green' }] },
	{ totalProfit: '43,057,894' }
];
let MTDDealsToCommetteeData = [
	{ fullName: 'Alex Grina', deals: [] },
	{ fullName: 'Marie Serra', deals: [] },
	{ fullName: 'Melanie Snyder', deals: [] },
	{ fullName: 'Mark Williamson', deals: [] },
	{ fullName: 'Suzan Korojed', deals: [] },
	{ fullName: 'Tricia Threlkeld', deals: [] },
	{ totalProfit: '0' }
];
let MTDclosingData = [
	{ fullName: 'Autumn Johnson', deals: [] },
	{ fullName: 'Amanda Montgomery', deals: [] },
	{ fullName: 'Liza Castillo', deals: [] },
	{ fullName: 'Nicole Chambers', deals: [] },
	{ totalProfit: '0' }
];

let componiesData = [
	{ company: 'company 1', status: 'pending' },
	{ company: 'company 2', status: 'pending' },
	{ company: 'company 3', status: 'closing' },
	{ company: 'company 4', status: 'pending' },
	{ company: 'company 5', status: 'closing' },
	{ company: 'company 6', status: 'closing' },
	{ company: 'company 7', status: 'closing' },
	{ company: 'company 8', status: 'pending' },
];
let postClosingData = [
	{ company: 'Summit RWP, Inc', color: 'red' },
	{ company: 'Champs Consulting LLC', color: 'purple' },
	{ company: '5 Star Pizza, LLC (Dom  some other info)', color: 'purple' },
	{ company: 'Scientific Distributors LLC', color: 'purple' },
	{ company: 'Deanna J, Tickle, DVM,  some other info', color: 'red' },
	{ company: 'David K.Morrill, O.D., P  some other info', color: 'red' },
	{ company: 'DTID Wolverine Pizza,  some other info', color: 'purple' },
	{ company: 'The Learning Academy  some other info', color: 'red' },
];
let CLPendingData = [
	{ company: 'Insurance of the San J some other info ', color: 'red' },
	{ company: 'Trejo & Long Development', color: 'grey' }
];
let CLRecordedData = [];
let CLWithdrawnData = [];
let chartData = [
	{ month: 'J', green: 3, red: 1 },
	{ month: 'F', green: 12, red: 26 },
	{ month: 'M', green: 12, red: 28 },
];
// storiesOf('ProductionChart', module)
// 	.add('ProductionChart demo', () => (
// 		<ProductionChart />
// 	));

// storiesOf('BidsPanel', module)
// 	.add('BidsPanel demo', () => (
// 		<BidsPanel />
// 	));

storiesOf('InterestRates', module)
	.add('InterestRates demo', () => (
		<InterestRates
			baseRate='4.58'
			primeRate='4.50'
			debentureRate='4.32'
		/>
	));

// storiesOf('Logo', module)
// 	.add('Logo demo', () => (
// 		<Logo />
// 	));

// storiesOf('Sidebar', module)
// 	.add('Sidebar demo', () => (
// 		<Sidebar
// 			date='April 1, 2018'
// 		/>
// 	));

// storiesOf('DealTrack', module)
// 	.add('DealTrack Credit', () => (
// 		<DealTrack
// 			type='Credit'
// 			dealsData={dealsData}
// 		/>
// 	))
// 	.add('DealTrack MTD Deals to Committee', () => (
// 		<DealTrack
// 			type='MTD Deals to Committee'
// 			dealsData={dealsData}
// 		>
// 			<BidsPanel
// 				orientation='horisontal'
// 			/>
// 		</DealTrack>
// 	));
// storiesOf('ClList', module)
// 	.add('ClList Post Closing', () => (
// 		<ClList
// 			type='Post Closing'
// 			data={componiesData}
// 		/>
// 	))
// 	.add('ClList CL Pending', () => (
// 		<ClList
// 			type='CL Pending'
// 			data={componiesData}
// 		/>
// 	));

storiesOf('Credit', module)
	.add('Credit demo', () => (
		<Credit
			dealsData={dealsData}
		/>
	))
storiesOf('Closing', module)
	.add('Closing demo', () => (
		<Closing
			dealsData={closingData}
		/>
	))
storiesOf('BDOBidsThisWeek', module)
	.add('BDOBidsThisWeek demo', () => (
		<BDOBidsThisWeek />
	));
storiesOf('MTDDealsToCommettee', module)
	.add('MTDDealsToCommettee demo', () => (
		<MTDDealsToCommettee
			dealsData={MTDDealsToCommetteeData}
		/>
	));
storiesOf('MTDClosing', module)
	.add('MTDClosing demo', () => (
		<MTDClosing
			dealsData={MTDclosingData}
		/>
	));
storiesOf('PostClosing', module)
	.add('PostClosing', () => (
		<PostClosing
			data={postClosingData}
		/>
	));
storiesOf('CLPending', module)
	.add('CLPending', () => (
		<CLPending
			data={CLPendingData}
		/>
	));
storiesOf('CLRecorded', module)
	.add('CLRecorded', () => (
		<CLRecorded
			data={CLRecordedData}
		/>
	));
storiesOf('CLWithdrawn', module)
	.add('CLWithdrawn', () => (
		<CLWithdrawn
			data={CLWithdrawnData}
		/>
	));
storiesOf('ProductionYearToDate', module)
	.add('ProductionYearToDate', () => (
		<ProductionYearToDate
			data={chartData}
		/>
	));