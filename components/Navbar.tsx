// components/Navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <nav>
       <div className="container mx-auto flex justify-end items-center px-6 py-4 space-x-6 text-white">
        <Link href="/" className="font-bold text-lg">
          Home
        </Link>
        <Link href="/about">
          About
        </Link>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}
