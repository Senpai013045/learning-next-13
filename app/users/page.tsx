import { prisma } from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";

export default async function Users() {
  const users = await prisma.user.findMany();
  return (
    <main className="p-4">
      <div className="flex items-center flex-wrap gap-4">
        {users.map((user) => {
          return (
            <Link href={`/users/${user.id}`} key={user.id}>
              <div className="cursor-pointer bg-gray-100 p-4 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  {user.image && (
                    <Image
                      src={user.image}
                      width={100}
                      height={100}
                      alt={user.name || "user image"}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <p className="mt-4">{user.name}</p>
                <p>{user.email}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
