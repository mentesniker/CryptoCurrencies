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
                  <a href="#" class="btn-main"> Get Started </a>
                </div>
              </div>
            </main>

        <section class="supporting">
          <div class="container">

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Mine</h2>
              <p>Mine a block made simple.</p>
              <a href="#"> Learn More</a>
            </div>

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Transactions</h2>
              <p>Sent or receive currency, as simple as that.</p>
              <a href="#"> Learn More</a>
            </div>

            <div class="col">
              <img src="https://s3.amazonaws.com/codecademy-content/projects/broadway/design.svg"/>
              <h2>Visualize</h2>
              <p>Watch the blockchain grow in the browser.</p>
              <a href="#"> Learn More</a>
            </div>
          </div>
        </section>
            </div>
        );
    }
}

export default App;