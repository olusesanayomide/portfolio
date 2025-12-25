import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-semibold">
          Ayo.dev
        </Link>

        {/* Links */}
<div className="flex gap-6 flex-wrap text-sm font-medium">
          <Link href="#projects" 
      className="hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition">
            Projects
          </Link>
           
         </div>
      </nav>
    </header>
  );
}
