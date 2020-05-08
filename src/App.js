import React from 'react';
import Routes from './router'
import ZcHeader from './components/ZcHeader'
import ZcFooter from './components/ZcFooter'

import './App.css'

function App() {
  return (
    <div className="App">
        <ZcHeader />
        <div className="main">
          <Routes />
        </div>
        <ZcFooter />
    </div>
  );
}

export default App;

