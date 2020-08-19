import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/logo.png';

class App extends Component{
    render(){
        return (
            <div className='App'>
            <main>
              <div class="jumbotron">
                <div class="container">
                  <h1>We are the future</h1>
                  <a href="/get-started" class="btn-main"> Get Started </a>
                </div>
              </div>
            </main>

        <section class="supporting">
          <div class="container">

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Mine</h2>
              <p>Mine a block was never more easier. Just press a button</p>
              <a href="/get-started#mine"> Learn More</a>
            </div>

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Transactions</h2>
              <p>Sent or receive currency, as simple as that.</p>
              <a href="/get-started#send"> Learn More</a>
            </div>

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Visualize</h2>
              <p>Watch the blockchain grow in the browser.</p>
              <a href="/get-started#visualize"> Learn More</a>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default App;