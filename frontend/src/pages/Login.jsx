import { useState } from "react";
import { loginUser } from "../services/authServices.js";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

const handleLogin = async () => {
  setError("");

  try {

    const data = await loginUser(email, password);

    localStorage.setItem("token", data.token);

    navigate("/dashboard");

  } catch (err) {

    setError(err.response?.data?.error || "Login failed");

  }
};

 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900/40 dark:text-white">

    {/* Greeting */}
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Welcome Back! 🙌
      </h1>
      <p className="text-gray-600 dark:text-white">
        Your Productivity Assistant
      </p>
    </div>

    {/* Login Card */}
    <div className="bg-gradient-to-br from-green-300 to-green-700 p-6 rounded-xl shadow-lg w-72">

      <h2 className="text-white text-xl font-semibold text-center mb-4">
        Login
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-3 p-2 rounded border border-white/40 bg-blue-400/20 text-white placeholder-white"
      />

<div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    placeholder="Password"       
    value={password}     
    onChange={(e) => setPassword(e.target.value)}                                                                  
    className="w-full mb-4 p-2 rounded border border-white/40 bg-blue-400/20 text-white placeholder-white"
  />

  <span
    className="absolute right-3 top-2 cursor-pointer text-white"
    onClick={() => setShowPassword(!showPassword)}
  >
    {showPassword ? "✌️" : "👀"}
  </span>
</div>
{error && (
  <p className="text-red-800 text-sm mb-3">
    {error}
  </p>
)}
      

      <button
        onClick={handleLogin}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 rounded font-semibold"
      >
        Login
      </button>

      <p className="text-center text-white mt-4">
        New user?{" "}
        <span
          className="font-bold cursor-pointer underline"
          onClick={() => navigate("/register")}
        >
          Register here
        </span>
      </p>

      <p
  className="text-sm text-blue-700 hover:text-blue-900 text-center font-bold underline cursor-pointer mb-3 mt-1"
  onClick={() => navigate("/forgot-password")}
> 
Forgotpassword?
</p>

    </div>

    {/* Footer */}
    <div className="text-center mt-6 text-sm text-gray-600 space-y-1 dark:text-white">
      <p className="font-semibold">© 2026 Productivity Assistant</p>
      <p>Built with React • Tailwind • Spring Boot • Java + MySQL</p>
      <p className="font-semibold">~ Subramanya V</p>
    </div>

  </div>
);}

export default Login