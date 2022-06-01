import React from 'react';
import FileUpload from './components/FileUpload';
import './App.css';

const App = () => (
  <body>
    <div className='container mt-4'>
      <h4 className='display-4 text-center mb-4'>
        <i className='fab fa-react' /> Utilizando React File Server
      </h4>

      <FileUpload />
    </div>
  </body>
);

export default App;
