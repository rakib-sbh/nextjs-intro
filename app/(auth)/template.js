"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const activeLink = {
  color: "red",
  padding: "10px",
  textDecoration: "none",
};

const inactiveLink = {
  color: "blue",
  padding: "10px",
  textDecoration: "none",
};

const AuthLayout = ({ children }) => {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);
        return (
          <Link
            href={link.href}
            key={link.name}
            style={isActive ? activeLink : inactiveLink}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
