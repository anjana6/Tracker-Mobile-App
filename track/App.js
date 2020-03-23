import React from 'react';
import Nav from './Nav';
import configureStore from './src/configureStore';
import {Provider} from 'react-redux';



const App = () => {

  return (
    <Provider store={configureStore}>
      <Nav/>
    </Provider>
  );
    
}

export default App;
