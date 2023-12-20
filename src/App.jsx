import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button type="primary" text="Button" />
        <Button type="secondary" text="Button" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert severity="error" text="This is error alert box" />
        <Alert severity="warning" text="This is a warning alert box" />
        <Alert severity="info" text="This is an info alert box" />
        <Alert severity="success" text="This is a success alert box" />
      </div>
    </div>
  );
}

export default App;
