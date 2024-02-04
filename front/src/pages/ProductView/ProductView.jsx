import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import './ProductView.css';

class ProductView extends Component {


    handleClick = async (event, prodId) => {
        event.preventDefault();
        const userId = this.props.userinfo.userId;
        await axios.post('http://localhost:4000/addtoCart', {
            "userId": userId,
            "prodId": prodId
        })
        this.props.history.push('/viewcart')
    }

    goBack = (event) => {
        event.preventDefault();
        this.props.history.push('/products');
    }

    render() {
        return (
            <>
                <Header logout={this.props.logout} userinfo={this.props.userinfo} />
                <div className="prodcontainer">
                    <div className="prodimg">
                        <img className="cover" src={this.props.product.imageUrl} alt="hello" />

                        <button
                            className="addbtn"
                            onClick={(e) => this.handleClick(e, this.props.product.id)}
                        > Add To Cart
                        </button>

                        <button className="continue" onClick={this.goBack}>Continue Shopping</button>
                    </div>
                    <div className="proddetails">
                        <div className="prodin">
                            <div className="prodtitle">
                                <h1>{this.props.product.title}</h1>
                            </div>
                            <hr />
                            <div className="proddesc">
                                <p><strong>Product Description:</strong></p><br></br><br></br>
                                <p>{this.props.product.description}</p>
                            </div>
                            <hr />
                            <div className="prodprice">
                                <h3>{"Price: " + this.props.product.price + " TND"}</h3>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default withRouter(ProductView);