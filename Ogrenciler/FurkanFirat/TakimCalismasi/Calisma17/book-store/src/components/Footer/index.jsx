import React from "react";

export default function Footer() {
  return (
    <footer className="footer bg-orange text-white py-3 mt-auto">
      <div className="container text-center">
        <p>© {new Date().getFullYear()} BookStore. Tüm hakları saklıdır.</p>
        <p>Furkan, Fatih ve Cenk tarafından yapılmıştır.</p>
      </div>
    </footer>
  );
}
