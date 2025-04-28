import { useEffect, useRef } from "react";

function App() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return <input type="text" ref={inputRef} />;
}

export default App;
