import { SignInButton, SignOutButton } from "@/components/AuthButtons";
import Image from "next/image";
import Link from "next/link";

const NAVIGATION = [
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Users",
    href: "/users",
  },
];

export default function NavBar() {
  return (
    <nav className="flex gap-4 items-center justify-between shadow-md p-4 flex-wrap">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={160}
          height={50}
          className="w-40 h-auto"
        />
      </Link>
      <ul className="flex items-center gap-4 flex-wrap">
        {NAVIGATION.map(({ name, href }) => (
          <li key={href}>
            <Link href={href}>
              <span className="hover:underline">{name}</span>
            </Link>
          </li>
        ))}
        <li>
          <SignInButton />
        </li>
      </ul>
    </nav>
  );
}
