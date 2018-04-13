import React from 'react';
import ReactDOM from 'react-dom';
import styles from './production-year-to-date.style.scss';
import {
	ResponsiveContainer,
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

class ProductionYearToDate extends React.Component {
	render() {
		const data = this.props.data;
		return <div className="production-year-to-date">
			<div className='production-year-to-date__lable'>
				Production Year to Date
			</div>
			<div className='production-year-to-date__content'>
				<ResponsiveContainer height="90%">
					<BarChart data={this.props.data}>
						<XAxis dataKey="month" tickMargin={15} />
						<YAxis unit='$' tickMargin='10' />
						<Bar dataKey="green" fill="#B3D18F" />
						<Bar dataKey="red" fill="#DB8E84" />
					</BarChart>
				</ResponsiveContainer>
			</div>
		</div>;
	}
}

export default ProductionYearToDate;


