import React, { Component } from 'react'
import Footer from '../Footer';
import Menu from '../Menu';
import Header from '../Header';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <Header/>            
                <Menu/>
                <div>
                Welcome to Dashboard
                </div>
                <Footer/>
            </div>
        )
    }
}
