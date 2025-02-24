import { useState } from "react";
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);  // Step 2

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />  {/* Step 3 */}
      <Authenticate token={token} setToken={setToken} />
    </>
  );
}

export default App;


