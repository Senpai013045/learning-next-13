import { prisma } from "@/lib/prisma";
import Image from "next/image";

interface Props {
  params: {
    id: string;
  };
}

const findUser = async (id: string) => {
  return prisma.user.findUniqueOrThrow({
    where: {
      id,
    },
  });
};

// export async function generateMetadata({ params }: Props) {
//   const user = await findUser(params.id);
//   return {
//     title: user?.name,
//     description: user?.email,
//   };
// }

export default async function User({ params }: Props) {
  const user = await findUser(params.id);

  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <main className="p-4">
      <div className="flex items-center gap-x-10">
        {user.image && (
          <div className="w-24 h-24 rounded-full overflow-hidden">
            <Image
              src={user.image}
              width={100}
              height={100}
              alt={user.name || "user image"}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div>
          <p className="mt-4">{user.name}</p>
          <p>{user.email}</p>
        </div>
      </div>
    </main>
  );
}
