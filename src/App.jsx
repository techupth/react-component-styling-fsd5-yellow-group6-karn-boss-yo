import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* ถ้าสร้าง Component ของ Button เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        
        <Button type="primary" text="Large" />

        <Button type="secondary" text="Large" />

        {/* <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button> */}
      </div>
      <hr />
      <div className="alert-components-section">
        {/* ถ้าสร้าง Component Alert เสร็จแล้วให้ Uncomment โค้ดด้านล่าง เพื่อดูผลลัพธ์ */}
        
        <Alert status="error" text="This is error alert box" />
        <Alert status="warning" text="This is warning alert box" />
        <Alert status="info" text="This is info alert box" />
        <Alert status="success" text="This is success alert box" />

        {/*
          <Alert severity="error">This is error alert box</Alert>
          <Alert severity="warning">This is a warning alert box</Alert>
          <Alert severity="info">This is an info alert box</Alert>
          <Alert severity="success">This is a success alert box</Alert>
        */}
      </div>
    </div>
  );
}

export default App;
