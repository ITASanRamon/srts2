import Header from "../components/Header";

export default function OfficersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">School Officers</h1>
        {/* Add your officers list or cards here */}
        <p>Officer information coming soon.</p>
      </main>
    </div>
  );
}
