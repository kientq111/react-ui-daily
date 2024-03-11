import { useState } from "react";
// import Login from "@components/login
// import LoginVerification from "@components/loginVerification";
import VerifyEmail from "@/components/verifyEmail";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <VerifyEmail />
    </div>
  );
}

export default App;
