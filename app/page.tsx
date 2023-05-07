import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession();
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <main className="p-4">
      <h1>Next.js</h1>
      <p>Homepage</p>
    </main>
  );
}
