import React from 'react';
import ReactDOM from 'react-dom';
import styles from './credit.style.scss';
import DealsDataRow from '../deals-data-row/deals-data-row.component.jsx';

class Credit extends React.Component {
    render() {
        const employeesData = this.props.dealsData.filter((item) => item.fullName)
        const employeesCount = employeesData.length;
        const dealsCount = employeesData
            .map((item) => {
                return item.deals.length
            }
            )
            .reduce((sum, current) => {
                return sum + current;
            }, 0);
        const allDealsProfit = this.props.dealsData
            .filter((item) =>
                item.totalProfit
            )[0].totalProfit
        const headInfo = `Credit (${employeesCount} UW, ${dealsCount} Deals, $${allDealsProfit})`;

        let employeesAchivement = employeesData.map((item, index) =>
            <DealsDataRow
                item={item}
                key={index}
            />
        );
        return (
            <div className='credit'>
                <div className="credit__head">
                    {headInfo}
                </div>
                <div className="credit__content">{employeesAchivement}</div>
            </div>
        );
    }
}

export default Credit;


