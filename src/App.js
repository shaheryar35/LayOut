import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import ContactUs from './Components/ContactUs';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
   <Header />
     <Switch>
              <Route exact path="/" render={()=><h1>Home</h1>} />
              <Route exact path="/home" render={()=><h1>Home Componet</h1>} />
              <Route exact path="/aboutus" render={()=><h1>About Componet</h1>} />
              <Route exact path="/gellary" render={()=><h1>Gellary Componet</h1>} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/search" component={Search}/>
             
              
            </Switch>
  </div>
 </Router>
   
  );
}

export default App;
