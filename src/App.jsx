import { useState } from "react";
import Login from "@components/login";
import LoginVerification from "@components/loginVerification";
import VerifyEmail from "@components/verifyEmail";
import ReceivedCode from "@components/receivedCode";
import SubjectTag from "@components/subjectTag";
import ListUser from "@components/listUser";
import DetailCard from "@components/detailCard";
import BuySubScription from "@components/buySubscription";
import ProductIntro from "@components/productIntro";
import SettingAccount from "@components/settingAccount";
import ProductPage from "@components/productPage";
import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-slate-200">
      <ProductPage />
    </div>
  );
}

export default App;
