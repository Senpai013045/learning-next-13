import { useSession } from "next-auth/react";

interface Props {
  children: React.ReactNode;
}

export default function AuthCheck({ children }: Props) {
  const { status } = useSession();

  if (status === "authenticated") return <>{children}</>;
  return <></>;
}
