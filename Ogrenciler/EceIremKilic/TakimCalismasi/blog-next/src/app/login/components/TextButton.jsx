import React from "react";
import Link from "next/link";
const TextButton = ({ title, route }) => {
  return (
    <div>
      <Link href={route} className="text-decoration-none text-dark">
        <p className="text-center"> {title}</p>
      </Link>
    </div>
  );
};

export default TextButton;
