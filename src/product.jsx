import React from 'react';
class Product extends React.Component {
    state = {
        name: this.props.product.name,
        count: this.props.product.count,
    };

    getClasses() {

        return this.state.count === 0 ? 'badge bg-warning m-2' : 'badge bg-primary m-2';
    }

    /**
     * incrementHandeler
     */
    incrementHandeler = (num) => {
        this.setState({ count: this.state.count + num });
    }

    render() {
        return (
            <div className='row'>
                <div className="col-2">
                <span>{this.state.name} </span>
                </div>
                <div className="col">
                <span className={this.getClasses()}>{this.state.count}</span>
                <button onClick={() => this.incrementHandeler(1)} className="btn btn-primary btn-sm">+</button>
                <span onClick={() => this.props.onDelete(this.props.product)}>
                    <i className="fas fa-trash m-2"></i>
                </span>
                </div>
            </div>
        );

    }
}

export default Product;