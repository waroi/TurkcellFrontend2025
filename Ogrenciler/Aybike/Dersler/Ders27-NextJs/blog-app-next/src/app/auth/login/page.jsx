// "use client";
// import { signIn, useSession } from "next-auth/react";
// import { useState } from "react";
// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const handleLogin = async () => {
//     const result = await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });
//     if (result?.error) {
//       alert("Giriş başarısız!");
//     } else {
    
//       window.location.href = "/";
//     }
//   };
//   return (
//     <div>
//       <h2>Giriş Yap</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Şifre"
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleLogin}>Giriş Yap</button>
//     </div>
//   );
// }
