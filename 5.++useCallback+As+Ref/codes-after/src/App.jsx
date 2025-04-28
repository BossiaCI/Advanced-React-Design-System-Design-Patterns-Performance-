import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const realInputRef = useRef(null);
  const inputRef = useCallback((input) => {
    realInputRef.current = input;
    if (input === null) return;
    input.focus();
  }, []);

  return (
    <>
      <button onClick={() => setShow((s) => !s)}>Switch</button>
      {show && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
