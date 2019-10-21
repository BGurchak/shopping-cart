import React from 'react'
import PropTypes from 'prop-types';
import {getFormattedPrice} from './common';

class CartItem extends React.Component {

    render(){
        return (
            <div className="list-group-item">
                <div className="row">
                    <div className="col-md-8">{this.props.cartItem.product.name}</div>
                    <div className="col-md-2">{getFormattedPrice(this.props.cartItem.product.priceInCents / 100)}</div>
                    <div className="col-md-2">{this.props.cartItem.quantity}</div>
                </div>
            </div>
        )

    }
}

CartItem.propTypes = {
    cartItem: PropTypes.shape({
        product: PropTypes.shape({
            name: PropTypes.string,
            priceInCents: PropTypes.number
        }),
        quantity: PropTypes.number
    })
};

export default CartItem