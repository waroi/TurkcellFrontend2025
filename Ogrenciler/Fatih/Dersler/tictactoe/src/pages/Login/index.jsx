import React from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import LoginForm from "../../components/organisms/LoginForm";

function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}

export default LoginPage;
