import React from 'react'
import PropTypes from 'prop-types';

class CartFooter extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="#">&copy; {this.props.copyright}</a>
            </nav>
        )
    }
}

CartFooter.propTypes = {
    copyright: PropTypes.string
};

export default CartFooter;