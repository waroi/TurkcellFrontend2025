import React, { useState } from "react";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

    const handleLogin = async () => {
        try {
            const login = await login()
        }
    }

  return (
    <>
      <div>
        <form>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default LoginView;
