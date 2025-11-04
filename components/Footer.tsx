// components/Footer.tsx
export function Footer() {
  return (
    <footer className="text-center py-6 text-gray-500 text-sm border-t mt-10">
      © {new Date().getFullYear()} Margaret Ajibola. Built with Next.js & TypeScript.
    </footer>
  );
}
