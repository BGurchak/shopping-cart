import React from 'react';
import CartHeader from './CartHeader';
import CartFooter from './CartFooter';
import CartItems from './CartItems';
import CartTotal from './CartTotal';
import AddItem from './AddItem';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [
                {id: 40, name: 'Mediocre Iron Watch', priceInCents: 399},
                {id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499},
                {id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999},
                {id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500},
                {id: 44, name: 'Practical Copper Plate', priceInCents: 1000},
                {id: 45, name: 'Awesome Bronze Pants', priceInCents: 399},
                {id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999},
                {id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000},
                {id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990}
            ],
            cartItemsList: [
                {id: 1, product: {id: 40, name: 'Mediocre Iron Watch', priceInCents: 399}, quantity: 1},
                {id: 2, product: {id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499}, quantity: 2},
                {id: 3, product: {id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999}, quantity: 1}
            ]
        }

        this.addItemToList = this.addItemToList.bind(this);
    }

    addItemToList(product, qty) {
        if (product != null) {
            let id = this.state.cartItemsList.length + 1;
            let newProduct = {id: id, product: product, quantity: parseInt(qty)};
            let updatedCartItems = this.state.cartItemsList.slice();
            updatedCartItems.push(newProduct);
            this.setState({cartItemsList: updatedCartItems});
        }
    }

    render() {
        return (
            <div>
                <CartHeader />
                <CartItems itemList={this.state.cartItemsList} />
                <CartTotal itemList={this.state.cartItemsList} />
                <AddItem productList={this.state.products} addTheItem={this.addItemToList} />
                <CartFooter copyright="2016" />
            </div>
        );
    }
}

export default App;