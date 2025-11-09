import { auth } from "~/auth";
import { redirect } from "next/navigation";
import AdminPageContent from "./AdminPageContent";
import { TRPCProvider } from "~/providers/trpc-provider";

export default async function AdminPage() {
  const session = await auth();
  console.log(session);
  const adminEmail = process.env.ADMIN_EMAIL;
  if (!session?.user || session.user.email !== adminEmail) {
    redirect("/");
  }
  return (
  <TRPCProvider>
  <AdminPageContent />
  </TRPCProvider>
  );
}
