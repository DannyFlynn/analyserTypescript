import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

//page
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
