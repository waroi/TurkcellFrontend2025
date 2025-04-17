import { useState, useEffect, useContext } from "react";
import { useLocation, useSearch } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import LoginForm from "@/components/auth/LoginForm";
import RegisterForm from "@/components/auth/RegisterForm";
import { AuthContext } from "@/context/AuthContext";
import { LanguageContext } from "@/context/LanguageContext";

const AuthPage = () => {
  const { t } = useContext(LanguageContext);
  const { user } = useContext(AuthContext);
  const [location, navigate] = useLocation();
  const search = useSearch();
  const searchParams = new URLSearchParams(search);
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<string>(
    tabParam === "register" ? "register" : "login"
  );

  useEffect(() => {
    const newParams = new URLSearchParams(search);
    newParams.set("tab", activeTab);
    navigate(`/auth?${newParams.toString()}`, { replace: true });
  }, [activeTab, navigate, search]);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row gap-10 items-center md:items-stretch">
        <div className="w-full md:w-1/2">
          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="grid w-full grid-cols-2 mb-6">
              <TabsTrigger value="login">{t("auth.login")}</TabsTrigger>
              <TabsTrigger value="register">{t("auth.register")}</TabsTrigger>
            </TabsList>

            <TabsContent value="login">
              <LoginForm />
            </TabsContent>

            <TabsContent value="register">
              <RegisterForm />
            </TabsContent>
          </Tabs>
        </div>

        <div className="w-full md:w-1/2 bg-primary/10 dark:bg-primary/5 rounded-lg p-6 md:p-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4 text-primary">
              Welcome to Rocket Crypto Exchange
            </h2>
            <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
              The trusted platform for trading cryptocurrencies. Experience
              secure, reliable, and fast trading with advanced features.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                <div className="font-bold text-xl mb-1 dark:text-white">
                  100+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Cryptocurrencies
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                <div className="font-bold text-xl mb-1 dark:text-white">
                  50M+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Registered Users
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                <div className="font-bold text-xl mb-1 dark:text-white">
                  $1B+
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Daily Volume
                </div>
              </div>

              <div className="bg-white dark:bg-neutral-800 p-4 rounded-lg shadow-sm">
                <div className="font-bold text-xl mb-1 dark:text-white">
                  24/7
                </div>
                <div className="text-neutral-600 dark:text-neutral-400">
                  Customer Support
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start space-x-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
                alt="Android app"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                alt="iOS app"
                className="w-8 h-8"
              />
              <span className="text-neutral-600 dark:text-neutral-400">
                Available on iOS and Android
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
