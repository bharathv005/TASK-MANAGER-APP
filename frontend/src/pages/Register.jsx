import { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      toast.success("Registration successful");

      navigate("/");
    } catch (error) {
      toast.error("Registration failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-green-600 mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-8">
          Start managing tasks today
        </p>

        <input
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition"
        >
          Register
        </button>

        <p className="text-center mt-5 text-gray-600">
          Already have account?
          <Link
            to="/"
            className="text-green-600 ml-2 font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;