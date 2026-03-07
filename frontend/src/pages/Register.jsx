import { useState } from "react";
import { Link } from "react-router-dom";
import { registerUser } from "../services/authServices.js";
import { useNavigate } from "react-router-dom";


function Register() {
const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const [showPassword, setShowPasswor] = useState(false);
 
  const handleRegister = async () => {
  try {
    setError("");

    await registerUser(name, email, password);

    navigate("/login");
  } catch (err) {
    setError("User already registered. Please login.");
  }
};


 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900/40 dark:text-white">

    {/* Greeting */}
    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-blue-600">
        Hello 👋
      </h1>
      <p className="text-gray-600 dark:text-white">
        I'm your Productivity Assistant
      </p>
    </div>

    {/* Register Card */}
    <div className="bg-gradient-to-br from-blue-300 to-blue-700 p-6 rounded-xl shadow-lg w-72">

      <h2 className="text-white text-xl font-semibold text-center mb-4">
        Register
      </h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-3 p-2 rounded border border-white/40 bg-blue-400/20 text-white placeholder-white"
      />

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
  <p className="text-red-800 text-sm mt-2 mb-4 text-center">
    {error}
  </p>
)}
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded font-semibold"
      >
        Register
      </button>

      <p className="text-center text-white mt-4">
        Already registered?{" "}
        <span
          className="font-bold cursor-pointer underline"
          onClick={() => navigate("/login")}
        >
          Login
        </span>
      </p>

    </div>

    {/* Footer */}
    <div className="text-center mt-6 text-sm text-gray-600 space-y-1 dark:text-white">
      <p className="font-semibold">© 2026 Productivity Assistant</p>
      <p>Built with React • Tailwind • Spring Boot • Java + MySQL</p>
      <p className="font-semibold">~ Subramanya V</p>
    </div>

  </div>
);
}

export default Register