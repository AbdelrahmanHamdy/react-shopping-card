import React from 'react';
import Product from './product';

class ShoppingCart extends React.Component {
    state = {
        products: [
            { id: 1, name: 'Burger', count: 2 },
            { id: 2, name: 'frise', count: 1 },
            { id: 3, name: 'cola', count: 3 }
        ],
    };

    handelDelete = (product) => {
        const products = this.state.products.filter((p) => p.id !== product.id);
        this.setState({products});
    }

    handelReset = () => {
        console.log("reset");
    }

    render() {
        return (<React.Fragment>
            <h1>Shopping Cart</h1>
            <button onClick={this.handelReset} className="btn btn-secondary m-2 btn-sm">Reset</button>
            {this.state.products.map((product) => (<Product key={product.id} onDelete={this.handelDelete} product={product}>
            </Product>))}
        </React.Fragment>);
    }
}

export default ShoppingCart;