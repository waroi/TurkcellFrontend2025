import { useState, useContext } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { LanguageContext } from "@/context/LanguageContext";
import { AuthContext } from "@/context/AuthContext";

const registerSchema = z
  .object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/^(?=.*[0-9])(?=.*[!@#$%^&*])/, {
        message:
          "Password must include at least one number and one special character",
      }),
    confirmPassword: z.string(),
    username: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(20, { message: "Username must be at most 20 characters" }),
    country: z.string(),
    phone: z.string().optional(),
    uidCode: z.string().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormValues = z.infer<typeof registerSchema>;

const RegisterForm = () => {
  const { t } = useContext(LanguageContext);
  const { register, isLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      username: "",
      country: "US",
      phone: "",
      uidCode: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await register({
        username: data.username,
        email: data.email,
        password: data.password,
        fullName: "",
        phone: data.phone,
        country: data.country,
      });
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6">
      <h2 className="text-2xl font-semibold text-center mb-2 dark:text-white">
        {t("auth.registerTitle")}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-center mb-6">
        {t("auth.registerIntro")}
      </p>

      <Tabs
        defaultValue="email"
        className="mb-6"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <TabsList className="w-full grid grid-cols-2">
          <TabsTrigger value="email" className="rounded-l-md">
            {t("auth.email")}
          </TabsTrigger>
          <TabsTrigger value="mobile" className="rounded-r-md">
            Mobile
          </TabsTrigger>
        </TabsList>

        <TabsContent value="email">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.email")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please fill in the email form"
                        {...field}
                        className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.password")}{" "}
                      <span className="text-neutral-500 text-xs">
                        {t("auth.passwordRequirements")}
                      </span>
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Please enter a password"
                          {...field}
                          className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Please re-enter your password"
                          {...field}
                          className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-500"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.nickname")}{" "}
                      <span className="text-neutral-500 text-xs">
                        {t("auth.nicknameHint")}
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your username"
                        {...field}
                        className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.country")}
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                          <SelectValue placeholder="Select a country" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="dark:bg-neutral-800 dark:border-neutral-700">
                        <SelectItem value="US">United States (+1)</SelectItem>
                        <SelectItem value="KR">South Korea (+82)</SelectItem>
                        <SelectItem value="JP">Japan (+81)</SelectItem>
                        <SelectItem value="UK">United Kingdom (+44)</SelectItem>
                        <SelectItem value="TR">Turkey (+90)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.phone")}{" "}
                      <span className="text-neutral-500 text-xs">
                        {t("auth.phoneHint")}
                      </span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (555)123-4567 (Without '-')"
                        {...field}
                        className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="uidCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.uidCode")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Please enter your invitation code"
                        {...field}
                        className="dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : t("auth.preRegistration")}
              </Button>

              <div className="text-center text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">
                  {t("auth.alreadyMember")}
                </span>
                <Link
                  href="/auth?tab=login"
                  className="text-primary font-medium ml-1 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {t("auth.login")}
                </Link>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="mobile">
          <div className="py-8 text-center text-neutral-600 dark:text-neutral-400">
            Mobile registration form content
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RegisterForm;
