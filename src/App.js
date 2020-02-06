import React, {} from 'react';
import './App.css';
import {Button, Container, Form} from 'react-bootstrap';
import Home         from './components/Home';
import DG         from './components/DG';
import Configure         from './components/Configure';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDemo: true};
    this.isDemo = this.isDemo.bind(this);
    this.state = {isHome: true};
    this.showHome = this.showHome.bind(this);
    this.state = {isConfig: true};
    this.showConfig = this.showConfig.bind(this);
  }

  isDemo() {
    this.setState(state => ({showDemo: !state.showDemo}));
    this.setState({isHome: false});
    this.setState({isConfig: true});
  }

  showHome(){
   this.setState(state =>({isHome: !state.isHome}));
   this.setState({showDemo: false});
   this.setState({isConfig: true});
  }

  showConfig(){
   this.setState(state =>({isConfig: !state.isConfig}));
   this.setState({isHome: false});
   this.setState({showDemo: false});
  }

  render(){
    const isLoggedIn = true;
    if(isLoggedIn){
      return(
        <div>
           <Form className='Main'>
              <Button variant='primary' onClick={this.showHome}>Home</Button>
              <Button variant='primary' onClick={this.showConfig}>Configure</Button>
              <Button variant='primary'onClick={this.isDemo}>{this.state.showDemo ? 'Back' : 'Demo'}</Button>
              <Button variant='primary'>Database</Button>
           </Form>
           <Container className='App'>
              <h1>This is the Main Application</h1>

           </Container>
           <DG Demo={this.state.showDemo}/>
           <Home Home={this.state.isHome}/>
           <Configure Config={this.state.isConfig}/>

        </div>
        );
      }
    else {
      return(
        <div className='App-header'></div>
      );
    }


  }
}

export default App;
