import { Route, Routes } from "react-router-dom";
import SignUp from "./component/userInfo/SignUp";

import SecondPage from "./component/login/SecondPage";
import "./App.css";

function App() {
  console.log("99");

  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/secondpage" element={<SecondPage />} />
      </Routes>
    </>
  );
}

export default App;
