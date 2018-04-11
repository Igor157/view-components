import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductionChart from '../src/production-chart/production-chart.component.jsx';
import BidsPanel from '../src/bids-panel/bids-panel.component.jsx';
import InterestRates from '../src/interest-rates/interest-rates.component.jsx';
import Logo from '../src/logo/logo.component.jsx';
import Sidebar from '../src/sidebar/sidebar.component.jsx';
import DealTrack from '../src/deal-trak/deal-track.component.jsx';
import ClList from '../src/cl-list/cl-list.component.jsx';
import ClResult from '../src/cl-result/cl-result.component.jsx';
import Credit from '../src1/credit/credit.component.jsx';
import Closing from '../src1/closing/closing.component.jsx'

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

let componiesData = [
	{ company: 'company 1', status: 'pending' },
	{ company: 'company 2', status: 'pending' },
	{ company: 'company 3', status: 'closing' },
	{ company: 'company 4', status: 'pending' },
	{ company: 'company 5', status: 'closing' },
	{ company: 'company 6', status: 'closing' },
	{ company: 'company 7', status: 'closing' },
	{ company: 'company 8', status: 'pending' },
]

storiesOf('ProductionChart', module)
	.add('ProductionChart demo', () => (
		<ProductionChart />
	));

storiesOf('BidsPanel', module)
	.add('BidsPanel demo', () => (
		<BidsPanel />
	));

storiesOf('InterestRates', module)
	.add('InterestRates demo', () => (
		<InterestRates
			baseRate='4.58'
			primeRate='4.50'
			debentureRate='4.32'
		/>
	));

storiesOf('Logo', module)
	.add('Logo demo', () => (
		<Logo />
	));

storiesOf('Sidebar', module)
	.add('Sidebar demo', () => (
		<Sidebar
			date='April 1, 2018'
		/>
	));

storiesOf('DealTrack', module)
	.add('DealTrack Credit', () => (
		<DealTrack
			type='Credit'
			dealsData={dealsData}
		/>
	))
	.add('DealTrack MTD Deals to Committee', () => (
		<DealTrack
			type='MTD Deals to Committee'
			dealsData={dealsData}
		>
			<BidsPanel
				orientation='horisontal'
			/>
		</DealTrack>
	));
storiesOf('ClList', module)
	.add('ClList Post Closing', () => (
		<ClList
			type='Post Closing'
			data={componiesData}
		/>
	))
	.add('ClList CL Pending', () => (
		<ClList
			type='CL Pending'
			data={componiesData}
		/>
	));

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
