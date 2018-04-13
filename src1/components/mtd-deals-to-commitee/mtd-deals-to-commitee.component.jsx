import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mtd-deals-to-commitee.style.scss';
import DealsDataRow from '../deals-data-row/deals-data-row.component.jsx';
import BidsField from '../bids-field/bids-field.component.jsx';
class MTDDealsToCommettee extends React.Component {
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
        const headInfo = `MTD Deals to Commitee (${employeesCount} UW, ${dealsCount} Deals, $${allDealsProfit})`;

        let employeesAchivement = employeesData.map((item, index) =>
            <DealsDataRow
                item={item}
                key={index}
            />
        );
        return (
            <div className='mtd-deals-to-commitee dashboard-content__mtd-deals-to-commitee'>
                <div className="mtd-deals-to-commitee__head">
                    {headInfo}
                </div>
                <BidsField orientation='horisontal' />
                <div className="mtd-deals-to-commitee__content">{employeesAchivement}</div>
            </div>
        );
    }
}

export default MTDDealsToCommettee;


