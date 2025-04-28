import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  return (
    <div>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>
  );
};

export default Form;
