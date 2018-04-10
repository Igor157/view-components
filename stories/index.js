import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ProductionChart from '../src/production-chart/production-chart.component.jsx';
import BidsPanel from '../src/bids-panel/bids-panel.component.jsx';
import InterestRates from '../src/interest-rates/interest-rates.component.jsx';
import Logo from '../src/logo/logo.component.jsx';
import Sidebar from '../src/sidebar/sidebar.component.jsx';
import DealTrack from '../src/deal-trak/deal-track.component.jsx'
let dealsData = [
	{ fullName: 'Alex Grina', deals: [] },
	{ fullName: 'Marie Serra', deals: [ { profit: 10000 }, { profit: 5000 }, { profit: 20000 } ] },
	{ fullName: 'Alex Grina', deals: [ { profit: 50000 }, { profit: 8000 }, { profit: 78000 }, { profit: 77000 } ] }
];

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
	)); 