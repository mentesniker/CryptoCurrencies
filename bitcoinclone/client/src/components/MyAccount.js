import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

class MyAccount extends Component{
    state = {walletInfo: {address: 'fooxv6', balance: 9999}};
    componentDidMount(){
        fetch('http://localhost:3000/api/wallet-info').then(response => response.json()).then(json => this.setState({walletInfo: json}));
    }
    render(){
        const {address, balance} = this.state.walletInfo;
        console.log(balance);
        return (
            <div className='MyAccount' style={{paddingTop: "10%",height:"100%"}}>
                <div className='WalletInfo' style={{textAlign:"center"}}>
                    <h2>Your Account</h2>
                    <div><p style={{paddingTop: "3%"}}>address: {address}</p></div>
                    <div><p style={{paddingTop: "3%"}}>Balance: {balance}</p></div>
                </div>
            </div>
        );
    }
}

export default MyAccount;