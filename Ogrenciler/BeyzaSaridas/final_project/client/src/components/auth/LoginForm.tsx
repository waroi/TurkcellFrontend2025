import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "../../context/AuthContext";

const loginSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { login, loginWithGoogle } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "mobile">("email");

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      toast({
        title: "Login successful!",
        description: "You have been logged in successfully.",
      });
      setLocation("/wallet");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast({
        title: "Login successful!",
        description: "You have been logged in with Google successfully.",
      });
      setLocation("/wallet");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  const toggleAuthMethod = (method: "email" | "mobile") => {
    setAuthMethod(method);
  };

  return (
    <div className="max-w-xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Login To Rockie</h2>
        <p className="text-gray-500">Welcome back! Log in now to start trading</p>
      </div>

      <div className="bg-green-100 text-green-600 rounded-md px-4 py-2 mb-8">
        https://accounts.rockie.com/login
      </div>

      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-8">
          <Button
            variant={authMethod === "email" ? "default" : "secondary"}
            className={`${authMethod === "email" ? "" : "bg-gray-100 text-gray-900"} rounded-full`}
            onClick={() => toggleAuthMethod("email")}
            size="sm"
          >
            Email
          </Button>
          <Button
            variant={authMethod === "mobile" ? "default" : "secondary"}
            className={`${authMethod === "mobile" ? "" : "bg-gray-100 text-gray-900"} rounded-full`}
            onClick={() => toggleAuthMethod("mobile")}
            size="sm"
          >
            Mobile
          </Button>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="flex-1 mb-6 md:mb-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                {authMethod === "email" ? (
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-gray-500">Email/ID</FormLabel>
                        <FormControl>
                          <Input placeholder="Please fill in the email form" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ) : (
                  <div className="space-y-4">
                    <FormItem>
                      <FormLabel className="text-gray-500">Mobile Phone</FormLabel>
                      <div className="flex">
                        <select className="w-[80px] mr-2 rounded-md border-gray-200">
                          <option>+82</option>
                          <option>+1</option>
                          <option>+44</option>
                          <option>+81</option>
                        </select>
                        <Input placeholder="Your Phone Number" />
                      </div>
                    </FormItem>
                  </div>
                )}

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-500">Password</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={showPassword ? "text" : "password"}
                            placeholder="Please enter a password..."
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 text-gray-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                        </Button>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between mb-6">
                  <div className="flex items-center">
                    <FormField
                      control={form.control}
                      name="rememberMe"
                      render={({ field }) => (
                        <FormItem className="flex items-center space-x-2">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              id="remember-me"
                            />
                          </FormControl>
                          <label
                            htmlFor="remember-me"
                            className="text-sm text-gray-500 cursor-pointer"
                          >
                            Remember Me
                          </label>
                        </FormItem>
                      )}
                    />
                  </div>
                  <Link href="/forgot-password">
                    <a className="text-sm text-red-500 hover:underline">Forgot Password?</a>
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full py-3"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? "Logging in..." : "Login"}
                </Button>

                <div className="text-center mt-3">
                  <span className="text-sm text-gray-500">Not A Member? </span>
                  <Link href="/register">
                    <a className="text-sm text-primary hover:underline">Register</a>
                  </Link>
                </div>
              </form>
            </Form>
          </div>

          <div className="md:w-48">
            <div className="bg-gray-50 rounded-md p-4 text-center">
              <div className="mb-2 text-sm font-medium">Login With QR Code</div>
              <div className="text-xs text-gray-500 mb-2">
                Scan this code with the Rockie mobile app to log in instantly
              </div>
              <div className="bg-gray-200 w-32 h-32 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;