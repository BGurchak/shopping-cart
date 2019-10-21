import React from 'react'
import PropTypes from 'prop-types';

class AddItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        let addForm = event.target;
        let itemQty = addForm.itemQty.value;
        let selectedIndex = addForm.products.selectedIndex;

        let product = this.props.productList[selectedIndex - 1];
        this.props.addTheItem(product, itemQty);
    }

    render() {
        return (
            <form id="addForm" onSubmit={this.handleSubmit}>
                <div className="container">
                    <div className="item-label">Quantity</div>
                    <div>
                        <input type='text' name='itemQty' className="qty-box"/>
                    </div>
                    <div className="item-label">Products</div>
                    <div>
                        <select name='products' className="select-box">
                            <option value="">Select an option...</option>
                            {this.props.productList.map((product, index) => {
                                return (
                                    <option value={product.id} key={index}>{product.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </div>
            </form>
        )
    }
}

AddItem.propTypes = {
    productList: PropTypes.array,
    addTheItem: PropTypes.func
};

export default AddItem;