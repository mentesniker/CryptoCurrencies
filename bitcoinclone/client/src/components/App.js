import React,{Component} from 'react';

class App extends Component{
    componentDidMount(){
        fetch('http://localhost:3000/api/wallet-info').then(() => response.json()).then(json => this.setState({walletInfo: json}));
    }
    state = {walletInfo: {address: 'fooxv6', balance: 9999}}
    render(){
        const {address, balance} = this.state.walletInfo;
        return (
            <div>
                <div>Welcome to the blockchain...</div>
                <div>address: {address}</div>
                <div>Balance: {address}</div>
            </div>
        );
    }
}

export default App;