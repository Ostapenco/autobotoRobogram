import React from 'react';

import './App.css';
import Header from './components/header/header';
import InfoBlock from './components/infoBlock/infoBlock';
import PhotoBlock from './components/photoBlock/photoBlock';


const App = () => {

  const user = 'ebsintegrator';

  return (
    <div className="App">

      <Header />
      <div className="bodyContainer">
        <InfoBlock user={user} />
        <PhotoBlock user={user} />
      </div>

    </div >
  );
}

export default App;
