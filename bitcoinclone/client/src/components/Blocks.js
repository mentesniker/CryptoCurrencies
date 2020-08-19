import React, {Component} from 'react';
import Block from './Block';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css';
class Blocks extends Component {
	state = {blocks: []};

	componentDidMount(){
		fetch('http://localhost:3000/api/blocks').then(response => response.json()).then(json => this.setState({blocks: json}));
	}

	render(){
		return(
			<div style={{paddingTop: "5%"}}>
				<h2 style={{textAlign:"center",paddingTop: "5%"}}>BlockChain</h2>
				<div style={{paddingTop:"3%",paddingLeft:"20%",paddingBottom:"5%",paddingRight:"20%"}}>
					<Table striped bordered hover dataPagination>
						<thead>
						    <tr>
						      <th>Hash</th>
						      <th>Timestamp</th>
						      <th>Data</th>
						    </tr>
						</thead>
						<tbody>
							{
								this.state.blocks.map(block => {
									return(
										<tr>
											<td>{`${block.hash.substring(0, 15)}...`}</td>
											<td>{block.timestamp}</td>
											<td><Block key={block.hash} block={block} /></td>
										</tr>
									)
								})
							}
						</tbody>
					</Table>
				</div>
			</div>
		);
	}
}

export default Blocks;