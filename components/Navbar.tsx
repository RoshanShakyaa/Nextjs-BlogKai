"use client";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

const Navbar = () => {
  const { getUser } = useKindeBrowserClient();
  const user = getUser();
  return (
    <nav className="py-5 container mx-auto flex items-center justify-between">
      <Link href="/">
        <h1 className="text-3xl font-semibold">
          Blog<span className="text-blue-400">Kai</span>
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <div className="hidden sm:flex items-center gap-6">
          <Link
            href="/"
            className=" font-medium hover:text-blue-500 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/dashboard"
            className=" font-medium hover:text-blue-500 transition-colors"
          >
            Dashboard
          </Link>
        </div>
      </div>
      {user ? (
        <div className="flex gap-4 items-center">
          <p>{user.given_name}</p>
          <LogoutLink>
            <Button variant="secondary">Logout</Button>
          </LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink>
            <Button variant="secondary">Sign In</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Sign Up</Button>
          </RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
