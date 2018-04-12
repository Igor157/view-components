import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mtd-closing.style.scss';
import DealsDataRow from '../deals-data-row/deals-data-row.component.jsx';
import BDOBidsThisWeek from '../bdo-bids-this-week/bdo-bids-this-week.component.jsx';
class MTDClosing extends React.Component {
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
        const headInfo = `MTD Closing (${employeesCount} Closers, ${dealsCount} Deals, $${allDealsProfit})`;

        let employeesAchivement = employeesData.map((item, index) =>
            <DealsDataRow
                item={item}
                key={index}
            />
        );
        return (
            <div className='mtd-closing'>
                <div className="mtd-closing__head">
                    {headInfo}
                </div>
                <BDOBidsThisWeek orientation='horisontal' />
                <div className="mtd-closing__content">{employeesAchivement}</div>
            </div>
        );
    }
}

export default MTDClosing;


