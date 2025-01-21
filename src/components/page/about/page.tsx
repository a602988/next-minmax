import { Link } from "@/i18n/routing";

export default function AboutPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <nav className="flex space-x-4 mb-4">
        <Link href="/public" className="text-blue-500 hover:underline">
          Home
        </Link>
      </nav>
    </main>
  );
}
