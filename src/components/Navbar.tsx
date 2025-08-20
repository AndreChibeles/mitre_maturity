import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b bg-white shadow-sm">
      <div>
        <Link href="/" className="font-bold text-xl text-blue-700 hover:underline">
          MITRE Maturity
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/maturity" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
          Maturity Page
        </Link>
        <Link href="/login" className="px-4 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-50">
          Login
        </Link>
      </div>
    </nav>
  );
}
