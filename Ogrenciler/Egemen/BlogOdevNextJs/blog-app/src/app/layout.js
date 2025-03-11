"use client";


import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { getBlog } from "../../services/Api"
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';






export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body >
        {children}


        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossOrigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossOrigin="anonymous"></script>

      </body>
    </html>
  );
}
