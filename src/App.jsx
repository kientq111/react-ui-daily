import { useState } from "react";
// import Login from "@components/login
// import LoginVerification from "@components/loginVerification";
// import VerifyEmail from "@/components/verifyEmail";
import ReceivedCode from "./components/receivedCode";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <ReceivedCode />
    </div>
  );
}

export default App;
