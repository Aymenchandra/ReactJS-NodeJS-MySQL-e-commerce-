/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Header.css"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wid: ''
        }
    }
    openNav = () => {
        this.setState({
            wid: '100%'
        })
    }
    closeNav = () => {
        this.setState({
            wid: '0%'
        })
    }
    render() {
        return (
            <div>
                <header>
                    <NavLink exact to="/"><img className="nav-img" src="/logo.png" alt="logo" /></NavLink>
                    <nav>
                        <ul className="nav__links">
                            <li><NavLink exact to="/category">
                                <span role="img" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width : 12}}><path d="M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"/></svg></span> Category
                            </NavLink></li>
                            {this.props.userinfo.isAdmin && <li><NavLink exact to="/admin">
                                <span role="img" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width : 12}}><path d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152L0 424c0 48.6 39.4 88 88 88l272 0c48.6 0 88-39.4 88-88l0-112c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 22.1-17.9 40-40 40L88 464c-22.1 0-40-17.9-40-40l0-272c0-22.1 17.9-40 40-40l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L88 64z"/></svg>️ </span>Add Products
                            </NavLink></li>}
                            <li><NavLink exact to="/viewcart">
                                <span role="img" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style={{width : 12}}><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg> </span>Cart
                            </NavLink></li>
                            <li><NavLink exact to="/orders">
                                <span role="img" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style={{width : 12}}><path d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9L0 168c0 13.3 10.7 24 24 24l110.1 0c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24l0 104c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65 0-94.1c0-13.3-10.7-24-24-24z"/></svg> </span>Orders
                            </NavLink></li>
                            <li><NavLink exact to="/profile">
                                <span role="img" aria-label=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{width : 12}}><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg> </span>{this.props.userinfo.name}
                            </NavLink></li>
                            <li><button onClick={this.props.logout} className="auth-btn-nav">
                                Logout
                            </button></li>
                        </ul>
                    </nav>
                    <p onClick={this.openNav} className="menu cta">Menu</p>
                </header>

                <div style={{ width: this.state.wid }} className="overlay">
                    <a className="close" onClick={this.closeNav}>&times;</a>
                    <div className="overlay__content">
                        <NavLink exact to="/category">
                        <span role="img" aria-label=""></span> Category
                        </NavLink>
                        {this.props.userinfo.isAdmin && <NavLink exact to="/admin">
                            <span role="img" aria-label=""></span>Add Products
                            </NavLink>}
                        <NavLink exact to="/viewcart">
                        <span role="img" aria-label=""></span>Cart
                        </NavLink>
                        <NavLink exact to="/viewcart">
                        <span role="img" aria-label=""></span>Orders
                        </NavLink>
                        <NavLink exact to="/profile">
                        <span role="img" aria-label=""></span>{this.props.userinfo.name}
                        </NavLink>
                        <button onClick={this.props.logout} className="auth-btn-nav">
                            Logout
                        </button>
                    </div>
                </div>

            </div>
        );
    }
}

export default Header;