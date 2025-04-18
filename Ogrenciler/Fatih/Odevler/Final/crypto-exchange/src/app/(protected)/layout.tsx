import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = cookies();
  const userToken = await cookieStore.get("userToken");

  if (!userToken) {
    redirect("/login");
  }

  return <>{children}</>;
}
