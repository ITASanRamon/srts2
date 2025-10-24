import Header from "../components/Header";

export default function VolunteersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Volunteers</h1>
        {/* Add your volunteers list or cards here */}
        <p>Volunteer information coming soon.</p>
      </main>
    </div>
  );
}
