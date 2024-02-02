import React, { Component } from 'react'
import axios from 'axios';
import Header from '../../components/Header/Header';
import "./Orders.css"

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }

    getOrders = async () => {
        const res = await axios.get(`http://localhost:4000/getOrders?id=${this.props.userinfo.userId}`);
        this.setState({
            orders: res.data
        });
    }
    componentWillMount() {
        this.getOrders();
    }

    render() {
        let ordersList = this.state.orders.map(order => {
            return (
                <div className="order-item" key={order.id}>
                    <h2 className="order-exp">Your Order ID Is - {order.id}</h2>
                    <h2 className="order-exp">Your Date Of Order Is - {order.updatedAt.substring(0,10)}</h2>
                    <h2 className = "order-exp">Your Ordered Items Are:</h2>
                    {
                        order.products.map(product => {
                            return (
                                <div key={product.id} className="order-details">
                                    <img src={product.imageUrl} alt={product.title} className = "order-img"/>
                                    <div className="order-q">
                                    <p className = "order-p">Ordered Item Name:</p>
                                    <li>{product.title}</li>
                                    <p className = "order-p">Ordered Item Quantitiy:</p>
                                    <li>{product.orderItem.quantity}</li>
                                    <p className  = "order-p">Ordered Item Price:</p>
                                    <li>{product.price}</li>
                                    </div>
                                </div>
                            )
                        })
                    }
                <hr/>
                </div>
            )
        })

        return (
            <div className="order-main">
                <Header logout={this.props.logout} userinfo={this.props.userinfo} />
                <div className="order-container">
                    <h1 className="container-head">Track Order History</h1>
                    <hr/>
                    {this.state.orders.length > 0 ? ordersList : <h1>No orders placed <span role="img" aria-label="sheep"></span></h1>}
                </div>
            </div>
        );
    }
}
export default Orders;