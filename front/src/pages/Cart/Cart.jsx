import React, { Component } from 'react';
import axios from 'axios';
import StripeCheckout from "react-stripe-checkout";
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import './Cart.css';

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: 0,
            cartItems: []
        }
    }

    getCartItems = async () => {
        const res = await axios.get(`http://localhost:4000/getCartProducts/?id=${this.props.userinfo.userId}`);
        this.setState({ cartItems: res.data });
    }

    componentWillMount() {
        this.getCartItems();
    }

    remove = async (event, prodId) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/deleteFromCart', {
            "prodId": prodId,
            "userId": this.props.userinfo.userId
        });
        this.getCartItems();
    }

    async handleToken(token, price) {
        // const price = this.state.price;
        const res = await axios.post(
            "http://localhost:4000/checkout",
            { token, price }
        );
        if (res.data.status === "success") {
            toast("Success! Check email for details", { type: "success" });
            this.props.history.push('/');
            await axios.post('http://localhost:4000/place-order', {
                "userId": this.props.userinfo.userId
            });
        } else {
            toast("Something went wrong, Try again Later", { type: "error" });
        }
    }

    IncrementItem = async (event, prodId) => {
        event.preventDefault();
        const userId = this.props.userinfo.userId;
        await axios.post('http://localhost:4000/addtoCart', {
            "userId": userId,
            "prodId": prodId
        })
        this.getCartItems();
    }

    render() {
        let sum = 0;

        let itemList = this.state.cartItems.map(item => {
            return (
                <div className="product" key={item.id}>
                    <div className="product-image cover">
                        <img src={item.imageUrl} alt={item.title} />
                    </div>
                    <div className="product-details">
                        <div className="product-title"><strong>{item.title}</strong></div><br></br><br></br>
                        <p className="product-description">{item.description}</p>
                    </div>
                    <div className="product-price">{item.price}</div>
                    <div className="product-quantity">
                        <input className="inputne" type="number" value={item.cartItem.quantity} onChange={this.handleChange} />
                        <button className="pbtn" onClick={(e) => this.IncrementItem(e, item.cartItem.productId)}> + </button>
                    </div>
                    <div className="product-removal">
                        <button className="remove-product" onClick={(e) => this.remove(e, item.cartItem.productId)}>
                            Remove
                    </button>
                    </div>
                    <div style={{ display: 'none' }}>{sum += item.price * item.cartItem.quantity}</div>
                    <div className="product-line-price">{item.price * item.cartItem.quantity}</div>
                </div>
            )
        })

        return (
            <div className="cart-overall">
                <Header logout={this.props.logout} userinfo={this.props.userinfo} />
                <h1>Shopping Cart</h1>

                <div className="shopping-cart">

                    <div className="column-labels">
                        <label className="product-image">Image</label>
                        <label className="product-details">Product</label>
                        <label className="product-price">Price</label>
                        <label className="product-quantity">Quantity</label>
                        <label className="product-removal">Remove</label>
                        <label className="product-line-price">Total</label>
                    </div>

                    {itemList}

                    <div className="totals">
                        <div className="totals-item">
                            <label>Subtotal</label>
                            <div className="totals-value" id="cart-subtotal">{sum}</div>
                        </div>
                        <div className="totals-item totals-item-total">
                            <label>Grand Total</label>
                            <div className="totals-value" id="cart-total">
                                <strong>
                                    {sum > 100 ? sum - (sum * 0.25) : sum }
                                    {sum > 100 ? <div  style={{ color: 'green' }}><br></br> Reduction 25%</div> : <div style={{ color: 'red' }}><br></br> 25% discount on orders over 100 DT</div> }
                                </strong></div>
                        </div>
                    </div>

                    <StripeCheckout
                        className="checkout"
                        stripeKey="pk_test_51Gxt4GIY3uMkMao1o5wDkMtWsbEu4UgosWpYL5qFDXZUTZruG24dCGMPgID56kw8m8pPMRcaF7uISBAbfaGBCqal00Mcuc0lWq"
                        token={(token) => this.handleToken(sum > 100 ? (sum - (sum * 0.25))* 100 : sum * 100)}
                        amount={sum > 100 ? (sum - (sum * 0.25))* 100 : sum * 100}
                        name="Payment Using Card"
                    />
                </div>
            </div>
        );
    }
}

export default withRouter(Cart);
