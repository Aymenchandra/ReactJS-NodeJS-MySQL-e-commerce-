import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/Header/Header';
import './Category.css';

class Category extends Component {
    
    // const res = await axios.get('http://localhost:4000/findByCategorieName?name=');
    getName = async (categoryName,event) => {
        // const res = await axios.get(`http://localhost:4000/findByCategorieName?name=${categoryName}`);
        // this.props.history.push('/products')
        
        event.preventDefault();
        try {
            const res = await axios.get(`http://localhost:4000/findByCategorieName?name=${categoryName}`);
            this.props.updateProd(res.data);
            console.log(res);
            this.props.history.push('/products');
        } catch (error) {
            console.error('Error fetching products by category name:', error);
        }
    }
    
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    getCategories = async () => {
        var res = await axios.get(`http://localhost:4000/getAllCategories`);
        console.log(res.data)
        this.setState({
            categories: res.data
        });
    }
    componentWillMount() {
        this.getCategories();
    }
    render() {
        let categoriesList = this.state.categories.map(category => {
            return (
                <>
                    <div className="card" onClick={(event) => this.getName(category.name,event)} key={category.id}>
                        <img className="card-image" src={category.urlImage} height="50" alt="Card Image"/>
                        <div className="card-content">
                            <div className="card-title">
                                <h3 className="text">{category.name}</h3>
                            </div>
                        </div>
                    </div>
                </>
            )
        })
        
        return (
            <div>
            <Header logout={this.props.logout} userinfo={this.props.userinfo}/>
                <h1>Categories</h1>
                <div className="card-container">
                    {categoriesList}
                </div>
            </div>
                
            );
        }
}

export default withRouter(Category);
