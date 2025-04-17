import { useState, useContext } from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, LinkIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LanguageContext } from "@/context/LanguageContext";
import { AuthContext } from "@/context/AuthContext";

const loginSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm = () => {
  const { t } = useContext(LanguageContext);
  const { login, isLoading } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      await login({
        username: data.username,
        password: data.password,
      });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-neutral-800 rounded-lg shadow-sm border border-neutral-200 dark:border-neutral-700 p-6">
      <h2 className="text-2xl font-semibold text-center mb-2 dark:text-white">
        {t("auth.loginTitle")}
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 text-center mb-6">
        {t("auth.welcomeBack")}
      </p>

      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center space-x-2 text-green-600 bg-green-50 dark:bg-green-900/30 px-4 py-2 rounded-md text-sm">
          <LinkIcon className="w-5 h-5" />
          <span>https://accounts.rockie.com/login</span>
        </div>
      </div>

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
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-neutral-700 dark:text-neutral-300">
                      {t("auth.email")}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={t("auth.email")}
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
                      {t("auth.password")}
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder={t("auth.password")}
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

              <div className="flex items-center justify-between">
                <FormField
                  control={form.control}
                  name="rememberMe"
                  render={({ field }) => (
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rememberMe"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="rounded data-[state=checked]:bg-primary data-[state=checked]:text-white"
                      />
                      <label
                        htmlFor="rememberMe"
                        className="text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer"
                      >
                        {t("auth.rememberMe")}
                      </label>
                    </div>
                  )}
                />

                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {t("auth.forgotPassword")}
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-primary hover:bg-primary/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : t("auth.loginAction")}
              </Button>

              <div className="text-center text-sm">
                <span className="text-neutral-600 dark:text-neutral-400">
                  {t("auth.notMember")}
                </span>
                <Link
                  href="/auth?tab=register"
                  className="text-primary font-medium ml-1 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  {t("auth.register")}
                </Link>
              </div>
            </form>
          </Form>
        </TabsContent>

        <TabsContent value="mobile">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Mobile Phone
              </label>
              <div className="flex">
                <div className="w-16 flex items-center justify-center border border-r-0 border-neutral-300 dark:border-neutral-700 rounded-l-md bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400">
                  +1
                </div>
                <Input
                  placeholder="Phone Number"
                  className="rounded-l-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                {t("auth.password")}
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder={t("auth.password")}
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
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="rememberMeMobile" className="rounded" />
                <label
                  htmlFor="rememberMeMobile"
                  className="text-sm text-neutral-700 dark:text-neutral-300 cursor-pointer"
                >
                  {t("auth.rememberMe")}
                </label>
              </div>

              <Link
                href="/forgot-password"
                className="text-sm text-primary hover:text-blue-800 dark:hover:text-blue-300"
              >
                {t("auth.forgotPassword")}
              </Link>
            </div>

            <Button
              type="submit"
              className="w-full py-3 bg-primary hover:bg-primary/90 text-white"
            >
              {t("auth.loginAction")}
            </Button>

            <div className="text-center text-sm">
              <span className="text-neutral-600 dark:text-neutral-400">
                {t("auth.notMember")}
              </span>
              <Link
                href="/auth?tab=register"
                className="text-primary font-medium ml-1 hover:text-blue-800 dark:hover:text-blue-300"
              >
                {t("auth.register")}
              </Link>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          <div className="w-1/3 h-px bg-neutral-200 dark:bg-neutral-700"></div>
          <div className="text-neutral-500 dark:text-neutral-400 text-sm px-2">
            {t("auth.loginWithQR")}
          </div>
          <div className="w-1/3 h-px bg-neutral-200 dark:bg-neutral-700"></div>
        </div>

        <div className="flex justify-center mt-4">
          <div className="w-32 h-32 bg-neutral-200 dark:bg-neutral-700 rounded-md flex items-center justify-center">
            <svg
              className="w-24 h-24 text-neutral-400 dark:text-neutral-500"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 3H9V9H3V3Z M4 4V8H8V4H4Z M15 3H21V9H15V3Z M16 4V8H20V4H16Z M3 15H9V21H3V15Z M4 16V20H8V16H4Z M10 3H14V7H10V3Z M10 11H14V21H10V11Z M15 10H17V14H15V10Z M18 10H21V14H18V10Z M15 15H21V21H15V15Z M16 16V20H20V16H16Z"></path>
            </svg>
          </div>
        </div>

        <div className="text-center text-sm text-neutral-500 dark:text-neutral-400 mt-4">
          {t("auth.scanQRHint")}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
