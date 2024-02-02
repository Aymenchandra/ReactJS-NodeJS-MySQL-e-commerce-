import React, { Component } from 'react'
import Header from '../../components/Header/Header';
import Category from '../../components/Category';
class Home extends Component {
    render() {
        return (
            <div className="Home">
                <Header logout={this.props.logout} userinfo={this.props.userinfo}/>
                <Category />
            </div>
        );
    }
}

export default Home;