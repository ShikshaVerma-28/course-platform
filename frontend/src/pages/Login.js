import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });

      localStorage.setItem("token", res.data.token); 
      alert("Login successful!");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)}
            placeholder="Email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-500" />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}
            placeholder="Password" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-indigo-500" />
          <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">Login</button>
        </form>
      </div>
    </div>
  );
}
