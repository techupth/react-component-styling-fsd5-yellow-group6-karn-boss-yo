import React from 'react';
import './App.css';
import Button from './components/Button';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button color="primary" nameButton="Primary" />
        <Button color="secondary" nameButton="Secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
          <Alert severity="error" name="This is error alert box" />
          <Alert severity="warning" name="This is a warning alert box" />
          <Alert severity="info" name="This is an info alert box" />
          <Alert severity="success" name="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
