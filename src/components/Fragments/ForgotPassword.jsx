import React from "react";
import Logo from "../Elements/Logo";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom"; // Assuming you're using react-router

const ForgotPassword = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-special-mainBg">
      <div className="w-full max-w-sm ">
        {/* Logo */}
        <Logo />

        {/* Title and Description */}
        <div className="text-center">
          <h1 className="text-xl font-bold mt-6 mb-2 text-gray-900">
            Forgot Password?
          </h1>
          <p className="text-sm mb-6 text-gray-600">
            Enter your email address to get the password reset link.
          </p>
        </div>

        {/* Input Field */}
        <LabeledInput
          type="email"
          labelText="Email Address"
          placeholder="hello@example.com"
          name="email"
          id="email"
        />

        {/* Reset Button */}
        <Button> Password Reset </Button>

        {/* Back to Login center */}
        <Link to="/" className="block mt-4 text-secondary text-sm font-bold text-center">
          Back to login
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassword;