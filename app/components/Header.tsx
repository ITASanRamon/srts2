import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-900 to-blue-700 text-white py-8 px-4 text-center shadow-md">
      <div className="flex flex-col items-center gap-2">
        <Image src="/tamil_school_logo.svg" alt="San Ramon Tamil School Logo" width={80} height={80} className="rounded-lg shadow" />
        <h1 className="text-3xl font-bold tracking-wide">San Ramon ITA School</h1>
      </div>
      <nav className="mt-6">
        <ul className="flex flex-wrap justify-center gap-6 text-lg font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/schedule">Schedule</Link></li>
          <li><Link href="/teachers">Teachers</Link></li>
          <li><Link href="/officers">Officers</Link></li>
          <li><Link href="/volunteers">Volunteers</Link></li>
          <li><Link href="/verify-domain">Domain verification</Link></li>
        </ul>
      </nav>
    </header>
  );
}
