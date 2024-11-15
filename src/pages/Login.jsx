import React, { useState } from "react";
import logo from "./../assets/logo.png";
import { login, signup } from "../firebase";
import netflix_spinner from './../assets/netflix_spinner.gif'
function Login() {
  const [signState, setSignState] = useState("Sign In");
  const [loading,setloading]=useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    setloading(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setloading(false);
  };

  return (
    loading? <div className="w-[100%] h-[100vh] flex items-center justify-center"><img className="w-[60px]" src={netflix_spinner} alt="" /></div> :
    <div className="h-[100vh] bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/background_banner.jpg')] py-[20px] px-[8%]">
      <img src={logo} alt="" className="w-[150px]" />
      <div className="flex  h-[90%]">
        <div className="w-[100%] max-w-[450px] bg-[rgba(0,0,0,0.75)] , rounded-[4px] p-[60px] m-auto">
          <form>
            <h1 className="text-[32px] font-bold mb-[28px]">{signState}</h1>
            {signState === "Sign Up" ? (
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Your Name"
                className="w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[15px] font-medium"
              />
            ) : (
              <></>
            )}

            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Email"
              className="w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[15px] font-medium"
            />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Password"
              className="w-[100%] h-[50px] bg-[#333] text-white my-[12px] mx-0 border-0 outline-0 rounded-[4px] py-[16px] px-[20px] text-[15px] font-medium"
            />
            <button
              onClick={user_auth}
              type="submit"
              className="w-[100%] border-0 outline-0 p-[9px] bg-[#e50914] text-white rounded-md text-[16px] font-medium mt-[20px] cursor-pointer "
            >
              {signState}
            </button>
            <div className="flex items-center justify-between text-[#b3b3b3] text-[13px] mt-[20px]">
              <div className="flex items-center gap-[5px] cu ">
                <input type="checkbox" className="w-[18px] h-[18px] " />
                <label htmlFor="">Remember Me</label>
              </div>
              <p className="underline cursor-pointer">Need Help?</p>
            </div>
          </form>
          <div className="mt-[40px] text-[#737373]">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-medium cursor-pointer underline"
                  onClick={() => {
                    setSignState("Sign Up");
                  }}
                >
                  Sign Up Now
                </span>
              </p>
            ) : (
              <p>
                Already have account?{" "}
                <span
                  className="ml-[6px] text-[#fff] font-medium cursor-pointer underline"
                  onClick={() => {
                    setSignState("Sign In");
                  }}
                >
                  Sign In Now
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
