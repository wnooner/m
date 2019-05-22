import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import Landing from './Components/Landing/Landing'
import Services from './Components/Services/Services'

function App() {
  return (
    <React.Fragment >
      <Header />
      <Landing />
      <Services />
    </React.Fragment>
  );
}

export default App;
