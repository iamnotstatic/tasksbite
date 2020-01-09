import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize Js
    M.AutoInit();
  });
  return <div className="App">my app</div>;
};

export default App;
