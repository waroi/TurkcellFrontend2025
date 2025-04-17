import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "../../context/AuthContext";

const registerSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "Password must contain at least one special character",
    }),
  confirmPassword: z.string(),
  nickname: z.string().min(1, { message: "Nickname is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  uid: z.string().optional(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const { register } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [authMethod, setAuthMethod] = useState<"email" | "mobile">("email");

  const form = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "South Korea (+82)",
      phone: "",
      uid: "",
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await register(data.email, data.password);
      toast({
        title: "Registration successful!",
        description: "You have been registered successfully.",
      });
      setLocation("/wallet");
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        title: "Registration failed",
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
        <h2 className="text-2xl font-bold mb-2">Register To Rockie</h2>
        <p className="text-gray-500">Register in advance and enjoy the event benefits</p>
      </div>

      <div className="mb-6">
        <div className="flex justify-center space-x-2 mb-8">
          <Button
            variant={authMethod === "email" ? "default" : "secondary"}
            className={authMethod === "email" ? "" : "bg-gray-100 text-gray-900"}
            onClick={() => toggleAuthMethod("email")}
            size="sm"
          >
            Email
          </Button>
          <Button
            variant={authMethod === "mobile" ? "default" : "secondary"}
            className={authMethod === "mobile" ? "" : "bg-gray-100 text-gray-900"}
            onClick={() => toggleAuthMethod("mobile")}
            size="sm"
          >
            Mobile
          </Button>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {authMethod === "email" ? (
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Email/ID</FormLabel>
                    <div className="relative">
                      <FormControl>
                        <Input
                          placeholder="Please fill in the email form"
                          {...field}
                        />
                      </FormControl>
                      <Button
                        type="button"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 bg-primary text-white text-sm"
                        size="sm"
                      >
                        Authenticate
                      </Button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ) : (
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-500">Mobile Phone</FormLabel>
                    <div className="flex">
                      <Select
                        value={form.watch("country")}
                        onValueChange={(value: string) => form.setValue("country", value)}
                      >
                        <SelectTrigger className="w-[100px] mr-2">
                          <SelectValue placeholder="Country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="South Korea (+82)">+82</SelectItem>
                          <SelectItem value="United States (+1)">+1</SelectItem>
                          <SelectItem value="United Kingdom (+44)">+44</SelectItem>
                          <SelectItem value="Japan (+81)">+81</SelectItem>
                        </SelectContent>
                      </Select>
                      <div className="relative flex-1">
                        <FormControl>
                          <Input
                            placeholder="Your Phone Number"
                            {...field}
                          />
                        </FormControl>
                        <Button
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 bg-primary text-white text-sm"
                          size="sm"
                        >
                          Authenticate
                        </Button>
                      </div>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                        placeholder="Enter your password"
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

            <Button
              type="submit"
              className="w-full py-3 mt-4"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Processing..." : "Register"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default RegisterForm;