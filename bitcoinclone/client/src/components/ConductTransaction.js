import React, {Component} from 'react';
import {FormGroup, FormControl, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class ConductTransaction extends Component{
	state = {recipient: '', amount: 0};

	updateRecipient = event => {
		this.setState({recipient: event.target.value});
	}

	updateAmount = event => {
		this.setState({amount: Number(event.target.value)});	
	}

	conductTransaction = () => {
		const {recipient, amount} = this.state;
		fetch('http://localhost:3000/api/transact',{method: 'POST', headers: {'Content-Type':'aplication/json'},body: JSON.stringify({recipient, amount})}).then(response => response.json()).then(json => alert(json.message || json.type));
	}

	render(){
		return(
			<div className='ConductTransaction' style={{paddingTop: "5%"}}>
				<h2 style={{textAlign:"center"}}>Conduct a Transaction</h2>
				<div style={{width: "50%",margin: "0 auto", paddingTop:"5%"}}>
					<FormGroup>
						<label for="account">Account</label>
						<FormControl
							id="account"
							input='text'
							placeholder='account number'
							value={this.state.recipient}
							onChange={this.updateRecipient}
						/>
						<br/>
						<label for="quantity" style={{paddingTop: "5%"}}>Quantity</label>
						<FormControl
							id="quantity"
							input='number'
							placeholder='amount'
							value={this.state.amount}
							onChange={this.updateAmount}
						/>
					</FormGroup>
					<Button bsStyle= "danger" onClick={this.conductTransaction}>
						Submit
					</Button>
				</div>
			</div>
		)
	}
}

export default ConductTransaction;