import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return (
    <div className="alert" onClick={onClose}>
      {children}
    </div>
  );
};

export default App;
