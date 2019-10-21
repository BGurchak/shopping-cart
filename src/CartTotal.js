import React from 'react'
import PropTypes from 'prop-types';
import {getFormattedPrice} from './common';

class CartTotal extends React.Component {
    constructor(props) {
        super(props);
        this.getTotal = this.getTotal.bind(this);
    }

    getTotal() {
        let total = 0;
        this.props.itemList.forEach(item => {
            total = total + ((item.quantity * item.product.priceInCents) / 100);
        });

        return total;
    }

    render() {
        return (
            <div className="container">
                <div className="item-label">Total Price: {getFormattedPrice(this.getTotal())}</div>
            </div>
    )
    }
}

CartTotal.propTypes = {
    productList: PropTypes.array,
    addTheItem: PropTypes.func
};

export default CartTotal;