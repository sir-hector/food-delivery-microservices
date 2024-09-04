import { useState } from "react";
import Login from "../shared/auth/Login";
import SignUp from "../shared/auth/Signup";

const AuthScreen = () => {
  const [activeState, setActiveState] = useState("Login");
  return (
    <div className="w-full fixed top-0 left-0 h-screen z-50 flex items-center justify-center bg-[#00000032]">
      <div className="w-[450px] bg-slate-900 rounded shadow-sm p-3">
        {activeState === "Login" && <Login setActiveState={setActiveState} />}
        {activeState === "Signup" && <SignUp setActiveState={setActiveState} />}
      </div>
    </div>
  );
};

export default AuthScreen;
