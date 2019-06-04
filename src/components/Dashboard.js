import React, { Component } from 'react'
import Menu from './Menu';
import Header from './Header';
import Footer from './Footer'

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
