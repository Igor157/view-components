import React from 'react';
import ReactDOM from 'react-dom';
import styles from './closing.style.scss';
import DealsDataRow from '../deals-data-row/deals-data-row.component.jsx';

class Closing extends React.Component {
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
        const headInfo = `Closing (${employeesCount} Closers, ${dealsCount} Deals, $${allDealsProfit})`;

        let employeesAchivement = employeesData.map((item, index) =>
            <DealsDataRow
                item={item}
                key={index}
            />
        );
        return (
            <div className='closing dashboard-content__closing'>
                <div className="closing__head">
                    {headInfo}
                </div>
                <div className="closing__content">{employeesAchivement}</div>
            </div>
        );
    }
}

export default Closing;