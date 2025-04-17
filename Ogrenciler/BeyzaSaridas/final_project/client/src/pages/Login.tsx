import LoginForm from "../components/auth/LoginForm";

const Login = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Login</h1>
        <div className="flex items-center text-sm text-gray-500 mt-1">
          <a href="/" className="hover:text-primary">Home</a>
          <span className="mx-2">/</span>
          <span>Login</span>
        </div>
      </div>

      <LoginForm />
    </div>
  );
};

export default Login;