// src/common/components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">AI Workflow Builder</h1>
      <nav className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/select-framework">Select Framework</Link>
        <Link href="/design">Design</Link>
        <Link href="/code">Code</Link>
        <Link href="/test">Test</Link>
        <Link href="/deploy">Deploy</Link>
      </nav>
    </header>
  );
}