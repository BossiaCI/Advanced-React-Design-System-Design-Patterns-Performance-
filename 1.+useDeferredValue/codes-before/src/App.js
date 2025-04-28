import { useState } from "react";
import HeavyComponent from "./components/heavy-component";

function App() {
  const [keyword, setKeyword] = useState("");
  return (
    <>
      <input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
      <HeavyComponent keyword={keyword} />
    </>
  );
}

export default App;
