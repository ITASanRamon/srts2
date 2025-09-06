import Header from "../components/Header";

const officers = [
  {
    position: "Principal",
    name: "Nathan Ramanathan",
    email: "principals.sanramon@catamilacademy.org",
  },
  {
    position: "Principal",
    name: "Indira Thangasamy",
    email: "principals.sanramon@catamilacademy.org",
  },
  {
    position: "Registration Officer",
    name: "Sreedhar Ramanan",
    email: "registration.sanramon@catamilacademy.org",
  },
  {
    position: "Book Officer",
    name: "Balaji Viswanath",
    email: "books.sanramon@catamilacademy.org",
  },
  {
    position: "Attendance Officer",
    name: "Malarvizhi Thambiya",
    email: "attendance.sanramon@catamilacademy.org",
  },
  {
    position: "Attendance Officer",
    name: "Suganya Govindarajan",
    email: "attendance.sanramon@catamilacademy.org",
  },
  {
    position: "HSCP Officer",
    name: "Gopal Elayavalli",
    email: "hscp.sanramon@catamilacademy.org",
  },
];

export default function OfficersPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-indigo-50">
      <Header />
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6 text-indigo-900">School Officers</h1>
        <ul className="grid gap-4 sm:grid-cols-2">
          {officers.map((officer, idx) => (
            <li key={idx} className="rounded-lg bg-white/80 border border-indigo-200 shadow p-4 flex flex-col items-start">
              <span className="font-semibold text-lg text-indigo-800">{officer.position}</span>
              <span className="text-base text-gray-900 mt-1">{officer.name}</span>
              <a href={`mailto:${officer.email}`} className="text-sm text-blue-700 mt-1 underline break-all">{officer.email}</a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
