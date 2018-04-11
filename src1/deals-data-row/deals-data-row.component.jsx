import React from 'react';
import ReactDOM from 'react-dom';
import styles from './deals-data-row.style.scss';

class DealsDataRow extends React.Component {
    render() {

        function getDealsVisualization(item) {
            console.log(item.deals);
            return item.deals
                .map((item, index) => <button
                    key={index}
                    className={`deals-data-row__button ${item.color === 'green' ?
                        'deals-data-row__button--green' :
                        'deals-data-row__button--purple'}`}>
                </button>)
        }
        return (
            <div className="deals-data-row">
                <div className="deals-data-row__name">{`${this.props.item.fullName} (${this.props.item.deals.length})`}</div>
                <div className="deals-data-row__vizualization">{getDealsVisualization(this.props.item)}</div>
            </div>
        );
    }
}

export default DealsDataRow;


let dealsData = [
    { fullName: 'Alex Grina', deals: [] },
    { fullName: 'Marie Serra', deals: [{ color: 'green' }, { color: 'green' }] },
    { fullName: 'Melanie Snyder', deals: [] },
    { fullName: 'Mark Williamson', deals: [{ color: 'green' }] },
    { fullName: 'Suzan Korojed', deals: [{ color: 'green' }, { color: 'green' }, { color: 'green' }] },
    { fullName: 'Tricia Threlkeld', deals: [{ color: 'green' }, { color: 'green' }] },

];