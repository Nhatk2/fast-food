import React, { useState, useEffect } from "react";
import "./Login.scss";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const Login = () => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [hidepassword, sethidepassword] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const togglehide = () => {
    sethidepassword(!hidepassword);
    setShowPassword(!showPassword);
  };
 
  const ProccedLogin = (e) => {
    e.preventDefault();
    let inputobj = { username: username, password: password };
    if (validate()) {
      fetch("https://localhost:3000/port", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(inputobj),
      })
      .then((res) => {
        alert("Registered successfully.");
      })
      .catch((err) => {
        alert("Failed :" + err.message);
      });
    }
  };
  useEffect(() => {
    localStorage.clear();
  }, []);

  const validate = () => {
    let result = true;
    if (username === "" || password === null) {
      result = false;
      alert("Please Enter Username!");
    }
    if (username === null || password === "") {
      result = false;
      alert("Please Enter Password!");
    }
    return result;
  };

  return (
    <div className="form m-auto">
      <form className="login-form " onSubmit={ProccedLogin}>
        <h1 className="p-3 text-blue">Login Page</h1>

        <div className="border mb-2 ">
          <AiOutlineUser className="mr" />
          <input
            type="text"
            placeholder="Input Your Email....."
            className="border-black"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div className="border">
          <AiFillLock className="mr" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Input Your Password...."
            value={password}
            onChange={(e) => setpassword(e.target.value)}
          />
          {hidepassword ? (
            <span onClick={togglehide}>
              <AiFillEye size={23} />
            </span>
          ) : (
            <span onClick={togglehide}>
              <AiFillEyeInvisible size={23} />
            </span>
          )}
        </div>
        <button type="submit" className="w-[120px] bg-sky">
          Login
        </button>
        <span>
          {" "}
          Or{" "}
          <Link to="/register" className="text-blue">
            register now
          </Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;
