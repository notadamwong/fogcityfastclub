import type { AppProps } from "next/app";
import Link from "next/link";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-2">Fog City Fast Club — Song of the Week</h1>
      <p className="text-sm opacity-70">New track every Friday.</p>
    </main>
  );
}
